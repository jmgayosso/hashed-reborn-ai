
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const Projects = () => {
  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "TOP 3 GLOBAL BANK",
      description: "Making sense of chaos with AI",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop",
      tags: ["AI", "ANALYTICS"]
    },
    {
      id: 2,
      title: "SMART VAULTS",
      description: "Smart Bitcoin wallet with taproot miniscript",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["BITCOIN"]
    },
    {
      id: 3,
      title: "FINTECH REVOLUTION",
      description: "Transforming digital payments worldwide",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      tags: ["BLOCKCHAIN", "PAYMENTS"]
    },
    {
      id: 4,
      title: "SMART CONTRACTS PLATFORM",
      description: "Decentralized finance infrastructure",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      tags: ["DEFI", "SMART CONTRACTS"]
    },
    {
      id: 5,
      title: "AI TRADING SYSTEM",
      description: "Automated trading with machine learning",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
      tags: ["AI", "TRADING"]
    },
    {
      id: 6,
      title: "CRYPTO EXCHANGE",
      description: "Next-generation cryptocurrency trading platform",
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=400&fit=crop",
      tags: ["CRYPTO", "EXCHANGE"]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
              PROJECTS
            </h1>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-[#1a1a1a] rounded-2xl border border-gray-800 overflow-hidden hover:border-[#32e4b6] transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex gap-3 flex-wrap">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-4 py-2 border border-gray-600 rounded-full text-white text-sm font-medium hover:border-[#32e4b6] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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
