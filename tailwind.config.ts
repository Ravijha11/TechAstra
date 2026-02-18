import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      colors: {
        astra: {
          cyan: "#22d3ee",
          purple: "#a855f7",
          blue: "#3b82f6",
          gold: "#eab308",
        },
      },
      backgroundImage: {
        "nebula-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 211, 238, 0.15), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(168, 85, 247, 0.12), transparent), radial-gradient(ellipse 50% 30% at 0% 50%, rgba(59, 130, 246, 0.1), transparent)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(34, 211, 238, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)",
        "glow-gold": "0 0 25px rgba(234, 179, 8, 0.4), 0 0 50px rgba(168, 85, 247, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
