/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        sm: "12px",
        base: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "28px",
        "3xl": "36px",
      },
    },
  },
  plugins: [],
};
