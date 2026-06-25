import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

function DirectorsPage() {
  const directors = [
    {
      name: 'Mukteswar Raul',
      designation: 'Managing Director & CEO',
      image: 'https://7965f097fa.imgdist.com/pub/bfra/br1omv5m/zgb/upw/ncm/IMG_1124.PNG',
      bio: 'Mukteswar Raul leads Moolya India Private Limited with a vision for "Diversified Excellence, Unified Vision". As MD & CEO, he spearheads the company\'s strategic direction, ensuring sustainable growth across all five business divisions while maintaining the highest standards of corporate governance.',
      expertise: ['Strategic Leadership', 'Corporate Vision', 'Business Expansion', 'Stakeholder Management']
    },
    {
      name: 'Ansuman Sahoo',
      designation: 'Director of Operations',
      image: '',
      bio: 'Ansuman Sahoo oversees the day-to-day operations of Moolya India\'s diverse portfolio. His focus on operational efficiency, process optimization, and quality assurance ensures that every division delivers excellence to our customers and partners.',
      expertise: ['Operations Management', 'Process Optimization', 'Quality Control', 'Team Leadership']
    },
    {
      name: 'Sk Jabbar',
      designation: 'Director of Finance & Compliance',
      image: 'https://7965f097fa.imgdist.com/pub/bfra/br1omv5m/tkk/aew/qq4/jabbar%20profosonal%20photo.png',
      bio: 'Sk Jabbar manages the financial health and regulatory compliance of the organization. He ensures strict adherence to all statutory requirements, tax regulations, and financial reporting standards, safeguarding the company\'s fiscal integrity.',
      expertise: ['Financial Management', 'Regulatory Compliance', 'Risk Assessment', 'Corporate Finance']
    }
  ];

  // ✅ Advisor Committee Data
  const advisors = [
    {
      name: 'Prasanna Parida',
      designation: 'Senior Advisor',
      image: 'https://7965f097fa.imgdist.com/pub/bfra/br1omv5m/qeq/de7/bsl/Untitled%20design%20%287%29.png',
      bio: 'Advisor Name provides strategic guidance and expert insights to support the long-term vision and governance of Moolya India Private Limited.',
      expertise: ['Strategic Advisory', 'Business Guidance', 'Industry Expertise', 'Policy Advisory']
    },
     {
      name: 'Brajamohan Mandal',
      designation: 'Senior Advisor',
      image: 'https://7965f097fa.imgdist.com/pub/bfra/br1omv5m/9ye/ne2/08a/Untitled%20design%20%286%29.png',
      bio: 'Provides high-level strategic counsel to strengthen Moolya India Private Limited’s long-term growth roadmap. With deep industry insight and governance experience, he supports leadership in making informed, future-focused business decisions while promoting operational excellence and sustainable value creation.',
      expertise: ['Corporate Strategy', 'Business Transformation', 'Governance & Compliance', 'Risk Management']
    }
  ];

  // ✅ Default image fallback (NEW)
  const DEFAULT_PROFILE_IMAGE =
    'https://ui-avatars.com/api/?name=Profile&background=1B5E7A&color=fff&size=400';

  return (
    <>
      <Helmet>
        <title>Board of Directors - Moolya India Private Limited</title>
        <meta
          name="description"
          content="Meet the Board of Directors of Moolya India Private Limited. Our leadership team brings extensive experience and strategic vision to drive the company's success."
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Board of Directors</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Visionary leadership driving Moolya India Private Limited forward
              </p>
            </motion.div>
          </div>
        </section>

      {/* Directors Profiles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ✅ NEW HEADING */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">
                Directors
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#1B5E7A] mx-auto rounded-full" />
            </motion.div>
            {/* ✅ END HEADING */}

            <div className="space-y-12">
              {directors.map((director, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group bg-white rounded-2xl shadow-xl hover:shadow-3xl overflow-hidden border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-500"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">

                    {/* Image */}
                    <div className="relative lg:col-span-1 overflow-hidden">
                      <div className="aspect-square lg:aspect-auto lg:h-full overflow-hidden">
                        <img
                          src={director.image || DEFAULT_PROFILE_IMAGE}
                          alt={director.name}
                          onError={(e) => {
                            e.currentTarget.src = DEFAULT_PROFILE_IMAGE;
                          }}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E7A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2 p-8 lg:p-10">
                      <h3 className="text-3xl font-bold text-[#1B5E7A] mb-2">
                        {director.name}
                      </h3>

                      <p className="text-xl text-[#D4AF37] font-semibold mb-5">
                        {director.designation}
                      </p>

                      <p className="text-gray-700 leading-relaxed mb-7 text-lg">
                        {director.bio}
                      </p>

                      {director.expertise && director.expertise.length > 0 && (
                        <div>
                          <p className="text-sm font-semibold text-[#1B5E7A] mb-4 uppercase tracking-wider">
                            Areas of Expertise
                          </p>

                          <div className="flex flex-wrap gap-3">
                            {director.expertise.map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-4 py-2 rounded-full text-sm font-semibold
                                   bg-gradient-to-r from-[#D4AF37]/15 to-[#1B5E7A]/10
                                   border border-[#D4AF37]/60
                                   text-[#1B5E7A]
                                   hover:from-[#D4AF37] hover:to-[#D4AF37]
                                   hover:text-white
                                   transition-all duration-300 cursor-default"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      {/* Advisor Committee Members */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">
        Advisor Committee Members
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#1B5E7A] mx-auto rounded-full" />
    </motion.div>

    <div className="space-y-12">
      {advisors.map((advisor, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="group bg-white rounded-2xl shadow-xl hover:shadow-3xl overflow-hidden border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            
            {/* Image */}
            <div className="relative lg:col-span-1 overflow-hidden">
              <img
                src={advisor.image || DEFAULT_PROFILE_IMAGE}
                alt={advisor.name}
                onError={(e) => {
                  e.currentTarget.src = DEFAULT_PROFILE_IMAGE;
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E7A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="lg:col-span-2 p-8 lg:p-10">
              <h3 className="text-3xl font-bold text-[#1B5E7A] mb-2">
                {advisor.name}
              </h3>

              <p className="text-xl text-[#D4AF37] font-semibold mb-5">
                {advisor.designation}
              </p>

              <p className="text-gray-700 leading-relaxed mb-7 text-lg">
                {advisor.bio}
              </p>

              {/* Premium Expertise */}
              {advisor.expertise && advisor.expertise.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-[#1B5E7A] mb-4 uppercase tracking-wider">
                    Areas of Expertise
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {advisor.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full text-sm font-semibold
                                   bg-gradient-to-r from-[#D4AF37]/15 to-[#1B5E7A]/10
                                   border border-[#D4AF37]/60
                                   text-[#1B5E7A]
                                   hover:from-[#D4AF37] hover:to-[#D4AF37]
                                   hover:text-white
                                   transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

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

export default DirectorsPage;