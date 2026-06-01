'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, Zap, Smartphone } from 'lucide-react';

function GithubIcon({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
		</svg>
	);
}

export default function ProjectsSection() {
	const projects = [
		{
			title: 'Converf – Construction Management Platform',
			description: 'Full-stack mobile app for construction project management, currently in internal testing on iOS & Android. Two-sided marketplace connecting project owners and contractors with bid management, daily site reports, QAQC audits, ball-in-court accountability workflow, AI-powered project health advisory, and subscription billing with Professional plans.',
			image: '/converf.png',
			liveLink: '#',
			githubLink: '#',
			platform: 'mobile' as const,
			status: 'testing' as const,
			tech: ['React Native', 'Expo', 'Firebase', 'TypeScript', 'REST APIs'],
			metrics: {
				projects: '22+ active projects',
				users: 'iOS & Android',
				features: 'AI advisory system'
			}
		},
		{
			title: 'Audiophile E-Commerce',
			description: 'A premium audio equipment e-commerce platform with smooth animations, shopping cart functionality, and checkout flow.',
			image: '/Audiophile.png',
			liveLink: 'https://audiophile-mk.netlify.app',
			githubLink: 'https://github.com/Visino2/audiophile',
			tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
			metrics: {
				performance: '95 Lighthouse score',
				cart: '7 product categories',
				checkout: 'Multi-step checkout'
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
				ui: 'Animated page transitions',
				booking: 'Built-in reservation form',
				responsive: 'Fully responsive layout'
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
				db: 'Firebase real-time DB',
				analytics: 'Chart.js dashboards',
				auth: 'Role-based auth'
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
				currency: 'Multi-currency support',
				history: 'Transaction history'
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
				board: 'Drag-drop Kanban board',
				updates: 'Real-time live updates',
				type: 'TypeScript strict mode'
			}
		},
		{
			title: 'ContentQ - Content Planner',
			description: 'An app built to help content creators, digital marketers, and anyone building a personal brand keep their content ideas organised in one place.',
			image: '/contentq.png',
			liveLink: 'https://contentq.me/',
			githubLink: '#',
			tech: ['React Native', 'Expo', 'TypeScript', 'REST APIs'],
			metrics: {
				downloads: '1k+ Downloads',
				stack: 'Expo cross-platform',
				os: 'Android & iOS'
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

								{/* Badges */}
								{'platform' in project && project.platform === 'mobile' && (
									<div className="absolute top-3 left-3 flex items-center gap-2">
										<div className="flex items-center gap-1.5 px-2.5 py-1 bg-teal-500/20 border border-teal-500/30 rounded-full">
											<Smartphone className="w-3 h-3 text-teal-400" />
											<span className="text-teal-400 text-xs font-medium">Mobile App</span>
										</div>
										{'status' in project && project.status === 'testing' && (
											<div className="flex items-center gap-1.5 px-2.5 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full">
												<span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
												<span className="text-yellow-400 text-xs font-medium">In Testing</span>
											</div>
										)}
									</div>
								)}

								{/* Hover Overlay with Links */}
								<div className="absolute inset-0 bg-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
									{project.liveLink !== '#' && (
										<a
											href={project.liveLink}
											target="_blank"
											rel="noopener noreferrer"
											className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors transform hover:scale-110"
											title="View Live Site"
										>
											<ExternalLink className="w-6 h-6" />
										</a>
									)}
									{project.githubLink !== '#' && (
										<a
											href={project.githubLink}
											target="_blank"
											rel="noopener noreferrer"
											className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors transform hover:scale-110"
											title="View Code"
										>
											<GithubIcon className="w-6 h-6" />
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
									{project.liveLink !== '#' ? (
										<a
											href={project.liveLink}
											target="_blank"
											rel="noopener noreferrer"
											className="flex-1 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm flex items-center justify-center gap-2"
										>
											View Live
											<ExternalLink className="w-4 h-4" />
										</a>
									) : 'status' in project && project.status === 'testing' ? (
										<span className="flex-1 py-2 bg-yellow-500/10 text-yellow-400 text-center rounded-lg font-medium text-sm flex items-center justify-center gap-2 cursor-default border border-yellow-500/20">
											<span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
											Internal Testing
										</span>
									) : (
										<span className="flex-1 py-2 bg-gray-700/50 text-gray-500 text-center rounded-lg font-medium text-sm flex items-center justify-center gap-2 cursor-default border border-gray-700">
											<Smartphone className="w-4 h-4" />
											Mobile App
										</span>
									)}
									{project.githubLink !== '#' && (
										<a
											href={project.githubLink}
											target="_blank"
											rel="noopener noreferrer"
											className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors font-medium text-sm flex items-center gap-2"
										>
											<GithubIcon className="w-4 h-4" />
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
						<GithubIcon className="w-5 h-5" />
						View All Projects on GitHub
					</a>
				</motion.div>
			</div>
		</section>
	);
}