
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
            <TimelineItem
              icon={IconComponent} // Using the Award icon from lucide-react
              title={achievement.title}
              description={achievement.description}
              year={achievement.year}
            />
              {/* <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 max-w-4xl mx-auto hover:border-[#32e4b6] transition-colors duration-300">
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
              </div> */}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

// Define the props for the TimelineItem component
interface TimelineItemProps {
  icon: React.ElementType; // Icon component (e.g., Award, Briefcase, etc.)
  title: string;
  description: string;
  year: string;
}

/**
 * Renders a single timeline item with an icon, title, description, and year.
 * @param {TimelineItemProps} props - The props for the component.
 * @param {React.ElementType} props.icon - The icon component to display.
 * @param {string} props.title - The title of the timeline item.
 * @param {string} props.description - The description of the timeline item.
 * @param {string} props.year - The year associated with the timeline item.
 */
const TimelineItem: React.FC<TimelineItemProps> = ({ icon: Icon, title, description, year }) => {
  return (
    <div className="bg-black text-white p-6 md:p-8 rounded-2xl shadow-xl border border-[#1a1a1a] mb-6 last:mb-0">
      <div className="flex items-start space-x-6 md:space-x-8">
        {/* Icon Container */}
        <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-[#DFFF70] rounded-full flex items-center justify-center">
          <Icon className="w-8 h-8 md:w-10 md:h-10 text-black" /> {/* Icon color set to black */}
        </div>

        {/* Content Area */}
        <div className="flex-grow flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex-1 pr-4">
            <h3 className="text-lg md:text-xl font-bold uppercase mb-2 font-inter">
              {title}
            </h3>
            <p className="text-gray-400 text-sm md:text-base font-inter">
              {description}
            </p>
          </div>
          {/* Year */}
          <div className="mt-4 md:mt-0 md:ml-4 flex-shrink-0">
            <span className="text-2xl md:text-3xl font-bold text-[#32e4b6] font-inter">
              {year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsCarousel;
