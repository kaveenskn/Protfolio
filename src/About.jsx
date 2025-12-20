import React from 'react'
import myImage from './assets/New.png' // Make sure this matches your actual file name and path

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-[60vh] flex flex-col px-6 py-16 bg-white dark:bg-[#181e29] transition-colors"
    >
      {/* Heading at the top */}
      <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-blue-900 dark:text-cyan-300 text-center w-full">About Me</h3>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 w-full">
        {/* Image Side */}
        <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
          <div className="w-72 h-72 md:w-[28rem] md:h-[28rem]  rounded-2xl overflow-hidden shadow-lg bg-cyan-100 dark:bg-[#23272f] flex items-center justify-center">
            <img
              src={myImage}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* Text Side */}
        <div className="flex-1 flex flex-col items-start justify-center md:mr-16">
          <p className="mb-6 text-xl sm:text-2xl text-blue-900 dark:text-gray-300">
            I'm deeply passionate about cyber security and ethical hacking, with a strong focus on protecting digital assets and identifying vulnerabilities. My journey has led me to master penetration testing, threat analysis, and secure coding practices.
          </p>
          <p className="text-xl sm:text-2xl text-blue-900 dark:text-gray-300">
            Alongside my security expertise, I am also a dedicated full-stack developer, building robust and scalable web applications. I believe in combining security-first thinking with modern development to deliver solutions that are both innovative and resilient.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;
