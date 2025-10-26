import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Code,
  Database,
  BriefcaseIcon,
  CheckCircleIcon,
} from "lucide-react";
const services = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful user experiences with modern design principles, user research, and prototyping.",
    icon: Palette,
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "Building responsive and interactive web applications using modern frameworks like React, Next.js, and Vue.js.",
    icon: Code,
    features: [
      "React/Next.js",
      "TypeScript",
      "Responsive Design",
      "Performance Optimization",
    ],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Full Stack Development",
    description:
      "Complete web application development with modern MERN stack, including database design and API development.",
    icon: Database,
    features: [
      "MERN Stack",
      "API Development",
      "Database Design",
      "Cloud Deployment",
    ],
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "WordPress Development",
    description:
      "Custom WordPress themes and plugins, e-commerce solutions, and content management system optimization.",
    icon: Code,
    features: [
      "Custom Themes",
      "Plugin Development",
      "WooCommerce",
      "SEO Optimization",
    ],
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "from-orange-500 to-red-500",
  },
];
export function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
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
            <BriefcaseIcon className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300 font-mono">
              services.map(service =&gt; ...)
            </span>
          </motion.div>
          <span className="font-mono text-blue-400 text-2xl block mb-2">
            {"// "}
          </span>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text">
            What I Offer
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </motion.div>
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
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
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
            >
              {/* Glow effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-br ${service.borderColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
              />
              {/* Card */}
              <motion.div
                className={`relative bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-blue-500/20 p-8 shadow-xl overflow-hidden h-full`}
                whileHover={{
                  y: -5,
                  borderColor: "rgba(59, 130, 246, 0.4)",
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${service.borderColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-3"
                        initial={{
                          opacity: 0,
                          x: -20,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + featureIndex * 0.1,
                        }}
                        viewport={{
                          once: true,
                        }}
                      >
                        <CheckCircleIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm font-mono">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  {/* Hover indicator */}
                  <motion.div
                    className="mt-6 pt-4 border-t border-blue-500/20"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: hoveredService === service.id ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <span className="text-blue-400 text-sm font-mono">
                      Learn more →
                    </span>
                  </motion.div>
                </div>
                {/* Decorative elements */}
                <motion.div
                  className="absolute top-4 right-4 text-blue-400/10 font-mono text-6xl font-bold"
                  animate={{
                    rotate: hoveredService === service.id ? 360 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  0{service.id}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        {/* Bottom CTA */}
        {/* <motion.div
          className="mt-16 text-center"
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
            delay: 0.4,
          }}
          viewport={{
            once: true,
          }}
        >
          <p className="text-gray-400 mb-6">Ready to start your project?</p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full text-lg font-semibold shadow-lg shadow-blue-500/50 overflow-hidden group relative"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)',
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
          > */}
        {/* <span className="relative z-10 font-mono">{'<GetInTouch />'}</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-blue-600"
              initial={{
                x: '-100%',
              }}
              whileHover={{
                x: '100%',
              }}
              transition={{
                duration: 0.5,
              }}
            />
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
}
