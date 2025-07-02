import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false); // Add state for submission status

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting to true when the form is submitted

    try {
      // Send data to Formspree
      const response = await fetch('https://formspree.io/f/mvgrykde', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Important for Formspree to return JSON responses
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form fields
      } else {
        // Handle Formspree errors (e.g., invalid email, too many submissions)
        const data = await response.json();
        const errorMessage = data.errors ? data.errors.map((error: any) => error.message).join(', ') : 'There was an issue sending your message.';

        toast({
          title: "Submission Error",
          description: errorMessage,
          variant: "destructive", // Assuming your toast component has a 'destructive' variant
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
      setIsSubmitting(false); // Reset submitting state regardless of success or failure
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | React.ChangeEvent<HTMLTextAreaElement>>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-inter"> Contact Us </h1>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Decorative Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full max-w-md h-96 flex items-end justify-center shadow-2xl">
                <div
                  className="relative z-10 text-center w-full h-full flex items-end justify-center rounded-3xl p-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0,0,0,0), black 90%), url(https://cdn.prod.website-files.com/65d4ed6d925bb1886eaebbc4/662fc06402c4c408808e7506_Background%20pattern%20photo.jpg)",
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
            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-inter"> Name </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="e. g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-[#2a2a2a] border-gray-600 text-white placeholder-gray-500 rounded-xl h-10 font-inter focus:border-[#32e4b6] focus:ring-[#32e4b6]"
                  />
                </div>
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-inter"> Email Address </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="e. g. johndoe@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[#2a2a2a] border-gray-600 text-white placeholder-gray-500 rounded-xl h-10 font-inter focus:border-[#32e4b6] focus:ring-[#32e4b6]"
                  />
                </div>
                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2 font-inter"> Phone Number </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(123) - 456 - 789"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#2a2a2a] border-gray-600 text-white placeholder-gray-500 rounded-xl h-10 font-inter focus:border-[#32e4b6] focus:ring-[#32e4b6]"
                  />
                </div>
                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-inter"> Your Message </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write Your Message Here"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-[#2a2a2a] border-gray-600 text-white placeholder-gray-500 rounded-xl font-inter focus:border-[#32e4b6] focus:ring-[#32e4b6] resize-none"
                  />
                </div>
                {/* Submit Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-auto bg-[#32e4b6] hover:bg-[#16B896] text-black font-bold py-3 px-8 rounded-xl font-inter transition-all duration-300"
                    disabled={isSubmitting} // Disable button while submitting
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'} {/* Change button text based on submission status */}
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