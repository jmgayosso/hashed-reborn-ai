
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectList from '@/const/projects';
import { ProjectItem } from '@/interfaces';

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);
  
  const projectList: ProjectItem[] = ProjectList;

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-start mb-24 mt-24 border-b border-[#32e4b6]">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
              PROJECTS
            </h1>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectList.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="bg-[#1a1a1a] rounded-2xl border border-gray-800 overflow-hidden hover:border-[#32e4b6] transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img 
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 mb-10" style={{fontSize: 52}}>
                        {project.name}
                      </h3>
                      <p className="text-gray-350 text-lg mb-6 leading-relaxed" style={{ color: '#b3b3b3'}}>
                        {project.projectSummary}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex gap-3 flex-wrap">
                        {project.services.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-4 py-2 border border-gray-600 rounded-full text-sm font-medium hover:border-[#32e4b6] transition-colors"
                            style={{
                              color: '#fff',
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '14px',
                              letterSpacing: '4px',
                              lineHeight: '14px',
                              textAlign: 'center',
                              textTransform: 'uppercase',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
