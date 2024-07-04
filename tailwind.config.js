/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
      updown: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-15px)' },
      },
    },
    animation: {
      updown: 'updown 2s ease-in-out infinite',
    },
  },
  },
  plugins: [require("daisyui")],
}

