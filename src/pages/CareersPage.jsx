import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Briefcase, Users, TrendingUp, Heart, Award, Coffee } from 'lucide-react';

function CareersPage() {
  const benefits = [
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Career Growth',
      description: 'Clear career progression paths and opportunities for professional development'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive team environment'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Learning & Development',
      description: 'Access to training programs and skill enhancement opportunities'
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and employee wellness programs'
    },
    {
      icon: <Coffee className="w-10 h-10" />,
      title: 'Positive Environment',
      description: 'Inclusive workplace that values diversity and individual contributions'
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: 'Competitive Packages',
      description: 'Market-competitive compensation and benefits packages'
    }
  ];

  const openPositions = [
    {
      title: 'Digital Marketing Manager',
      division: 'Moolya Marketing',
      location: 'Bangalore',
      type: 'Full-time'
    },
    {
      title: 'Business Development Executive',
      division: 'Government Tenders Division',
      location: 'Bangalore',
      type: 'Full-time'
    },
    {
      title: 'E-commerce Specialist',
      division: 'Moolya Coins',
      location: 'Bangalore',
      type: 'Full-time'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Join Moolya India Pvt Ltd</title>
        <meta 
          name="description" 
          content="Explore career opportunities at Moolya India Private Limited. Join our team and grow with a certified multi-division enterprise."
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
              <Briefcase className="w-20 h-20 text-[#D4AF37] mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Build your career with Moolya India - Where talent meets opportunity
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
              className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#D4AF37]"
            >
              <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">Why Join Moolya India?</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Moolya India Private Limited, we believe our people are our greatest asset. We're building a 
                diverse, inclusive workplace where talented individuals can thrive, grow, and make meaningful 
                contributions. Join us in our journey of excellence across multiple business verticals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gradient-to-br from-[#1B5E7A]/5 to-[#D4AF37]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Employee Benefits</h2>
              <p className="text-xl text-gray-600">What we offer our team members</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
                           p-8 border-4 border-[#D4AF37] transform hover:-translate-y-2"
                >
                  <div className="text-[#1B5E7A] mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-[#1B5E7A] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Current Openings</h2>
              <p className="text-xl text-gray-600">Explore opportunities across our divisions</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 border-4 border-[#D4AF37] hover:shadow-2xl 
                           transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-[#1B5E7A] mb-4">{position.title}</h3>
                  <div className="space-y-2 mb-6 text-gray-600">
                    <p><span className="font-semibold">Division:</span> {position.division}</p>
                    <p><span className="font-semibold">Location:</span> {position.location}</p>
                    <p><span className="font-semibold">Type:</span> {position.type}</p>
                  </div>
                  <button
                    onClick={() => {
                      const toast = document.createElement('div');
                      toast.className = 'fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg z-50';
                      toast.textContent = '🚧 This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀';
                      document.body.appendChild(toast);
                      setTimeout(() => toast.remove(), 3000);
                    }}
                    className="w-full py-3 bg-[#1B5E7A] text-white font-semibold rounded-lg 
                             hover:bg-[#D4AF37] transition-all duration-300"
                  >
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-gradient-to-r from-[#1B5E7A] to-[#2A7A9A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Application Process</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Submit Application', desc: 'Apply online with your resume' },
                { step: '2', title: 'Initial Screening', desc: 'Our team reviews applications' },
                { step: '3', title: 'Interviews', desc: 'Meet with our team' },
                { step: '4', title: 'Offer', desc: 'Join the Moolya family' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-[#D4AF37]"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-[#1B5E7A] flex items-center 
                               justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.desc}</p>
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
              <h2 className="text-4xl font-bold text-[#1B5E7A] mb-6">Don't See a Suitable Position?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Send us your resume and we'll keep you in mind for future opportunities
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
                Submit General Application
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CareersPage;