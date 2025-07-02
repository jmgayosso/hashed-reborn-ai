
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-inter">
              Contact Us
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Decorative Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full max-w-md h-96 bg-gradient-to-br from-[#32e4b6] via-teal-400 to-cyan-400 rounded-3xl p-8 flex items-center justify-center shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#32e4b6]/90 via-teal-400/90 to-cyan-400/90 rounded-3xl"></div>
                <div className="relative z-10 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-inter">
                    HOW CAN WE
                    <br />
                    HELP?
                  </h2>
                </div>
                {/* Decorative curves */}
                <div className="absolute top-8 right-8 w-32 h-32 border-4 border-white/20 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-24 h-24 border-4 border-white/20 rounded-full"></div>
                <div className="absolute top-1/2 left-4 w-16 h-16 border-4 border-white/20 rounded-full"></div>
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
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-inter">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="e. g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-[#2a2a2a] border-gray-600 text-white placeholder-gray-500 rounded-xl h-14 font-inter focus:border-[#32e4b6] focus:ring-[#32e4b6]"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-inter">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="e. g. johndoe@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[#2a2a2a] border-gray-600 text-white placeholder-gray-500 rounded-xl h-14 font-inter focus:border-[#32e4b6] focus:ring-[#32e4b6]"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2 font-inter">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(123) - 456 - 789"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#2a2a2a] border-gray-600 text-white placeholder-gray-500 rounded-xl h-14 font-inter focus:border-[#32e4b6] focus:ring-[#32e4b6]"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-inter">
                    Your Message
                  </label>
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
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-auto bg-[#32e4b6] hover:bg-[#16B896] text-black font-bold py-3 px-8 rounded-xl font-inter transition-all duration-300"
                  >
                    Submit
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
