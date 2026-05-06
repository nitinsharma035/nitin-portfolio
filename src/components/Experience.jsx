import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "BEING INGENIOUS MEDIA PRIVATE LIMITED",
      role: "Sr. Executive, Website Front End Developer",
      duration: "Aug. 2025 - Present",
      description: [
        "Leading front-end initiatives and managing website projects to deliver scalable digital solutions aligned with business objectives.",
        "Ensuring high-performance web development through expert command of HTML, CSS, JavaScript, and modern front-end frameworks.",
        "Focusing on UI/UX design, accessibility, and cross-browser compatibility to significantly enhance user experience.",
        "Collaborating with cross-functional teams and mentoring junior developers to foster a productive engineering environment."
      ]
    },
    {
      company: "WI THINKERS Pvt. Ltd.",
      role: "Front End Web Developer",
      duration: "Dec. 2023 - April 2025",
      description: [
        "Designed and implemented an extensible, reusable component architecture, reducing development effort and accelerating feature delivery by 50%.",
        "Optimized application performance, achieving a 30% reduction in load times through code-splitting and lazy-loading techniques.",
        "Improved user retention and enhanced offline capabilities by implementing intelligent caching strategies using Service Workers.",
        "Integrated interactive 3D visualizations using Three.js to enhance user engagement and data representation."
      ]
    },
    {
      company: "SEO Tech Experts Pvt. Ltd.",
      role: "Front End Web Developer",
      duration: "Aug. 2022 - June 2023",
      description: [
        "Enhanced user experience by implementing fluid layouts and responsive designs, resulting in a 30% increase in user engagement.",
        "Integrated payment gateway solutions, including Razorpay and PayU, to support secure and reliable online transactions.",
        "Implemented centralized API error handling to streamline error management and reduce repetitive engineering efforts across the team."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-6"> 
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-cyan-400 font-mono text-2xl mr-2">03.</span> 
            Professional Experience
          </h2>
          <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
               
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-[#0a192f] text-cyan-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -translate-x-1/2 transition-colors group-hover:border-cyan-400">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              </div> 
              <div className="w-[calc(100%-1rem)] md:w-[45%] bg-[#112240] p-6 rounded-xl border border-slate-800 hover:border-cyan-400/30 transition-all shadow-xl hover:shadow-cyan-900/10">
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.company}
                  </h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-cyan-400 font-mono text-sm">{exp.role}</p>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      {exp.duration}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-sm text-slate-400 flex items-start leading-relaxed text-left">
                      <span className="text-cyan-400 mr-2 mt-1.5 text-[10px]">▶</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;