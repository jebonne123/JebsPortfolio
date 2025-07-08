import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import 'swiper/css';
import 'swiper/css/navigation';
import { BsHandIndex } from "react-icons/bs";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
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
    desc: "Smart inventory tracking with supplier linking, automated restocking, emailing, purchase orders, quotations, and report generation.",
    screenshots: ["/Inventory Management System/Item Inventory.png", "/Inventory Management System/Add Item.png",  "/Inventory Management System/item suppliers.png",
     "/Inventory Management System/emailing suppliers.png",  "/Inventory Management System/sending email.png",  "/Inventory Management System/Add Item.png",
     "/Inventory Management System/item requested.png",  "/Inventory Management System/requesting an item.png",  "/Inventory Management System/release item page.png",
     "/Inventory Management System/material acceptance report sample.png"
    ],
  },
  {
    title: "Sugar and Molasses Inventory Module",
    desc: "Tracks sugar and molasses inflow/outflow with real-time stock updates and analytics.",
    screenshots: ["/Sugar and Molasses Inventory/Inventory.png", "/Sugar and Molasses Inventory/trader purchase.png"],
  },
  {
    title: "Sugar Haulers Incentives Report",
    desc: "Automated generation of hauling incentive reports based on delivery and log data.",
    screenshots: ["/Hauler Incentives Report/Hauler incenctives viewing.png", "/Hauler Incentives Report/hauler incentives report print.png"],
  },
  {
    title: "Student Information System - BNHS",
    desc: "Manages student records, grading, SF1–SF10 reports, and enrollment workflows.",
    screenshots: ["/Balo-i SIS/login.png", "/Balo-i SIS/loging in.png","/Balo-i SIS/super admin dashboard.png", "/Balo-i SIS/enrollees.png", 
      "/Balo-i SIS/enrollees2.png", "/Balo-i SIS/student details.png", "/Balo-i SIS/student details2.png",
      "/Balo-i SIS/student grade input.png", "/Balo-i SIS/super admin dashboard.png", "/Balo-i SIS/Reports.png", "/Balo-i SIS/settings.png", 
      "/Balo-i SIS/student enrollment.png",
    ],
  },
  {
    title: "Loan Management System",
    desc: "A system for managing loan applications, approvals, payments, and balances.",
    screenshots: ["/port1.jpg", "/port2.jpg"],
  },
  {
    title: "Chatmail",
    desc: "A real-time messaging and email platform combined into one seamless interface.",
    screenshots: ["/port1.jpg", "/port2.jpg"],
  },
  {
    title: "Hirehub",
    desc: "A freelancing platform for job posting, bidding, and secure hiring.",
    screenshots: ["/port1.jpg", "/port2.jpg"],
  },
];

