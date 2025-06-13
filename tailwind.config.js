// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Orbitron: ["Orbitron", "sans-serif"],
        Rajdhani: ["Rajdhani", "sans-serif"],
      },
      colors: {
        spaceDark: "#0B0F26",
        spaceMid: "#1C1F3A",
        neon: "#4F46E5",
        star: "#FBBF24",
        lightText: "#E5E7EB",
        subText: "#9CA3AF",
      },
    },
  },
  plugins: [],
};
