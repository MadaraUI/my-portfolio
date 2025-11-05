import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  SendIcon,
  TerminalIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "lucide-react";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";
export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      // EmailJS configuration - Replace with your own credentials
      const serviceId = "service_9t2glwk";
      const templateId = "template_60am4ud";
      const publicKey = "tp6v92cACLFZbmyfK";
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };
  const socialLinks = [
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/MadaraUI",
    command: "git clone",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/madara-perera-12a7b7225/",
    command: "connect",
  },
  {
    icon: MailIcon,
    label: "Email",
    href: "mailto:madaraperera301@gmail.com",
    command: "mailto",
  },
  {
    icon: FaDribbble,
    label: "Dribbble",
    href: "https://dribbble.com/infinityUI", 
    command: "dribble",
  },
  {
    icon: FaBehance,
    label: "Behance",
    href: "https://www.behance.net/madaranirmani03", 
    command: "behance",
  },
];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Animated code background */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({
          length: 10,
        }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400 font-mono text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {"</>"}
          </motion.div>
        ))}
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-6"
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
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(59, 130, 246, 0.5)",
            }}
          >
            <TerminalIcon className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300 font-mono">
              $ npm run contact
            </span>
          </motion.div>
          <motion.h2
            className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text"
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
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
          >
            <span className="font-mono text-blue-400 text-2xl block mb-2">
              {"// "}
            </span>
            Let's Build Something Amazing Together
          </motion.h2>
        </motion.div>
        <motion.p
          className="text-center text-gray-300 mb-12 text-lg font-mono"
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
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
        >
          Have a project in mind? Let's collaborate
        </motion.p>
        <motion.div
          className="relative"
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
            delay: 0.3,
          }}
          viewport={{
            once: true,
          }}
        >
          {/* Glassmorphism card */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-yellow-500/20 rounded-3xl blur-2xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="relative bg-slate-800/30 backdrop-blur-xl rounded-3xl border border-blue-500/30 overflow-hidden shadow-2xl"
            whileHover={{
              borderColor: "rgba(59, 130, 246, 0.5)",
            }}
          >
            {/* Terminal header */}
            {/* <div className="flex items-center gap-2 px-6 py-3 bg-slate-900/50 border-b border-blue-500/20">
              <div className="flex gap-2">
                <motion.div className="w-3 h-3 rounded-full bg-red-500" whileHover={{
                scale: 1.2
              }} />
                <motion.div className="w-3 h-3 rounded-full bg-yellow-500" whileHover={{
                scale: 1.2
              }} />
                <motion.div className="w-3 h-3 rounded-full bg-green-500" whileHover={{
                scale: 1.2
              }} />
              </div>
              <span className="text-xs text-gray-400 font-mono ml-2">
                contact-form.tsx
              </span>
            </div> */}
            {/* <form ref={formRef} onSubmit={handleSubmit} className="p-8 space-y-6">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5
            }} viewport={{
              once: true
            }}>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                  <span className="text-blue-400">const</span> name = "
                  {focusedField === 'name' && <motion.span className="inline-block w-1 h-4 bg-blue-400 ml-1" animate={{
                  opacity: [1, 0]
                }} transition={{
                  duration: 0.8,
                  repeat: Infinity
                }} />}
                  "
                </label>
                <motion.input type="text" name="user_name" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors font-mono" placeholder="Your name" required whileFocus={{
                scale: 1.01,
                borderColor: 'rgba(59, 130, 246, 0.5)'
              }} />
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} viewport={{
              once: true
            }}>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                  <span className="text-blue-400">const</span> email = "
                  {focusedField === 'email' && <motion.span className="inline-block w-1 h-4 bg-blue-400 ml-1" animate={{
                  opacity: [1, 0]
                }} transition={{
                  duration: 0.8,
                  repeat: Infinity
                }} />}
                  "
                </label>
                <motion.input type="email" name="user_email" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors font-mono" placeholder="your.email@example.com" required whileFocus={{
                scale: 1.01,
                borderColor: 'rgba(59, 130, 246, 0.5)'
              }} />
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} viewport={{
              once: true
            }}>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                  <span className="text-blue-400">const</span> message = `
                  {focusedField === 'message' && <motion.span className="inline-block w-1 h-4 bg-blue-400 ml-1" animate={{
                  opacity: [1, 0]
                }} transition={{
                  duration: 0.8,
                  repeat: Infinity
                }} />}
                  `
                </label>
                <motion.textarea name="message" value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} rows={5} className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none font-mono" placeholder="Tell me about your project..." required whileFocus={{
                scale: 1.01,
                borderColor: 'rgba(59, 130, 246, 0.5)'
              }} />
              </motion.div>
              <motion.button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-lg font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 font-mono disabled:opacity-50" whileHover={!isSubmitting ? {
              scale: 1.02,
              boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)'
            } : {}} whileTap={!isSubmitting ? {
              scale: 0.98
            } : {}}>
                {isSubmitting ? <>
                    <motion.div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" animate={{
                  rotate: 360
                }} transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear'
                }} />
                    <span>$ sending...</span>
                  </> : <>
                    <SendIcon className="w-5 h-5" />
                    <span>$ submit --message</span>
                  </>}
              </motion.button>
            </form> */}
            {/* Success/Error Messages */}
            {/* <AnimatePresence>
              {submitStatus !== 'idle' && <motion.div className={`mx-8 mb-8 p-4 rounded-xl border ${submitStatus === 'success' ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'}`} initial={{
              opacity: 0,
              y: -20,
              scale: 0.9
            }} animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }} exit={{
              opacity: 0,
              y: -20,
              scale: 0.9
            }} transition={{
              duration: 0.3
            }}>
                  <div className="flex items-center gap-3">
                    {submitStatus === 'success' ? <>
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                        <p className="text-green-400 font-mono text-sm">
                          ✓ Message sent successfully! I'll get back to you
                          soon.
                        </p>
                      </> : <>
                        <XCircleIcon className="w-5 h-5 text-red-400" />
                        <p className="text-red-400 font-mono text-sm">
                          ✗ Failed to send message. Please try again.
                        </p>
                      </>}
                  </div>
                </motion.div>}
            </AnimatePresence> */}
          </motion.div>
        </motion.div>
        {/* Social links */}
        <motion.div
          className="flex justify-center gap-6 mt-12"
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
            delay: 0.5,
          }}
          viewport={{
            once: true,
          }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="relative w-14 h-14 flex items-center justify-center bg-slate-800/50 backdrop-blur-sm rounded-full border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden"
              whileHover={{
                scale: 1.15,
                y: -8,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
            >
              <social.icon className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors relative z-10" />
              <motion.div
                className="absolute inset-0 bg-blue-500/20"
                initial={{
                  scale: 0,
                }}
                whileHover={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.3,
                }}
              />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono text-gray-400 group-hover:text-blue-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                $ {social.command}
              </span>
            </motion.a>
          ))}
        </motion.div>
        {/* Footer */}
        <motion.div
          className="text-center mt-12 space-y-2"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.7,
          }}
          viewport={{
            once: true,
          }}
        >
          <p className="text-gray-500 font-mono text-sm">
            <span className="text-green-400">✓</span> © 2025 Madara Perera's
            Portfolio
          </p>
          <p className="text-gray-600 font-mono text-xs">
            <span className="text-blue-400">{"// "}</span>Crafted with passion
            and code
          </p>
        </motion.div>
      </div>
    </section>
  );
}
