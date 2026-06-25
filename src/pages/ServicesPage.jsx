import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Shirt, TrendingUp, FileText, ArrowRight } from 'lucide-react';

function ServicesPage() {
  const services = [
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: 'E-commerce Solutions',
      category: 'Moolya Coins',
      description: 'Premium online marketplace for rare coins and currency collectibles with secure transactions and authentication services.',
      features: [
        'Rare coin trading platform',
        'Authentication and grading',
        'Secure payment gateway',
        'Global shipping services',
        'Collection management tools'
      ],
      color: 'from-[#1B5E7A] to-[#2A7A9A]'
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: 'Astrology Services',
      category: 'Moolya Astro',
      description: 'Professional astrology consultations, personalized horoscopes, and real-time chat with certified astrologers.',
      features: [
        'Personal consultation sessions',
        'Vedic astrology readings',
        'Birth chart analysis',
        'Live chat with astrologers',
        'Compatibility reports'
      ],
      color: 'from-purple-600 to-indigo-600'
    },
    {
      icon: <Shirt className="w-12 h-12" />,
      title: 'Apparel Trading',
      category: 'Moolya Garments',
      description: 'Quality garment trading and distribution with focus on sustainable fashion and traditional wear.',
      features: [
        'Wholesale garment supply',
        'Retail distribution network',
        'Sustainable fashion lines',
        'Traditional ethnic wear',
        'Custom bulk orders'
      ],
      color: 'from-green-600 to-teal-600'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Digital Marketing',
      category: 'Moolya Marketing',
      description: 'Comprehensive digital marketing solutions for brand growth, online visibility, and customer acquisition.',
      features: [
        'SEO & SEM services',
        'Social media management',
        'Content marketing',
        'Brand strategy consulting',
        'Performance analytics'
      ],
      color: 'from-orange-600 to-red-600'
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Government Tender Services',
      category: 'Government Tenders Division',
      description: 'Expert guidance for government tender participation, documentation, and contract management.',
      features: [
        'Tender identification',
        'Bid preparation & submission',
        'Compliance documentation',
        'Contract administration',
        'Post-award support'
      ],
      color: 'from-blue-600 to-cyan-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Moolya India Pvt Ltd</title>
        <meta 
          name="description" 
          content="Explore comprehensive services offered by Moolya India: E-commerce, Astrology Services, Digital Marketing, Apparel Trading, and Government Tender Services."
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Comprehensive solutions across multiple business verticals
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#D4AF37]"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Moolya India Private Limited offers a diverse portfolio of services designed to meet the evolving 
                needs of businesses and individuals. Through our specialized divisions, we deliver quality solutions 
                with professional expertise, innovative approaches, and customer-centric service delivery.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-[#D4AF37] 
                           hover:shadow-3xl transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Service Header */}
                    <div className={`bg-gradient-to-br ${service.color} p-8 lg:p-10 text-white flex flex-col justify-center`}>
                      <div className="text-[#D4AF37] mb-6">{service.icon}</div>
                      <p className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wide mb-2">
                        {service.category}
                      </p>
                      <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                      <p className="text-white/90 leading-relaxed">{service.description}</p>
                    </div>

                    {/* Features List */}
                    <div className="lg:col-span-2 p-8 lg:p-10 bg-gradient-to-br from-gray-50 to-white">
                      <h4 className="text-xl font-bold text-[#1B5E7A] mb-6">Key Features & Benefits</h4>
                      <ul className="space-y-4 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37] text-white 
                                         flex items-center justify-center text-sm font-bold mr-4 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="text-gray-700 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => {
                          const toast = document.createElement('div');
                          toast.className = 'fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg z-50';
                          toast.textContent = '🚧 This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀';
                          document.body.appendChild(toast);
                          setTimeout(() => toast.remove(), 3000);
                        }}
                        className="inline-flex items-center px-6 py-3 bg-[#1B5E7A] text-white font-semibold 
                                 rounded-lg hover:bg-[#D4AF37] transition-all duration-300 transform hover:scale-105"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-16 bg-gradient-to-br from-[#1B5E7A]/5 to-[#D4AF37]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Why Choose Moolya India</h2>
              <p className="text-xl text-gray-600">Excellence in service delivery across all verticals</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Expert Team',
                  description: 'Skilled professionals with industry expertise'
                },
                {
                  title: 'Quality Focus',
                  description: 'Commitment to delivering superior quality services'
                },
                {
                  title: 'Customer-Centric',
                  description: 'Solutions tailored to your specific needs'
                },
                {
                  title: 'Transparent Pricing',
                  description: 'Clear, competitive pricing with no hidden costs'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 border-4 border-[#D4AF37] text-center 
                           hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <h3 className="text-xl font-bold text-[#1B5E7A] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#1B5E7A] to-[#2A7A9A] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8">
                Contact us today to discuss how our services can benefit your business
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#D4AF37] text-[#1B5E7A] font-bold 
                         rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 
                         shadow-lg"
              >
                Contact Us Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ServicesPage;