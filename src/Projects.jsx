import React from "react";

const projects = [
  {
    image: "https://source.unsplash.com/random/400x200?internship,students,job",
    title: "Internship Finder (University Students)",
    desc: "A platform to help university students find internships by browsing opportunities and filtering by role, location, and eligibility.",
    tech: ["React", "CSS", "Node.js"],
    code: "https://github.com/yourusername/internship-finder",
    demo: "https://your-demo-link.com/internship-finder",
  },
  {
    image: "https://source.unsplash.com/random/400x200?research,education,notes",
    title: "FutureHive",
    desc: "A research + mini-project assistant with AI integration that helps students discover project ideas and access past papers.",
    tech: ["AI Integration", "Python", "React"],
    code: "https://github.com/yourusername/futurehive",
    demo: "https://your-demo-link.com/futurehive",
  },
];

const Projects = () => (
  <section className="w-full py-16 bg-white dark:bg-gradient-to-r dark:from-black dark:to-[#1f2833] transition-colors">
    <div className="max-w-6xl mx-auto px-4">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-blue-900 dark:text-white font-sans">
        Featured{" "}
        <span className="text-cyan-500 dark:text-cyan-400">Projects</span>
      </h2>
      <p className="text-center text-blue-900/80 dark:text-gray-300 mb-12 text-base sm:text-lg">
        A showcase of recent work and personal projects
      </p>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-blue-50 dark:bg-[#23272f] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col overflow-hidden border border-blue-100 dark:border-[#23272f]"
          >
            {/* Image */}
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover"
            />
            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-2 font-sans">
                {proj.title}
              </h3>
              <p className="text-blue-900/90 dark:text-gray-300 mb-4 text-base">
                {proj.desc}
              </p>
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-cyan-100 text-blue-900 dark:bg-blue-900/60 dark:text-cyan-200 text-xs px-3 py-1 rounded-full font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {/* Buttons */}
              <div className="mt-auto flex gap-4">
                <a
                  href={proj.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-400 text-cyan-700 hover:bg-cyan-400 hover:text-blue-900 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-black transition-colors px-5 py-2 rounded-lg font-semibold text-sm "
                >
                  Code
                </a>
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-cyan-100 hover:bg-cyan-400 hover:text-blue-900 dark:bg-cyan-400 dark:text-black dark:hover:bg-cyan-500 transition-colors px-5 py-2 rounded-lg font-semibold text-sm shadow"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;