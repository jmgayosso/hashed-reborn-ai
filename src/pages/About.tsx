
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import AchievementsCarousel from '@/components/AchievementsCarousel';

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-32">
            {/* Left Side - Title and Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <h1 className="text-8xl md:text-9xl font-bold text-white mb-8 font-inter">
                ABOUT
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed font-inter">
                We are a team of experienced builders committed to our craft and
                the success of our partners. We only work with exceptional
                teams and help them build their vision.
              </p>
            </motion.div>

            {/* Right Side - Team Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/b131d4e3-ce19-44f8-830a-73a40e6dedec.png"
                  alt="Hashed Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="mb-12">
              <p className="text-gray-400 text-sm font-inter mb-4 tracking-widest">
                ACHIEVEMENTS
              </p>
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-4 font-inter">
                Awards
              </h2>
              <h2 className="text-6xl md:text-7xl font-bold text-[#32e4b6] font-inter">
                + Acknowledgments.
              </h2>
            </div>
            
            <AchievementsCarousel />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
