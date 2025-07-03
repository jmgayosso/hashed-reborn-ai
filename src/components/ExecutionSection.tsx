
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import jhonAvatar from '@/assets/screenshots/John Wotherspoon-p-500.jpeg'
import connorAvatar from '@/assets/screenshots/connorIrish.png'
import junAvatar from '@/assets/screenshots/jun.jpg'
import louiseAvatar from '@/assets/screenshots/Louise.png'
import quotesIcon from '@/assets/icons/quotes.svg'
interface Testimonial {
  quote: string;
  author: string;
  company: string;
  avatar: string;
}

interface ExecutionSectionProps {
  testimonials?: Testimonial[];
}

const ExecutionSection = ({ testimonials: propTestimonials }: ExecutionSectionProps) => {
  const defaultTestimonials: Testimonial[] = [
    {
      quote: "Hashed continues to play a pivotal role after four years. They've built precise smart contracts, engaging UIs, and provided invaluable guidance. We highly recommend them as development partners.",
      author: "JOHN WOTHERSPOON",
      company: "BENNYFI CO-FOUNDER",
      avatar: jhonAvatar
    },
    {
      quote: "Hashed is part of our origin story. Together we built an international application that touches over $3B in private capital.",
      author: "CONNOR IRISH", 
      company: "CEO OF PRXY",
      avatar: connorAvatar
    },
    {
      quote: "Innovative solutions and excellent service. Hashed made a real difference for us. We'll continue working with them.",
      author: "JUN DAM",
      company: "CEO OF BITCASH",
      avatar: junAvatar
    },
    {
      quote: "The value of Hashed isn't just that they are smart - they have a fire in their gut for the technology and ecosystem, which makes all the difference in a programming team. We never have to worry about them staying up-to-date on the latest efficiencies and processes.",
      author: "Louise W. Reed",
      company: "CEO OF AFLOAT",
      avatar: louiseAvatar
    }
  ];

  const testimonials = propTestimonials || defaultTestimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 2;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalSlides);
    }, 15000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const getCurrentSlideTestimonials = () => {
    const startIndex = currentIndex * itemsPerSlide;
    return testimonials.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="mb-8 max-w-4xl"
          style={{
            color: '#fff',
            fontFamily: 'Inter, sans-serif',
            fontSize: '52px',
            fontWeight: 600,
            lineHeight: '52px',
            textAlign: 'left',
            textTransform: 'uppercase',
            letterSpacing: 0,
          }}
        >
          EXECUTION IS EVERYTHING
        </h2>
        <p
          className="mb-16 max-w-6xl"
          style={{
            color: '#b3b3b3',
            fontFamily: 'Inter, sans-serif',
            fontSize: '22px',
            fontWeight: 300,
            lineHeight: '32px',
            textAlign: 'left',
          }}
        >
          Executing an idea takes focus and craftsmanship. Our goal is to build long term relationships with highly successful 
          companies. At Hashed, we recognize we can't deliver the outcomes we want with a high volume of projects. That's why we 
          focus on a maximum of 10 active partners. Let's build together.
        </p>
        
        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {getCurrentSlideTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                className="bg-[#222] rounded-2xl p-8 border border-gray-800"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Quote Icon */}
                {/* <div className="text-[#32e4b6] text-6xl font-bold mb-6 leading-none">"</div> */}
                <div className="flex justify-center mb-6">
                  <img src={quotesIcon} style={{ maxWidth: '45px' }} />
                </div>
                
                {/* Quote Text */}
                <h4
                  className="text-white text-lg mb-12"
                  style={{
                    color: '#fff',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '42px',
                  }}
                >
                  {testimonial.quote}
                </h4>
                
                {/* Author Section */}
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full mr-4 overflow-hidden flex-shrink-0">
                    {testimonial.avatar.startsWith('/') || testimonial.avatar.startsWith('http') ? (
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {testimonial.avatar}
                        </span>
                      </div>
                    )}
                  </div>
                  <div>
                    <div
                      style={{
                        color: '#fff',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        letterSpacing: '4px',
                        lineHeight: '14px',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        marginBottom: '15px',
                      }}
                    >
                      {testimonial.author}
                    </div>
                    <div
                      style={{
                        color: '#32e4b6',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        letterSpacing: '4px',
                        lineHeight: '14px',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                      }}
                    >
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
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

export default ExecutionSection;
