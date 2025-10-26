import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLinkIcon,
  GithubIcon,
  TerminalIcon,
  FolderIcon,
} from "lucide-react";

const projects = [
  {
    title: "JP Cimplex Project",
    description:
      "A sleek, responsive cinema-booking platform showcasing current and upcoming films with showtime listings and online ticketing capabilities, collaboratively developed with my development team to ensure a seamless user experience and optimized performance.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn ui",
      "Swipper.js",
      "Framer Motion",
    ],
    gradient: "from-yellow-500 to-black-500",
    category: "Dev",
    image: "/jp-cinplex.png",
    deployLink: "https://jpcineplex.com/", // <-- live project link
    githubLink: "https://github.com/yourusername/jp-cinplex", // <-- repo link
  },
  {
    title: "Portfolio Website",
    description:
      "A modern and responsive personal portfolio website designed to showcase projects, skills, and achievements with a clean, minimal UI. Built using contemporary web technologies to highlight creativity, professionalism, and a seamless browsing experience across devices.",
    tech: [
      "React.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Matiral UI",
    ],
    gradient: "from-blue-500 to-pink-500",
    category: "Dev",
    commits: "189",
    image: "/my-portfolio.png",
    deployLink: "https://myportfolio.vercel.app",
    githubLink: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Crafted Living Furniture Website",
    description:
      "This project presents a modern, responsive e-commerce website design for a premium furniture brand. Through a clean layout, rich imagery, and intuitive navigation, the platform showcases handcrafted furniture collections and emphasizes quality craftsmanship.",
    tech: ["Figma", "PS"],
    gradient: "from-green-500 to-brown-500",
    category: "UI/UX",
    image: "/furniture-project.png",
    deployLink: "https://dribbble.com/shots/26692859-Crafted-Living-Furniture",
    githubLink: "#",
  },
  {
    title: "Traveling App",
    description:
      "Designed in Figma, the project focuses on delivering a seamless travel-experience app from browsing destinations and comparing packages to managing bookings and itineraries with modern UI elements and a strong emphasis on usability across devices.",
    tech: ["Figma", "PS"],
    gradient: "from-blue-500 to-ash-500",
    category: "UI/UX",
    image: "/Frame 6.png",
    deployLink: "https://dribbble.com/shots/22140073-Traveling-App-UI-Design",
    githubLink: "#",
  },
  {
    title: "Round Table Project",
    description:
      "A dynamic, community-focused platform that showcases social service initiatives, member activities, and impact stories for one of Sri Lanka’s leading voluntary organizations.",
    tech: ["Wordpress", "Elementor", "Astra Theme", "PS"],
    gradient: "from-red-500 to-white-500",
    category: "Wordpress",
    image: "/Frame 7.jpg",
    deployLink: "https://rtsrilanka.com/home/",
    githubLink: "#",
  },
  {
    title: "House of Granite Project",
    description:
      "Developed to highlight product portfolios and streamline customer interactions, the platform supports multilingual content, export-compliance information, and integrated contact forms.",
    tech: ["Wordpress", "Elementor", "Astra Theme", "PS"],
    gradient: "from-black-500 to-ash-500",
    category: "Wordpress",
    image: "/Frame 8.jpg",
    deployLink: "https://demo.archmage.lk/hogexporters/",
    githubLink: "#",
  },
];

const categories = ["All", "UI/UX", "Dev", "Wordpress"];

export function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Binary background */}
      <div className="absolute inset-0 opacity-5 font-mono text-xs text-blue-400 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="whitespace-nowrap"
            animate={{ x: [0, -100] }}
            transition={{
              duration: 20 + i,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Array.from({ length: 100 })
              .map(() => (Math.random() > 0.5 ? "1" : "0"))
              .join(" ")}
          </motion.div>
        ))}
      </div>

      <div className="max-w-[1230px] mx-auto relative z-10">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FolderIcon className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300 font-mono">
              $ ls -la projects/
            </span>
          </motion.div>
          <span className="font-mono text-blue-400 text-2xl block mb-2">
            {"// "}
          </span>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text">
            Featured Projects
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-full font-semibold font-mono transition-all duration-300 ${
                activeTab === category
                  ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md shadow-blue-500/50"
                  : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-blue-500/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === category && "> "}
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                {/* Glow effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />

                {/* Card */}
                <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300 shadow-2xl overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover md:object-cover sm:object-contain"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    />
                  </div>

                  {/* Terminal header */}
                  <div className="flex items-center justify-between px-6 py-3 bg-slate-900/50 border-b border-blue-500/20">
                    <div className="flex items-center gap-2">
                      <TerminalIcon className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-gray-400 font-mono">
                        {project.title.toLowerCase().replace(/\s+/g, "-")}.tsx
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-white font-mono">
                      {hoveredProject === index && "> "}
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-300 border border-blue-500/30 font-mono"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.deployLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-mono text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLinkIcon className="w-4 h-4" />
                        <span>$ deploy</span>
                      </motion.a>
                      {/* 
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors font-mono text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>$ clone</span>
                      </motion.a> */}
                    </div>
                  </div>

                  {/* Progress bar */}
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${project.gradient}`}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
