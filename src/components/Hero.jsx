import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-20 pb-16 min-h-screen flex items-center bg-[#0a192f] overflow-hidden">  
      <div className="absolute inset-0 opacity-5 [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10"> 
         
        <div className="md:col-span-7 space-y-6">
          <p className="text-cyan-400 font-mono text-lg tracking-[0.2em]">FRONTEND WEB DEVELOPER</p>
          <h1 className="text-5xl md:text-8xl text-white tracking-tighter leading-none font-bold">
            Nitin <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Sharma</span>
          </h1>
          <p className="max-w-xl text-lg text-slate-400 leading-relaxed border-l-4 border-cyan-500 pl-6 py-2">
            Innovative Front-End Web Developer with 3+ years of experience in building responsive, user-friendly applications. I specialize in React.js and modern animations to craft immersive, high-performance web experiences.
          </p>
          
          <div className="pt-6 flex gap-4"> 
            <button className="px-8 py-4 bg-cyan-500 text-[#0a192f] font-bold rounded shadow-lg shadow-cyan-500/20 hover:-translate-y-1 transition-all">
              <a href="/assets/Resume.pdf" download className="flex items-center">
                Download CV
              </a>
            </button> 
            <button className="px-8 py-4 border border-slate-700 text-white font-medium rounded hover:bg-slate-800 transition-all">
              <a href="tel:+916367035900">Let's Talk</a>
            </button>
          </div>
        </div>  
        <div className="md:col-span-5 flex justify-center items-center mt-16 md:mt-0">
          <div className="relative w-72 h-72 md:w-80 md:h-80 group">  
            <div className="absolute inset-0 border-2 border-cyan-400 translate-x-4 translate-y-4 rounded-lg group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              
            <div className="relative z-10 w-full h-full bg-cyan-600 rounded-lg overflow-hidden border-2 border-cyan-400 shadow-2xl">
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-cyan-600 to-blue-800">
                <img 
                  src="/assets/profile.png" 
                  alt="Nitin Sharma Profile" 
                  className="w-full h-full object-cover"
                />
              </div>  
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;