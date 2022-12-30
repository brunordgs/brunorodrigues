const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				xl: '6rem',
				'2xl': '10rem',
			},
		},
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
