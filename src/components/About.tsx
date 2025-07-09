import React from 'react';
import { Code, Palette, Zap, Users, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js, Tailwind CSS',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Django, Firebase, MongoDB',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD, Responsive Design',
      color: 'from-purple-500 to-pink-500'
    },
   
  ];


  const technologies = [
    'React', 'TypeScript', 'Next.js', 'Firebase', 'Python', 'MySQL',
    'MongoDB', 'Tailwind CSS', 'Figma', 'Git','Razorpay','C++','Django','Javascript'
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Passionate developer with a love for creating beautiful, functional, and user-friendly applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio Section */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              My Story
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <p>
              I'm a full-stack web developer passionate about creating seamless, 
              user-centered web experiences. I enjoy turning ideas into real, 
              functional products that solve meaningful problems. 
              I believe in writing clean, maintainable code and constantly improving through hands-on learning.
               My goal is to build applications that are both effective and enjoyable to use.
              </p>
             
            
            </div>

            {/* Achievements */}
            
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              What I Do
            </h3>
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white`}>
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                        {skill.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Technology Stack with Animation */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Technology Stack
          </h3>
          <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
            {/* Moving Technology Tags */}
            <div className="flex animate-scroll space-x-6">
              {[...technologies, ...technologies].map((tech, index) => (
                <span
                  key={index}
                  className="flex-shrink-0 px-6 py-3 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-slate-200 dark:border-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;