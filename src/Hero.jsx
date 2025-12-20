import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsDownload } from 'react-icons/bs';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 * i, duration: 2, type: "spring" }
  }),
};

const Hero = ({ theme }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-start text-center relative transition-colors overflow-hidden bg-white dark:bg-gradient-to-r dark:from-black dark:to-[#1f2833] pt-20 pb-8"
    >
      {/* Decorative bubble for light theme */}
      {theme === 'light' && (
        <div
          className="absolute top-20 left-[-100px] md:left-[-120px] w-[300px] h-[300px] bg-cyan-100 rounded-full opacity-70 blur-2xl z-0"
          aria-hidden="true"
        ></div>
      )}
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full flex-1">
        <motion.h2
          className="text-5xl sm:text-8xl font-bold mb-4 text-blue-900 dark:text-white"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={textVariants}
        >
          Hi, I'm{' '}
          <span
            className="inline-block"
            style={{
              fontSize: '4.5rem',
              fontWeight: 800,
              marginBottom: '1rem',
              position: 'relative',
              backgroundImage: theme === 'dark'
                ? 'linear-gradient(to right, #22d3ee 20%, #0891b2 50%)'
                : 'linear-gradient(to right, #071a58 20%, #080154 50%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              boxReflect: theme === 'dark' ? undefined : 'below -25px linear-gradient(transparent, transparent 50%, rgba(0,0,0,0.3))',
              WebkitBoxReflect: theme === 'dark' ? undefined : 'below -25px linear-gradient(transparent, transparent 50%, rgba(0,0,0,0.3))',
              zIndex: 2,
            }}
          >
            Kaveen
          </span>
        </motion.h2>

        <motion.p
          className="text-2xl text-blue-900 dark:text-gray-300 max-w-2xl"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={textVariants}
        >
          Cyber Security Enthusiast & Ethical Hacker with a strong focus on security, penetration testing, and full-stack development. I am passionate about protecting digital assets and building secure, scalable web applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-6 mt-6"
          initial="hidden"
          animate="visible"
          custom={3}
          variants={textVariants}
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-900 text-cyan-100 font-semibold rounded-full hover:bg-cyan-700 hover:text-white dark:bg-cyan-400 dark:text-black dark:hover:bg-cyan-500 transition flex items-center gap-2"
          >
            <HiOutlineMail className="w-5 h-5" />
            Get In Touch
          </a>
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 border border-blue-900 text-blue-900 rounded-full hover:bg-cyan-400 hover:text-blue-900 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-black transition flex items-center gap-2"
          >
            <BsDownload className="w-5 h-5" />
            Download CV
          </a>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="flex gap-4 mt-10"
          initial="hidden"
          animate="visible"
          custom={4}
          variants={textVariants}
        >
          {/* Facebook */}
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-900 text-cyan-100 dark:bg-[#23272f] dark:text-cyan-400 hover:bg-cyan-400 hover:text-blue-900 dark:hover:bg-cyan-400 dark:hover:text-black transition-colors shadow-md"
          >
            <FaFacebookF className="w-6 h-6" />
          </a>
          {/* Twitter */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-900 text-cyan-100 dark:bg-[#23272f] dark:text-cyan-400 hover:bg-cyan-400 hover:text-blue-900 dark:hover:bg-cyan-400 dark:hover:text-black transition-colors shadow-md"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-900 text-cyan-100 dark:bg-[#23272f] dark:text-cyan-400 hover:bg-cyan-400 hover:text-blue-900 dark:hover:bg-cyan-400 dark:hover:text-black transition-colors shadow-md"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-900 text-cyan-100 dark:bg-[#23272f] dark:text-cyan-400 hover:bg-cyan-400 hover:text-blue-900 dark:hover:bg-cyan-400 dark:hover:text-black transition-colors shadow-md"
          >
            <FaLinkedinIn className="w-6 h-6" />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-900 text-cyan-100 dark:bg-[#23272f] dark:text-cyan-400 hover:bg-cyan-400 hover:text-blue-900 dark:hover:bg-cyan-400 dark:hover:text-black transition-colors shadow-md"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
