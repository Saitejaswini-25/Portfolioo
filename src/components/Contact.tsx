import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'saitejaswinigorantla@gmail.com',
      link: 'mailto:saitejaswinigorantla@gmail.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Visakhapatnam, Andhra Pradesh',
      link: 'https://maps.google.com/?q=Visakhapatnam'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/Saitejaswini-25',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gorantlasaitejaswini25/',
      color: 'hover:text-blue-600'
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
          Let's connect and collaborate on meaningful projects.
        </p>

        <div className="flex flex-col items-center space-y-6 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="flex items-center space-x-4 p-5 w-full max-w-sm bg-white dark:bg-slate-900 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-[1.02] duration-300"
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg">
                {info.icon}
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{info.title}</h4>
                <p className="text-slate-600 dark:text-slate-300">{info.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Follow Me</h4>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-white dark:bg-slate-900 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300 text-slate-600 dark:text-slate-400 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
