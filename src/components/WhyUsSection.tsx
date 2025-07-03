
// import { Home, Target, Rocket } from 'lucide-react';
import Home from '@/assets/icons/home_icon.svg'
import Target from '@/assets/icons/target_icon.svg'
import Rocket from '@/assets/icons/rocket_icon.svg'
import { Omega } from 'lucide-react';

const WhyUsSection = () => {
  const features = [
    {
      icon: Home,
      title: "EXPERIENCED INNOVATORS",
      description: "Seasoned innovators with a wealth of experience and a proven track record of transforming visionary ideas into products."
    },
    {
      icon: Target,
      title: "FOCUSED",
      description: "Building requires focus. To ensure we are proud of our results, we cap the number of customers we can service simultaneously."
    },
    {
      icon: Rocket,
      title: "STARTUP CULTURE",
      description: "A sense of urgency is at the heart of Hashed. We foster an environment of agility and results, enabling you to stay ahead."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16"
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
          WHY US?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-dark p-8 hover:bg-[#222] transition-colors">
              <div className="w-16 h-16 bg-black /10 rounded-full flex items-center justify-center mb-6">
                <img
                  src={feature.icon}
                  className='h-9 w-9'
                />
              </div>
              <h3
                className="mb-4"
                style={{
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  letterSpacing: "4px",
                  lineHeight: "14px",
                  textAlign: "left",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  color: "#d1d5db",
                  fontFamily: "Inter, sans-serif",
                  lineHeight: "26px",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
