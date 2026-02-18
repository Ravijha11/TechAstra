"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const starterFeatures = [
  "Fully Responsive Website",
  "Free Domain",
  "Free Premium Hosting",
  "SSL Certificate",
  "Unlimited Pages",
  "Business Email",
];

const ecomFeatures = [
  "Complete Online Store",
  "Full Admin Panel (Manage Products/Orders)",
  "Payment Gateway (UPI/Cards)",
  "User Login",
  "Inventory Management",
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-nebula-glow pointer-events-none opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Simple <span className="text-gradient">Pricing</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400">
            Choose the plan that fits your business. Scale when you&apos;re ready.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:max-w-5xl lg:mx-auto">
          {/* Starter */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl glass border border-blue-500/30 p-8 text-left"
          >
            <h3 className="text-xl font-bold text-white">The Starter</h3>
            <p className="mt-1 text-slate-400">Entry Level</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-blue-400">₹2,999</span>
              <span className="text-slate-400">/-</span>
            </div>
            <p className="mt-2 text-sm text-cyan-400 font-medium">
              Delivery: 24 Hours
            </p>
            <ul className="mt-8 space-y-3">
              {starterFeatures.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <Check className="h-5 w-5 shrink-0 text-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex w-full justify-center rounded-lg border border-blue-500/50 bg-blue-500/20 px-6 py-3 font-medium text-blue-300 transition hover:bg-blue-500/30"
            >
              Get Started
            </a>
          </motion.div>

          {/* E-Commerce Pro - Highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative rounded-2xl glass-glow border-2 border-amber-400/50 border-purple-500/50 p-8 text-left shadow-glow-gold scale-[1.02]"
          >
            <div className="absolute -top-3 right-6 flex items-center gap-1 rounded-full border border-amber-400/50 bg-amber-400/10 px-3 py-1 text-sm font-medium text-amber-400">
              <Sparkles className="h-4 w-4" />
              Best for Growth
            </div>
            <h3 className="text-xl font-bold text-white">E-Commerce Pro</h3>
            <p className="mt-1 text-slate-400">High Ticket — Full Store</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-purple-400">
                Starts @ ₹19,999
              </span>
              <span className="text-slate-400">/-</span>
            </div>
            <ul className="mt-8 space-y-3">
              {ecomFeatures.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <Check className="h-5 w-5 shrink-0 text-purple-400" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex w-full justify-center rounded-lg bg-gradient-to-r from-amber-500 to-purple-500 px-6 py-3 font-medium text-white shadow-lg shadow-purple-500/25 transition hover:from-amber-400 hover:to-purple-400"
            >
              Get E-Commerce Pro
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
