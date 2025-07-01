
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  velocityX: number;
  velocityY: number;
}

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const createParticle = (): Particle => ({
      id: Math.random(),
      x: mousePosition.x + (Math.random() - 0.5) * 100,
      y: mousePosition.y + (Math.random() - 0.5) * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      velocityX: (Math.random() - 0.5) * 2,
      velocityY: (Math.random() - 0.5) * 2,
    });

    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticles = [...prev, createParticle()].slice(-20);
        return newParticles.map(particle => ({
          ...particle,
          x: particle.x + particle.velocityX,
          y: particle.y + particle.velocityY,
          opacity: particle.opacity - 0.02,
        })).filter(particle => particle.opacity > 0);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [mousePosition]);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,228,182,0.1),transparent_70%)]"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#32e4b6] rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#32e4b6] rounded-full blur-3xl opacity-5 animate-pulse delay-1000"></div>
      </div>

      {/* Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-[#32e4b6] rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-[#32e4b6]/10 border border-[#32e4b6]/20 rounded-full text-[#32e4b6] text-sm font-medium mb-6">
                  🚀 INNOVACIÓN TECNOLÓGICA
                </span>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                SOLVE OLD
                <br />
                <span className="text-[#32e4b6] relative">
                  PROBLEMS
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#32e4b6] to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>
                <br />
                <span className="text-white">NEW WAYS</span>
                <motion.span 
                  className="text-[#32e4b6] ml-4 inline-block"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  ✨
                </motion.span>
              </motion.h1>

              <motion.p 
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Con <span className="font-semibold text-[#32e4b6]">8 años de experiencia</span> construyendo 
                software personalizado usado por miles de usuarios, nuestro equipo puede construir 
                el camino hacia un <span className="font-semibold text-[#32e4b6]">negocio más eficiente y productivo.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.button 
                  className="btn-primary inline-flex items-center gap-2 text-lg group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  CUÉNTANOS TU IDEA
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats/Features */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div 
                  className="card-dark p-6 text-center"
                  whileHover={{ scale: 1.05, borderColor: '#32e4b6' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-[#32e4b6] mb-2">8+</div>
                  <div className="text-gray-300">Años de Experiencia</div>
                </motion.div>

                <motion.div 
                  className="card-dark p-6 text-center"
                  whileHover={{ scale: 1.05, borderColor: '#32e4b6' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-[#32e4b6] mb-2">50+</div>
                  <div className="text-gray-300">Proyectos Exitosos</div>
                </motion.div>

                <motion.div 
                  className="card-dark p-6 text-center"
                  whileHover={{ scale: 1.05, borderColor: '#32e4b6' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-[#32e4b6] mb-2">1000+</div>
                  <div className="text-gray-300">Usuarios Activos</div>
                </motion.div>

                <motion.div 
                  className="card-dark p-6 text-center"
                  whileHover={{ scale: 1.05, borderColor: '#32e4b6' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-[#32e4b6] mb-2">24/7</div>
                  <div className="text-gray-300">Soporte Técnico</div>
                </motion.div>
              </div>

              <motion.div 
                className="card-dark p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-white mb-3">Tecnologías Principales</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-[#32e4b6]/10 border border-[#32e4b6]/20 rounded-full text-[#32e4b6] text-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
