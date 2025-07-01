
import { Home, Target, Rocket } from 'lucide-react';

const WhyUsSection = () => {
  const features = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "EXPERIENCED INNOVATORS",
      description: "Seasoned innovators with a wealth of experience and a proven track record of transforming visionary ideas into products."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "FOCUSED",
      description: "Building requires focus. To ensure we are proud of our results, we cap the number of customers we can service simultaneously."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "STARTUP CULTURE",
      description: "A sense of urgency is at the heart of Hashed. We foster an environment of agility and results, enabling you to stay ahead."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          WHY US?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-dark p-8 hover:bg-[#222] transition-colors">
              <div className="w-16 h-16 bg-[#32e4b6]/10 rounded-full flex items-center justify-center mb-6">
                <div className="text-[#32e4b6]">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
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
