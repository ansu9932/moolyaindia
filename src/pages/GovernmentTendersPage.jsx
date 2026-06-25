import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, CheckCircle2, Search, FileCheck, Award, Users } from 'lucide-react';

function GovernmentTendersPage() {
  const services = [
    {
      icon: <Search className="w-10 h-10" />,
      title: 'Tender Identification',
      description: 'We identify relevant government tenders matching your business capabilities and help you find the right opportunities.'
    },
    {
      icon: <FileCheck className="w-10 h-10" />,
      title: 'Bid Preparation',
      description: 'Expert assistance in preparing comprehensive bid documents that meet all technical and financial requirements.'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Compliance Support',
      description: 'Ensure all regulatory and compliance requirements are met for successful tender participation.'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Contract Management',
      description: 'Post-award contract administration and execution support to ensure smooth project delivery.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Government Tenders Division - Moolya India Pvt Ltd</title>
        <meta 
          name="description" 
          content="Expert government tender services including tender identification, bid preparation, compliance support, and contract management from Moolya India Private Limited."
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
              <FileText className="w-20 h-20 text-[#D4AF37] mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Government Tenders Division</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Your trusted partner for government tender participation and contract management
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-[#D4AF37]"
            >
              <h2 className="text-3xl font-bold text-[#D4AF37] mb-6 text-center">About Our Division</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Government Tenders Division of Moolya India Private Limited specializes in providing comprehensive 
                services for businesses looking to participate in government procurement processes. We help organizations 
                navigate the complex world of government tenders, from identification to execution.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With deep understanding of government procurement regulations, compliance requirements, and bidding 
                processes, we ensure our clients have the best possible chance of success in securing government contracts.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gradient-to-br from-[#1B5E7A]/5 to-[#D4AF37]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Our Services</h2>
              <p className="text-xl text-gray-600">End-to-end tender management solutions</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
                           p-8 border-4 border-[#D4AF37] transform hover:-translate-y-1"
                >
                  <div className="text-[#1B5E7A] mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-[#1B5E7A] mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Flow */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Our Process</h2>
              <p className="text-xl text-gray-600">A systematic approach to tender success</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: '1', title: 'Consultation', desc: 'Understand your capabilities' },
                { step: '2', title: 'Research', desc: 'Identify relevant tenders' },
                { step: '3', title: 'Preparation', desc: 'Prepare bid documents' },
                { step: '4', title: 'Submission', desc: 'Submit complete bids' },
                { step: '5', title: 'Support', desc: 'Post-award assistance' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 text-center 
                           border-4 border-[#D4AF37] relative"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1B5E7A] text-white flex items-center 
                               justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#1B5E7A] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                      <div className="w-4 h-0.5 bg-[#D4AF37]"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gradient-to-r from-[#1B5E7A] to-[#2A7A9A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Why Work With Us</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                'Expert knowledge of government procurement',
                'Proven track record of successful bids',
                'Comprehensive compliance support',
                'Time-saving professional services',
                'Transparent pricing structure',
                'Post-award contract support'
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl 
                           border-2 border-[#D4AF37]"
                >
                  <CheckCircle2 className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#1B5E7A] mb-6">
                Ready to Explore Government Opportunities?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today for a consultation on government tender opportunities
              </p>
              <button
                onClick={() => {
                  const toast = document.createElement('div');
                  toast.className = 'fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg z-50';
                  toast.textContent = '🚧 This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀';
                  document.body.appendChild(toast);
                  setTimeout(() => toast.remove(), 3000);
                }}
                className="px-8 py-4 bg-[#1B5E7A] text-white font-bold rounded-lg border-4 border-[#D4AF37] 
                         hover:bg-[#D4AF37] hover:border-[#1B5E7A] transition-all duration-300 transform 
                         hover:scale-105 shadow-xl"
              >
                Get In Touch
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default GovernmentTendersPage;