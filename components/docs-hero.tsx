"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ApiCodeBlock from "./api-code-block";
import { motion } from "framer-motion";

export default function DocsHero() {
  return (
    <section className="flex flex-col gap-16 items-center pt-42 pb-24 w-full">
      {/* Hero headline and description */}
      <div className="flex flex-col gap-10 items-center px-8 w-full max-w-310">
        <div className="flex flex-col gap-5 items-center">
          <div className="max-w-180">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0 }}
              className="text-[32px] leading-10 md:text-[48px] md:leading-15 font-medium tracking-[-0.96px] text-[#17171c] text-center text-balance"
            >
              One endpoint. One response. That&apos;s the whole API.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="text-body-xl max-w-180 text-center text-balance"
          >
            Subtext&apos;s API is designed to do one thing well: take a merchant
            URL and return a structured risk report. No complex setup, no
            multi-step flows, no configuration required to start.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
        >
          <div className="flex flex-row gap-4 items-center">
            <Link
              href="#"
              className="relative overflow-clip flex items-center justify-center gap-1.5 px-4.5 py-3 rounded-sm border-2 border-[rgba(255,255,255,0.12)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] [background:linear-gradient(32.5deg,#17171c,#525252)] font-medium text-[17px] leading-6 text-white whitespace-nowrap transition-opacity hover:opacity-90"
            >
              Read the Docs
              <span className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(0,0,0,0.18),inset_0px_-2px_0px_0px_rgba(0,0,0,0.05)]" />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1.5 px-4.5 py-3 rounded-lg font-medium text-[17px] leading-6 text-[#334155] whitespace-nowrap transition-colors hover:text-[#0f172a]"
            >
              Get API Key
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Code block with example API response */}
      <div className="flex flex-col gap-5 items-center px-8 w-full max-w-310">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
        >
          <ApiCodeBlock />
        </motion.div>
      </div>
    </section>
  );
}
