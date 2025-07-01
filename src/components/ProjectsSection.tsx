
import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-4">
            PROJECTS
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop" 
              alt="Chess pieces on board"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
          
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              TOP 3 GLOBAL BANK
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Making sense of chaos with AI
            </p>
            <button className="inline-flex items-center gap-2 text-[#32e4b6] hover:text-[#16B896] transition-colors mb-6">
              VIEW DETAILS
              <ArrowRight size={16} />
            </button>
            <div className="flex gap-4">
              <span className="px-4 py-2 border border-gray-600 rounded-full text-white text-sm">
                AI
              </span>
              <span className="px-4 py-2 border border-gray-600 rounded-full text-white text-sm">
                ANALYTICS
              </span>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button className="btn-primary inline-flex items-center gap-2">
            SEE ALL CASE STUDIES
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
