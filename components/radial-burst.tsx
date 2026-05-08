"use client";

import { useEffect, useRef } from "react";

// ─── Colors ───────────────────────────────────────────────────────────────────
const CENTRE_COLOR = { r: 250, g: 242, b: 203 }; // #CA7D15 amber
const EDGE_COLOR = { r: 137, g: 71, b: 23 }; // #0B1221 navy

// ─── Tuning ───────────────────────────────────────────────────────────────────
const PARTICLE_COUNT = 290;
const MIN_SPEED = 0.15;
const MAX_SPEED = 0.45;
const DISTORTION_RADIUS = 72; // px — area of cursor influence
const DISTORTION_STRENGTH = 4; // how hard particles are pushed away

// ─── Helpers ──────────────────────────────────────────────────────────────────

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function toHex(n: number) {
  return Math.round(Math.max(0, Math.min(255, n)))
    .toString(16)
    .padStart(2, "0");
}

function blendColor(
  from: { r: number; g: number; b: number },
  to: { r: number; g: number; b: number },
  t: number, // 0 = from, 1 = to
  alpha: number
) {
  const r = lerp(from.r, to.r, t);
  const g = lerp(from.g, to.g, t);
  const b = lerp(from.b, to.b, t);
  const a = toHex(alpha * 255);
  return `#${toHex(r)}${toHex(g)}${toHex(b)}${a}`;
}

// ─── Component ────────────────────────────────────────────────────────────────

type Particle = {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
};

export default function ConvergenceField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 }); // off-canvas default

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];

    // ── Spawn a single particle at a random edge ───────────────────────────
    const spawn = (w: number, h: number): Particle => {
      const edge = Math.floor(Math.random() * 4);
      let x = 0,
        y = 0;
      switch (edge) {
        case 0:
          x = Math.random() * w;
          y = 0;
          break; // top
        case 1:
          x = w;
          y = Math.random() * h;
          break; // right
        case 2:
          x = Math.random() * w;
          y = h;
          break; // bottom
        case 3:
          x = 0;
          y = Math.random() * h;
          break; // left
      }
      return {
        x,
        y,
        size: 1.2 + Math.random() * 1.2,
        speed: MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED),
        opacity: 0.35 + Math.random() * 0.55,
      };
    };

    // ── Resize + seed ──────────────────────────────────────────────────────
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);

      particles.length = 0;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        // Scatter initial positions across canvas instead of all at edges
        const p = spawn(w, h);
        p.x = Math.random() * w;
        p.y = Math.random() * h;
        particles.push(p);
      }
    };

    // ── Draw loop ──────────────────────────────────────────────────────────
    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      // Origin — lower-center, slightly off-canvas so glow apex isn't visible
      const ox = w / 2;
      const oy = h + 30;

      // Fill with semi-transparent background instead of clearing
      // This leaves a fading ghost of the previous frame → streak effect
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.225)"; // alpha controls trail length — same as before
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over"; // reset before drawing particles

      const { x: mx, y: my } = mouseRef.current;
      const maxDist = Math.sqrt(w * w + h * h);

      particles.forEach((p) => {
        // ── Cursor distortion ────────────────────────────────────────────
        const cdx = p.x - mx;
        const cdy = p.y - my;
        const cd = Math.sqrt(cdx * cdx + cdy * cdy);

        if (cd < DISTORTION_RADIUS && cd > 0) {
          const force =
            ((DISTORTION_RADIUS - cd) / DISTORTION_RADIUS) *
            DISTORTION_STRENGTH;
          p.x += (cdx / cd) * force;
          p.y += (cdy / cd) * force;
        }

        // ── Converge toward origin ───────────────────────────────────────
        const dx = ox - p.x;
        const dy = oy - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 2) {
          // Respawn at a random edge when particle reaches origin
          Object.assign(p, spawn(w, h));
          return;
        }

        p.x += (dx / dist) * p.speed;
        p.y += (dy / dist) * p.speed;

        // ── Color — blends from EDGE_COLOR (far) to CENTRE_COLOR (close) ─
        // t = 0 means far away (edge color), t = 1 means near origin (centre color)
        const t = 1 - Math.min(dist / (maxDist * 0.6), 1);
        const color = blendColor(
          EDGE_COLOR,
          CENTRE_COLOR,
          t,
          p.opacity * (0.4 + t * 0.6)
        );

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    // ── Mouse tracking ─────────────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", resize);

    resize();
    draw();

    return () => {
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="w-full h-full bg-transparent"
    />
  );
}
