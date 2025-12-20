import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaPaperPlane } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope className="w-6 h-6 text-cyan-400" />,
    label: "Email",
    value: "kaveen@example.com",
  },
  {
    icon: <FaPhoneAlt className="w-6 h-6 text-cyan-400" />,
    label: "Phone",
    value: "+94 77 123 4567",
  },
  {
    icon: <FaMapMarkerAlt className="w-6 h-6 text-cyan-400" />,
    label: "Location",
    value: "Colombo, Sri Lanka",
  },
];

const socialLinks = [
  { icon: <FaFacebookF />, url: "https://facebook.com/yourusername", label: "Facebook" },
  { icon: <FaTwitter />, url: "https://twitter.com/yourusername", label: "Twitter" },
  { icon: <FaInstagram />, url: "https://instagram.com/yourusername", label: "Instagram" },
  { icon: <FaLinkedinIn />, url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: <FaGithub />, url: "https://github.com/yourusername", label: "GitHub" },
];

const Contact = () => (
  <section className="w-full min-h-screen bg-white dark:bg-gradient-to-r dark:from-black dark:to-[#1f2833] transition-colors flex items-center justify-center py-16 px-4">
    <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-transparent">
      {/* Left Side */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 dark:text-cyan-300 mb-4">Let's Start a Conversation</h2>
        <p className="text-blue-900/80 dark:text-gray-300 mb-8 text-base sm:text-lg">
          Feel free to reach out for collaborations, freelance work, or just a friendly chat. I’m always open to new opportunities and connections!
        </p>
        <div className="space-y-6 mb-8">
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-blue-50 dark:bg-[#23272f] rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/30">
                {info.icon}
              </div>
              <div>
                <div className="text-base font-semibold text-blue-900 dark:text-cyan-300">{info.label}</div>
                <div className="text-sm text-blue-900/80 dark:text-gray-300">{info.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="text-blue-900 dark:text-cyan-300 font-semibold mb-3">Follow Me</div>
          <div className="flex gap-3">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 text-cyan-100 dark:bg-[#23272f] dark:text-cyan-400 hover:bg-cyan-400 hover:text-blue-900 dark:hover:bg-cyan-400 dark:hover:text-black transition-colors shadow-md"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Right Side - Contact Form */}
      <div className="flex flex-col justify-center bg-blue-50 dark:bg-[#23272f] rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-blue-900 dark:text-cyan-300 mb-6">Send Message</h3>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Name"
            className="rounded-lg px-4 py-3 bg-white dark:bg-[#181e29] text-blue-900 dark:text-white border border-cyan-200 dark:border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg px-4 py-3 bg-white dark:bg-[#181e29] text-blue-900 dark:text-white border border-cyan-200 dark:border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            rows={5}
            placeholder="Message"
            className="rounded-lg px-4 py-3 bg-white dark:bg-[#181e29] text-blue-900 dark:text-white border border-cyan-200 dark:border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-cyan-400 text-blue-900 font-bold px-6 py-3 rounded-lg shadow hover:bg-cyan-300 transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <FaPaperPlane className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;