"use client";
import { motion } from "framer-motion";
import { Code2, Palette, Database, Settings, Lightbulb, Award, Smartphone } from "lucide-react";

export default function SkillsSection() {
	const skillCategories = [
		{
			title: "Frontend Development",
			icon: <Code2 className="w-6 h-6" />,
			color: "blue",
			skills: [
				{ name: "React.js", level: 90, years: "3+ years" },
				{ name: "Next.js", level: 85, years: "2+ years" },
				{ name: "TypeScript", level: 85, years: "2+ years" },
				{ name: "JavaScript (ES6+)", level: 95, years: "3+ years" },
				{ name: "HTML5/CSS3", level: 95, years: "4+ years" },
			]
		},
		{
			title: "Mobile Development",
			icon: <Smartphone className="w-6 h-6" />,
			color: "pink",
			skills: [
				{ name: "React Native (Expo)", level: 85, years: "2+ years" },
				{ name: "Flutter", level: 80, years: "1+ year" },
			]
		},
		{
			title: "Styling & Design",
			icon: <Palette className="w-6 h-6" />,
			color: "purple",
			skills: [
				{ name: "TailwindCSS", level: 90, years: "2+ years" },
				{ name: "Framer Motion", level: 80, years: "1+ year" },
				{ name: "Responsive Design", level: 95, years: "3+ years" },
				{ name: "Figma to Code", level: 85, years: "2+ years" },
			]
		},
		{
			title: "State & Data Management",
			icon: <Database className="w-6 h-6" />,
			color: "green",
			skills: [
				{ name: "Redux Toolkit", level: 80, years: "2+ years" },
				{ name: "Context API", level: 85, years: "2+ years" },
				{ name: "Firebase", level: 75, years: "1+ year" },
				{ name: "REST APIs", level: 90, years: "3+ years" },
			]
		},
		{
			title: "Tools & Workflow",
			icon: <Settings className="w-6 h-6" />,
			color: "orange",
			skills: [
				{ name: "Git & GitHub", level: 90, years: "3+ years" },
				{ name: "VS Code", level: 95, years: "4+ years" },
				{ name: "Vercel/Netlify", level: 85, years: "2+ years" },
				{ name: "Chrome DevTools", level: 90, years: "3+ years" },
			]
		},
		{
			title: "Best Practices",
			icon: <Lightbulb className="w-6 h-6" />,
			color: "yellow",
			skills: [
				{ name: "Performance Optimization", level: 85, years: "2+ years" },
				{ name: "Code Refactoring", level: 80, years: "2+ years" },
				{ name: "Component Architecture", level: 85, years: "2+ years" },
				{ name: "Accessibility (A11y)", level: 75, years: "1+ year" },
			]
		},
	];

	const getColorClasses = (color: string) => {
		const colors: Record<string, { bg: string; border: string; text: string; fill: string }> = {
			blue: { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400", fill: "bg-blue-500" },
			purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400", fill: "bg-purple-500" },
			green: { bg: "bg-green-500/10", border: "border-green-500/20", text: "text-green-400", fill: "bg-green-500" },
			orange: { bg: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-400", fill: "bg-orange-500" },
			pink: { bg: "bg-pink-500/10", border: "border-pink-500/20", text: "text-pink-400", fill: "bg-pink-500" },
			yellow: { bg: "bg-yellow-500/10", border: "border-yellow-500/20", text: "text-yellow-400", fill: "bg-yellow-500" },
		};
		return colors[color] || colors.blue;
	};

	return (
		<section id="skills" className="bg-gray-800/50 py-20 scroll-mt-16">
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
						<Award className="w-5 h-5 text-blue-400" />
						<span className="text-blue-400 font-medium text-sm">Expertise & Proficiency</span>
					</div>
					<h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
						Technical Skills
					</h2>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">
						A comprehensive overview of my technical expertise and years of hands-on experience
					</p>
				</motion.div>

				{/* Skills Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{skillCategories.map((category, catIndex) => {
						const colors = getColorClasses(category.color);
						return (
							<motion.div
								key={category.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: catIndex * 0.1 }}
								className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
							>
								{/* Category Header */}
								<div className="flex items-center gap-3 mb-6">
									<div className={`p-3 ${colors.bg} ${colors.border} border rounded-lg ${colors.text}`}>
										{category.icon}
									</div>
									<h3 className="text-xl font-bold text-white">
										{category.title}
									</h3>
								</div>

								{/* Skills List */}
								<div className="space-y-4">
									{category.skills.map((skill, index) => (
										<motion.div
											key={skill.name}
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.4, delay: catIndex * 0.1 + index * 0.05 }}
										>
											<div className="flex items-center justify-between mb-2">
												<span className="text-gray-200 font-medium">
													{skill.name}
												</span>
												<span className="text-gray-400 text-sm">
													{skill.years}
												</span>
											</div>

											{/* Progress Bar */}
											<div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
												<motion.div
													initial={{ width: 0 }}
													whileInView={{ width: `${skill.level}%` }}
													viewport={{ once: true }}
													transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.05, ease: "easeOut" }}
													className={`absolute top-0 left-0 h-full ${colors.fill} rounded-full`}
												/>
											</div>

											{/* Proficiency Label */}
											<div className="flex justify-end mt-1">
												<span className={`text-xs ${colors.text} font-medium`}>
													{skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Proficient"}
												</span>
											</div>
										</motion.div>
									))}
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* Additional Skills Badges */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mt-12 text-center"
				>
					<h4 className="text-lg font-semibold text-white mb-4">
						Also Familiar With
					</h4>
					<div className="flex flex-wrap justify-center gap-3">
						{["Webpack", "Vite", "Jest", "Cypress", "GraphQL", "Docker", "AWS", "MongoDB"].map((tech, i) => (
							<motion.span
								key={tech}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
								whileHover={{ scale: 1.1 }}
								className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm font-medium border border-gray-600 hover:border-gray-500 hover:bg-gray-650 transition-all cursor-default"
							>
								{tech}
							</motion.span>
						))}
					</div>
				</motion.div>

				{/* Soft Skills */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mt-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6"
				>
					<h4 className="text-lg font-semibold text-white mb-4 text-center">
						Professional Skills
					</h4>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
						{[
							"Team Collaboration",
							"Problem Solving",
							"Agile Methodology",
							"Code Review"
						].map((skill, i) => (
							<motion.div
								key={skill}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
								className="text-gray-300 font-medium"
							>
								✓ {skill}
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}