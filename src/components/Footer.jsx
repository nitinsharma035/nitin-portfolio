import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 bg-[#0a192f] border-t border-slate-800/50">
            <div className="max-w-7xl mx-auto px-6"> 
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-12"> 
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white tracking-tighter">
                            Nitin <span className="text-cyan-400">Sharma</span>
                        </h2>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                            Front-End Web Developer specializing in building high-performance, responsive digital experiences.
                        </p>
                    </div> 
                    <div className="space-y-4">
                        <h3 className="text-white font-bold uppercase text-xs tracking-[0.2em]">Contact Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="mailto:nkjl1134@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-mono flex items-center gap-2">
                                    <span className="text-cyan-400 text-[10px]">▶</span> nkjl1134@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+916367035900" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-mono flex items-center gap-2">
                                    <span className="text-cyan-400 text-[10px]">▶</span> +91 6367035900
                                </a>
                            </li>
                        </ul>
                    </div> 
                    <div className="space-y-4">
                        <h3 className="text-white font-bold uppercase text-xs tracking-[0.2em]">Social Connect</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/in/nitin-sharma-8a5312213"
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 bg-[#112240] border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all rounded text-xs font-mono"
                            >
                                LinkedIn
                            </a>
                            <a href="https://github.com/nitinsharma035"
                                className="px-4 py-2 bg-[#112240] border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all rounded text-xs font-mono"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div> 
                <div className="pt-8 border-t border-slate-800/30 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-[10px] font-mono tracking-widest uppercase">
                        Designed & Developed by <span className="text-cyan-400">Nitin Sharma</span>
                    </p>
                    <p className="text-slate-600 text-[10px] font-mono">
                        © 2026 All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;