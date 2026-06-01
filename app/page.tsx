'use client';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function SimplePortfolio() {
	return (
		<>
			{/* Navigation */}
			<Navigation />
			
			{/* Main Content */}
			<main id="home" className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
				<HeroSection />
				<AboutSection />
				<SkillsSection />
				<ProjectsSection />
				<ContactSection />
			</main>
		</>
	);
}