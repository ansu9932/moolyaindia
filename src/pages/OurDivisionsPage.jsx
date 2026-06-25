import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Star, Shirt, Moon, FileText } from 'lucide-react';

function OurDivisionsPage() {
  const divisions = [
    {
      name: 'Divya Moolya',
      description: '🪔 Maa Kamakhya Divine Protection Kit – Product Description.',
      icon: <Sparkles className="w-16 h-16" />,
      website: 'https://divyamoolya.in/',
      features: [
        '🔴 Spiritually Energized (Siddh) through sacred rituals',
        '🐚 Includes Abhimantrit Cowrie & Siddh Lal Kapda',
        '🪔 Energized Red Sindoor prepared via Maha Yagya',
        '📿 Divine Blessed Locket for daily protection',
        '🧿 Protection from Evil Eye & Negative Energy',
        '🔮 Believed to reduce effects of Black Magic',
        '💰 Attracts Prosperity, Success & Financial Growth',
        '❤️ Supports Love, Harmony & Relationship Positivity',
        '🏠 Suitable for Home, Shop, Office & Vehicle',
        '🙏 Prepared under Maa Kamakhya Devi’s blessings',
        '🔥 Ritual purified & mantra activated',
        '🎁 Ideal for personal use or spiritual gifting'
      ],
      directLink: true
    },
    {
      name: 'Moolya Astro',
      description: 'Professional astrology consultation platform offering personalized readings, horoscope analysis, and real-time chat with certified astrologers.',
      icon: <Star className="w-16 h-16" />,
      website: '#',
      features: ['Personal Consultations', 'Vedic Astrology', 'Live Chat Services', 'Horoscope Predictions']
    },
    {
      name: 'Moolya Garments',
      description: 'Quality apparel trading and distribution network specializing in sustainable fashion and traditional garments for domestic and international markets.',
      icon: <Shirt className="w-16 h-16" />,
      website: '#',
      features: ['Wholesale Trading', 'Retail Distribution', 'Sustainable Fashion', 'Traditional Wear']
    },
    {
  name: 'Noor-E-Moolya',
  description: '🕌 Noor-E-Moolya Sacred Barakah Kit – Under the spiritual guidance of Islamic faith and prepared with deep remembrance (Dhikr) of Allah, this blessed kit is thoughtfully assembled to inspire faith, purity, and daily spiritual mindfulness. Includes Ayatul Kursi Engraved Coins (2 pieces) and Alcohol-Free Attar. Note: This is a faith-based devotional product. All protection and benefit come only from Allah.',
  icon: <Moon className="w-16 h-16" />,
  website: 'https://noor-e-moolya-builder-hd8cwzw48e9y2mmd.hostingersite.com/',
  features: [
    '🪙 Ayatul Kursi Engraved Coins (2 Pieces)',
    '🌿 Alcohol-Free Attar (Fragrance)',
    '🕌 Encourages Remembrance (Dhikr)',
    '✨ Promotes Spiritual Mindfulness',
    '🎁 Ideal for personal use or gifting'
  ],
  directLink: true
},
    {
      name: 'Government Tenders Division',
      description: 'Specialized services for government tender participation, documentation, compliance management, and contract administration for public sector projects.',
      icon: <FileText className="w-16 h-16" />,
      website: '#',
      features: ['Tender Documentation', 'Compliance Services', 'Bid Management', 'Contract Administration']
    }
  ];

  const handleToast = () => {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg z-50';
    toast.textContent = '🚧 This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  };

  return (
    <>
      <Helmet>
        <title>Our Business Divisions - Moolya India Pvt Ltd</title>
        <meta
          name="description"
          content="Explore Moolya India's five specialized business divisions: Divya Moolya, Moolya Astro, Moolya Garments, Moolya Marketing, and Government Tenders Division."
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Business Divisions</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Five specialized divisions delivering excellence across diverse sectors
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
                Moolya India Private Limited operates through five distinct business divisions, each specializing
                in its respective domain. Our diversified portfolio allows us to serve a wide range of market
                segments while maintaining operational excellence and quality standards across all divisions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divisions Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {divisions.map((division, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300
                           overflow-hidden border-2 border-[#D4AF37] transform hover:scale-105"
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-br from-[#1B5E7A] to-[#2A7A9A] p-8 text-center">
                    <div className="text-[#D4AF37] mb-4 flex justify-center">
                      {division.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{division.name}</h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed min-h-[100px]">
                      {division.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-[#1B5E7A] mb-3 uppercase">
                        Key Features:
                      </p>
                      <ul className="space-y-2">
                        {division.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <span className="text-[#D4AF37] mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visit Website Button */}
                    {division.directLink ? (
                      <a
                        href={division.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#1B5E7A]
                                 text-white font-semibold rounded-lg hover:bg-[#D4AF37] transition-all
                                 duration-300 transform hover:scale-105"
                      >
                        Visit Website
                        <ExternalLink className="ml-2 w-5 h-5" />
                      </a>
                    ) : (
                      <button
                        onClick={handleToast}
                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#1B5E7A]
                                 text-white font-semibold rounded-lg hover:bg-[#D4AF37] transition-all
                                 duration-300 transform hover:scale-105"
                      >
                        Visit Website
                        <ExternalLink className="ml-2 w-5 h-5" />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OurDivisionsPage;