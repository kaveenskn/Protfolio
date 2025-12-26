
import React from 'react';
import { FaPython, FaReact, FaNodeJs, FaLock, FaBrain, FaUsers } from 'react-icons/fa';

import { SiPython, SiTensorflow, SiReact, SiNodedotjs, SiSecurityscorecard, SiLeaderprice } from 'react-icons/si';

const skills = [
  {
    logo: <SiPython className="w-20 h-20 text-blue-900 dark:text-cyan-400 opacity-70" />,
    icon: <FaPython className="w-8 h-8 text-blue-900 dark:text-cyan-400" />,
    title: 'Python',
    desc: 'Proficient in Python for scripting, automation, and backend development.'
  },
  {
    logo: <SiTensorflow className="w-20 h-20 text-yellow-500 dark:text-yellow-300 opacity-70" />,
    icon: <FaBrain className="w-8 h-8 text-blue-900 dark:text-cyan-400" />,
    title: 'AI Development',
    desc: 'Experience with AI/ML frameworks and building intelligent solutions.'
  },
  {
    logo: <SiLeaderprice className="w-20 h-20 text-blue-700 dark:text-cyan-300 opacity-70" />,
    icon: <FaUsers className="w-8 h-8 text-blue-900 dark:text-cyan-400" />,
    title: 'Leadership',
    desc: 'Strong leadership and team collaboration skills.'
  },
  {
    logo: <SiReact className="w-20 h-20 text-cyan-400 dark:text-cyan-300 opacity-70" />,
    icon: <FaReact className="w-8 h-8 text-blue-900 dark:text-cyan-400" />,
    title: 'Frontend & Backend',
    desc: 'Skilled in React, Node.js, Flask, Django, and modern web technologies.'
  },
  {
    logo: <SiSecurityscorecard className="w-20 h-20 text-blue-900 dark:text-cyan-400 opacity-70" />,
    icon: <FaLock className="w-8 h-8 text-blue-900 dark:text-cyan-400" />,
    title: 'Security',
    desc: 'Knowledgeable in web security best practices and secure coding.'
  },
];

const Skillcards = () => {
  return (
    <section id="skills" className="w-full py-16 bg-white dark:bg-[#181e29] transition-colors">
      <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-blue-900 dark:text-cyan-300 text-center w-full">Skills</h3>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 px-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className={`relative group rounded-2xl shadow-lg overflow-hidden border border-cyan-100 dark:border-[#23272f] bg-cyan-50 dark:bg-[#23272f] h-80 flex items-end justify-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 md:col-span-2 ${
              idx === 3 ? "md:col-start-2" : idx === 4 ? "md:col-start-4" : ""
            }`}
            style={{ minHeight: '20rem' }}
          >
            {/* Card Logo */}
            <div className="absolute inset-0 flex items-center justify-center transition duration-300 group-hover:blur-sm group-hover:scale-105">
              {skill.logo}
            </div>
            {/* Glass Content Reveal */}
            <div
              className="absolute bottom-0 left-0 w-full px-6 py-8 flex flex-col items-center justify-center bg-white/60 dark:bg-[#23272f]/70 backdrop-blur-md rounded-t-2xl translate-y-full group-hover:translate-y-0 opacity-20 group-hover:opacity-100 transition-all duration-500"
              style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
            >
              <div className="mb-2">{skill.icon}</div>
              <h4 className="text-xl font-semibold mb-1 text-blue-900 dark:text-cyan-200">{skill.title}</h4>
              <p className="text-center text-blue-900 dark:text-gray-300 text-base">{skill.desc}</p>
            </div>
            {/* Title always visible at top */}
            <div className="absolute top-0 left-0 w-full flex justify-center pt-4">
              <span className="inline-block bg-white/80 dark:bg-[#181e29]/80 px-4 py-1 rounded-full text-blue-900 dark:text-cyan-200 font-semibold shadow text-base">
                {skill.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skillcards;
