import React from 'react';

const skillData = [
  {
    category: 'Cyber Security & Ethical Hacking',
    skills: [
      { name: 'Penetration Testing', percent: 90 },
      { name: 'Vulnerability Assessment', percent: 85 },
      { name: 'Network Security', percent: 80 },
      { name: 'Security Auditing', percent: 80 },
      { name: 'Ethical Hacking', percent: 90 },
    ],
    gradient: 'from-cyan-400 via-blue-500 to-blue-900',
  },
  {
    category: 'Full Stack Development',
    skills: [
      { name: 'React/Next.js', percent: 90 },
      { name: 'Node.js', percent: 85 },
      { name: 'Python', percent: 80 },
      { name: 'MongoDB & PostgreSQL', percent: 80 },
      { name: 'Tailwind CSS', percent: 85 },
    ],
    gradient: 'from-green-400 via-cyan-500 to-blue-900',
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git/GitHub', percent: 90 },
      { name: 'Docker', percent: 75 },
      { name: 'AWS/Cloud', percent: 70 },
      { name: 'CI/CD', percent: 80 },
      { name: 'Linux', percent: 85 },
    ],
    gradient: 'from-yellow-400 via-pink-500 to-purple-900',
  },
];

const Skills = () => {
  return (
    <section id="my-skills" className="w-full py-16 bg-white dark:bg-[#181e29] transition-colors">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-blue-900 dark:text-cyan-300">My Skills</h2>
        <p className="text-center text-blue-900 dark:text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
          My main focus is on cyber security, ethical hacking, and full-stack development. I specialize in securing applications, identifying vulnerabilities, and building robust, scalable solutions using modern technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillData.map((cat, idx) => (
            <div
              key={cat.category}
              className={
                `rounded-2xl shadow-lg p-8 transition-colors group hover:shadow-cyan-400/40 hover:scale-105 duration-300 ` +
                `bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-900 dark:from-[#23272f] dark:via-[#23272f] dark:to-[#23272f]`
              }
            >
              <h3 className="text-xl font-semibold mb-6 text-white dark:text-cyan-300 text-center drop-shadow">{cat.category}</h3>
              <div className="space-y-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white dark:text-cyan-200 font-medium">{skill.name}</span>
                      <span className="text-white dark:text-cyan-200 font-medium">{skill.percent}%</span>
                    </div>
                    <div className="w-full h-3 bg-white/30 dark:bg-cyan-900 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-white dark:bg-cyan-400 shadow-md transition-all duration-500"
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
