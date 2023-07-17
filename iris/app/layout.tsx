import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Iris Glass',
	description: 'Seeing is believing',
	openGraph: {
		type: 'website',
		url: 'https://iris-glass.netlify.app/',
		title: 'Iris Glass',
		description: 'Seeing is believing',
		siteName: 'Iris',
		images: [
			{
				url: 'https://iris-glass.netlify.app/meta.png',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: 'Iris Glass',
		creator: 'Iris',
		images: 'https://iris-glass.netlify.app/meta.png',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
