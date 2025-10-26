import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Services } from "../components/Services";
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
