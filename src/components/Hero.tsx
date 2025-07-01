
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            SOLVE OLD PROBLEMS
            <br />
            <span className="accent-text">NEW WAYS</span>
            <span className="text-[#32e4b6] ml-4">✨</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            With <span className="font-semibold">8 years of experience</span> building tailored software used by thousands of users, our 
            team can build the path to a <span className="font-semibold">more efficient, productive business.</span>
          </p>
          
          <button className="btn-primary inline-flex items-center gap-2 text-lg">
            TELL US ABOUT YOUR IDEA
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
