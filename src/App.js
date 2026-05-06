import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a192f] min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero /> 
        <About />
        <Skills />
        <Experience />
        <Project />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;