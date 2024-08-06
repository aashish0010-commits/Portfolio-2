// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customHover: "#1c1c1e",
        customHover1: "#374151",
        customPara: "#9CA3AF",
        customFB: "#2AA4F4",
        customLink: "#0078D4",
        customUpwork: "#6CD441",
        hoverHire: "#8C3AEB",
        hoverCv: "#f8f8ff",
      },
      boxShadow: {
        'custom-black-medium': '0 4px 10px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-22px)" },
        },
        fade: {
          '0%, 100%': { opacity: 1 },
          '40%': { opacity: 0.5 },
        },
        rotateY: {
          '50%': { transform: 'rotateY(90deg)' },
        },
        rotateX: {
          '0%': { transform: 'rotateX(90deg)' },
          '50%': { transform: 'rotateX(0deg)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        upDown: "upDown 2s infinite",
        fade: 'fade 2s infinite',
        'rotate-y': 'rotateY 2s ease-in-out forwards',
        'rotate-x': 'rotateX 3s ease-in-out forwards',
        'zoom-in': 'zoomIn 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          background: 'linear-gradient(to right, #3498db, #8e44ad)',
          '-webkit-background-clip': 'text',
          color: 'transparent',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
