/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "rgb(18, 18, 18)",
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{html,js,tsx}"],
//   theme: {
//     screens: {},
//     colors: {},
//     fontFamily: {},
//     extend: {},
//   },
//   plugins: [],
// };
