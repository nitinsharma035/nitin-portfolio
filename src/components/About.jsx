import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-6"> 
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-cyan-400 font-mono text-2xl mr-2">01.</span> 
            About Me
          </h2>
          <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start"> 
          <div className="md:col-span-7 space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              Hello! I'm <span className="text-white font-semibold">Nitin Sharma</span>, an innovative <span className="text-cyan-400">Front-End Web Developer</span> with over 3+ years of experience in building responsive and user-friendly digital solutions. My expertise lies in high-performance web development using <span className="text-white">React.js</span>, <span className="text-white">Tailwind CSS</span>, and modern JavaScript.
            </p>
            
            <p>
              In my current role at <span className="text-cyan-400 italic">Being Ingenious Media</span>, I lead front-end initiatives to deliver scalable projects aligned with business goals. Previously, at <span className="text-white italic">Wi Thinkers</span>, I designed reusable components that accelerated feature delivery by 50% and reduced team development effort significantly.
            </p>

            <p>
              Beyond standard web development, I am passionate about <span className="text-white">UI/UX design</span>, web performance optimization, and integrating <span className="text-white">3D visualizations</span> using Three.js to enhance user engagement. I thrive on solving complex technical challenges with clean, efficient code.
            </p> 
            <div className="pt-4">
              <h4 className="text-white font-bold mb-3 flex items-center">
                <span className="text-cyan-400 mr-2 font-mono">04.1</span> Education
              </h4>
              <ul className="space-y-2 text-sm font-mono">
                <li><span className="text-cyan-400">▹</span> B.Tech, Institute of Engineering and Technology College Alwar Rajsthan 301001 (2018-2022)</li>
                <li><span className="text-cyan-400">▹</span> 12th PCM, Adharsh Vidya Peeth Ramgarh (Alwar) Rajasthan 301026.(2017)</li>
              </ul>
            </div>
          </div> 
          <div className="md:col-span-5">
            <div className="relative group"> 
              <div className="absolute -inset-4 border-2 border-cyan-400/20 rounded-xl -rotate-2 group-hover:rotate-0 transition-all duration-500"></div>
               
              <div className="relative bg-[#112240] p-8 rounded-xl border border-slate-800 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Overview</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-slate-700/50 pb-2">
                    <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">Location</span>
                    <span className="text-slate-200 text-sm font-medium">Gurugram, Haryana India</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700/50 pb-2">
                    <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">Experience</span>
                    <span className="text-slate-200 text-sm font-medium">4 Years</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700/50 pb-2">
                    <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">Specialization</span>
                    <span className="text-slate-200 text-sm font-medium text-right leading-tight">Front-End Developer</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700/50 pb-2">
                    <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">Performance</span>
                    <span className="text-slate-200 text-sm font-medium">90% Faster Loads</span>
                  </div>
                </div> 
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-[#0a192f] p-4 rounded-lg text-center border border-slate-800 group-hover:border-cyan-400/30 transition-colors">
                    <div className="text-2xl font-bold text-cyan-400">4+</div>
                    <div className="text-[9px] text-slate-400 uppercase tracking-widest mt-1">Years Working</div>
                  </div>
                  <div className="bg-[#0a192f] p-4 rounded-lg text-center border border-slate-800 group-hover:border-cyan-400/30 transition-colors">
                    <div className="text-2xl font-bold text-cyan-400">90%</div>
                    <div className="text-[9px] text-slate-400 uppercase tracking-widest mt-1">Faster Loads</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;