"use client";
import { motion } from "framer-motion";

export default function SkillsSection() {
	const skillCategories = [
		{
			title: "Frontend Development",
			skills: ["HTML", "CSS", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js"],
		},
		{
			title: "Styling & UI",
			skills: ["TailwindCSS", "Responsive Design", "UI/UX Implementation", "Figma to Code Conversion"],
		},
		{
			title: "State Management & Data",
			skills: ["Redux Toolkit", "Context API", "Firebase (Auth & Realtime DB)", "API Integration"],
		},
		{
			title: "Version Control & Tools",
			skills: ["Git", "GitHub", "CI/CD (GitHub Actions, Vercel)", "VS Code", "Chrome DevTools"],
		},
		{
			title: "Other Skills",
			skills: ["Performance Optimization", "Code Refactoring", "Component Architecture", "Cross-Team Collaboration"],
		},
	];

	return (
		<section className="bg-gray-800 py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h2
					className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					💻 Technical Skills
				</motion.h2>

				<div className="space-y-10 text-gray-200 text-sm sm:text-base">
					{skillCategories.map((category, index) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<h3 className="font-semibold text-white mb-3 text-center sm:text-left">
								{category.title}:
							</h3>

							<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
								{category.skills.map((skill) => (
									<motion.div
										key={skill}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.98 }}
										className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow hover:shadow-gray-500"
									>
										{skill}
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
