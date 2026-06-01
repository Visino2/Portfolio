'use client';

import { motion } from 'framer-motion';
import { User, MapPin, GraduationCap, Briefcase, Calendar, Building2 } from 'lucide-react';

const experience = [
	{
		title: 'Frontend Developer',
		company: 'SEDL, Inc.',
		period: 'Jan 2024 – Present',
		location: 'Remote',
		type: 'Full-time',
		description: 'Remote software development company specialising in SaaS solutions.',
		bullets: [
			'Built modular, reusable UI components using React, Next.js, and TypeScript for SaaS applications',
			'Improved application performance by ~25% through code-splitting and optimised state management',
			'Integrated REST APIs and collaborated closely with backend engineers and designers',
		],
		color: 'blue',
	},
	{
		title: 'Mobile Developer (React Native)',
		company: 'ContentQ — HNG Internship',
		period: 'Jan 2024 – Dec 2024',
		location: 'Remote',
		type: 'Internship',
		description: 'Competitive internship programme for aspiring software developers.',
		bullets: [
			'Designed and developed key mobile app screens and features using React Native',
			'Implemented user flows for creating, saving, and organising content ideas',
			'Contributed to a production-ready app used by real users on iOS and Android',
		],
		color: 'purple',
	},
	{
		title: 'Frontend Engineer',
		company: 'TechNova Solutions',
		period: 'Jan 2024 – Dec 2024',
		location: 'Remote',
		type: 'Contract',
		description: 'Technology solutions company focused on frontend development.',
		bullets: [
			'Developed responsive web applications using React, TailwindCSS, and Firebase',
			'Implemented authentication flows and third-party API integrations',
		],
		color: 'green',
	},
];

const colorMap: Record<string, { dot: string; border: string; badge: string; text: string }> = {
	blue:   { dot: 'bg-blue-500',   border: 'border-blue-500/30',   badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',   text: 'text-blue-400' },
	purple: { dot: 'bg-purple-500', border: 'border-purple-500/30', badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20', text: 'text-purple-400' },
	green:  { dot: 'bg-green-500',  border: 'border-green-500/30',  badge: 'bg-green-500/10 text-green-400 border-green-500/20',  text: 'text-green-400' },
};

export default function AboutSection() {
	return (
		<section id="about" className="py-20 scroll-mt-16">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
						<User className="w-4 h-4 text-blue-400" />
						<span className="text-blue-400 font-medium text-sm">About Me</span>
					</div>
					<h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
						Who I Am
					</h2>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">
						Developer, problem-solver, and lifelong learner based in Lagos, Nigeria
					</p>
				</motion.div>

				{/* Bio + Education */}
				<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">

					{/* Bio */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="lg:col-span-3 bg-gray-800 rounded-xl p-6 sm:p-8 border border-gray-700"
					>
						<h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
							<User className="w-5 h-5 text-blue-400" />
							My Story
						</h3>
						<div className="space-y-4 text-gray-300 leading-relaxed">
							<p>
								I hold a B.Sc. in Zoology from the{' '}
								<span className="text-white font-medium">University of Ilorin</span>{' '}
								(2016–2021). After graduating, I made a deliberate shift into software
								development — spending two years in focused vocational training in
								frontend development, completing it in{' '}
								<span className="text-white font-medium">December 2024</span>.
							</p>
							<p>
								That transition — from biology to building production apps — reflects
								how I approach everything: with curiosity, discipline, and a
								willingness to start from zero to get where I want to go.
							</p>
							<p className="text-blue-300 font-medium border-l-2 border-blue-500 pl-4 italic">
								&ldquo;I&apos;m passionate about transforming ideas into scalable digital
								products that solve real problems, create opportunities, and positively
								impact users and businesses alike.&rdquo;
							</p>
						</div>

						{/* Quick info */}
						<div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-gray-700">
							<div className="flex items-center gap-2 text-gray-400 text-sm">
								<MapPin className="w-4 h-4 text-blue-400" />
								Lagos, Nigeria
							</div>
							<div className="flex items-center gap-2 text-gray-400 text-sm">
								<Briefcase className="w-4 h-4 text-blue-400" />
								2+ years experience
							</div>
							<div className="flex items-center gap-2 text-gray-400 text-sm">
								<Building2 className="w-4 h-4 text-blue-400" />
								Open to remote roles
							</div>
						</div>
					</motion.div>

					{/* Education */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="lg:col-span-2 flex flex-col gap-6"
					>
						{/* University */}
						<div className="bg-gray-800 rounded-xl p-6 border border-gray-700 flex-1">
							<div className="flex items-center gap-3 mb-4">
								<div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-lg">
									<GraduationCap className="w-5 h-5 text-purple-400" />
								</div>
								<h3 className="text-white font-bold">Education</h3>
							</div>
							<div className="space-y-4">
								<div>
									<p className="text-white font-semibold text-sm">B.Sc. Zoology</p>
									<p className="text-gray-400 text-sm">University of Ilorin</p>
									<p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
										<Calendar className="w-3 h-3" /> 2016 – 2021
									</p>
								</div>
								<div className="border-t border-gray-700 pt-4">
									<p className="text-white font-semibold text-sm">Vocational Training</p>
									<p className="text-gray-400 text-sm">Frontend Development</p>
									<p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
										<Calendar className="w-3 h-3" /> 2022 – Dec 2024
									</p>
								</div>
							</div>
						</div>

						{/* Location / availability card */}
						<div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6">
							<p className="text-white font-bold mb-1">Available for Work</p>
							<p className="text-gray-400 text-sm mb-3">Remote · Full-time · Contract</p>
							<div className="flex items-center gap-2">
								<span className="relative flex h-2.5 w-2.5">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
									<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
								</span>
								<span className="text-green-400 text-sm font-medium">Open to opportunities</span>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Experience Timeline */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-4"
				>
					<h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
						<Briefcase className="w-6 h-6 text-blue-400" />
						Work Experience
					</h3>
				</motion.div>

				<div className="relative">
					{/* Timeline line */}
					<div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gray-700 hidden sm:block" />

					<div className="space-y-8">
						{experience.map((job, index) => {
							const c = colorMap[job.color];
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="relative sm:pl-16"
								>
									{/* Timeline dot */}
									<div className={`absolute left-3 sm:left-4 top-6 w-3 h-3 rounded-full ${c.dot} ring-4 ring-gray-900 hidden sm:block`} />

									<div className={`bg-gray-800 rounded-xl p-6 border border-gray-700 hover:${c.border} transition-all duration-300`}>
										{/* Header */}
										<div className="flex flex-wrap items-start justify-between gap-3 mb-3">
											<div>
												<h4 className="text-lg font-bold text-white">{job.title}</h4>
												<p className={`font-medium text-sm ${c.text}`}>{job.company}</p>
											</div>
											<div className="flex flex-wrap gap-2">
												<span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${c.badge}`}>
													{job.type}
												</span>
												<span className="px-2.5 py-1 text-xs font-medium rounded-full border bg-gray-700/50 text-gray-400 border-gray-600 flex items-center gap-1">
													<Calendar className="w-3 h-3" />
													{job.period}
												</span>
											</div>
										</div>

										<p className="text-gray-500 text-sm mb-4 italic">{job.description}</p>

										<ul className="space-y-2">
											{job.bullets.map((b, i) => (
												<li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
													<span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
													{b}
												</li>
											))}
										</ul>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
