'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, X } from 'lucide-react';

export default function ContactSection() {
	const [isOpen, setIsOpen] = useState(false);
	const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormStatus('sending');

		const form = e.currentTarget;
		const formData = new FormData(form);

		try {
			const response = await fetch('https://formspree.io/f/movplgvn', {
				method: 'POST',
				body: formData,
				headers: {
					'Accept': 'application/json'
				}
			});

			if (response.ok) {
				setFormStatus('success');
				form.reset();
				setTimeout(() => {
					setIsOpen(false);
					setFormStatus('idle');
				}, 2000);
			} else {
				setFormStatus('error');
			}
		} catch {
	     setFormStatus('error');
    }
	};

	return (
		<section id="contact" className="py-20 px-4 border-t border-gray-800 scroll-mt-16">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					viewport={{ once: true }}
					className="text-center space-y-8"
				>
					{/* Header */}
					<div>
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4"
						>
							<Mail className="w-4 h-4 text-purple-400" />
							<span className="text-purple-400 font-medium text-sm">Get In Touch</span>
						</motion.div>
						<h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
							Let Work Together
						</h2>
						<p className="text-gray-300 text-lg max-w-2xl mx-auto">
							Have a project in mind or want to collaborate? I&apos;d love to hear from you.
							Let create something amazing together.
						</p>
					</div>

					{/* Contact Info Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
						{/* Location Card */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all"
						>
							<div className="flex items-center gap-3 mb-3">
								<div className="p-3 bg-blue-500/10 rounded-lg">
									<MapPin className="w-6 h-6 text-blue-400" />
								</div>
								<h3 className="text-lg font-semibold text-white">Location</h3>
							</div>
							<p className="text-gray-300">Lagos, Nigeria</p>
							<p className="text-gray-400 text-sm mt-1">Available for remote work worldwide</p>
						</motion.div>

						{/* Email Card */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3 }}
							className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all"
						>
							<div className="flex items-center gap-3 mb-3">
								<div className="p-3 bg-purple-500/10 rounded-lg">
									<Mail className="w-6 h-6 text-purple-400" />
								</div>
								<h3 className="text-lg font-semibold text-white">Email</h3>
							</div>
							<a 
								href="mailto:abavictor07@gmail.com"
								className="text-gray-300 hover:text-blue-400 transition-colors"
							>
								abavictor07@gmail.com
							</a>
							<p className="text-gray-400 text-sm mt-1">Response within 24 hours</p>
						</motion.div>
					</div>

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4 }}
						className="flex flex-col sm:flex-row justify-center gap-4 pt-8"
					>
						<button
							onClick={() => setIsOpen(true)}
							className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 inline-flex items-center justify-center gap-2 hover:scale-105"
						>
							<Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							Send Message
						</button>

						<a
							href="/resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 inline-flex items-center justify-center gap-2 hover:scale-105"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
									clipRule="evenodd"
								/>
							</svg>
							Download Resume
						</a>
					</motion.div>

					{/* Social Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.5 }}
						className="pt-8"
					>
						<p className="text-gray-400 mb-4">Connect with me on</p>
						<div className="flex justify-center gap-4">
							{[
								{ icon: 'fa-github', link: 'https://github.com/Visino2', label: 'GitHub', color: 'hover:text-white' },
								{ icon: 'fa-linkedin', link: 'https://linkedin.com/in/victor-aba', label: 'LinkedIn', color: 'hover:text-blue-400' },
								{ icon: 'fa-x-twitter', link: 'https://twitter.com/smithvictor_2', label: 'Twitter', color: 'hover:text-blue-400' },
							].map((social) => (
								<a
									key={social.label}
									href={social.link}
									target="_blank"
									rel="noopener noreferrer"
									className={`p-4 bg-gray-800 text-gray-400 ${social.color} rounded-xl transition-all duration-300 hover:scale-110 hover:bg-gray-700 border border-gray-700 hover:border-gray-600`}
									aria-label={social.label}
								>
									<i className={`fa-brands ${social.icon} text-2xl`}></i>
								</a>
							))}
						</div>
					</motion.div>

					{/* Footer */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.6 }}
						className="text-gray-400 text-sm mt-16 pt-8 border-t border-gray-800"
					>
						<p className="mb-2">© 2026 Victor Aba. All rights reserved.</p>
						<p className="text-gray-500">Built with Next.js, TypeScript & TailwindCSS</p>
					</motion.div>
				</motion.div>
			</div>

			{/* Contact Form Modal */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
						onClick={() => setIsOpen(false)}
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="bg-gray-900 border border-gray-700 rounded-2xl p-6 sm:p-8 w-full max-w-lg shadow-2xl relative"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Close Button */}
							<button
								onClick={() => setIsOpen(false)}
								className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
							>
								<X className="w-5 h-5" />
							</button>

							<div className="flex items-center gap-3 mb-6">
								<div className="p-3 bg-blue-500/10 rounded-lg">
									<Mail className="w-6 h-6 text-blue-400" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-white">Send a Message</h3>
									<p className="text-gray-400 text-sm">I&apos;ll get back to you within 24 hours</p>
								</div>
							</div>

							{formStatus === 'success' ? (
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									className="text-center py-8"
								>
									<div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-4">
										<CheckCircle className="w-8 h-8 text-green-400" />
									</div>
									<h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
									<p className="text-gray-400">Thank you for reaching out. I&apos;ll respond soon.</p>
								</motion.div>
							) : (
								<form onSubmit={handleSubmit} className="space-y-4">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
											Your Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											required
											placeholder="John Doe"
											className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
										/>
									</div>

									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
											Your Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											required
											placeholder="john@example.com"
											className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
										/>
									</div>

									<div>
										<label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
											Your Message
										</label>
										<textarea
											id="message"
											name="message"
											required
											placeholder="Tell me about your project..."
											rows={5}
											className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
										></textarea>
									</div>
									{formStatus === 'error' && (
										<motion.div
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm"
										>
											<AlertCircle className="w-5 h-5" />
											<span>Failed to send message. Please try again.</span>
										</motion.div>
									)}

									<div className="flex justify-end gap-3 pt-2">
										<button
											type="button"
											onClick={() => setIsOpen(false)}
											className="px-6 py-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all font-medium"
										>
											Cancel
										</button>
										<button
											type="submit"
											disabled={formStatus === 'sending'}
											className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-semibold transition-all flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
										>
											{formStatus === 'sending' ? (
												<>
													<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
													Sending...
												</>
											) : (
												<>
													<Send className="w-5 h-5" />
													Send Message
												</>
											)}
										</button>
									</div>
								</form>
							)}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}