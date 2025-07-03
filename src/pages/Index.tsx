
import { useEffect } from 'react'
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
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <ClientsSection />
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
