
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Star, Trophy, Bitcoin } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: "THOUGHT LEADER AT GBA",
    description: "Selected to lead the DAO group at the Government Blockchain Association.",
    year: "2020",
    icon: Award
  },
  {
    id: 2,
    title: "POLKADOT PARACHAIN",
    description: "Secure Hased Network parachain in Polkadot.",
    year: "2022",
    icon: Star
  },
  {
    id: 3,
    title: "LAUNCH SMART VAULTS",
    description: "smartvaults.io receives investment from wolfnyc.com",
    year: "2023",
    icon: Trophy
  },
  {
    id: 4,
    title: "ADOPTING BITCOIN SPEAKER",
    description: "Smart Bitcoin - the power of Miniscript",
    year: "2024",
    icon: Bitcoin
  }
];

const AchievementsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-96 overflow-hidden">
      <AnimatePresence mode="wait">
        {achievements.map((achievement, index) => {
          const isActive = index === currentIndex;
          const isNext = index === (currentIndex + 1) % achievements.length;
          const isPrev = index === (currentIndex - 1 + achievements.length) % achievements.length;
          
          if (!isActive && !isNext && !isPrev) return null;

          let xOffset = 0;
          let opacity = 0.3;
          let scale = 0.8;

          if (isActive) {
            xOffset = 0;
            opacity = 1;
            scale = 1;
          } else if (isNext) {
            xOffset = 300;
            opacity = 0.6;
            scale = 0.9;
          } else if (isPrev) {
            xOffset = -300;
            opacity = 0.6;
            scale = 0.9;
          }

          const IconComponent = achievement.icon;

          return (
            <motion.div
              key={achievement.id}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ x: 300, opacity: 0, scale: 0.8 }}
              animate={{ x: xOffset, opacity, scale }}
              exit={{ x: -300, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 max-w-md w-full mx-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-[#32e4b6] rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-[#32e4b6] text-2xl font-bold font-inter">
                    {achievement.year}
                  </span>
                </div>
                
                <h3 className="text-white text-xl font-bold mb-4 font-inter">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed font-inter">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {achievements.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#32e4b6]' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementsCarousel;
