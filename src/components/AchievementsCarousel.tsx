
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// import { Award, Star, Trophy, Bitcoin } from 'lucide-react';

import md from '@/assets/icons/md_icon.svg'
import ml from '@/assets/icons/ml_icon.svg'
import star from '@/assets/icons/star_icon.svg'
import th from '@/assets/icons/th_icon.svg'

const achievements = [
  {
    id: 1,
    title: "THOUGHT LEADER AT GBA",
    description: "Selected to lead the DAO group at the Government Blockchain Association.",
    year: "2020",
    icon: md
  },
  {
    id: 2,
    title: "POLKADOT PARACHAIN",
    description: "Secure Hased Network parachain in Polkadot.",
    year: "2022",
    icon: star
  },
  {
    id: 3,
    title: "LAUNCH SMART VAULTS",
    description: "smartvaults.io receives investment from wolfnyc.com",
    year: "2023",
    icon: th
  },
  {
    id: 4,
    title: "ADOPTING BITCOIN SPEAKER",
    description: "Smart Bitcoin - the power of Miniscript",
    year: "2024",
    icon: ml
  }
];

const AchievementsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="relative">
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
              className="sticky top-0 mb-8"
            >
              <TimelineItem
                icon={IconComponent} // Using the Award icon from lucide-react
                title={achievement.title}
                description={achievement.description}
                year={achievement.year}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

// Define the props for the TimelineItem component
interface TimelineItemProps {
  icon: string; // Icon component (e.g., Award, Briefcase, etc.)
  title: string;
  description: string;
  year: string;
}

/**
 * Renders a single timeline item with an icon, title, description, and year.
 * @param {TimelineItemProps} props - The props for the component.
 * @param {ElementType<any, keyof IntrinsicElements>} props.icon - The icon component to display.
 * @param {string} props.title - The title of the timeline item.
 * @param {string} props.description - The description of the timeline item.
 * @param {string} props.year - The year associated with the timeline item.
 */
const TimelineItem: React.FC<TimelineItemProps> = ({ icon: Icon, title, description, year }) => {
  return (
    <div className="bg-black text-white p-6 md:p-8 rounded-2xl shadow-xl border border-[#1a1a1a] mb-6 last:mb-0">
      <div className="flex items-start space-x-6 md:space-x-8">
        {/* Icon Container */}
        <div className="flex-shrink-0 w-16 h-16 md:w-15 md:h-15 bg-[#DFFF70] rounded-full flex items-center justify-center">
          {/* <Icon className="w-8 h-8 md:w-10 md:h-10 text-black" /> Icon color set to black */}
          <img
            src={Icon}
          />
        </div>

        {/* Content Area */}
        <div className="flex-grow flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex-1 pr-4">
            <h3
              className="mb-2"
              style={{
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                letterSpacing: "4px",
                lineHeight: "14px",
                textAlign: "left",
                textTransform: "uppercase",
                fontWeight: "bold"
              }}
            >
              {title}
            </h3>
            <p
              style={{
                color: "#b3b3b3",
                fontFamily: "Inter, sans-serif",
                fontSize: "17px",
                fontWeight: 300,
                lineHeight: "24px",
                textAlign: "left"
              }}
            >
              {description}
            </p>
          </div>
          {/* Year */}
          <div className="mt-4 md:mt-0 md:ml-4 flex-shrink-0">
            <span
              style={{
                color: "#32e4b6",
                fontFamily: "Inter, sans-serif",
                fontSize: "22px",
                lineHeight: "22px",
                textAlign: "center",
                fontWeight: "bold"
              }}
            >
              {year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsCarousel;
