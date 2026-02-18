"use client";

import { motion } from "framer-motion";

const logoPath = "/logo.png";

export function ContactFooter() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-nebula-glow pointer-events-none opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-2xl glass border border-white/10 p-8 sm:p-12"
        >
          <h2 className="text-2xl font-bold sm:text-3xl text-center">
            Ready to <span className="text-gradient">scale?</span>
          </h2>
          <p className="mt-2 text-center text-slate-400">
            Tell us your project and we&apos;ll get back within 24 hours.
          </p>

          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-300"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-slate-300"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                required
                placeholder="+91 98765 43210"
                className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
              />
            </div>
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-slate-300"
              >
                Service Interest
              </label>
              <select
                id="service"
                className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
              >
                <option value="">Select...</option>
                <option value="starter">The Starter (Website)</option>
                <option value="ecommerce">E-Commerce Pro</option>
                <option value="crm">Internal CRM</option>
                <option value="admin">Admin Panel</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:from-cyan-400 hover:to-cyan-500"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center text-slate-500"
        >
          <div className="relative h-20 w-auto sm:h-24">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoPath}
              alt=""
              className="h-20 w-auto object-contain opacity-90 sm:h-24"
              width={320}
              height={96}
            />
          </div>
          <p className="text-sm">© {new Date().getFullYear()}. All rights reserved.</p>
        </motion.footer>
      </div>
    </section>
  );
}
