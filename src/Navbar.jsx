
import React from 'react';
import './Navbar.css';
// Sun and Moon SVGs
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m8.25-9H21M3 12h2.25m12.02 6.02l1.59 1.59m-13.44-13.44l1.59 1.59m0 10.26l-1.59 1.59m13.44-13.44l-1.59 1.59M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
  </svg>
);
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
  </svg>
);

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 dark:bg-black shadow-md z-50 transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl font-semibold text-cyan-100 dark:text-cyan-400 sm:text-2xl sm:font-bold transition-colors">Portfolio</h1>

        {/* Menu */}
        <ul className="flex space-x-4 text-cyan-100 dark:text-white sm:space-x-9 transition-colors">
          <li className="text-sm sm:text-base">
            <a href="#home" className="navbar-link hover:text-cyan-400 dark:hover:text-stone-50 font-semibold sm:font-bold p-4 transition-colors">Home</a>
          </li>
          <li className="text-sm sm:text-base">
            <a href="#about" className="navbar-link hover:text-cyan-400 dark:hover:text-stone-50 font-semibold sm:font-bold p-4 transition-colors">About</a>
          </li>
          <li className="text-sm sm:text-base">
            <a href="#skills" className="navbar-link hover:text-cyan-400 dark:hover:text-stone-50 font-semibold sm:font-bold p-4 transition-colors">Skills</a>
          </li>
          <li className="text-sm sm:text-base">
            <a href="#projects" className="navbar-link hover:text-cyan-400 dark:hover:text-stone-50 font-semibold sm:font-bold p-4 transition-colors">Projects</a>
          </li>
          <li className="text-sm sm:text-base">
            <a href="#contact" className="navbar-link hover:text-cyan-400 dark:hover:text-stone-50 font-semibold sm:font-bold p-4 transition-colors">Contact</a>
          </li>
        </ul>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="ml-4 p-2 rounded-full bg-cyan-100 dark:bg-gray-800 hover:bg-cyan-200 dark:hover:bg-gray-700 border border-cyan-300 dark:border-cyan-400 shadow-md transition-colors"
        >
          {theme === 'light' ? (
            <MoonIcon />
          ) : (
            <span className="text-cyan-400">
              <SunIcon />
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
