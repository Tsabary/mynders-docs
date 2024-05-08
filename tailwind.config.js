import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  content: [
    "./src/**/*.{jsx,tsx,html}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    ,
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Assistant"],
        poppins: ["Poppins"],
        grotesk: ["Space Grotesk"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
