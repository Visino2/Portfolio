'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
	const projects = [
		{
			title: 'Morent Car Rental App',
			description: 'A car rental platform with modern UI/UX and Next.js architecture for smooth browsing and bookings.',
			image: '/morent.jpg',
			link: 'https://morent-project-gamma.vercel.app/',
		},
		{
			title: 'Restaurant Website',
			description: 'A responsive restaurant landing page with menu showcase, animations, and elegant layout.',
			image: '/Food.jpg',
			link: 'https://resturant-project-xi.vercel.app/',
		},
		{
			title: 'Property Manager',
			description: 'A dashboard web app for managing properties, tenants, and analytics in real-time.',
			image: '/property.jpg',
			link: 'https://property-manger.netlify.app/',
		},
	];

	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Featured Projects</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
						>
							<div className="aspect-video bg-gray-700 relative">
								<Image src={project.image} alt={project.title} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">{project.title}</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
								<div className="flex gap-2">
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
									>
										View Project →
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
