import React, { useState, Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CodeIcon } from "lucide-react";
const skills = [
  {
    name: "Next.js",
    color: "from-gray-700 to-black",
    code: "export default",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React",
    color: "from-cyan-400 to-blue-500",
    code: "<Component />",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    color: "from-teal-400 to-blue-500",
    code: 'className=""',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "TypeScript",
    color: "from-blue-600 to-blue-800",
    code: "type Props = {}",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Framer Motion",
    color: "from-purple-500 to-pink-500",
    code: "<motion.div />",
    logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
  },
  {
    name: "Shadcn UI",
    color: "from-slate-600 to-slate-800",
    code: "<Button />",
    logo: "https://ui.shadcn.com/apple-touch-icon.png",
  },
  {
    name: "Node.js",
    color: "from-green-500 to-green-700",
    code: 'require("http")',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    color: "from-green-600 to-green-800",
    code: "db.collection()",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Express.js",
    color: "from-gray-600 to-gray-800",
    code: 'app.get("/")',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "HTML",
    color: "from-orange-500 to-red-500",
    code: "<html>",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    color: "from-blue-500 to-cyan-500",
    code: ".style {}",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    color: "from-yellow-400 to-yellow-600",
    code: "const fn = () => {}",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "WordPress",
    color: "from-blue-600 to-blue-800",
    code: "add_action()",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  {
    name: "Figma",
    color: "from-purple-500 to-pink-500",
    code: "design.create()",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Adobe XD",
    color: "from-pink-500 to-purple-600",
    code: "artboard.new()",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
  },
  {
    name: "Photoshop",
    color: "from-blue-500 to-blue-700",
    code: "layer.edit()",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  },
];
export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({
          length: 20,
        }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-blue-500"
            style={{
              left: `${(i * 5) % 100}%`,
              height: "100%",
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
          >
            <CodeIcon className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300 font-mono">
              import skills from './toolkit'
            </span>
          </motion.div>
          {/* <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text ">
            Skills & Technologies
          </h2> */}

          <motion.h2
            className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text "
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
          >
            <span className="font-mono text-blue-400 text-2xl block mb-2">
              {"// "}
            </span>
            Skills & Technologies
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
          ></motion.p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative group"
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -10,
              }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <div
                className={`absolute -inset-1 bg-gradient-to-br ${skill.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
              />
              <div className="relative h-40 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center justify-center shadow-xl overflow-hidden p-6">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                {/* Loading bar animation */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${skill.color}`}
                  initial={{
                    width: "0%",
                  }}
                  whileInView={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                />
                {/* Logo */}
                <motion.img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-16 h-16 object-contain z-10 mb-3"
                  initial={{
                    scale: 0,
                    rotate: -180,
                  }}
                  whileInView={{
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                />
                {/* Name */}
                <h3 className="text-sm font-bold text-white z-10">
                  {skill.name}
                </h3>
                {/* Code snippet on hover */}
                <AnimatePresence>
                  {hoveredSkill === index && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm"
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <motion.code
                        className="text-sm text-blue-400 font-mono px-4 text-center"
                        initial={{
                          scale: 0.8,
                          y: 10,
                        }}
                        animate={{
                          scale: 1,
                          y: 0,
                        }}
                        exit={{
                          scale: 0.8,
                          y: 10,
                        }}
                      >
                        {skill.code}
                      </motion.code>
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Floating brackets */}
                <motion.div
                  className="absolute top-2 right-2 text-blue-400/30 font-mono text-xs"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  {"{ }"}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Console output */}
        <motion.div
          className="mt-12 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-sm text-gray-400 font-mono">Console</span>
          </div>
          <motion.p
            className="text-gray-300 font-mono text-sm"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            <span className="text-blue-400">{">"}</span> skills.map(skill {"=>"}{" "}
            console.log(skill))
            <br />
            <span className="text-green-400">✓</span> All technologies loaded
            successfully
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
