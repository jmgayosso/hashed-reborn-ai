
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#1DD1A1] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#1DD1A1] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-gray-300 text-lg mb-4 tracking-wider">
          DESIGN + DEVELOPMENT
        </p>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
          LET'S BUILD
        </h2>
        <h2 className="text-5xl md:text-7xl font-bold text-[#1DD1A1] mb-12">
          TOGETHER
        </h2>
        
        <button className="btn-primary inline-flex items-center gap-2 text-lg">
          TELL US ABOUT YOUR IDEA
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default CTASection;
