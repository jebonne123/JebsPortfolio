import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '.././index.css';
import { SiVuedotjs, SiTailwindcss, SiNestjs, SiMongodb, SiMysql, SiReact, SiDotnet, SiExpress, SiBootstrap, SiElectron} from 'react-icons/si';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGitlab, SiBitbucket, SiGithub, SiFigma } from 'react-icons/si';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Homepage: React.FC = () => {
  const [active, setActive] = useState<string>('home');
  const [theme, setTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'dark'
  );
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white text-black dark:bg-[#080707] dark:text-[#E5E5E5] font-sans scroll-smooth min-h-screen w-screen transition-colors duration-300">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-white dark:bg-[#080707]/90 backdrop-blur-sm shadow-md dark:shadow-[#2c2724]/20 shadow-black/10 z-50"
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo section */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-black dark:text-[#E5E5E5]"
          >
            <img
              src="/briefcase.png"
              alt="Icon"
              className="w-6 h-6 object-contain mr-3"
            />
            <span>Jebs</span>
            {/* Theme toggle button beside Jebs on mobile */}
            <button
              onClick={toggleTheme}
              className="md:hidden text-xl p-2 border rounded-full border-black dark:border-[#E5E5E5] hover:bg-black dark:hover:bg-[#E5E5E5] hover:text-white dark:hover:text-[#080707] transition ml-2"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <FiSun className="text-yellow-400" />
              ) : (
                <FiMoon className="text-[#efefef]" />
              )}
            </button>
          </motion.h1>

          {/* Right section (nav links + toggle) */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="text-xl p-2 border rounded-full border-black dark:border-[#E5E5E5] hover:bg-black dark:hover:bg-[#E5E5E5] hover:text-white dark:hover:text-[#080707] transition"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <FiSun className="text-yellow-400" />
              ) : (
                <FiMoon className="text-[#efefef]" />
              )}
            </button>

            <ul className="flex gap-6">
              {sections.map((s) => (
                <motion.li
                  key={s.id}
                  whileHover={{ scale: 1.1 }}
                  className={`cursor-pointer text-lg transition-colors ${
                    active === s.id
                      ? 'text-black dark:text-[#E5E5E5] border-b-2 border-black dark:border-[#E5E5E5]'
                      : 'text-gray-700 dark:text-[#B0B0B0] hover:text-black dark:hover:text-[#E5E5E5]'
                  }`}
                  onClick={() => scrollTo(s.id)}
                >
                  {s.label}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-2xl p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-[#080707]/90 backdrop-blur-sm px-6 py-4 border-t border-gray-300 dark:border-[#413530]"
          >
            <ul className="flex flex-col gap-4">
              {sections.map((s) => (
                <motion.li
                  key={s.id}
                  whileHover={{ scale: 1.05 }}
                  className={`cursor-pointer text-lg transition-colors ${
                    active === s.id
                      ? 'text-black dark:text-[#E5E5E5] border-l-2 border-black dark:border-[#E5E5E5]'
                      : 'text-gray-700 dark:text-[#B0B0B0] hover:text-black dark:hover:text-[#E5E5E5]'
                  }`}
                  onClick={() => scrollTo(s.id)}
                >
                  {s.label}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.nav>

      <main className="pt-24">
        {/* Hero */}
        <section
          id="home"
          className="h-screen w-screen flex items-center justify-center text-center bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-[#080707] dark:via-[#131212] dark:to-[#1e1b19] px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <motion.img
              src="/Profile.png"
              alt="Jebonne"
              className="w-36 h-44 md:w-64 md:h-80 rounded-full object-cover object-top border-4 border-black dark:border-[#E5E5E5] shadow-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />

            <h2 className="text-5xl md:text-7xl font-extrabold mb-4 text-black dark:text-[#E5E5E5] tracking-tight">
              Hi, I'm Jebonne
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-700 dark:text-[#B0B0B0] mb-6"
            >
              Desktop and Web Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-4 text-lg md:text-xl mb-8 text-gray-700 dark:text-[#B0B0B0]"
            >
              <span className="flex items-center gap-2">
                <SiElectron className="text-[#4fd3eb]" /> Electron
              </span>

              <span className="flex items-center gap-2">
                <SiDotnet className="text-purple-600" /> Visual Basic
              </span>

              <span className="flex items-center gap-2">
                <SiDotnet className="text-purple-600" /> C#
              </span>

              <span className="text-gray-500 dark:text-gray-400 text-xl">|</span>

              <span className="flex items-center gap-2">
                <SiReact className="text-[#61DAFB]" /> React
              </span>

              <span className="flex items-center gap-2">
                <SiVuedotjs className="text-green-500" /> Vue
              </span>

              <span className="flex items-center gap-2">
                <SiTailwindcss className="text-sky-400" /> Tailwind
              </span>

              <span className="flex items-center gap-2">
                <SiBootstrap className="text-[#7952B3]" /> Bootstrap
              </span>

              <span className="text-gray-500 dark:text-gray-400 text-xl">|</span>

              <span className="flex items-center gap-2">
                <SiNestjs className="text-red-600" /> NestJS
              </span>

              <span className="flex items-center gap-2">
                <SiExpress className="text-gray-800 dark:text-gray-200" /> Express
              </span>

              <span className="text-gray-500 dark:text-gray-400 text-xl">|</span>

              <span className="flex items-center gap-2">
                <SiMongodb className="text-green-600" /> MongoDB
              </span>

              <span className="flex items-center gap-2">
                <SiMysql className="text-blue-400" /> MySQL
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-4 text-lg md:text-xl mb-8 text-gray-700 dark:text-[#B0B0B0]"
            >

              <span className="flex items-center gap-2">
                <SiFigma className="text-[#F24E1E]" /> Figma
              </span>

              <span className="text-gray-500 dark:text-gray-400 text-xl">|</span>

              <span className="flex items-center gap-2">
                <SiGitlab className="text-[#FC6D26]" /> GitLab
              </span>

              <span className="flex items-center gap-2">
                <SiBitbucket className="text-[#205081]" /> Bitbucket
              </span>

              <span className="flex items-center gap-2">
                <SiGithub className="text-black dark:text-white" /> GitHub
              </span>
            </motion.p>


            <motion.div
              className="flex justify-center gap-6 text-3xl mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a href="https://github.com/jebonne123" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-gray-600 hover:text-black dark:text-[#6e6e6e] dark:hover:text-white transition-colors"
                >
                  <FaGithub />
                </motion.div>
              </a>
              <a href="https://www.linkedin.com/in/elvi%C3%B1a-jebonne-t-b13018276/" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-blue-700 dark:text-[#0077B5] hover:text-black dark:hover:text-white transition-colors"
                >
                  <FaLinkedin />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* About */}
        <section
          id="about"
          className="min-h-screen w-screen flex items-center bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 dark:from-[#1e1b19] dark:via-[#2c2724] dark:to-[#413530] px-6"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-8 text-black dark:text-[#E5E5E5]"
            >
              About Me
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-gray-700 dark:text-[#B0B0B0]"
            >
              I'm Jebonne, a passionate full-stack developer with a strong foundation in both web and desktop application development.

              <br /><br />

              <strong>For web development</strong>, I work extensively with modern technologies such as <span className="font-medium">React, Vue, Tailwind CSS, Bootstrap, Node.js, Express, and NestJS</span> to build scalable, responsive, and high-performance applications.

              <br /><br />

              <strong>For desktop development</strong>, I specialize in <span className="font-medium">C# with WinForms, WPF, and Blazor</span> for robust .NET-based applications, and leverage <span className="font-medium">Electron</span> to create cross-platform desktop apps using web technologies.

              <br /><br />

              I actively use version control systems like <span className="font-medium">GitHub, GitLab, and Bitbucket</span> to manage codebases, collaborate with teams, and maintain clean development workflows across all my projects.

              <br /><br />

              Whether it's designing elegant UIs or engineering solid backend systems, I’m committed to delivering clean, maintainable, and impactful software experiences.
            </motion.p>

          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="min-h-screen w-screen flex items-center bg-gradient-to-br from-gray-300 via-gray-400 to-gray-200 dark:from-[#2c2724] dark:via-[#413530] dark:to-[#080707] px-6"
        >
          <div className="max-w-5xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12 text-black dark:text-[#E5E5E5]"
            >
              Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Project 1', desc: 'A dynamic web application built with React and Tailwind CSS.' },
                { title: 'Project 2', desc: 'A scalable backend solution using Node.js and NestJS.' },
                { title: 'Project 3', desc: 'A full-stack application integrating modern front-end and back-end technologies.' },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-[#131212]/80 p-6 rounded-xl shadow-lg hover:shadow-md dark:hover:shadow-[#E5E5E5]/20 transition-shadow"
                >
                  <h4 className="text-xl font-semibold mb-3 text-black dark:text-[#E5E5E5]">{project.title}</h4>
                  <p className="text-gray-700 dark:text-[#B0B0B0] mb-4">{project.desc}</p>
                  <a href="#" className="text-blue-600 dark:text-[#E5E5E5] hover:underline font-medium">
                    View Project →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="min-h-screen w-screen flex items-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-[#413530] dark:via-[#1e1b19] dark:to-[#080707] px-6"
        >
          <div className="max-w-5xl mx-auto w-full text-center">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 text-black dark:text-[#E5E5E5]"
            >
              Get in Touch
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg mb-12 text-gray-700 dark:text-[#B0B0B0]"
            >
              Whether you have a question, want to collaborate, or just want to connect—reach me through any of these:
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left justify-items-center"
            >
              <div className="flex items-center gap-3 bg-white dark:bg-[#1e1b19] shadow-md p-4 rounded-xl w-full max-w-xs hover:scale-[1.02] transition">
                <FiMail className="text-xl text-[#D14836]" />
                <a
                  href="mailto:jebonne12@gmail.com"
                  className="text-md font-medium  text-gray-800 dark:text-gray-300 hover:underline"
                >
                  jebonne12@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 bg-white dark:bg-[#1e1b19] shadow-md p-4 rounded-xl w-full max-w-xs hover:scale-[1.02] transition">
                <FiPhone className="text-xl text-green-600" />
                <a
                  href="tel:+639380251376"
                  className="text-md font-medium  text-gray-800 dark:text-gray-300 hover:underline"
                >
                  +63 9380251376
                </a>
              </div>

              <div className="flex items-center gap-3 bg-white dark:bg-[#1e1b19] shadow-md p-4 rounded-xl w-full max-w-xs hover:scale-[1.02] transition">
                <FaDiscord className="text-xl text-indigo-500" />
                <span className="text-md  text-gray-800 dark:text-gray-300">tarnished#7418</span>
              </div>

              <div className="flex items-center gap-3 bg-white dark:bg-[#1e1b19] shadow-md p-4 rounded-xl w-full max-w-xs hover:scale-[1.02] transition">
                <FaTelegramPlane className="text-xl text-sky-500" />
                <a href="https://t.me/@Jebonne" target="_blank" className="text-md text-gray-800 dark:text-gray-300 hover:underline">
                  @Jebonne
                </a>
              </div>

              <div className="flex items-center gap-3 bg-white dark:bg-[#1e1b19] shadow-md p-4 rounded-xl w-full max-w-xs hover:scale-[1.02] transition">
                <FaXTwitter className="text-xl text-black dark:text-white" />
                <a
                  href="https://x.com/Jebonne2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md font-medium text-gray-800 dark:text-gray-300 hover:underline"
                >
                  @Jebonne2
                </a>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              {/* <motion.a
                href="mailto:jebonne12@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-black text-white dark:bg-[#E5E5E5] dark:text-[#080707] rounded-lg hover:bg-gray-800 dark:hover:bg-[#D4D4D4] transition text-lg font-semibold"
              >
                Say Hello
              </motion.a> */}
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="text-center py-8 text-sm text-gray-600 dark:text-[#B0B0B0] border-t border-gray-300 dark:border-[#413530] bg-white dark:bg-[#080707]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          © {new Date().getFullYear()} Jebonne Elvina. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
};

export default Homepage;