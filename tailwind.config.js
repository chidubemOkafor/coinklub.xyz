/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "pp-3-background":
          "var(--pp-3-background, linear-gradient(134deg, #984D38 0%, #181E41 63.29%))",
      }),
      "pp-2-purple":
        "var(--pp-2-purple, linear-gradient(214deg, #B75CFF 0%, #671AE4 100%))",
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
