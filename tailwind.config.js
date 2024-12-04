import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1abdff",
        secondaryColor: "#00a3e6",
        background: "#f8f9fa",
        textColor: "#2c3e50",
        borderColor: "#e0e0e0",
        darkMode: "#00202e",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        slider1: "url('./assets/local.jpeg')",
        slider2: "url('./assets/education.jpg')",
        slider3: "url('./assets/healthcare.jpeg')",
      },
    },
  },
  plugins: [daisyui],
};
