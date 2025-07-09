import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Available for Work Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-200/50 dark:border-slate-700/50 mb-6 animate-fade-in">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
          <span className="text-slate-600 dark:text-slate-300 text-sm font-medium">Available for work</span>
        </div>

        {/* Animated Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 animate-slide-up">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            <Typewriter
              words={["Hi, I'm Sai Tejaswini"]}
              cursor={false}
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
              loop={1}
            />
          </span>
        </h1>

        {/* Animated Titles */}
        <div className="mb-8 animate-slide-up delay-200">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-600 dark:text-slate-300 mb-4 font-light">
            <Typewriter
              words={["Full-Stack Developer", "Frontend Developer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>
        </div>

        {/* Description */}
        <div className="mb-8 animate-slide-up delay-300">
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            I craft exceptional digital experiences with modern technologies,
            specializing in scalable applications that make a real impact.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-4 mb-8 animate-slide-up delay-400">
          <a
            href="https://github.com/Saitejaswini-25"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 border border-slate-200/50 dark:border-slate-700/50"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/gorantlasaitejaswini25/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 border border-slate-200/50 dark:border-slate-700/50"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:saitejaswinigorantla@gmail.com"
            className="group p-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 border border-slate-200/50 dark:border-slate-700/50"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 animate-slide-up delay-500">
          <button
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2"
          >
            <span>Let's Work Together</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToProjects}
            className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-white px-8 py-4 rounded-xl text-lg font-semibold border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Explore My Work
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="group animate-bounce p-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-lg border border-slate-200/50 dark:border-slate-700/50"
        >
          <ChevronDown size={24} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
