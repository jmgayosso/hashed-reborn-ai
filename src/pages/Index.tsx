
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ClientsSection from '@/components/ClientsSection';
import WhyUsSection from '@/components/WhyUsSection';
import ExecutionSection from '@/components/ExecutionSection';
import ProjectsSection from '@/components/ProjectsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  const clients = [
    { name: "BitCash", logo: "$", image: "/images/clients/bitcash.svg" },
    { name: "PRXY", logo: "PRXY", image: "/images/clients/citi.svg" },
    { name: "Citi", logo: "citi", image: "/images/clients/credit.svg" },
    { name: "SPS Commerce", logo: "SPS", image: "/images/clients/diamon.svg" },
    { name: "Hypho", logo: "Hypho", image: "/images/clients/hancock.svg" },
    { name: "Credit Suisse", logo: "CS", image: "/images/clients/hypha.svg" },
    { name: "Diamond Standard", logo: "◊", image: "/images/clients/prxy.svg" },
    { name: "Snowflake", logo: "❄", image: "/images/clients/seeds.svg" }
    // { name: "Microsoft", logo: "MS", image: "/images/clients/un.svg" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <ClientsSection clients={clients} />
      <WhyUsSection />
      <ExecutionSection />
      <ProjectsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
