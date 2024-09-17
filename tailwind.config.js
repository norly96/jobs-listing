/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '3px -19px 64px 11px rgba(90,164,164,1)',
      },
      fontFamily: {
				spartan: ['League-Spartan','sans-serif'],
			  },
      colors: {
        "dark-cyan":"var(--dark-cyan)",
        "light-grayish-cyan-background": "var(--light-grayish-cyan-background)",
        "light-grayish-cyan":"var(--light-grayish-cyan)",
        "dark-grayish-cyan":"var(--dark-grayish-cyan)",
        "very-dark-grayish-cyan":"var(--very-dark-grayish-cyan)",
			  },
    },
  },
  plugins: [],
}

