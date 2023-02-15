import localFont from '@next/font/local';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const biotif = localFont({
	src: [
		{
			path: '../../public/static/font/Biotif-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/static/font/Biotif-Regular.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../../public/static/font/Biotif-Book.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/static/font/Biotif-SemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../public/static/font/Biotif-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-biotif',
	display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${biotif.variable} font-sans`}>
			<Component {...pageProps} />
		</main>
	);
}
