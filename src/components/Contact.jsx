import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-6"> 
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
            <span className="text-cyan-400 font-mono text-2xl mr-2">05.</span> 
            Get In Touch
          </h2>
          <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
        </div>

        <div className="max-w-7xl">
          <div className="grid md:grid-cols-12 gap-12 items-start"> 
            <div className="md:col-span-7 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-200">
                Let's Build Something Together
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                I am currently open to new opportunities and my inbox is always ready for a new challenge. 
                Whether you have a specific project in mind, a question about my experience, or just 
                want to connect, feel free to reach out. I'll do my best to get back to you promptly!
              </p>
              
              <div className="pt-4">
                <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-4">Availability</p>
                <p className="text-slate-300">Currently based in Gurugram, India. Available for remote opportunities or local collaborations.</p>
              </div>
            </div> 
            <div className="md:col-span-5 space-y-4"> 
              <div className="group bg-[#112240] p-6 rounded-xl border border-slate-800 hover:border-cyan-400/30 transition-all duration-300">
                <p className="text-cyan-400 font-mono text-xs uppercase tracking-[0.2em] mb-2">Call Me Directly</p>
                <a href="tel:+916367035900" className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  +91 6367035900
                </a>
              </div> 
              <div className="group bg-[#112240] p-6 rounded-xl border border-slate-800 hover:border-cyan-400/30 transition-all duration-300">
                <p className="text-cyan-400 font-mono text-xs uppercase tracking-[0.2em] mb-2">Send an Email</p>
                <a href="mailto:nkjl1134@gmail.com" className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors break-all">
                  nkjl1134@gmail.com
                </a>
              </div> 
              <div className="group bg-[#112240] p-6 rounded-xl border border-slate-800 hover:border-cyan-400/30 transition-all duration-300">
                <p className="text-cyan-400 font-mono text-xs uppercase tracking-[0.2em] mb-2">Professional Network</p>
                <a 
                  href="https://www.linkedin.com/in/nitin-sharma-8a5312213" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;