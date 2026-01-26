/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      boxShadow: {
        card: "0 13px 27px -5px rgba(50,50,93,0.25), 0 8px 16px -8px rgba(0,0,0,0.3)",
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.css", // include css modules if you rely on scanning, optional but safe
  ],
};
