/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"], // Update the path to point directly to the index.html file in the root directory
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
      backgroundImage: {
        "getIn-touch": "url('/src/images/getintoucn-img.png')",
      },
      boxShadow: {
        "custom-black": "black -15px -10px 0px 5px",
      },
    },
  },
  plugins: [],
};
