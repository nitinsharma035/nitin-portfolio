import React from 'react';

const Skills = () => { 
  const skills = [
    { name: "React.js",  img: "/assets/react.png" },
    { name: "JavaScript", img: "/assets/js.png" },
    { name: "Tailwind CSS", img: "/assets/tailwind.png" }, 
    { name: "HTML5", img: "/assets/html.png" },
    { name: "CSS3",  img: "/assets/css-3.png" },
    { name: "GitHub", img: "/assets/github.png" },
    { name: "Bootstrap",  img: "/assets/bootstrap.png" },
    { name: "Framer Motion", img: "/assets/framer-motion.png" },
    { name: "Wordpress", img: "/assets/wordpress.png" },
    { name: "Shopify", img: "/assets/shopify.png" },
    { name: "Wix",  img: "/assets/wix.png" },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-cyan-400 font-mono text-2xl mr-2">02.</span> 
            Technical Skills
          </h2>
          <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group bg-[#112240] p-8 rounded-xl border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 flex flex-col items-center text-center shadow-lg"
            > 
              <div className="w-16 h-16 mb-6 flex items-center justify-center p-2 bg-[#0a192f] rounded-lg group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={skill.img} 
                  alt={skill.name} 
                  className="w-full h-full object-contain filter  "
                />
              </div>

              <h3 className="text-white font-bold text-lg mb-1">{skill.name}</h3>  
              <div className="mt-6 w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;