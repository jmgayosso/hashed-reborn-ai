
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import bgContact from '@/assets/images/bgContact.jpg'

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);
    
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mvgrykde', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const data = await response.json();
        const errorMessage = data.errors ? data.errors.map((error: any) => error.message).join(', ') : 'There was an issue sending your message.';

        toast({
          title: "Submission Error",
          description: errorMessage,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Network Error",
        description: "Could not connect to the server. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-inter"> Contact Us </h1>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full max-w-md h-full flex items-end justify-center shadow-2xl">
                <div
                  className="relative z-10 text-center w-full h-full flex items-end justify-center rounded-3xl p-10"
                  style={{
                    backgroundImage:`linear-gradient(180deg, rgba(0,0,0,0), black 90%), url(${bgContact})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="rounded-2xl w-full text-left p-md">
                    <h3
                      className="font-inter mb-10 text-left"
                      style={{
                        color: '#fff',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '52px',
                        fontWeight: 600,
                        lineHeight: '52px',
                        textTransform: 'uppercase',
                      }}
                    >
                      HOW CAN WE HELP?
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="font-inter"
                    style={{
                      color: '#b3b3b3',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: 300,
                      lineHeight: '20px',
                      margin: '0px 0px 5px',
                      display: 'block',
                    }}
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="e. g. John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-[#2a2a2a] border-gray-600 text-white placeholder-gray-500 rounded-xl h-10 font-inter focus:border-[#32e4b6] focus:ring-[#32e4b6]"
                  />
                </div>
                <div>
                  <label htmlFor="email"
                    className="block text-gray-300 mb-2 font-inter"
                    style={{
                      color: '#b3b3b3',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: 300,
                      lineHeight: '20px',
                      margin: '0px 0px 5px',
                      display: 'block',
                    }}
                  > Email Address </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="e. g. johndoe@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-[#2a2a2a] border-gray-600 text-white placeholder-gray-500 rounded-xl h-10 font-inter focus:border-[#32e4b6] focus:ring-[#32e4b6]"
                  />
                </div>
                <div>
                  <label htmlFor="phone"
                    style={{
                      color: '#b3b3b3',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: 300,
                      lineHeight: '20px',
                      margin: '0px 0px 5px',
                      display: 'block',
                    }}
                    className="block text-gray-300 mb-2 font-inter"> Phone Number </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(123) - 456 - 789"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-[#2a2a2a] border-gray-600 text-white placeholder-gray-500 rounded-xl h-10 font-inter focus:border-[#32e4b6] focus:ring-[#32e4b6]"
                  />
                </div>
                <div>
                  <label
                    style={{
                      color: '#b3b3b3',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: 300,
                      lineHeight: '20px',
                      margin: '0px 0px 5px',
                      display: 'block',
                    }}
                  htmlFor="message" className="block text-gray-300 mb-2 font-inter"> Your Message </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write Your Message Here"
                    value={formData.message}
                    onChange={handleTextareaChange}
                    required
                    rows={6}
                    className="bg-[#2a2a2a] border-gray-600 text-white placeholder-gray-500 rounded-xl font-inter focus:border-[#32e4b6] focus:ring-[#32e4b6] resize-none"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-auto bg-[#32e4b6] hover:bg-[#16B896] text-black font-bold py-3 px-8 rounded-xl font-inter transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
        <div>
          <FAQSection />
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
