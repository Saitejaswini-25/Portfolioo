import React, { useState } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import amazonCloneImg from '../images/amazon.png';
import chatbotimg from '../images/chatbot.png';
import Portfolioimg from '../images/Portfolio.png';
import greenimg from '../images/greencyclehub.png';
import plasticimg from '../images/plastic.jpg';

const Projects: React.FC = () => {
  const [showMore, setShowMore] = useState<number | null>(null);

  const toggleShowMore = (id: number) => {
    setShowMore(prev => (prev === id ? null : id));
  };

  const projects = [
    {
      id: 1,
      title: 'Real-Time ChatBot',
      description:
        'A responsive, AI-powered chatbot that answers user questions instantly with voice input, speech output, and a clean, distraction-free interface. Built with React, Tailwind CSS, and OpenRouter, it ensures fast, accessible conversations across devices.',
      image: chatbotimg,
      technologies: ['React', 'TypeScript', 'Next.js', 'OpenRouter Api', 'Figma'],
      liveUrl: 'https://chatbot-liard-xi.vercel.app/',
      githubUrl: 'https://github.com/Saitejaswini-25/chatbot.git',
      date: '2024',
      featured: true,
    },
    {
      id: 2,
      title: 'Mentor Loop',
      description:
        'A fully responsive education website designed to host workshops, mentorship sessions, and learning events. Built with a clean, scalable architecture and user-friendly UI, the platform allows users to explore sessions and connect with mentors.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://mentorloop.vercel.app/',
      githubUrl: 'https://github.com/Saitejaswini-25/Mentorloop.git',
      date: '2024',
      featured: true,
    },
    {
      id: 3,
      title: 'Green Cycle Hub',
      description:
        'A sustainable e-commerce platform where users collect plastic to earn Super Coins and redeem them for eco-friendly products, promoting circular economy practices.',
      image: greenimg,
      technologies: ['Django', 'Razorpay Integration', 'Tailwind CSS', 'React'],
      githubUrl: 'https://github.com/Saitejaswini-25/greencyclehub.git',
      date: '2024',
      featured: true,
    },
    {
      id: 4,
      title: 'Portfolio',
      description:
        'Developed a responsive portfolio with dark/light theme, resume download, and smooth navigation to showcase my projects and skills professionally.',
      image: Portfolioimg,
      technologies: ['Tailwind CSS', 'React', 'Bootstrap','TypeScript'],
      liveUrl: 'https://portfolioo-ebon-psi.vercel.app/',
      githubUrl: 'https://github.com/Saitejaswini-25/Amazonclone.git',
      date: '2025',
      featured: true,
    },
    {
      id: 5,
      title: 'Amazon Clone',
      description:
        'A responsive replica of Amazon e-commerce interface, designed to mimic the user experience of browsing, searching, and managing products. It features intuitive navigation, dynamic UI components, and a clean layout optimized for desktops and mobile devices.',
      image: amazonCloneImg,
      technologies: ['HTML', 'React', 'CSS', 'Bootstrap'],
      liveUrl: 'https://amazonclone-lac-two.vercel.app/',
      githubUrl: 'https://github.com/Saitejaswini-25/Amazonclone.git',
      date: '2023',
      featured: true,
    },
    {
      id: 6,
      title: 'Plastic Classification',
      description:
        'A machine learning model that classifies the type of plastic from an image for efficient waste sorting.',
      image: plasticimg,
      technologies: ['Python', 'Jupyter Notebook'],
      githubUrl: 'https://github.com/Saitejaswini-25/plasticclassification.git',
      date: '2024',
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 right-4 flex space-x-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 shadow-lg hover:shadow-xl hover:scale-110"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 delay-75 shadow-lg hover:shadow-xl hover:scale-110"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <div className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  <p className={showMore === project.id ? '' : 'line-clamp-3'}>
                    {project.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => toggleShowMore(project.id)}
                    className="mt-1 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                  >
                    {showMore === project.id ? 'Show less' : 'Show more'}
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/Saitejaswini-25"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Github size={20} />
            <span>View All Projects</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
