/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rinka-red': '#D3381C', // 緋 (HI)
        'rinka-red-dark': '#B94047', // 臙脂 (ENJI)
        'rinka-white': '#FFFFFB', // 胡粉 (GOFUN)
        'rinka-beige': '#DAC9A6', // 鳥の子 (TORINOKO)
        'rinka-wood': '#6B492B', // 焦茶 (KOGECHA)
        'rinka-black': '#1C1C1C', // 墨 (SUMI)
      },
      fontFamily: {
        serif: ['"Shippori Mincho"', '"Zen Old Mincho"', '"Noto Serif JP"', 'serif'],
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
