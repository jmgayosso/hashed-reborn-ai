
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import AchievementsCarousel from '@/components/AchievementsCarousel';
import ClientsSection from '@/components/ClientsSection';
import CTASection from '@/components/CTASection';
import hashedTeamImage from '../assets/images/hashedTeam.jpeg'; 
import { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          {/* About Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 border-b border-[#32e4b6] pb-24">
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
              <p
                className="font-inter"
                style={{
                  color: '#b3b3b3',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: '24px',
                  textAlign: 'left',
                }}
              >
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
                  src={hashedTeamImage}
                  alt="Hashed Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Achievements Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-5"
            > */}
            <motion.div
              key={2}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 100 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="group cursor-pointer"
            >
              <div
                className="flex flex-col justify-center items-start w-full text-left h-full"
              >
                <p
                  className="mb-4 font-inter"
                  style={{
                    color: '#fff',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    letterSpacing: '4px',
                    lineHeight: '14px',
                    textAlign: 'left',
                    textTransform: 'uppercase',
                  }}
                >
                  ACHIEVEMENTS
                </p>
                <h2
                  className="mb-0 pb-0 text-4xl md:text-6xl"
                  style={{
                    color: '#fff',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    lineHeight: '1.1',
                    textAlign: 'left',
                    textTransform: 'capitalize',
                  }}
                >
                  Awards
                </h2>
                <h2
                  className="text-[#32e4b6] text-4xl md:text-6xl"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    lineHeight: '1.1',
                    textAlign: 'left',
                    textTransform: 'capitalize',
                  }}
                >
                  + Acknowledgments.
                </h2>
              </div>
            </motion.div>
            <motion.div
              key={1}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 100 }}
              transition={{ duration: 0.6, delay: 0. }}
              viewport={{ once: true, amount: 1 }}
              className="group cursor-pointer"
            >
              <AchievementsCarousel />
            </motion.div>
          </div>
          <div className="mt-24">
            <ClientsSection />
          </div>
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
