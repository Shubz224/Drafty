
import { useState } from 'react';
import ProjectModal from './ProjectModal';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github?: string;
  demo?: string;
  date: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: '1',
      title: 'GitSense',
      subtitle: 'AI-powered GitHub Insight Generator',
      description: 'Visualizes GitHub activity and generates summaries using LLMs',
      longDescription: 'GitSense is a developer analytics tool that uses LangChain and Gemini AI to analyze GitHub user activity. It provides insightful summaries, project categorization, and visualization of contributions. Built using Next.js, Prisma, and NeonDB for a high-performance and scalable stack.',
      technologies: ['Next.js', 'TypeScript', 'LangChain', 'Gemini API', 'NeonDB', 'Prisma', 'TailwindCSS'],
      github: 'https://github.com/Shubz224/GitSense',  // Replace with actual link       // Replace with actual link
      date: 'jan 18, 2025'
    },

    {
      id: '2',
      title: 'Decentralized Crowdfunding App',
      subtitle: 'Blockchain-based campaign funding system',
      description: 'A Web3 app to create and fund campaigns using Ethereum',
      longDescription: 'A decentralized crowdfunding platform built on Arbitrum L2 using Solidity smart contracts. Features include MetaMask login, Firebase authentication, admin dashboard to approve/reject campaigns, and transparent fund allocation. Focuses on accessibility, security, and trust using Web3 and Layer 2.',
      technologies: ['React', 'Next.js', 'Solidity', 'Hardhat', 'Arbitrum', 'Firebase', 'TailwindCSS', 'Thirdweb', 'TypeScript'],
      github: 'https://github.com/Shubz224/CrowdFundingWeb3',  // Replace with actual link      // Replace with actual link
      date: 'feb 05, 2025'
    },
    {
      id: '3',
      title: 'MarketPlace',
      subtitle: 'Full-stack E-commerce Application',
      description: 'A modern e-commerce platform with admin dashboard and payment integration',
      longDescription: 'MarketPlace is a scalable e-commerce platform built with React, Redux, and Node.js. It includes an admin dashboard for managing users and orders, Stripe integration for secure payments, MongoDB with caching for performance, and custom hooks for clean architecture.',
      technologies: ['React', 'Redux Toolkit', 'MongoDB', 'Node.js', 'Express', 'Stripe', 'Firebase', 'RTK Query', 'TypeScript', 'Sass'],
      github: 'https://github.com/Shubz224/MarketPlace',  // Replace with actual link      // Replace with actual link
      date: 'oct 12, 2024'
    }

  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-50"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-space font-bold text-3xl md:text-4xl mb-4 text-white">
            Featured Projects
          </h2>
          <p className="font-inter text-gray-300 text-lg">
            Some of my recent work and experiments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:shadow-2xl hover:border-gray-600/70 transition-all duration-300 group-hover:scale-[1.02] group-hover:bg-gray-800/80 h-full">
                <div className="mb-4">
                  <h3 className="font-space font-semibold text-xl mb-2 text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 font-inter text-sm mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-400 font-inter text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gray-700/60 text-gray-300 rounded-md border border-gray-600/40"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gray-700/60 text-gray-300 rounded-md border border-gray-600/40">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-inter">
                    {project.date}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-gray-700/60 group-hover:bg-blue-600/60 transition-colors flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-300 rounded-full transition-colors"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Projects;
