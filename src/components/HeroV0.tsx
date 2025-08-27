import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowWhitCurve from '@/assets/icons/arrow_with_curve.svg'
import hashedAnimation from '../assets/animations/hashed_animation_lottie.json';
import Lottie from 'lottie-react';

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
                className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-tight text-white mb-4 text-center"
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
                className="relative flex flex-col sm:flex-row items-center sm:items-start justify-center gap-0"
              >
                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-tight text-[#32e4b6] text-center sm:text-left">
                  NEW WAYS
                </h1>
                <div className="w-8 sm:w-16 md:w-24 lg:w-28 self-center sm:self-start mt-2 sm:mt-0">
                  <Lottie
                    animationData={hashedAnimation}
                    loop={true}
                    className="w-full h-auto"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
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
              TELL US ABOUT YOUR IDEA
              <img
                src={ArrowWhitCurve}
                alt="Arrow"
                className="h-7 w-7"
              />
            </button>
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