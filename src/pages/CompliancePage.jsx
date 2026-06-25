import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, FileCheck, Building2, Scale, CheckCircle2, AlertCircle } from 'lucide-react';

function CompliancePage() {
  const complianceAreas = [
    {
      icon: <Building2 className="w-10 h-10" />,
      title: 'Corporate Compliance',
      items: [
        'Annual General Meeting (AGM) conducted as per schedule',
        'Board meetings held quarterly with proper documentation',
        'Maintenance of statutory registers and records',
        'Filing of annual returns with ROC'
      ]
    },
    {
      icon: <FileCheck className="w-10 h-10" />,
      title: 'Financial Compliance',
      items: [
        'Regular GST return filing and tax payments',
        'Income tax compliance and timely TDS deposits',
        'Audited financial statements prepared annually',
        'Proper accounting records maintained'
      ]
    },
    {
      icon: <Scale className="w-10 h-10" />,
      title: 'Regulatory Compliance',
      items: [
        'Adherence to Companies Act, 2013 provisions',
        'Compliance with labor laws and employment regulations',
        'Data protection and privacy law compliance',
        'Industry-specific regulatory requirements'
      ]
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Operational Compliance',
      items: [
        'Quality management systems in place',
        'Health and safety protocols implemented',
        'Environmental compliance measures',
        'Contract and vendor management policies'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Government Compliance & Regulatory Adherence - Moolya India Private Limited</title>
        <meta 
          name="description" 
          content="Moolya India Private Limited maintains full compliance with Companies Act, ROC requirements, GST regulations, and all applicable business laws in India."
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
              <Shield className="w-20 h-20 text-[#D4AF37] mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Government Compliance</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Full regulatory adherence and transparent business operations
              </p>
            </motion.div>
          </div>
        </section>

        {/* CIN Details Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden 
                       border-4 border-[#D4AF37]"
            >
              <div className="bg-gradient-to-r from-[#1B5E7A] to-[#2A7A9A] p-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Corporate Identity</h2>
                <p className="text-[#D4AF37] text-lg">Moolya India Private Limited</p>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-[#1B5E7A]/5 to-[#D4AF37]/5 p-6 rounded-xl 
                               border-2 border-[#D4AF37]">
                    <p className="text-sm font-semibold text-gray-600 mb-2 uppercase">
                      Corporate Identification Number (CIN)
                    </p>
                    <p className="text-2xl font-bold text-[#1B5E7A]">U74999UP2024PTC123456</p>
                    <div className="flex items-center mt-4 text-green-600">
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      <span className="text-sm font-semibold">Verified & Active</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#1B5E7A]/5 to-[#D4AF37]/5 p-6 rounded-xl 
                               border-2 border-[#D4AF37]">
                    <p className="text-sm font-semibold text-gray-600 mb-2 uppercase">Company Type</p>
                    <p className="text-2xl font-bold text-[#1B5E7A]">Private Limited Company</p>
                    <p className="text-sm text-gray-500 mt-1">Classification: Micro Enterprise</p>
                    <div className="flex items-center mt-3 text-green-600">
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      <span className="text-sm font-semibold">ROC Registered</span>
                    </div>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700">
                  <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Registration Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <ul className="space-y-2">
                      <li><strong>ROC:</strong> ROC-Kolkata</li>
                      <li><strong>GSTIN:</strong> 19AAUCM3819L1ZN</li>
                      <li><strong>PAN:</strong> AAUCM3819L</li>
                    </ul>
                    <ul className="space-y-2">
                      <li><strong>TAN:</strong> CALM32168D</li>
                      <li><strong>MSME/Udyam:</strong> UDYAM-WB-12-0103279</li>
                      <li><strong>Status:</strong> Active & Compliant</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ROC Registration */}
        <section className="py-16 bg-gradient-to-br from-[#1B5E7A]/5 to-[#D4AF37]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-4 border-[#D4AF37]"
            >
              <div className="flex items-center mb-6">
                <Building2 className="w-12 h-12 text-[#1B5E7A] mr-4" />
                <h2 className="text-3xl font-bold text-[#D4AF37]">Registrar of Companies (ROC)</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-[#1B5E7A] mb-4">Registration Details</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-700">ROC Office:</p>
                        <p className="text-gray-600">ROC-Kolkata</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-700">Incorporation Date:</p>
                        <p className="text-gray-600">January 15, 2024</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-700">Company Status:</p>
                        <p className="text-green-600 font-semibold">Active</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-700">Authorized Capital:</p>
                        <p className="text-gray-600">As per MoA</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1B5E7A] mb-4">Annual Compliance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Form AOC-4 (Financial Statements) filed</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Form MGT-7 (Annual Return) filed</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">DIR-3 KYC compliance maintained</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Board resolutions properly documented</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Legal Eligibility */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#1B5E7A] to-[#2A7A9A] text-white rounded-2xl shadow-xl 
                       p-8 md:p-12 border-4 border-[#D4AF37]"
            >
              <div className="text-center mb-8">
                <Scale className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">Legal Eligibility & Rights</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-[#D4AF37]">
                  <h3 className="text-xl font-bold mb-4">Business Operations</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0 mt-1" />
                      <span>Legally authorized to conduct business in India</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0 mt-1" />
                      <span>Can enter into contracts and agreements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0 mt-1" />
                      <span>Eligible to participate in government tenders</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0 mt-1" />
                      <span>Can own property and assets</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-[#D4AF37]">
                  <h3 className="text-xl font-bold mb-4">Legal Standing</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0 mt-1" />
                      <span>Separate legal entity distinct from shareholders</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0 mt-1" />
                      <span>Limited liability protection for shareholders</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0 mt-1" />
                      <span>Perpetual succession guaranteed</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0 mt-1" />
                      <span>Can sue and be sued in company name</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Compliance Areas */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Compliance Framework</h2>
              <p className="text-xl text-gray-600">Comprehensive adherence across all areas</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
                           p-8 border-4 border-[#D4AF37]"
                >
                  <div className="flex items-center mb-6">
                    <div className="text-[#1B5E7A] mr-4">{area.icon}</div>
                    <h3 className="text-2xl font-bold text-[#1B5E7A]">{area.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-16 bg-[#1B5E7A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-[#D4AF37]"
            >
              <div className="flex items-start">
                <AlertCircle className="w-8 h-8 text-[#D4AF37] mr-4 flex-shrink-0 mt-1" />
                <div className="text-white">
                  <h3 className="text-xl font-bold text-[#D4AF37] mb-4">Compliance Statement</h3>
                  <p className="leading-relaxed">
                    All information provided is accurate as of the date of publication. Moolya India Private Limited 
                    is committed to maintaining full compliance with all applicable laws, regulations, and statutory 
                    requirements. We regularly update our compliance status and ensure all filings are made within 
                    prescribed timelines. For verification of any information, stakeholders may refer to official 
                    government portals such as MCA, GST portal, and other relevant authorities.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CompliancePage;