
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowWhitCurve from '@/assets/icons/arrow_with_curve.svg'
import { ProjectItem } from '@/interfaces';
import ProjectList from '@/const/projects';

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const projectList: ProjectItem[] = ProjectList.filter(p => [3, 4, 5].includes(p.id))

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // const projects: ProjectItem[] = [
  //   {
  //     id: 1,
  //     title: "TOP 3 GLOBAL BANK",
  //     description: "Making sense of chaos with AI",
  //     image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop",
  //     tags: ["AI", "ANALYTICS"]
  //   },
  //   {
  //     id: 2,
  //     title: "FINTECH REVOLUTION",
  //     description: "Transforming digital payments worldwide",
  //     image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
  //     tags: ["BLOCKCHAIN", "PAYMENTS"]
  //   },
  //   {
  //     id: 3,
  //     title: "SMART CONTRACTS PLATFORM",
  //     description: "Decentralized finance infrastructure",
  //     image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
  //     tags: ["DEFI", "SMART CONTRACTS"]
  //   },
  //   {
  //     id: 4,
  //     title: "AI TRADING SYSTEM",
  //     description: "Automated trading with machine learning",
  //     image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
  //     tags: ["AI", "TRADING"]
  //   }
  // ];

  return (
    <section ref={containerRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-4">
            PROJECTS
          </h2>
        </div>
        
        <div className="relative">
          {projectList.map((project, index) => {
            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [0, +(index * 20)]
            );
            
            const scale = useTransform(
              scrollYProgress,
              [index * 0.25, (index + 1) * 0.25],
              [1, 0.9]
            );

            return (
              <motion.div
                key={project.id}
                style={{ 
                  y: index === 0 ? 0 : y,
                  scale,
                  zIndex: projectList.length + index
                }}
                className="sticky top-24 mb-8"
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="bg-[#222] rounded-2xl border border-gray-800 overflow-hidden hover:border-[#32e4b6] transition-colors duration-300">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-80 lg:h-96">
                      <img 
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                    </div>
                    
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h3
                        className="mb-8"
                        style={{
                          color: "#fff",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "52px",
                          fontWeight: 600,
                          lineHeight: "52px",
                          textAlign: "left",
                          textTransform: "uppercase"
                        }}
                      >
                        {project.name}
                      </h3>
                      <p
                        style={{
                          color: "#b3b3b3",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "17px",
                          fontWeight: 300,
                          lineHeight: "24px",
                          textAlign: "left"
                        }}
                        className="mb-8"
                      >
                        {project.projectSummary}
                      </p>
                      
                      <button
                        className="inline-flex items-center gap-2 mb-8 font-medium"
                        style={{
                          color: "#fff",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "14px",
                          letterSpacing: "4px",
                          lineHeight: "14px",
                          textAlign: "left",
                          textTransform: "uppercase"
                        }}
                      >
                        VIEW DETAILS
                        <img
                          src={ArrowWhitCurve}
                          style={{ filter: "invert(62%) sepia(93%) saturate(749%) hue-rotate(110deg) brightness(97%) contrast(92%)" }}
                          alt="Arrow"
                          className='h-7 w-7'
                        />
                      </button>
                      
                      <div className="flex gap-4 flex-wrap">
                        {project.services.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-6 py-3 border border-gray-600 rounded-[0.5vw] text-white text-sm font-medium hover:border-[#32e4b6] transition-colors"
                            style={{
                              color: "#fff",
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              letterSpacing: "4px",
                              lineHeight: "14px",
                              textAlign: "left",
                              textTransform: "uppercase"
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <button
            className="btn-primary inline-flex items-center gap-2 px-8 py-4"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              lineHeight: "15px",
              textAlign: "center",
              textTransform: "uppercase"
            }}
          >
            SEE ALL CASE STUDIES
            <img
              src={ArrowWhitCurve}
              alt="Arrow"
              className="h-7 w-7"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
