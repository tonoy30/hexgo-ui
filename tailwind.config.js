module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {},
		fontFamily: {
			body: ["Roboto"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
