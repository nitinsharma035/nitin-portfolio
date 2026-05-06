import React, { useState } from 'react';

const Projects = () => { 
    const allProjects = [
        { title: "Being Ingenious media private limited", image: "/assets/bi.png", link: "https://beingingenious.in/" },
        { title: "Dhuali", image: "/assets/dhulai.png", link: "https://dhulai.in/" },
        { title: "Aditi Beauty School and Salon ", image: "/assets/aditi.png", link: "https://aditibeautyschool.in/" },
        { title: "Whats Hot Gurugram", image: "/assets/whg.png", link: "https://whatshotgurugram.in/" },
        { title: "Ageing With Ease", image: "/assets/awe.png", link: "https://ageingwithease.com/" },
        { title: "New Life Fabricators", image: "/assets/nlf.png", link: "https://newlifefabricators.com/" }, 
        { title: "Royal Offset", image: "/assets/royal.png", link: "https://royaloffset.co.in/" },
        { title: "CD International School", image: "/assets/cd.png", link: "https://cdschool.in/" },
        { title: "Ronsthali", image: "/assets/rons.png", link: "https://ronsthali.in/" },
        { title: "Stambhzestate", image: "/assets/stambh.png", link: "https://stambhzestate.com/" },
    ]; 
    const [visibleCount, setVisibleCount] = useState(6);

    const showMoreProjects = () => {
        setVisibleCount(prevCount => prevCount + 3);  
    };

    return (
        <section id="projects" className="py-24 bg-[#0a192f]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
                        <span className="text-cyan-400 font-mono text-2xl mr-2">04.</span>
                        Featured Projects
                    </h2>
                    <div className="h-[1px] bg-slate-700 w-full max-w-md"></div>
                </div> 
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {allProjects.slice(0, visibleCount).map((project, index) => (
                        <div key={index} className="group flex flex-col "> 
                            <div className="relative h-[450px] w-full overflow-hidden rounded-2xl border border-slate-800 bg-[#112240] transition-all duration-500 group-hover:border-cyan-400/50">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full transition-transform duration-[4000ms] ease-in-out transform translate-y-0 group-hover:-translate-y-[calc(100%-450px)]"
                                    style={{ objectPosition: 'top', objectFit: 'cover' }}
                                /> 
                                <div className="absolute inset-0 bg-[#0a192f]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <a href={project.link} target="_blank" rel="noreferrer"
                                        className="bg-cyan-500 text-[#0a192f] px-8 py-3 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
                                        View Website
                                    </a>
                                </div>
                            </div> 
                            <div className="mt-2">
                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors text-center justify-between items-center">
                                    {project.title}
                                   
                                </h3> 
                            </div>
                        </div>
                    ))}
                </div> 
                {visibleCount < allProjects.length && (
                    <div className="mt-20 text-center">
                        <button
                            onClick={showMoreProjects}
                            className="px-12 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                        >
                            Load More Projects
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
};

export default Projects;