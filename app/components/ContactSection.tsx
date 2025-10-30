'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactSection() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<section className="py-16 px-4 border-t border-gray-800">
			<div className="max-w-2xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					viewport={{ once: true }}
					className="text-center space-y-6"
				>
					<h2 className="text-2xl font-semibold text-white">Contact</h2>
					<p className="text-gray-300">
						Interested in working together? Let&apos;s have a conversation.
					</p>

					{/* Location */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="flex items-center justify-center gap-2 text-gray-300"
					>
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
						<span>Lagos, Nigeria</span>
					</motion.div>

					{/* Contact Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="flex flex-col sm:flex-row justify-center gap-4"
					>
						<button
							onClick={() => setIsOpen(true)}
							className="px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
							</svg>
							Get in Touch
						</button>

						<a
							href="/resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="px-6 py-2 border border-gray-600 text-gray-300 font-medium rounded hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
									clipRule="evenodd"
								/>
								<path
									fillRule="evenodd"
									d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z"
									clipRule="evenodd"
								/>
							</svg>
							View Resume
						</a>
					</motion.div>

					{/* Social Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className="flex justify-center gap-6"
					>
						<a
							href="https://github.com/Visino2"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white transition-colors"
						>
							<i className="fa-brands fa-github text-2xl"></i>
						</a>
						<a
							href="https://linkedin.com/in/victor-aba"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-blue-400 transition-colors"
						>
							<i className="fa-brands fa-linkedin text-2xl"></i>
						</a>
						<a
							href="https://twitter.com/smithvictor_2"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-blue-400 transition-colors"
						>
							<i className="fa-brands fa-x-twitter text-2xl"></i>
						</a>
					</motion.div>

					{/* Footer Contact Info */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.5 }}
						className="text-gray-400 text-sm mt-8 space-y-1"
					>
						<p>📧 abavictor07@gmail.com</p>
						<p>💻 Built by Victor Aba • Frontend Developer</p>
					</motion.div>
				</motion.div>
			</div>

			{/* Popup Contact Form Modal */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="bg-gray-900 border border-gray-700 rounded-2xl p-6 w-11/12 max-w-md shadow-xl"
						>
							<h3 className="text-xl font-semibold text-white mb-4">
								Send a Message
							</h3>

							<form
								action="https://formspree.io/f/movplgvn"
								method="POST"
								className="space-y-4"
							>
								<input
									type="text"
									name="name"
									required
									placeholder="Your Name"
									className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
								/>
								<input
									type="email"
									name="email"
									required
									placeholder="Your Email"
									className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
								/>
								<textarea
									name="message"
									required
									placeholder="Your Message"
									rows={4}
									className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
								></textarea>

								<div className="flex justify-between items-center">
									<button
										type="button"
										onClick={() => setIsOpen(false)}
										className="text-gray-400 hover:text-white"
									>
										Cancel
									</button>
									<button
										type="submit"
										className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium"
									>
										Send
									</button>
								</div>
							</form>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
