"use client";

import { motion } from "framer-motion";
import { Headphones, Smartphone, Search, MessageCircle } from "lucide-react";

const features = [
  {
    label: "24/7 Support",
    Icon: Headphones,
    delay: 0,
  },
  {
    label: "Mobile Optimized",
    Icon: Smartphone,
    delay: 0.1,
  },
  {
    label: "SEO Friendly",
    Icon: Search,
    delay: 0.2,
  },
  {
    label: "WhatsApp Integration",
    Icon: MessageCircle,
    delay: 0.3,
  },
];

export function TrustBar() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl glass border border-white/10 p-8 sm:p-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ label, Icon, delay }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay }}
                className="flex flex-col items-center text-center"
              >
                <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
                  <Icon className="h-8 w-8 text-cyan-400" />
                </div>
                <span className="mt-3 font-medium text-slate-200">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
