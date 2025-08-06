const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// https://github.com/zackify/react-calendar#im-already-using-tailwind
		'node_modules/@zach.codes/react-calendar/dist/**/*.js',
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
		extend: {
			colors: {
				dark: '#0A0B11',
				accent: '#1D4ED8',
			},
			fontFamily: {
				sans: ['WAT', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
