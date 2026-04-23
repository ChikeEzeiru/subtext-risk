"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import NavMenu from "./navmenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-2 left-0 right-0 z-50 flex justify-center px-8">
      <motion.nav
        animate={{
          backgroundColor: scrolled ? "#FFFFFF" : "rgba(255,255,255,0)",
          borderWidth: scrolled ? "1px" : "0px",
          borderColor: "rgba(0,0,0,0.08)",
          borderRadius: scrolled ? "16px" : "16px",
          boxShadow: scrolled
            ? "0 2px 12px rgba(0,0,0,0.06)"
            : "0 0px 0px rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ borderStyle: "solid" }}
        className="flex items-center gap-16 pl-5 pr-2 py-1.5 min-h-14"
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

          <div className="flex items-center gap-0.5">
            <div className="relative">
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

              {productsOpen && (
                <div className="absolute top-full left-0 mt-4 w-170 bg-white rounded-md shadow-lg border border-border p-0">
                  <NavMenu />
                </div>
              )}
            </div>

            <Link
              href="#"
              className="text-body-sm text-body hover:text-title transition-colors px-3 py-2 rounded-sm"
            >
              Customers
            </Link>
            <Link
              href="#"
              className="text-body-sm text-body hover:text-title transition-colors px-3 py-2 rounded-sm"
            >
              API Docs
            </Link>
            <Link
              href="#"
              className="text-body-sm text-body hover:text-title transition-colors px-3 py-2 rounded-sm"
            >
              Resources
            </Link>
          </div>
        </div>

        {/* Right group: CTAs */}
        <div className="flex items-center gap-1">
          <Link
            href="#"
            className="text-body-sm font-medium text-body hover:text-title transition-colors px-3 py-2 rounded-lg"
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
        </div>
      </motion.nav>
    </div>
  );
}
