import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDownIcon, SparklesIcon, TerminalIcon } from "lucide-react";
export function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = 'console.log("Welcome to My Portfolio 👋 ");';
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);
  const floatingParticles = Array.from(
    {
      length: 20,
    },
    (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
    })
  );
  const codeSnippets = [
    "<div>",
    "{...}",
    "( )",
    "=>",
    "[ ]",
    "const",
    "function",
  ];
  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        opacity,
        scale,
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Floating code snippets */}
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={snippet}
            className="absolute text-blue-400/30 font-mono text-2xl font-bold"
            style={{
              left: `${(index * 15) % 90}%`,
              top: `${(index * 20) % 80}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {snippet}
          </motion.div>
        ))}
        {/* Floating particles */}
        {floatingParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-400/30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Terminal window */}
        <motion.div
          className="mb-8 mx-auto max-w-2xl"
          initial={{
            opacity: 0,
            y: -30,
            rotateX: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
          }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.div
            className="bg-slate-900/80 backdrop-blur-xl rounded-lg border border-blue-500/30 overflow-hidden"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 border-b border-blue-500/20">
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
              <span className="text-xs text-gray-400 ml-2">terminal.tsx</span>
            </div>
            <div className="p-4 font-mono text-sm text-left">
              <span className="text-blue-400">{typedText}</span>
              <motion.span
                className="inline-block w-2 h-4 bg-blue-400 ml-1"
                animate={{
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(59, 130, 246, 0.5)",
            }}
          >
            <TerminalIcon className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300 font-mono">$ whoami</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            {["Crafting", "Immersive", "Web", "Experiences"].map(
              (word, index) => (
                <motion.span
                  key={word}
                  className="inline-block bg-gradient-to-r from-white via-blue-200 to-yellow-400 bg-clip-text  mr-4"
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {word}
                </motion.span>
              )
            )}
          </h1>
        </motion.div>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 font-mono"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          whileHover={{
            scale: 1.02,
          }}
        >
          <span className="text-blue-400">const</span> developer = {"{"}
          <span className="text-yellow-400"> ui/ux</span>,{" "}
          <span className="text-yellow-400"> frontend</span>,{" "}
          <span className="text-yellow-400"> wordpress</span>,{" "}
          <span className="text-yellow-400"> mern</span> {"}"};
          {/* <span className="text-green-400">creative</span> {'}'}; */}
        </motion.p>
        <motion.button
          className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full text-lg font-semibold shadow-lg shadow-blue-500/50 overflow-hidden group"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 5px rgba(59, 130, 246, 0.6)",
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          <span className="relative z-10 font-mono">{"<ViewWork/>"}</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-blue-600"
            initial={{
              x: "-100%",
            }}
            whileHover={{
              x: "100%",
            }}
            transition={{
              duration: 0.5,
            }}
          />
        </motion.button>
      </div>
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        whileHover={{
          scale: 1.2,
        }}
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        {/* <ChevronDownIcon className="w-8 h-8 text-gray-400 items-center justify-center" /> */}
      </motion.div>
    </motion.section>
  );
}
