import React from 'react';
import { Calendar, MapPin, ExternalLink, Building, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Bachelor of Technology in CSE',
      company: 'Vignan’s Institute of Information Technology',
      location: 'Visakhapatnam',
      period: '2022 - Present',
      description:
        'Pursuing a B.Tech degree with a strong academic record and focus on full-stack web development, data structures, and software engineering principles.',
      achievements: [
        'Maintaining a 9.0+ CGPA',
        'Completed certified courses in React, Django, and Python',
      ],
      technologies: [],
      type: 'Student',
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Engiversee',
      location: 'Remote',
      period: 'April 2025 – July 2025',
      description:
        'Contributed to building Engiversee’s official organizational website, enhancing their digital presence. Designed and developed a responsive, SEO-optimized frontend using React.js and Tailwind CSS.',
      achievements: [
        'Implemented responsive design for mobile-first approach',
        'Reduced bug reports by 60% through comprehensive testing',
      ],
      technologies: ['React', 'Typescript', 'Django', 'Firebase', 'TailwindCSS'],
      type: 'work',
    },
  ];

  const certifications = [
    {
      title: 'Frontend Certification',
      issuer: 'Infosys Springboard',
      date: '2025',
    },
    {
      title: 'Python Foundation Certification',
      issuer: 'Infosys Springboard',
      date: '2024',
    },
    {
      title: 'Complete Git and GitHub Certification',
      issuer: 'LearnKartS',
      date: '2025',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-600"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 z-10"></div>

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}
              >
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
                        {exp.type === 'work' ? (
                          <Building size={16} />
                        ) : (
                          <GraduationCap size={16} />
                        )}
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-600 dark:text-slate-300 flex items-start"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies (only if not Student) */}
                  {exp.type !== 'Student' && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {cert.title}
                  </h4>
                  
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-2">{cert.issuer}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
