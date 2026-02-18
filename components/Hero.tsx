"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap } from "lucide-react";

const heroImage1 = "/ChatGPT Image Feb 18, 2026, 09_07_59 AM.png";
const heroImage2 = "/ChatGPT Image Feb 18, 2026, 09_11_42 AM.png";
const heroImage3 = "/ChatGPT Image Feb 18, 2026, 09_19_56 AM.png";
const heroImage4 = "/ChatGPT Image Feb 18, 2026, 09_23_31 AM.png";

export function Hero() {
  return (
    <section id="home" className="relative">
      {/* Full-bleed images — no space between, no left/right gap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex w-full flex-col"
      >
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src={heroImage1}
            alt="Development result"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src={heroImage2}
            alt="Product showcase"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src={heroImage3}
            alt="Development showcase"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src={heroImage4}
            alt="Product result"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
      </motion.div>

      {/* Hero copy below the image */}
      <div className="relative border-t border-white/5 bg-slate-950">
        <div className="absolute inset-0 bg-nebula-glow pointer-events-none opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3 text-cyan-400 font-medium"
            >
              Future-Ready Digital Solutions
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              Future-Ready Digital{" "}
              <span className="text-gradient">Solutions</span> for Your Business.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-slate-400 sm:text-lg"
            >
              From High-Level Admin Panels to Custom E-Commerce Stores. We build
              scalable technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400">
                <Zap className="h-4 w-4" />
                Websites Live in 24 Hours
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
