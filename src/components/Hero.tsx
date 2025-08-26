
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import hashedAnimation from '../assets/animations/hashed_animation_lottie.json';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-black">
      {/* Modern gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(50,228,182,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(50,228,182,0.1),transparent_50%)]"></div>
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-20 left-1/4 w-2 h-2 bg-[#32e4b6] rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute top-40 right-1/3 w-1 h-1 bg-white rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#32e4b6] rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Interactive cursor effect */}
      <div 
        className="absolute pointer-events-none opacity-30"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          background: 'radial-gradient(400px circle at center, rgba(50,228,182,0.06), transparent 70%)',
          width: '400px',
          height: '400px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-1 sm:pt-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-3 py-1.5 mb-8 text-xs md:text-sm font-medium text-[#32e4b6] bg-[#32e4b6]/10 border border-[#32e4b6]/20 rounded-full backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#32e4b6] rounded-full mr-2 animate-pulse"></span>
              8 Years Building Digital Solutions
            </motion.div>

            {/* Main heading with staggered animation */}
            <div className="mb-8">
              <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white mb-2 md:mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
              >
          SOLVE OLD
              </motion.h1>
              
              <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white mb-2 md:mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
              >
          PROBLEMS
              </motion.h1>
              
              <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative"
              >
          <div className="flex items-start justify-center gap-1 sm:gap-2 md:gap-3">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-[#32e4b6] relative">
              NEW WAYS
              <motion.div
                className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-[#32e4b6] to-transparent opacity-60"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </h1>
            <div className="w-10 sm:w-16 md:w-20 lg:w-24 -mt-2 sm:mt-0">
              <Lottie
                animationData={hashedAnimation}
                loop={true}
                className="w-full h-full"
              />
            </div>
          </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p 
              className="text-md md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              With <span className="font-semibold text-[#32e4b6]">proven expertise</span> building 
              custom software used by thousands of users, our team transforms ideas into 
              <span className="font-semibold text-[#32e4b6]"> powerful digital solutions</span> that drive business growth.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mb-16"
            >
              <Link to="/contact">
          <motion.button 
            className="group relative inline-flex items-center gap-3 bg-[#32e4b6] text-black px-8 py-2 md:py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#2dd4a7] hover:shadow-2xl hover:shadow-[#32e4b6]/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>START YOUR PROJECT</span>
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

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <span className="text-sm font-medium tracking-wider">SCROLL TO EXPLORE</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 rounded-full border border-gray-600 hover:border-[#32e4b6] transition-colors duration-300 cursor-pointer"
            onClick={() => {
              document.getElementById('clients')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
            </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
