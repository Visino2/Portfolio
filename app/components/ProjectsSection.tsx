'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp, Users, Zap } from 'lucide-react';

export default function ProjectsSection() {
	const projects = [
		{
			title: 'Audiophile E-Commerce',
			description: 'A premium audio equipment e-commerce platform with smooth animations, shopping cart functionality, and checkout flow.',
			image: '/Audiophile.png',
			liveLink: 'https://audiophile-mk.netlify.app',
			githubLink: 'https://github.com/Visino2/audiophile',
			tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
			metrics: {
				performance: '95% Lighthouse score',
				users: '500+ monthly visitors',
				conversion: '3.2% conversion rate'
			}
		},
		{
			title: 'Morent Car Rental App',
			description: 'A full-featured car rental platform with real-time availability, booking system, and admin dashboard for fleet management.',
			image: '/morent.jpg',
			liveLink: 'https://morent-project-gamma.vercel.app/',
			githubLink: 'https://github.com/Visino2/MORENT-PROJECT',
			tech: ['Next.js', 'React', 'TailwindCSS', 'TypeScript'],
			metrics: {
				performance: '92% Lighthouse score',
				speed: '1.2s load time',
				responsive: '100% mobile optimized'
			}
		},
		{
			title: 'Gourmet Restaurant Website',
			description: 'An elegant restaurant landing page featuring interactive menu displays, reservation system, and location finder with animations.',
			image: '/Food.jpg',
			liveLink: 'https://resturant-project-xi.vercel.app/',
			githubLink: 'https://github.com/Visino2/Resturant-project',
			tech: ['React', 'JavaScript', 'CSS3', 'Animations'],
			metrics: {
				engagement: '4.5min avg session',
				bounce: '23% bounce rate',
				mobile: '89% mobile traffic'
			}
		},
		{
			title: 'Property Manager Dashboard',
			description: 'A comprehensive property management system with tenant tracking, payment processing, maintenance requests, and analytics.',
			image: '/property.jpg',
			liveLink: 'https://property-manger.netlify.app/',
			githubLink: 'https://github.com/Visino2/property-Management',
			tech: ['React', 'Firebase', 'Chart.js', 'TailwindCSS'],
			metrics: {
				efficiency: '40% faster workflow',
				users: '200+ properties managed',
				uptime: '99.9% uptime'
			}
		},
		{
			title: 'Money Transfer Platform',
			description: 'A secure peer-to-peer money transfer application with instant transactions, multi-currency support, and transaction history tracking.',
			image: '/mooncake.png',
			liveLink: 'https://jovial-mooncake-8e43f7.netlify.app/',
			githubLink: 'https://github.com/Visino2/ETRAN',
			tech: ['React', 'Payment API', 'Security', 'TailwindCSS'],
			metrics: {
				security: '256-bit encryption',
				transactions: '1000+ daily transfers',
				speed: 'Instant processing'
			}
		},
		{
			title: 'Ticket Management Dashboard',
			description: 'Kanban-style task board with drag-and-drop, team collaboration, real-time updates, and project analytics.',
			image: '/ticket-management.png',
			liveLink: 'https://ticket-mangement-react.netlify.app/',
			githubLink: 'https://github.com/Visino2/property-Management',
			tech: ['Next.js', 'TypeScript', 'DnD Kit', 'PostgreSQL'],
			metrics: {
				productivity: '35% productivity boost',
				teams: '50+ active teams',
				tasks: '10K+ tasks completed'
			}
		},
		{
			title: 'ContentQ - Content Planner',
			description: 'An app built to help content creators, digital marketers, and anyone building a personal brand keep their content ideas organized in one place.',
			image: '/contentq-placeholder.png',
			liveLink: 'https://contentq.me/',
			githubLink: '#',
			tech: ['React Native', 'Expo', 'Flutter'],
			metrics: {
				downloads: '1k+ Downloads',
				users: 'Active Community',
				platform: 'Android & iOS (Coming Soon)'
			}
		},
	];

	return (
		<section id="projects" className="py-20 scroll-mt-16">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
						Featured Projects
					</h2>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">
						A selection of projects showcasing my expertise in modern web development,
						from concept to deployment
					</p>
				</motion.div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="group bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-700 hover:border-gray-600"
						>
							{/* Project Image */}
							<div className="relative aspect-video bg-gray-700 overflow-hidden">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />

								{/* Hover Overlay with Links */}
								<div className="absolute inset-0 bg-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
									<a
										href={project.liveLink}
										target="_blank"
										rel="noopener noreferrer"
										className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors transform hover:scale-110"
										title="View Live Site"
									>
										<ExternalLink className="w-6 h-6" />
									</a>
									{project.githubLink !== '#' && (
										<a
											href={project.githubLink}
											target="_blank"
											rel="noopener noreferrer"
											className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors transform hover:scale-110"
											title="View Code"
										>
											<Github className="w-6 h-6" />
										</a>
									)}
								</div>
							</div>

							{/* Project Content */}
							<div className="p-6">
								<h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
									{project.title}
								</h3>

								<p className="text-gray-300 mb-4 text-sm leading-relaxed">
									{project.description}
								</p>

								{/* Tech Stack */}
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tech.map((tech, i) => (
										<span
											key={i}
											className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
										>
											{tech}
										</span>
									))}
								</div>

								{/* Metrics */}
								<div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-700">
									{Object.entries(project.metrics).map(([key, value], i) => {
										const icons = {
											0: <TrendingUp className="w-4 h-4 text-green-400" />,
											1: <Users className="w-4 h-4 text-blue-400" />,
											2: <Zap className="w-4 h-4 text-yellow-400" />
										};
										return (
											<div key={key} className="text-center">
												<div className="flex items-center justify-center mb-1">
													{icons[i as keyof typeof icons]}
												</div>
												<div className="text-xs font-semibold text-white">
													{value.split(' ')[0]}
												</div>
												<div className="text-xs text-gray-400">
													{value.split(' ').slice(1).join(' ')}
												</div>
											</div>
										);
									})}
								</div>

								{/* Action Buttons */}
								<div className="flex gap-3 mt-4">
									<a
										href={project.liveLink}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm flex items-center justify-center gap-2"
									>
										View Live
										<ExternalLink className="w-4 h-4" />
									</a>
									{project.githubLink !== '#' && (
										<a
											href={project.githubLink}
											target="_blank"
											rel="noopener noreferrer"
											className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors font-medium text-sm flex items-center gap-2"
										>
											<Github className="w-4 h-4" />
											Code
										</a>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* View More CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="text-center mt-12"
				>
					<p className="text-gray-400 mb-4">
						Want to see more? Check out my GitHub for additional projects and contributions.
					</p>
					<a
						href="https://github.com/Visino2"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
					>
						<Github className="w-5 h-5" />
						View All Projects on GitHub
					</a>
				</motion.div>
			</div>
		</section>
	);
}