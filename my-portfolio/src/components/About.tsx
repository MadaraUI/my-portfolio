import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CodeIcon,
  SparklesIcon,
  RocketIcon,
  BracesIcon,
  TerminalIcon,
  GitBranchIcon,
  MapPinIcon,
  CalendarIcon,
  TrophyIcon,
  GraduationCapIcon,
  CircleIcon,
  PaletteIcon,
} from "lucide-react";
export function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const codeLines = [
    "class Developer {",
    "  constructor() {",
    '    this.passion = "coding";',
    "    this.creativity = Infinity;",
    "  }",
    "}",
  ];
  const journeySteps = [
    {
      year: "2025",
      title: "Associate UI/UX Engineer",
      company: "Archmage Solutions (pvt) Ltd.",
      description:
        "Leading development of scalable web applications using React, Next js and UI libraries and also developing mordern WordPress Websites.",
      icon: CodeIcon,
      color: "from-blue-500 to-pink-600",
    },
    {
      year: "2024",
      title: "Traineer UI/UX Designer",
      company: "Archmage Solutions (pvt) Ltd.",
      description:
        "Built responsive user interfaces and improved user experience for  web & mobile apps.",
      icon: PaletteIcon,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2024",
      title: "Bsc.(Hons) Computer Science",
      company: "Kingston Unviersity, UK",
      description:
        "Specilizing in Web & Mobile App Development and Graduated with First Class Honours.",
      icon: GraduationCapIcon,
      color: "from-green-500 to-teal-500",
    },
    {
      year: "2023",
      title: "HND in Computing",
      company: "Esoft Uni, Colombo",
      description: "Passed with Distinction.",
      icon: GraduationCapIcon,
      color: "from-green-500 to-teal-500",
    },
  ];
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Main About Section */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Profile Image - Left Side */}
          <motion.div
            className="relative"
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-500 rounded-3xl blur-3xl opacity-40"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Image container */}
              <motion.div
                className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-blue-500/30 overflow-hidden shadow-2xl"
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(59, 130, 246, 0.5)",
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                {/* Terminal-style header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-blue-500/20">
                  <div className="flex gap-2">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-red-500"
                      whileHover={{
                        scale: 1.2,
                      }}
                    />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-yellow-500"
                      whileHover={{
                        scale: 1.2,
                      }}
                    />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-green-500"
                      whileHover={{
                        scale: 1.2,
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-400 font-mono ml-2">
                    profile.jpg
                  </span>
                </div>
                {/* Profile Image */}
                <div className="relative aspect-square p-8">
                  <motion.img
                    src="./profile-image.png"
                    alt="Profile"
                    className="lg:md:w-[500px] lg:md:h-[400px] object-cover rounded-2xl"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    viewport={{
                      once: true,
                    }}
                  />
                  {/* Floating badges */}
                  <motion.div
                    className="absolute -top-2 -right-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-3 shadow-lg shadow-blue-500/50"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <TrophyIcon className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-2 -left-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-3 shadow-lg shadow-purple-500/50"
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <CodeIcon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                {/* Info bar */}
                <div className="px-6 pb-6">
                  <motion.div
                    className="bg-slate-950/50 rounded-lg p-4 border border-blue-500/20"
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3,
                    }}
                    viewport={{
                      once: true,
                    }}
                  >
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-400 font-mono">
                          Colombo, Sri Lanka
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CircleIcon className="w-4 h-4 text-green-400" />
                        <span className="text-gray-400 font-mono">
                          Available
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* Bio - Right Side */}
          <div className="space-y-6">
            <motion.h2
              className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text "
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
              }}
              viewport={{
                once: true,
              }}
            >
              <span className="font-mono text-blue-400 text-2xl block mb-2">
                {"// "}
              </span>
              About Me
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
            >
              I'm Madara Perera. A passionate UI/UX Engineer with 1 and 10
              months of experience creating digital solutions that bridge the
              gap between functionality and aesthetics. I believe in the power
              of clean code, intuitive design, and meaningful user experiences.
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or enjoying the beautiful
              outdoors of worldwide. I'm always excited to take on new
              challenges and collaborate with amazing teams.
            </motion.p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                {
                  icon: SparklesIcon,
                  label: "Creative",
                  color: "from-yellow-400 to-orange-500",
                },
                {
                  icon: BracesIcon,
                  label: "Technical",
                  color: "from-blue-400 to-cyan-500",
                },
                {
                  icon: RocketIcon,
                  label: "Innovative",
                  color: "from-purple-400 to-pink-500",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="relative flex flex-col items-center p-4 bg-slate-800/50 rounded-xl border border-blue-500/20 backdrop-blur-sm overflow-hidden group cursor-pointer"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  <motion.div
                    animate={
                      hoveredCard === index
                        ? {
                            rotate: 360,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.6,
                    }}
                  >
                    <item.icon className="w-8 h-8 text-blue-400 mb-2" />
                  </motion.div>
                  <span className="text-sm text-gray-300 font-mono">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        {/* My Journey Section */}
        <motion.div
          className="mt-20"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="text-center mb-12">
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
              <TerminalIcon className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300 font-mono">
                $ git log --oneline
              </span>
            </motion.div>
            <motion.h2
              className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text "
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
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
              My Journey
            </motion.h2>
          </div>
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-yellow-500 opacity-30" />
            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.year}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  {/* Content */}
                  <motion.div
                    className="flex-1"
                    whileHover={{
                      scale: 1.02,
                    }}
                  >
                    <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-6 shadow-xl overflow-hidden group">
                      {/* Glow effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <motion.h3
                              className="text-xl font-bold text-white mb-1"
                              whileHover={{
                                x: 5,
                              }}
                            >
                              {step.title}
                            </motion.h3>
                            <p className="text-blue-400 font-mono text-sm">
                              {step.company}
                            </p>
                          </div>
                          <motion.span
                            className={`px-3 py-1 bg-gradient-to-r ${step.color} rounded-full text-white font-mono text-sm font-bold shadow-lg`}
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                            }}
                          >
                            {step.year}
                          </motion.span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  {/* Center icon */}
                  <motion.div
                    className={`relative flex-shrink-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg z-10`}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(59, 130, 246, 0.3)",
                          "0 0 40px rgba(59, 130, 246, 0.6)",
                          "0 0 20px rgba(59, 130, 246, 0.3)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
                  {/* Spacer for alternating layout */}
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
