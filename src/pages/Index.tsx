
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
    { name: "BitCash", logo: "$", image: "/api/placeholder/120/60" },
    { name: "PRXY", logo: "PRXY", image: "/api/placeholder/120/60" },
    { name: "Citi", logo: "citi", image: "/api/placeholder/120/60" },
    { name: "SPS Commerce", logo: "SPS", image: "/api/placeholder/120/60" },
    { name: "Hypho", logo: "Hypho", image: "/api/placeholder/120/60" },
    { name: "Credit Suisse", logo: "CS", image: "/api/placeholder/120/60" },
    { name: "Diamond Standard", logo: "◊", image: "/api/placeholder/120/60" },
    { name: "Snowflake", logo: "❄", image: "/api/placeholder/120/60" }
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
