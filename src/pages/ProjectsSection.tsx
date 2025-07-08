import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import 'swiper/css';
import 'swiper/css/navigation';
import { BsHandIndex } from "react-icons/bs";

interface Project {
  title: string;
  desc: string;
  screenshots: string[];
}

const devProjects: Project[] = [
  {
    title: "SMA ERP",
    desc: "Comprehensive dashboard with analytics and queue management system for streamlined operations.",
    screenshots: ["/SMA ERP/Dashboard.png", "/SMA ERP/dashboardanalytics.png",  "/SMA ERP/queuemanagement.png"],
  },
  {
    title: "SMA Inventory Management Module",
    desc: "Smart inventory tracking with supplier linking and emailing feature, restocking feature, and purchase oprder, quotation, reports.",
    screenshots: ["/Inventory Management System/Item Inventory.png", "/Inventory Management System/Add Item.png" ],
  },
  {
    title: "Sugar and Molasses Inventory Module",
    desc: "Tracks sugar and molasses inflow/outflow with real-time stock updates and analytics.",
    screenshots: ["/port1.jpg", "/port2.jpg"],
  },
  {
    title: "Sugar Haulers Incentives Report",
    desc: "Automated generation of hauling incentive reports based on delivery and log data.",
    screenshots: ["/port1.jpg", "/port2.jpg"],
  },
  {
    title: "Student Information System - BNHS",
    desc: "Manages student records, grading, SF1–SF10 reports, and enrollment workflows.",
    screenshots: ["/port1.jpg", "/port2.jpg"],
  },
];

const designProjects: Project[] = [
  {
    title: "UI Redesign",
    desc: "Figma revamp of admin dashboard with better UX flows.",
    screenshots: ["/design1.jpg", "/design2.jpg"],
  },
  {
    title: "Landing Page Concept",
    desc: "Flat design + animation concept for a modern startup.",
    screenshots: ["/design3.jpg", "/design4.jpg"],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 dark:from-[#2c2724] dark:via-[#413530] dark:to-[#080707] px-6 py-24"
    >
      <div className="max-w-6xl mx-auto space-y-28">
        {/* Web & Desktop Development */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h3 className="text-center text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-black dark:from-[#f4f4f4] dark:via-[#aaa] dark:to-[#f4f4f4] leading-tight pb-1">
          Web & Desktop Development
        </h3>
          <Swiper spaceBetween={20} slidesPerView={1.1} breakpoints={{ 768: { slidesPerView: 2.2 } }}>
            {devProjects.map((project, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="transition-transform duration-300 bg-white dark:bg-[#131212]/90 p-6 rounded-2xl shadow-xl hover:shadow-2xl flex flex-col h-full border border-gray-200 dark:border-[#3a3a3a]"
                >
                  <h4 className="text-2xl font-semibold mb-2 text-black dark:text-[#E5E5E5]">{project.title}</h4>
                  <p className="text-gray-700 dark:text-[#B0B0B0] mb-4 leading-relaxed">{project.desc}</p>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-auto text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                  >
                    View Project →
                  </button>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Web Designing */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h3 className="text-center text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-black dark:from-[#f4f4f4] dark:via-[#aaa] dark:to-[#f4f4f4] leading-tight pb-1">
          Web Designing
        </h3>
          <Swiper spaceBetween={20} slidesPerView={1.1} breakpoints={{ 768: { slidesPerView: 2.2 } }}>
            {designProjects.map((project, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="transition-transform duration-300 bg-white dark:bg-[#131212]/90 p-6 rounded-2xl shadow-xl hover:shadow-2xl flex flex-col h-full border border-gray-200 dark:border-[#3a3a3a]"
                >
                  <h4 className="text-2xl font-semibold mb-2 text-black dark:text-[#E5E5E5]">{project.title}</h4>
                  <p className="text-gray-700 dark:text-[#B0B0B0] mb-4 leading-relaxed">{project.desc}</p>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-auto text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                  >
                    View Project →
                  </button>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Modal for viewing screenshots */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white dark:bg-[#1e1e1e] rounded-2xl p-8 max-w-6xl w-full relative shadow-2xl"
            >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-xl text-black dark:text-white bg-gray-200 dark:bg-[#2a2a2a] rounded-md px-3 py-1 shadow-md hover:text-red-500 hover:bg-gray-300 dark:hover:bg-[#3a3a3a] transition z-50"
              aria-label="Close"
            >
              ×
            </button>
              <h3 className="text-center text-3xl font-bold mb-4 text-black dark:text-white">
                {selectedProject.title}
              </h3>
              <p className="text-center mb-6 text-gray-700 dark:text-gray-300 text-lg">{selectedProject.desc}</p>

              <Swiper spaceBetween={10} slidesPerView={1}>
                {selectedProject.screenshots.map((src, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={src}
                      alt=""
                      className="rounded-xl shadow-lg w-full max-h-[600px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex justify-center items-center gap-2 mt-4 text-sm text-gray-500 dark:text-gray-400">
                <BsHandIndex className="text-lg animate-swipe mr-4" />
                <span className="animate-pulse">Swipe to view more</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
