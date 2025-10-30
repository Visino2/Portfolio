"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
	return (
		<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<motion.div
				className="text-center"
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<div className="mb-6 sm:mb-8">
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
					>
						<Image
							src="/victor.jpg"
							alt="victor aba"
							width={250}
							height={70}
							className="rounded-full object-cover mx-auto border-4 border-gray-700 shadow-lg"
						/>
					</motion.div>
				</div>

				<motion.h1
					className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					VICTOR ABA
				</motion.h1>

				<motion.p
					className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					FRONTEND DEVELOPER
				</motion.p>

				<motion.p
					className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.8 }}
				>
					I’m a passionate Frontend Developer focused on building modern, performant, and user-friendly web applications.
					My stack includes React.js, Next.js, TypeScript, and TailwindCSS tools I use to create responsive designs,
					smooth user experiences, and maintainable codebases. I enjoy learning new technologies and contributing to
					open-source or team-based projects that challenge me to grow.
				</motion.p>
			</motion.div>
		</section>
	);
}
