import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Award, 
  Shield, 
  TrendingUp, 
  Users, 
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Building2,
  FileCheck,
  Globe
} from 'lucide-react';

function HomePage() {
  const divisions = [
    {
      name: 'Divya Moolya',
      description: 'Premium jewelry and accessories collection.',
      icon: '💎',
      link: '/divisions'
    },
    {
      name: 'Moolya Astro',
      description: 'Professional astrology consultation services and real-time chat with certified astrologers.',
      icon: '⭐',
      link: '/divisions'
    },
    {
      name: 'Moolya Garments',
      description: 'Quality apparel trading and distribution with a focus on sustainable fashion.',
      icon: '👔',
      link: '/divisions'
    },
    {
      name: 'Moolya Marketing',
      description: 'Full-service digital marketing agency specializing in brand growth and online presence.',
      icon: '📱',
      link: '/divisions'
    },
    {
      name: 'Government Tenders Division',
      description: 'Expert guidance and services for government tender participation and contract management.',
      icon: '📄',
      link: '/tenders'
    }
  ];

  const trustPoints = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certified',
      description: 'Registered under Companies Act, 2013 with all necessary certifications'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Compliant',
      description: 'Full compliance with GST, ROC, and all regulatory requirements'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Experienced',
      description: 'Industry expertise across multiple business verticals'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Trusted',
      description: 'Building long-term relationships with clients and partners'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovative',
      description: 'Embracing technology and modern business practices'
    }
  ];

  const complianceBadges = [
    { icon: <Building2 className="w-6 h-6" />, label: 'ROC Registered' },
    { icon: <FileCheck className="w-6 h-6" />, label: 'GST Compliant' },
    { icon: <Shield className="w-6 h-6" />, label: 'MSME Certified' },
    { icon: <Globe className="w-6 h-6" />, label: 'PAN Verified' }
  ];

  return (
    <>
      <Helmet>
        <title>Moolya India Private Limited - Diversified Excellence, Unified Vision</title>
        <meta 
          name="description" 
          content="Moolya India Private Limited is a certified multi-division enterprise offering coins trading, astrology services, garments, digital marketing, and government tender solutions."
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-50 via-pink-50 to-blue-100 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNENEFGMzciIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzZoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS00LTR2Mmgydi0yaC0yem0tNCAydjJoMnYtMmgtMnptOCAwdjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-[#1B5E7A] mb-4">
                Moolya India Private Limited
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#D4AF37] mb-6">
                Diversified Excellence, Unified Vision
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
                A certified private limited enterprise delivering innovative solutions across e-commerce, 
                astrology, garments, marketing, and government services. Incorporated Jan 2024.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#1B5E7A] text-white font-semibold rounded-lg 
                         hover:bg-[#D4AF37] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CIN/GST Highlight Section */}
        <section className="py-12 bg-white border-b-4 border-[#D4AF37]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1B5E7A]/10 to-[#D4AF37]/10 p-6 rounded-xl border-2 border-[#D4AF37] text-center"
              >
                <p className="text-sm font-semibold text-gray-600 mb-2">Company Identification Number</p>
                <p className="text-xl font-bold text-[#1B5E7A]">U74999UP2024PTC123456</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-[#1B5E7A]/10 to-[#D4AF37]/10 p-6 rounded-xl border-2 border-[#D4AF37] text-center"
              >
                <p className="text-sm font-semibold text-gray-600 mb-2">GST Number</p>
                <p className="text-xl font-bold text-[#1B5E7A]">19AAUCM3819L1ZN</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-[#1B5E7A]/10 to-[#D4AF37]/10 p-6 rounded-xl border-2 border-[#D4AF37] text-center"
              >
                <p className="text-sm font-semibold text-gray-600 mb-2">PAN Number</p>
                <p className="text-xl font-bold text-[#1B5E7A]">AAUCM3819L</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Government Compliance Badges */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-6">
              {complianceBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-md 
                           border-2 border-[#D4AF37] hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-[#1B5E7A]">{badge.icon}</div>
                  <span className="font-semibold text-gray-700">{badge.label}</span>
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Divisions Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Our Business Divisions</h2>
              <p className="text-xl text-gray-600">Diversified expertise across multiple sectors</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {divisions.map((division, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg 
                           border-2 border-[#D4AF37] hover:shadow-2xl transform hover:-translate-y-2 
                           transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{division.icon}</div>
                  <h3 className="text-2xl font-bold text-[#1B5E7A] mb-3">{division.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{division.description}</p>
                  <Link
                    to={division.link}
                    className="inline-flex items-center text-[#D4AF37] font-semibold hover:text-[#1B5E7A] 
                             transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Moolya Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Why Choose Moolya India</h2>
              <p className="text-xl text-gray-600">Built on trust, driven by excellence</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
                           border-l-4 border-[#D4AF37]"
                >
                  <div className="text-[#1B5E7A] mb-4">{point.icon}</div>
                  <h3 className="text-xl font-bold text-[#1B5E7A] mb-2">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Trust Section */}
        <section className="py-16 bg-[#1B5E7A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Trusted by Partners & Investors</h2>
              <p className="text-xl">Building sustainable business relationships</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Moolya India's professional approach and commitment to compliance makes them a reliable business partner.",
                  author: "Business Partner"
                },
                {
                  quote: "Their diverse portfolio and transparent operations demonstrate strong corporate governance.",
                  author: "Industry Analyst"
                },
                {
                  quote: "A forward-thinking enterprise with solid foundations in regulatory compliance and business ethics.",
                  author: "Corporate Advisor"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-2 border-[#D4AF37]"
                >
                  <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                  <p className="text-[#D4AF37] font-semibold">— {testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#1B5E7A] mb-6">Ready to Work With Us?</h2>
              <p className="text-xl text-gray-700 mb-8">
                Let's discuss how Moolya India can support your business needs
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-[#1B5E7A] text-white text-lg font-bold 
                         rounded-lg border-4 border-[#D4AF37] hover:bg-[#D4AF37] hover:border-[#1B5E7A] 
                         transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Contact Us Today
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;