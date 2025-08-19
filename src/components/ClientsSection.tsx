
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import bitcashImg from '@/assets/clients/bitcash.svg';
import prxyImg from '@/assets/clients/citi.svg';
import citiImg from '@/assets/clients/credit.svg';
import spsImg from '@/assets/clients/diamon.svg';
import hyphoImg from '@/assets/clients/hancock.svg';
import csImg from '@/assets/clients/hypha.svg';
import diamondImg from '@/assets/clients/prxy.svg';
import snowflakeImg from '@/assets/clients/seeds.svg';


interface Client {
  name: string;
  logo: string;
  image?: string;
}

interface ClientsSectionProps {
  clients?: Client[];
}

const ClientsSection = ({ clients: propClients }: ClientsSectionProps) => {
  const defaultClients: Client[] = [
    { name: "BitCash", logo: "$", image: bitcashImg },
    { name: "PRXY", logo: "PRXY", image: prxyImg },
    { name: "Citi", logo: "citi", image: citiImg },
    { name: "SPS Commerce", logo: "SPS", image: spsImg },
    { name: "Hypho", logo: "Hypho", image: hyphoImg },
    { name: "Credit Suisse", logo: "CS", image: csImg },
    { name: "Diamond Standard", logo: "◊", image: diamondImg },
    { name: "Snowflake", logo: "❄", image: snowflakeImg }
  ];

  const clients = propClients || defaultClients;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#32e4b6] mb-4 text-center md:text-left">
            Clients.
          </h2>
        </motion.div>
        
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-8 items-center"
              animate={{
                x: `-${currentIndex * (200 + 32)}px`
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut"
              }}
              style={{
                width: `${duplicatedClients.length * (200 + 32)}px`
              }}
            >
              {duplicatedClients.map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 w-[200px] h-[120px] flex flex-col items-center justify-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-black rounded-lg p-6 w-full h-full flex flex-col items-center justify-center group-hover:border-[#32e4b6]/50 transition-colors duration-300">
                    {client.image ? (
                      <img 
                        src={client.image} 
                        alt={client.name}
                        className="w-100 object-contain mb-2 filter grayscale invert group-hover:grayscale-0 group-hover:invert-0 transition-all duration-300"
                        style={{ filter: 'grayscale(1) invert(1)' }}
                        loading='lazy'
                      />
                    ) : (
                      <div className="text-2xl font-bold text-white/60 group-hover:text-white/80 transition-colors mb-2">
                        {client.logo}
                      </div>
                    )}
                    {/* <div className="text-sm text-gray-400 group-hover:text-[#32e4b6] transition-colors font-medium">
                      {client.name}
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-[#32e4b6]' : 'bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