const designProjects: Project[] = [
  {
    title: "Bulk Rename Utility",
    desc: "Redesigned the UI for a file renaming tool with a cleaner, more intuitive interface.",
    screenshots: ["/Bulk rename Utility/Whole.png", "/Bulk rename Utility/File.png", "/Bulk rename Utility/file 2.png"],
  },
  {
    title: "E-Para",
    desc: "Mobile app design for a bus tracking system in Misamis Oriental.",
    screenshots: ["/E-Para/Get started.png", "/E-Para/Sign in.png", "/E-Para/sign in 2.png", "/E-Para/whole.png",
      "/E-Para/create acc.png", "/E-Para/map.png", "/E-Para/map 2.png", "/E-Para/SettingsUI.png",
     ],
  },
  {
    title: "Hey App",
    desc: "Mobile interface designed to aid communication for the deaf and mute community.",
    screenshots: ["/Hey App/Get started.png", "/Hey App/Whole.png", "/Hey App/Sign in.png", "/Hey App/Sign up.png",
      "/Hey App/hand gesture.png", "/Hey App/hand is visible.png", "/Hey App/home page.png",
      "/Hey App/account.png", "/Hey App/settings.png",
    ],
  },
  {
    title: "Pedro Herraras Peanut Butter",
    desc: "Mobile POS design for a peanut butter business, featuring sales and inventory tracking.",
    screenshots: ["/Pedro Herraras Peanut Butter/landing page.png", "/Pedro Herraras Peanut Butter/Whole.png", 
      "/Pedro Herraras Peanut Butter/info.png", "/Pedro Herraras Peanut Butter/confirm and pay.png",
      "/Pedro Herraras Peanut Butter/confirm order.png",
    ],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 dark:from-[#2c2724] dark:via-[#413530] dark:to-[#080707] px-6 py-24"
    >
    <div className="max-w-6xl mx-auto space-y-20">
        {/* Web & Desktop Development */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-center text-3xl md:text-4xl font-extrabold mb-4 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-black dark:from-[#f4f4f4] dark:via-[#aaa] dark:to-[#f4f4f4] leading-tight">
            Web & Desktop Development
          </h3>

        <Swiper spaceBetween={20} slidesPerView={1.1} breakpoints={{ 768: { slidesPerView: 2.2 } }}>
          {devProjects.map((project, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="transition-transform duration-300 bg-white dark:bg-[#131212]/90 p-4 md:p-6 rounded-2xl shadow-xl hover:shadow-2xl flex flex-col h-full border border-gray-200 dark:border-[#3a3a3a]"
              >
                <img
                  src={project.screenshots[0]}
                  alt="preview"
                  className="rounded-lg mb-3 w-full h-36 md:h-40 object-cover shadow"
                />
                <h4 className="text-xl font-semibold mb-2 text-black dark:text-[#E5E5E5]">{project.title}</h4>
                <p className="text-gray-700 dark:text-[#B0B0B0] mb-4 leading-relaxed text-sm">{project.desc}</p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-auto text-indigo-600 dark:text-indigo-400 font-semibold hover:underline text-sm"
                >
                  View Project →
                </button>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
          <div className="flex justify-center items-center gap-2 mt-4 text-gray-600 dark:text-gray-400 text-xs md:text-sm">
            <BsHandIndex className="text-lg animate-swipe mr-4" />
          <span className="animate-pulse">Swipe to explore projects</span>
        </div>
      </motion.div>

      {/* 👇 Divider between sections */}
      <div className="relative my-16">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-gray-600" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white dark:bg-[#131212] px-4 text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-widest uppercase">
            Next Section
          </span>
        </div>
      </div>


      {/* Web Designing */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h3 className="text-center text-3xl md:text-4xl font-extrabold mb-4 pb-1  text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-black dark:from-[#f4f4f4] dark:via-[#aaa] dark:to-[#f4f4f4] leading-tight">
          Web Designing
        </h3>
        <Swiper spaceBetween={20} slidesPerView={1.1} breakpoints={{ 768: { slidesPerView: 2.2 } }}>
          {designProjects.map((project, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="transition-transform duration-300 bg-white dark:bg-[#131212]/90 p-4 md:p-6 rounded-2xl shadow-xl hover:shadow-2xl flex flex-col h-full border border-gray-200 dark:border-[#3a3a3a]"
              >
                <img
                  src={project.screenshots[0]}
                  alt="preview"
                  className="rounded-lg mb-3 w-full h-36 md:h-40 object-cover shadow"
                />
                <h4 className="text-xl font-semibold mb-2 text-black dark:text-[#E5E5E5]">{project.title}</h4>
                <p className="text-gray-700 dark:text-[#B0B0B0] mb-4 leading-relaxed text-sm">{project.desc}</p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-auto text-indigo-600 dark:text-indigo-400 font-semibold hover:underline text-sm"
                >
                  View Project →
                </button>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
          <div className="flex justify-center items-center gap-2 mt-4 text-gray-600 dark:text-gray-400 text-xs md:text-sm">
          <BsHandIndex className="text-lg animate-swipe mr-4" />
          <span className="animate-pulse">Swipe to explore designs</span>
        </div>

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
                      alt={`Screenshot ${i + 1}`}
                      className="rounded-xl shadow-lg max-w-full max-h-[80vh] object-contain mx-auto"
                      onClick={() => setLightboxIndex(i)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {lightboxIndex !== null && (
                <Lightbox
                  open
                  index={lightboxIndex}
                  close={() => setLightboxIndex(null)}
                  slides={selectedProject.screenshots.map((src) => ({ src }))}
                  render={{ buttonClose: () => null }} // Optional: hide default close button
                />
              )}

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
