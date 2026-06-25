import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, TrendingUp, Users, Shield } from 'lucide-react';

function AboutCompanyPage() {
  const coreValues = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Integrity',
      description: 'Upholding the highest ethical standards in all our business operations and maintaining transparency with stakeholders.'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Excellence',
      description: 'Committed to delivering superior quality services and continuously improving our offerings across all divisions.'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Innovation',
      description: 'Embracing technology and creative solutions to stay ahead in dynamic market conditions.'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Trust',
      description: 'Building lasting relationships through reliability, accountability, and consistent performance.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Moolya India Private Limited - Our Story, Mission & Values</title>
        <meta 
          name="description" 
          content="Learn about Moolya India Private Limited's journey, mission, vision, and core values. A certified enterprise committed to excellence across multiple business sectors."
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
              <h1 className="text-5xl md:text-6xl font-bold mb-4">About Moolya India</h1>
              <h2 className="text-2xl font-semibold text-[#D4AF37] mb-6">Diversified Excellence, Unified Vision</h2>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                A certified multi-division private limited enterprise built on trust, innovation, and excellence
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-[#D4AF37]"
            >
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6">
                  Moolya India Private Limited was incorporated on January 15, 2024, under the Companies Act, 2013, with the 
                  Corporate Identification Number (CIN) U74999UP2024PTC123456. Registered in West Bengal, India, 
                  our company was founded with a vision to create a diversified enterprise that delivers value 
                  across multiple business sectors.
                </p>
                <p className="mb-6">
                  From our inception, we have been committed to building a business that operates with complete 
                  transparency, regulatory compliance, and ethical practices. Our GST registration (19AAUCM3819L1ZN) 
                  and PAN (AAUCM3819L) reflect our commitment to operating within the legal framework of Indian 
                  business regulations as a Private Limited Company.
                </p>
                <p>
                  Today, Moolya India operates through five distinct divisions - Divya Moolya, Moolya Astro, 
                  Moolya Garments, Moolya Marketing, and our Government Tenders Division. Each division is 
                  managed by dedicated professionals who bring specialized expertise to their respective domains.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-gradient-to-br from-[#1B5E7A]/5 to-[#D4AF37]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-4 border-[#D4AF37]"
            >
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 text-[#1B5E7A] mr-4" />
                <h2 className="text-4xl font-bold text-[#D4AF37]">Our Mission</h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                To create sustainable value for our stakeholders by delivering innovative solutions across diverse 
                business sectors while maintaining the highest standards of integrity, compliance, and customer 
                satisfaction. We strive to build a portfolio of businesses that not only generates economic value 
                but also contributes positively to society and the environment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1B5E7A] to-[#2A7A9A] text-white rounded-2xl shadow-xl p-8 md:p-12 border-4 border-[#D4AF37]"
            >
              <div className="flex items-center mb-6">
                <Eye className="w-12 h-12 text-[#D4AF37] mr-4" />
                <h2 className="text-4xl font-bold text-[#D4AF37]">Our Vision</h2>
              </div>
              <p className="text-xl leading-relaxed">
                To emerge as a respected multi-division enterprise recognized for operational excellence, 
                innovative thinking, and ethical business practices. We envision Moolya India as a trusted 
                name that sets benchmarks in quality, compliance, and customer service across all our business 
                verticals, while creating meaningful employment opportunities and contributing to India's 
                economic growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
                           p-8 border-l-4 border-[#D4AF37] transform hover:-translate-y-1"
                >
                  <div className="text-[#1B5E7A] mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-[#D4AF37] mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Philosophy */}
        <section className="py-16 bg-gradient-to-r from-[#1B5E7A] to-[#2A7A9A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Shield className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-8">Corporate Philosophy</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
                <p>
                  At Moolya India, we believe that sustainable business success comes from a combination of 
                  ethical practices, customer-centric approaches, and continuous innovation. We are committed 
                  to operating with complete transparency and maintaining full compliance with all regulatory 
                  requirements.
                </p>
                <p>
                  Our corporate philosophy centers on three fundamental pillars: <span className="font-bold text-[#D4AF37]">Trust</span>, 
                  <span className="font-bold text-[#D4AF37]"> Quality</span>, and <span className="font-bold text-[#D4AF37]">Growth</span>. 
                  We build trust through consistent performance, deliver quality through attention to detail, 
                  and pursue growth through strategic diversification.
                </p>
                <p>
                  We recognize our responsibility not just to shareholders, but to all stakeholders including 
                  employees, customers, partners, and the communities we serve. This holistic approach guides 
                  our decision-making and shapes our corporate culture.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '5', label: 'Business Divisions' },
                { number: '2024', label: 'Year Established' },
                { number: '100%', label: 'Compliance Rate' },
                { number: '∞', label: 'Growth Potential' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 text-center 
                           border-4 border-[#D4AF37] hover:shadow-2xl transition-all duration-300"
                >
                  <p className="text-5xl font-bold text-[#1B5E7A] mb-2">{stat.number}</p>
                  <p className="text-lg text-gray-600 font-semibold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutCompanyPage;