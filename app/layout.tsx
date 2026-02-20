import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://victoraba.dev'),
	title: 'Victor Aba - Mobile App Developer | Frontend Engineer | React Native & Next.js',
	description:
		'Victor Aba is a React Native Mobile Engineer with 2+ years of experience building scalable, high-performance cross-platform applications. Specializing in React Native, React, and Next.js. Available for work.',
	keywords: [
		'Victor Aba',
		'Mobile App Developer',
		'Frontend Engineer',
		'React Native Developer',
		'React Developer',
		'Next.js Developer',
		'Expo Developer',
		'Cross-Platform Mobile Developer',
		'TypeScript',
		'JavaScript',
		'TailwindCSS',
		'UI/UX',
		'Lagos Developer',
		'Nigeria Developer',
		'Freelance Developer',
		'Remote Developer',
		'Software Engineer',
		'Web Development',
		'Responsive Design',
		'Modern Web Apps',
	],
	authors: [{ name: 'Victor Aba', url: 'https://github.com/Visino2' }],
	creator: 'Victor Aba',
	openGraph: {
		title: 'Victor Aba - Mobile App Developer | Frontend Engineer',
		description: 'React Native Mobile Engineer with 2+ years of experience building scalable cross-platform applications. Specializing in React Native, React, and Next.js.',
		url: 'https://victoraba.dev',
		siteName: 'Victor Aba Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Victor Aba - Frontend Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Victor Aba - Mobile App Developer | Frontend Engineer',
		description: 'React Native Mobile Engineer specializing in cross-platform apps, React & Next.js. Building scalable mobile and web experiences.',
		creator: '@smithvictor_2',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		// Add your verification codes when you have them
		// google: 'your-google-verification-code',
		// yandex: 'your-yandex-verification-code',
	},
	alternates: {
		canonical: 'https://victoraba.dev',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<head>
				{/* Font Awesome for social icons */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
					integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}