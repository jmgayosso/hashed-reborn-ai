
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import ProjectList from '@/const/projects';
import { ProjectItem } from '@/interfaces';
import ReactMarkdown from 'react-markdown';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<ProjectItem | null>(null);
  const [markdownContent, setMarkdownContent] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    
    // Find project by ID
    const foundProject = ProjectList.find(p => p.id === parseInt(id || '0'));
    setProject(foundProject || null);
    
    // Load markdown content if project exists and has projectDetails
    if (foundProject && foundProject.projectDetails && foundProject.projectDetails !== '') {
      // Since the path is relative, we'll try to load from the public folder
      const markdownPath = foundProject.projectDetails.replace('./projectDescriptions/', '/src/const/projectDescriptions/');
      
      // For now, we'll use a simple fetch approach
      // In a real app, you might want to import the markdown files directly
      fetch(markdownPath)
        .then(response => response.text())
        .then(text => setMarkdownContent(text))
        .catch(() => setMarkdownContent('Content not available'));
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-[#32e4b6] hover:text-[#16B896] transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {project.name}
            </h1>
            
            {/* Project Meta Info */}
            <div className="flex flex-wrap gap-6 mb-8 text-gray-300">
              {project.client && (
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>{project.client}</span>
                </div>
              )}
              {project.completedDate && (
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{project.completedDate}</span>
                </div>
              )}
            </div>

            {/* Project Summary */}
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {project.projectSummary}
            </p>

            {/* Services Tags */}
            {project.services.length > 0 && (
              <div className="flex items-center gap-4 flex-wrap">
                <Tag size={18} className="text-gray-400" />
                {project.services.map((service, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 border border-gray-600 rounded-full text-white text-sm font-medium hover:border-[#32e4b6] transition-colors"
                  >
                    {service}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
              <img 
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Project Details (Markdown Content) */}
          {markdownContent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <div className="bg-[#1a1a1a] rounded-2xl border border-gray-800 p-8 md:p-12">
                <ReactMarkdown
                  className="text-gray-300"
                  components={{
                    h1: ({children}) => <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{children}</h1>,
                    h2: ({children}) => <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 mt-8">{children}</h2>,
                    h3: ({children}) => <h3 className="text-xl md:text-2xl font-bold text-white mb-3 mt-6">{children}</h3>,
                    p: ({children}) => <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>,
                    ul: ({children}) => <ul className="text-gray-300 mb-4 pl-6 space-y-2">{children}</ul>,
                    ol: ({children}) => <ol className="text-gray-300 mb-4 pl-6 space-y-2">{children}</ol>,
                    li: ({children}) => <li className="list-disc">{children}</li>,
                    strong: ({children}) => <strong className="text-white font-semibold">{children}</strong>,
                    code: ({children}) => <code className="bg-gray-800 px-2 py-1 rounded text-[#32e4b6] text-sm">{children}</code>,
                    hr: () => <hr className="border-gray-700 my-8" />,
                    a: ({children, href}) => (
                      <a 
                        href={href} 
                        className="text-[#32e4b6] hover:text-[#16B896] transition-colors underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    ),
                  }}
                >
                  {markdownContent}
                </ReactMarkdown>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
