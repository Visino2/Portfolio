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
	title: 'Victor Aba - Frontend Developer | React & Next.js Specialist',
	description:
		'Victor Aba is a passionate Frontend Developer with 3+ years of experience building modern, performant web applications using React, Next.js, TypeScript, and TailwindCSS. Available for freelance work.',
	keywords: [
		'Victor Aba',
		'Frontend Developer',
		'Web Developer',
		'React Developer',
		'Next.js Developer',
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
		title: 'Victor Aba - Frontend Developer | React & Next.js Specialist',
		description: 'Passionate Frontend Developer with 3+ years of experience creating modern, performant web applications. Specializing in React, Next.js, and TypeScript.',
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
		title: 'Victor Aba - Frontend Developer',
		description: 'Passionate Frontend Developer specializing in React, Next.js & TypeScript. Building modern web experiences.',
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