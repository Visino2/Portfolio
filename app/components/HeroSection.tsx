"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Briefcase } from "lucide-react";

export default function HeroSection() {
	const scrollToProjects = () => {
		document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
			{/* Background decoration */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
				<div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
			</div>

			<motion.div
				className="text-center"
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				{/* Availability Badge */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8"
				>
					<span className="relative flex h-3 w-3">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
					</span>
					<span className="text-green-400 text-sm font-medium">Available for Freelance Work</span>
				</motion.div>

				{/* Profile Image */}
				<div className="mb-8">
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
						className="relative inline-block"
					>
						<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50" />
						<Image
							src="/victor.jpg"
							alt="Victor Aba - Frontend Developer"
							width={200}
							height={200}
							className="rounded-full object-cover border-4 border-gray-700 shadow-2xl relative"
							priority
						/>
					</motion.div>
				</div>

				{/* Name */}
				<motion.h1
					className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					VICTOR ABA
				</motion.h1>

				{/* Title with gradient */}
				<motion.div
					className="mb-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.5 }}
				>
					<p className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
						Frontend Developer & Mobile Developer
					</p>
					<p className="text-lg text-gray-400 mt-2">
						Crafting seamless digital experiences with modern web technologies
					</p>
				</motion.div>

				{/* Bio */}
				<motion.p
					className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4 mb-10"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.7 }}
				>
					I&apos;m a passionate Frontend Developer with <span className="text-white font-semibold">3+ years of experience</span> building 
					modern, performant, and user-friendly web applications. I specialize in <span className="text-blue-400">React.js</span>, 
					<span className="text-blue-400"> Next.js</span>, and <span className="text-blue-400">TypeScript</span>, creating 
					responsive designs and smooth user experiences that users love and businesses need.
				</motion.p>

				{/* CTA Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.9 }}
					className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
				>
					<button
						onClick={scrollToProjects}
						className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105"
					>
						<Briefcase className="w-5 h-5" />
						View My Work
						<ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
					</button>

					<a
						href="/resume.pdf"
						download
						className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 flex items-center gap-2 hover:scale-105"
					>
						<Download className="w-5 h-5" />
						Download Resume
					</a>
				</motion.div>

				{/* Quick Stats */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 1.1 }}
					className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 border-t border-gray-800"
				>
					<div>
						<div className="text-3xl font-bold text-white mb-1">3+</div>
						<div className="text-sm text-gray-400">Years Experience</div>
					</div>
					<div>
						<div className="text-3xl font-bold text-white mb-1">20+</div>
						<div className="text-sm text-gray-400">Projects Completed</div>
					</div>
					<div>
						<div className="text-3xl font-bold text-white mb-1">100%</div>
						<div className="text-sm text-gray-400">Client Satisfaction</div>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}