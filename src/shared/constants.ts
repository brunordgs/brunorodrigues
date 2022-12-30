import localFont from '@next/font/local';

export const neuzeitGrotesk = localFont({
	src: '../../public/static/font/NeuzeitGrotesk-Bold.woff2',
});

export const FONT_WEIGHTS = {
	inherit: '',
	light: 'font-light',
	normal: 'font-normal',
	medium: 'font-medium',
	semibold: 'font-semibold',
	bold: 'font-bold',
	extrabold: 'font-extrabold',
	black: 'font-black',
};

export const FONT_SIZES = {
	inherit: '',
	xs: 'text-xs',
	sm: 'text-sm',
	base: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
	'3xl': 'text-3xl',
	'4xl': 'text-4xl',
	'5xl': 'text-5xl',
	'6xl': 'text-6xl',
};