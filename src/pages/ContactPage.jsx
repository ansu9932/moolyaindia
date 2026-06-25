import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Globe } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Form Submitted!",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Moolya India Private Limited</title>
        <meta 
          name="description" 
          content="Get in touch with Moolya India Private Limited. Visit our office in West Bengal or contact us via phone, email, or our online form."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1B5E7A] to-[#2A7A9A] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Mail className="w-20 h-20 text-[#D4AF37] mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                We'd love to hear from you. Get in touch with our team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <MapPin className="w-8 h-8" />,
                  title: 'Office Address',
                  details: ['Plot No. 274, Tagaria', 'Contai, Purba Medinipur', 'West Bengal – 721433']
                },
                {
                  icon: <Phone className="w-8 h-8" />,
                  title: 'Phone',
                  details: ['+91 522 400 1234', 'Mon-Sat: 9am-6pm']
                },
                {
                  icon: <Mail className="w-8 h-8" />,
                  title: 'Email',
                  details: ['info@moolyaindiapvtltd.com', 'support@moolyaindiapvtltd.com']
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: 'Website',
                  details: ['www.moolyaindiapvtltd.com']
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 border-4 border-[#D4AF37] text-center 
                           hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-[#1B5E7A] mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#1B5E7A] mb-4">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 bg-gradient-to-br from-[#1B5E7A]/5 to-[#D4AF37]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-[#D4AF37]"
              >
                <h2 className="text-3xl font-bold text-[#D4AF37] mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#D4AF37] 
                               focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 
                               text-gray-900 bg-white"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#D4AF37] 
                               focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 
                               text-gray-900 bg-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#D4AF37] 
                               focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 
                               text-gray-900 bg-white"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#D4AF37] 
                               focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 
                               text-gray-900 bg-white"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#D4AF37] 
                               focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 resize-none 
                               text-gray-900 bg-white"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-4 bg-[#1B5E7A] text-white 
                             font-bold rounded-lg border-4 border-[#D4AF37] hover:bg-[#D4AF37] 
                             hover:border-[#1B5E7A] hover:text-[#1B5E7A] transition-all duration-300 
                             transform hover:scale-105 shadow-lg"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </motion.div>

              {/* Map & Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Map Placeholder */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-[#D4AF37] h-80">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin className="w-16 h-16 text-[#1B5E7A] mx-auto mb-4" />
                      <p className="text-gray-600 font-semibold">Interactive Map</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Visit us at our registered office in Contai, West Bengal
                      </p>
                    </div>
                  </div>
                </div>

                {/* Company Details */}
                <div className="bg-gradient-to-br from-[#1B5E7A] to-[#2A7A9A] rounded-2xl shadow-2xl 
                             p-8 border-4 border-[#D4AF37] text-white">
                  <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">Company Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-[#D4AF37] uppercase">CIN</p>
                      <p className="text-lg">U74999UP2024PTC123456</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#D4AF37] uppercase">GST</p>
                      <p className="text-lg">19AAUCM3819L1ZN</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#D4AF37] uppercase">PAN</p>
                      <p className="text-lg">AAUCM3819L</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Division Contacts */}
       <section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Division-Specific Inquiries</h2>
      <p className="text-xl text-gray-600">Contact our specialized divisions directly</p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { name: 'Divya Moolya', email: 'info@divyamoolya.in' },
        { name: 'Moolya Astro', email: 'astro@moolyaindiapvtltd.com' },
        { name: 'Moolya Garments', email: 'garments@moolyaindiapvtltd.com' },
        { name: 'Moolya Marketing', email: 'marketing@moolyaindiapvtltd.com' },
        { name: 'Government Tenders', email: 'tenders@moolyaindiapvtltd.com' }
      ].map((division, index) => {
        
        // Simple email obfuscation (bot protection)
        const encodedEmail = division.email.replace('@', ' [at] ');

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-xl shadow-lg p-6 border-2 border-[#D4AF37] text-center"
          >
            <h3 className="text-lg font-bold text-[#1B5E7A] mb-2">{division.name}</h3>

            {/* Clickable Email */}
            <a
              href={`mailto:${division.email}`}
              className="text-sm text-gray-600 hover:text-[#1B5E7A] transition"
              rel="noopener noreferrer"
            >
              {encodedEmail}
            </a>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>
      </div>
    </>
  );
}

export default ContactPage;