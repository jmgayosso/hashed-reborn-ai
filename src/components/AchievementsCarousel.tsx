
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-20 relative">
      <div className="relative">
        {achievements.map((achievement, index) => {
          const y = useTransform(
            scrollYProgress,
            [0, 1],
            [0, +(index * 20)]
          );
          
          const scale = useTransform(
            scrollYProgress,
            [index * 0.25, (index + 1) * 0.25],
            [1, 0.9]
          );

          const IconComponent = achievement.icon;

          return (
            <motion.div
              key={achievement.id}
              style={{ 
                y: index === 0 ? 0 : y,
                // scale,
                zIndex: achievements.length + index
              }}
              className="sticky top-24 mb-8"
            >
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 max-w-4xl mx-auto hover:border-[#32e4b6] transition-colors duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-[#32e4b6] rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  <span className="text-[#32e4b6] text-4xl font-bold font-inter">
                    {achievement.year}
                  </span>
                </div>
                
                <h3 className="text-white text-2xl font-bold mb-4 font-inter uppercase tracking-wider">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed font-inter">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AchievementsCarousel;
