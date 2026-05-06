import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-[#0a192f]/95 shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center"> 
        <a href="#hero" className="text-2xl font-bold text-white tracking-tighter z-[110]">
          Nitin <span className="text-cyan-400">Sharma</span>
        </a> 
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors group relative">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
          <li>
            <a href="/assets/Resume.pdf" target="_blank" rel="noreferrer" className="ml-4 px-5 py-2 border border-cyan-400 text-cyan-400 text-xs font-mono rounded hover:bg-cyan-400/10 transition-all">
              Download Resume
            </a>
          </li>
        </ul> 
        <button 
          className="md:hidden text-cyan-400 z-[110] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button> 
        <div className={`fixed inset-y-0 right-0 w-[75%] bg-[#112240] z-[105] flex flex-col p-10 pt-32 transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100 shadow-[-10px_0_30px_-15px_rgba(2,12,27,0.7)]' : 'translate-x-full opacity-0'
        }`}>
          <ul className="flex flex-col items-start gap-8">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full">
                <a 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-gray-300 hover:text-cyan-400 block w-full transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="mt-6">
              <a 
                href="/assets/Resume.pdf" 
                target="_blank" 
                rel="noreferrer" 
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-mono rounded inline-block"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div> 
        {isOpen && (
          <div 
            className="fixed inset-0 bg-[#020c1b]/60 backdrop-blur-sm z-[104] md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;