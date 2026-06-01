"use client";
import { motion } from "framer-motion";
import { Code2, Palette, Database, Settings, Lightbulb, Award, Smartphone } from "lucide-react";

const skillCategories = [
	{
		title: "Mobile Development",
		icon: Smartphone,
		color: "pink",
		skills: [
			{ name: "React Native", years: "2+ yrs" },
			{ name: "Expo", years: "2+ yrs" },
			{ name: "React Navigation", years: "2+ yrs" },
			{ name: "Push Notifications", years: "1+ yr" },
			{ name: "Flutter", years: "1+ yr" },
		],
	},
	{
		title: "Frontend Development",
		icon: Code2,
		color: "blue",
		skills: [
			{ name: "React.js", years: "3+ yrs" },
			{ name: "Next.js", years: "2+ yrs" },
			{ name: "TypeScript", years: "2+ yrs" },
			{ name: "JavaScript (ES6+)", years: "3+ yrs" },
			{ name: "HTML5 / CSS3", years: "3+ yrs" },
		],
	},
	{
		title: "Styling & Design",
		icon: Palette,
		color: "purple",
		skills: [
			{ name: "TailwindCSS", years: "2+ yrs" },
			{ name: "Framer Motion", years: "1+ yr" },
			{ name: "Responsive Design", years: "3+ yrs" },
			{ name: "Figma to Code", years: "2+ yrs" },
			{ name: "CSS Animations", years: "2+ yrs" },
		],
	},
	{
		title: "State & Data",
		icon: Database,
		color: "green",
		skills: [
			{ name: "Redux Toolkit", years: "2+ yrs" },
			{ name: "Context API", years: "2+ yrs" },
			{ name: "Firebase", years: "1+ yr" },
			{ name: "REST APIs", years: "3+ yrs" },
			{ name: "Async Storage", years: "1+ yr" },
		],
	},
	{
		title: "Tools & Workflow",
		icon: Settings,
		color: "orange",
		skills: [
			{ name: "Git & GitHub", years: "3+ yrs" },
			{ name: "Vercel / Netlify", years: "2+ yrs" },
			{ name: "VS Code", years: "3+ yrs" },
			{ name: "Xcode / Android Studio", years: "1+ yr" },
			{ name: "Chrome DevTools", years: "3+ yrs" },
		],
	},
	{
		title: "Best Practices",
		icon: Lightbulb,
		color: "yellow",
		skills: [
			{ name: "Performance Optimisation", years: "2+ yrs" },
			{ name: "Component Architecture", years: "2+ yrs" },
			{ name: "Code Splitting", years: "1+ yr" },
			{ name: "Accessibility (A11y)", years: "1+ yr" },
			{ name: "Agile / Scrum", years: "1+ yr" },
		],
	},
];

const colorMap: Record<string, { bg: string; border: string; text: string; iconBg: string; tag: string }> = {
	blue:   { bg: "bg-blue-500/5",   border: "border-blue-500/20",   text: "text-blue-400",   iconBg: "bg-blue-500/10",   tag: "bg-blue-500/10 text-blue-300 border-blue-500/20" },
	purple: { bg: "bg-purple-500/5", border: "border-purple-500/20", text: "text-purple-400", iconBg: "bg-purple-500/10", tag: "bg-purple-500/10 text-purple-300 border-purple-500/20" },
	green:  { bg: "bg-green-500/5",  border: "border-green-500/20",  text: "text-green-400",  iconBg: "bg-green-500/10",  tag: "bg-green-500/10 text-green-300 border-green-500/20" },
	orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/10", tag: "bg-orange-500/10 text-orange-300 border-orange-500/20" },
	pink:   { bg: "bg-pink-500/5",   border: "border-pink-500/20",   text: "text-pink-400",   iconBg: "bg-pink-500/10",   tag: "bg-pink-500/10 text-pink-300 border-pink-500/20" },
	yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/10", tag: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20" },
};

export default function SkillsSection() {
	return (
		<section id="skills" className="bg-gray-800/50 py-20 scroll-mt-16">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

				{/* Header */}
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
					<h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Technical Skills</h2>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">
						Tools and technologies I use to ship production-ready products
					</p>
				</motion.div>

				{/* Skills Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{skillCategories.map((category, catIndex) => {
						const c = colorMap[category.color];
						const Icon = category.icon;
						return (
							<motion.div
								key={category.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: catIndex * 0.08 }}
								className={`rounded-xl p-6 border ${c.border} ${c.bg} transition-all duration-300`}
							>
								<div className="flex items-center gap-3 mb-5">
									<div className={`p-2.5 ${c.iconBg} ${c.border} border rounded-lg`}>
										<Icon className={`w-5 h-5 ${c.text}`} />
									</div>
									<h3 className="text-lg font-bold text-white">{category.title}</h3>
								</div>

								<div className="flex flex-wrap gap-2">
									{category.skills.map((skill) => (
										<span
											key={skill.name}
											className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm font-medium ${c.tag}`}
										>
											{skill.name}
											<span className="text-xs opacity-50 font-normal">· {skill.years}</span>
										</span>
									))}
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* Also familiar with */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mt-10 text-center"
				>
					<p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
						Also familiar with
					</p>
					<div className="flex flex-wrap justify-center gap-3">
						{["Webpack", "Vite", "Jest", "GraphQL", "MongoDB", "Docker", "AWS", "Cypress"].map((tech, i) => (
							<motion.span
								key={tech}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.3, delay: i * 0.04 }}
								className="px-4 py-2 bg-gray-800 text-gray-400 rounded-full text-sm border border-gray-700 hover:border-gray-500 hover:text-gray-300 transition-all cursor-default"
							>
								{tech}
							</motion.span>
						))}
					</div>
				</motion.div>

				{/* Professional skills */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mt-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6"
				>
					<h4 className="text-base font-semibold text-white mb-4 text-center">Professional Skills</h4>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
						{["Team Collaboration", "Problem Solving", "Agile Methodology", "Code Review"].map((skill, i) => (
							<motion.div
								key={skill}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
								className="text-gray-300 text-sm font-medium py-2 px-3 bg-gray-800/60 rounded-lg border border-gray-700/50"
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
