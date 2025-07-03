
import { ArrowRight } from 'lucide-react';
import ArrowWhitCurve from '@/assets/icons/arrow_with_curve.svg'
import BG1 from '@/assets/images/bg1.jpg'

const CTASection = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url(${BG1})`
        }}
      ></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#32e4b6] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#32e4b6] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p
          className="mb-4"
          style={{
            color: '#fff',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            letterSpacing: '4px',
            lineHeight: '14px',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          DESIGN + DEVELOPMENT
        </p>
        <h2
          className="mb-1"
          style={{
            color: '#fff',
            fontFamily: 'Inter, sans-serif',
            fontSize: '64px',
            fontWeight: 600,
            lineHeight: '64px',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          LET'S BUILD
        </h2>
        <h2 className="text-[#32e4b6] mb-12"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '64px',
            fontWeight: 600,
            lineHeight: '64px',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          TOGETHER
        </h2>
        
        <button
          className="btn-primary inline-flex items-center gap-2 text-lg"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            fontWeight: 500,
            lineHeight: '15px',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          TELL US ABOUT YOUR IDEA
          <img
            src={ArrowWhitCurve}
          />
        </button>
      </div>
    </section>
  );
};

export default CTASection;
