const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-biotif)', ...fontFamily.sans],
			},
			colors: {
				black: '#08070b',
			},
		},
	},
	plugins: [],
};
