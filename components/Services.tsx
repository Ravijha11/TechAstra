"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  LayoutDashboard,
  Settings,
} from "lucide-react";

const services = [
  {
    title: "Custom Websites",
    description: "Responsive & Fast.",
    Icon: Globe,
    delay: 0,
  },
  {
    title: "E-Commerce",
    description: "Full online stores with payment gateways.",
    Icon: ShoppingCart,
    delay: 0.1,
  },
  {
    title: "Internal CRM",
    description: "Custom tools for business management.",
    Icon: LayoutDashboard,
    delay: 0.2,
  },
  {
    title: "Admin Panels",
    description: "High-level dashboards for company data.",
    Icon: Settings,
    delay: 0.3,
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-nebula-glow pointer-events-none opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            What We <span className="text-gradient">Build</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400">
            End-to-end digital solutions tailored for growth.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, Icon, delay }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay }}
              className="group rounded-2xl glass border border-white/10 p-6 transition hover:border-cyan-400/30 hover:shadow-glow"
            >
              <div className="mb-4 inline-flex rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-3">
                <Icon className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-400">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
