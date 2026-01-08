"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Code, Briefcase, Mail, ArrowUp } from 'lucide-react';

export default function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
			setShowScrollTop(window.scrollY > 500);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: 'smooth' });
		setIsMobileMenuOpen(false);
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const navItems = [
		{ id: 'home', label: 'Home', icon: Home },
		{ id: 'skills', label: 'Skills', icon: Code },
		{ id: 'projects', label: 'Projects', icon: Briefcase },
		{ id: 'contact', label: 'Contact', icon: Mail },
	];

	return (
		<>
			{/* Main Navigation */}
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled
						? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800'
						: 'bg-transparent'
				}`}
			>
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						{/* Logo */}
						<button
							onClick={() => scrollToSection('home')}
							className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
						>
							VA<span className="text-blue-500">.</span>
						</button>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-1">
							{navItems.map((item) => {
								const Icon = item.icon;
								return (
									<button
										key={item.id}
										onClick={() => scrollToSection(item.id)}
										className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200 flex items-center gap-2"
									>
										<Icon className="w-4 h-4" />
										{item.label}
									</button>
								);
							})}
							<a
								href="/resume.pdf"
								download
								className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
							>
								Resume
							</a>
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
						>
							{isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							className="md:hidden bg-gray-900/98 backdrop-blur-md border-t border-gray-800"
						>
							<div className="px-4 py-4 space-y-2">
								{navItems.map((item) => {
									const Icon = item.icon;
									return (
										<button
											key={item.id}
											onClick={() => scrollToSection(item.id)}
											className="w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200 flex items-center gap-3"
										>
											<Icon className="w-5 h-5" />
											{item.label}
										</button>
									);
								})}
								<a
									href="/resume.pdf"
									download
									className="block w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center font-medium rounded-lg hover:shadow-lg transition-all duration-300"
								>
									Download Resume
								</a>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.nav>

			{/* Scroll to Top Button */}
			<AnimatePresence>
				{showScrollTop && (
					<motion.button
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.5 }}
						onClick={scrollToTop}
						className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 z-50 hover:scale-110"
					>
						<ArrowUp className="w-6 h-6" />
					</motion.button>
				)}
			</AnimatePresence>
		</>
	);
}