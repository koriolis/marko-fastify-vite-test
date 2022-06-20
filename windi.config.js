import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary--main': '#0652F6',
				'primary--50': '#e1eafe',
				'primary--100': '#b4cbfc',
				'primary--200': '#83a9fb',
				'primary--300': '#5186f9',
				'primary--400': '#2b6cf7',
				'primary--500': '#0652f6',
				'primary--600': '#054bf5',
				'primary--700': '#0441f3',
				'primary--800': '#0338f2',
				'primary--900': '#0228ef',
			},
			fontFamily: {
				sans: ['Roboto Flex', 'ui-sans-serif', 'system-ui'],
			},
		},
	},
	shortcuts: {
		// ############### Text Styles ####################
		// ------------------------------------------------
		// Body
		// ------------------------------------------------
		'body1--heavy': 'text-base font-black leading-6',
		'body1--normal': 'text-base font-medium leading-6',
		'body1--light': 'text-base font-normal leading-6',
		//
		'body2--heavy': 'text-sm font-black leading-6',
		'body2--normal': 'text-sm font-medium leading-6',
		'body2--light': 'text-sm font-normal leading-6',
		//
		'body3--heavy': 'text-xs font-black leading-6',
		'body3--normal': 'text-xs font-medium leading-6',
		'body3--light': 'text-xs font-normal leading-6',
	},
	extract: {
		include: ['./src/**/*.marko', './src/**/*.marko.js', './src/**/*.js'],
	},
});
