import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroV0 = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-black">
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Main heading */}
            <div className="mb-8">
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                SOLVE OLD PROBLEMS
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative flex items-center justify-center gap-4"
              >
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight text-[#32e4b6]">
                  NEW WAYS
                </h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-[#32e4b6]"
                >
                  <Sparkles size={48} className="md:w-16 md:h-16" />
                </motion.div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div 
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p>
                With <span className="font-semibold text-white">8 years of experience</span> building 
                tailored software used by thousands of users, our team can build the path to a{' '}
                <span className="font-semibold text-white">more efficient, productive business.</span>
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-16"
            >
              <Link to="/contact">
                <motion.button 
                  className="group relative inline-flex items-center gap-3 bg-[#32e4b6] text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#2dd4a7] hover:shadow-2xl hover:shadow-[#32e4b6]/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>TELL US ABOUT YOUR IDEA</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                  
                  {/* Button glow effect */}
                  <div className="absolute inset-0 rounded-full bg-[#32e4b6] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroV0;