
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "TOP 3 GLOBAL BANK",
      description: "Making sense of chaos with AI",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop",
      tags: ["AI", "ANALYTICS"]
    },
    {
      id: 2,
      title: "FINTECH REVOLUTION",
      description: "Transforming digital payments worldwide",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["BLOCKCHAIN", "PAYMENTS"]
    },
    {
      id: 3,
      title: "SMART CONTRACTS PLATFORM",
      description: "Decentralized finance infrastructure",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      tags: ["DEFI", "SMART CONTRACTS"]
    },
    {
      id: 4,
      title: "AI TRADING SYSTEM",
      description: "Automated trading with machine learning",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      tags: ["AI", "TRADING"]
    }
  ];

  return (
    <section ref={containerRef} className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-4">
            PROJECTS
          </h2>
        </div>
        
        <div className="relative">
          {projects.map((project, index) => {
            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [0, -(index * 120)]
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
                  zIndex: projects.length - index
                }}
                className="sticky top-24 mb-8"
              >
                <div className="bg-[#1a1a1a] rounded-2xl border border-gray-800 overflow-hidden hover:border-[#32e4b6] transition-colors duration-300">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-80 lg:h-96">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                    </div>
                    
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <button className="inline-flex items-center gap-2 text-[#32e4b6] hover:text-[#16B896] transition-colors mb-8 text-lg font-medium">
                        VIEW DETAILS
                        <ArrowRight size={20} />
                      </button>
                      
                      <div className="flex gap-4 flex-wrap">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-6 py-3 border border-gray-600 rounded-full text-white text-sm font-medium hover:border-[#32e4b6] transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <button className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
            SEE ALL CASE STUDIES
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
