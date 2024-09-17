/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
				spartan: ['League-Spartan','sans-serif'],
			  },
      colors: {
        "dark-cyan":"var(--dark-cyan)",
        "light-grayish-cyan-background)": "var(--light-grayish-cyan-background)",
        "light-grayish-cyan":"var(--light-grayish-cyan)",
        "dark-grayish-cyan":"var(--dark-grayish-cyan)",
        "very-dark-grayish-cyan)":"var(--very-dark-grayish-cyan)",
			  },
    },
  },
  plugins: [],
}

