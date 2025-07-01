
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
      avatar: "/lovable-uploads/f983be12-0a2a-4f86-87c6-fc9ffd5a12f0.png"
    },
    {
      quote: "Hashed is part of our origin story. Together we built an international application that touches over $3B in private capital.",
      author: "CONNOR IRISH", 
      company: "DIAMOND STANDARD CEO",
      avatar: "CI"
    },
    {
      quote: "Innovative solutions and excellent service. Hashed made a real difference for us. We'll continue working with them.",
      author: "JUN DAM",
      company: "HYPHO FOUNDER",
      avatar: "JD"
    },
    {
      quote: "Outstanding technical expertise and professional service. The team delivered beyond our expectations every time.",
      author: "SARAH CHEN",
      company: "FINTECH INNOVATIONS CTO",
      avatar: "SC"
    }
  ];

  const testimonials = propTestimonials || defaultTestimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 2;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const getCurrentSlideTestimonials = () => {
    const startIndex = currentIndex * itemsPerSlide;
    return testimonials.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 max-w-4xl">
          EXECUTION IS EVERYTHING
        </h2>
        
        <p className="text-lg text-gray-300 mb-16 max-w-6xl leading-relaxed">
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
                className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Quote Icon */}
                <div className="text-[#32e4b6] text-6xl font-bold mb-6 leading-none">"</div>
                
                {/* Quote Text */}
                <p className="text-white text-lg mb-12 leading-relaxed">
                  {testimonial.quote}
                </p>
                
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
                    <div className="text-white font-bold text-sm tracking-wide mb-1">
                      {testimonial.author}
                    </div>
                    <div className="text-[#32e4b6] text-sm font-medium">
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
