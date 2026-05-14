"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import NavMenu from "./navmenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 1);

    // Call the handler once immediately on mount — reads current scroll position.
    // Calling through the handler (not setState directly) satisfies the linter.
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-2 left-0 right-0 z-50 flex flex-col items-center px-4 md:px-8 gap-2">
      {/* ── Backdrop — captures outside clicks to close menu ── */}
      {productsOpen && (
        <div
          className="fixed inset-0 z-49"
          onClick={() => setProductsOpen(false)}
        />
      )}

      <motion.nav
        animate={{
          backgroundColor:
            scrolled || mobileOpen ? "#FFFFFF" : "rgba(255,255,255,0)",
          borderWidth: scrolled || mobileOpen ? "1px" : "0px",
          borderColor: "rgba(0,0,0,0.08)",
          borderRadius: "16px",
          boxShadow:
            scrolled || mobileOpen
              ? "0 2px 12px rgba(0,0,0,0.06)"
              : "0 0px 0px rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ borderStyle: "solid" }}
        className="relative flex items-center justify-between w-full lg:w-auto lg:justify-start lg:gap-16 pl-5 pr-2 py-1.5 min-h-14 z-50"
      >
        {/* Left group: Logo + Nav Links */}
        <div className="flex items-center gap-5">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Subtext"
              width={36}
              height={36}
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-0.5">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-2 text-body-sm text-body hover:text-title transition-colors pl-3 pr-2 py-2 rounded-sm"
            >
              Products
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <Link
              href="/customers"
              className="text-body-sm text-body hover:text-title transition-colors px-3 py-2 rounded-sm"
            >
              Customers
            </Link>
            <Link
              href="/docs"
              className="text-body-sm text-body hover:text-title transition-colors px-3 py-2 rounded-sm"
            >
              API Docs
            </Link>
            <Link
              href="/blog"
              className="text-body-sm text-body hover:text-title transition-colors px-3 py-2 rounded-sm"
            >
              Resources
            </Link>
          </div>
        </div>

        {/* Right group: CTAs + hamburger */}
        <div className="flex items-center gap-1">
          <Link
            href="#"
            className="hidden lg:flex text-body-sm font-medium text-body hover:text-title transition-colors px-3 py-2 rounded-lg"
          >
            Log In
          </Link>
          <Link
            href="#"
            className="relative overflow-clip text-body-sm font-medium text-white px-3 py-2 rounded-sm border-2 border-[rgba(255,255,255,0.12)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:opacity-90 transition-opacity [background:linear-gradient(32.5deg,#17171c,#525252)]"
          >
            Book a Demo
            <span className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(0,0,0,0.18),inset_0px_-2px_0px_0px_rgba(0,0,0,0.05)]" />
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-body hover:text-[#17171c] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* ── Products dropdown — spans full navbar width ── */}
        {productsOpen && (
          <div className="absolute top-full left-0 right-0 mt-2">
            <NavMenu />
          </div>
        )}
      </motion.nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden w-full bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] shadow-lg overflow-hidden">
          <nav className="flex flex-col p-4 gap-1">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center justify-between text-body-sm text-body hover:text-title transition-colors px-3 py-2.5 rounded-lg hover:bg-bg-alt"
            >
              Products
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {productsOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l border-[rgba(0,0,0,0.08)] pl-3">
                <Link
                  href="/merchant-screening"
                  className="text-body-sm text-body hover:text-title transition-colors px-3 py-2 rounded-lg hover:bg-bg-alt"
                >
                  Merchant Screening
                </Link>
                <Link
                  href="#"
                  className="text-body-sm text-body hover:text-title transition-colors px-3 py-2 rounded-lg hover:bg-bg-alt"
                >
                  Deep Investigation
                </Link>
                <Link
                  href="#"
                  className="text-body-sm text-body hover:text-title transition-colors px-3 py-2 rounded-lg hover:bg-bg-alt"
                >
                  Continuous Monitoring
                </Link>
                <Link
                  href="#"
                  className="text-body-sm text-body hover:text-title transition-colors px-3 py-2 rounded-lg hover:bg-bg-alt"
                >
                  Compliance Reports
                </Link>
              </div>
            )}
            <Link
              href="#"
              className="text-body-sm text-body hover:text-title transition-colors px-3 py-2.5 rounded-lg hover:bg-bg-alt"
            >
              Customers
            </Link>
            <Link
              href="#"
              className="text-body-sm text-body hover:text-title transition-colors px-3 py-2.5 rounded-lg hover:bg-bg-alt"
            >
              API Docs
            </Link>
            <Link
              href="#"
              className="text-body-sm text-body hover:text-title transition-colors px-3 py-2.5 rounded-lg hover:bg-bg-alt"
            >
              Resources
            </Link>
            <div className="border-t border-[rgba(0,0,0,0.08)] mt-2 pt-2">
              <Link
                href="#"
                className="text-body-sm font-medium text-body hover:text-title transition-colors px-3 py-2.5 rounded-lg hover:bg-bg-alt block"
              >
                Log In
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
