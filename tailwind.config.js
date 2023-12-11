/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [],
  "tailwindCSS.experimental.classRegex": [
    "tw`([^`]*)", // tw`...`
    'tw="([^"]*)', // <div tw="..." />
    'tw={"([^"}]*)', // <div tw={"..."} />
    "tw\\.\\w+`([^`]*)", // tw.xxx`...`
    "tw\\(.*?\\)`([^`]*)", // tw(Component)`...`
  ],
};
