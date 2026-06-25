import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Shield, FileCheck, Building2, CheckCircle2, Globe } from 'lucide-react';

function CertificationsPage() {
  const certifications = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Certificate of Incorporation',
      description: 'Registered under the Companies Act, 2013',
      details: 'CIN: U74999UP2024PTC123456',
      issuer: 'Registrar of Companies, Kolkata'
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: 'GST Registration',
      description: 'Goods and Services Tax Registration',
      details: 'GSTIN: 19AAUCM3819L1ZN',
      issuer: 'GST Department, Government of India'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'MSME/Udyam Certification',
      description: 'Micro Enterprise Registration',
      details: 'UDYAM-WB-12-0103279',
      issuer: 'Ministry of MSME, Government of India'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'PAN Registration',
      description: 'Permanent Account Number',
      details: 'PAN: AAUCM3819L',
      issuer: 'Income Tax Department, India'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'TAN Registration',
      description: 'Tax Deduction Account Number',
      details: 'TAN: CALM32168D',
      issuer: 'Income Tax Department, India'
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: 'Business Licenses',
      description: 'All required business operation licenses',
      details: 'State and local authority approvals',
      issuer: 'Government of West Bengal'
    }
  ];

  const trustBadges = [
    'ROC Verified',
    'GST Compliant',
    'MSME Registered',
    'PAN Verified',
    'Legal Entity',
    'Tax Compliant'
  ];

  return (
    <>
      <Helmet>
        <title>Certifications & Registrations - Moolya India Private Limited</title>
        <meta 
          name="description" 
          content="View all certifications, registrations, and compliance documents for Moolya India Private Limited. We maintain full regulatory compliance with all Indian business laws."
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Certifications & Registrations</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Fully certified and compliant with all regulatory requirements
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-white border-b-4 border-[#D4AF37]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-[#1B5E7A]/10 to-[#D4AF37]/10 
                           px-6 py-3 rounded-full border-2 border-[#D4AF37] shadow-md hover:shadow-lg 
                           transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-gray-700">{badge}</span>
                </motion.div>
              ))}
            </div>
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
                Moolya India Private Limited maintains complete compliance with all applicable laws and regulations 
                governing corporate entities in India. Our certifications and registrations demonstrate our commitment 
                to operating transparently within the legal framework. All documents are regularly updated and maintained 
                in accordance with statutory requirements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Our Certifications</h2>
              <p className="text-xl text-gray-600">Complete regulatory compliance and legal authenticity</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
                           overflow-hidden border-4 border-[#D4AF37] transform hover:-translate-y-2"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-br from-[#1B5E7A] to-[#2A7A9A] p-6 text-center">
                    <div className="text-[#D4AF37] mb-4 flex justify-center">
                      {cert.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 font-medium mb-4">{cert.description}</p>
                    <div className="bg-gradient-to-r from-[#1B5E7A]/5 to-[#D4AF37]/5 rounded-lg p-4 mb-4">
                      <p className="text-sm font-semibold text-[#1B5E7A] mb-1">Details:</p>
                      <p className="text-sm text-gray-600">{cert.details}</p>
                    </div>
                    <div className="flex items-start">
                      <Shield className="w-4 h-4 text-[#D4AF37] mr-2 flex-shrink-0 mt-1" />
                      <p className="text-xs text-gray-500">{cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Verification Section */}
        <section className="py-16 bg-gradient-to-br from-[#1B5E7A]/5 to-[#D4AF37]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-4 border-[#D4AF37]"
            >
              <div className="text-center mb-8">
                <Shield className="w-16 h-16 text-[#1B5E7A] mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">Document Verification</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#1B5E7A] mb-4">How to Verify</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      <span>Visit the MCA (Ministry of Corporate Affairs) website for CIN verification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      <span>Check GST portal for GSTIN validation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      <span>Verify PAN details through Income Tax e-filing portal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      <span>MSME registration can be verified on Udyam portal</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1B5E7A] mb-4">Compliance Status</h3>
                  <div className="space-y-4">
                    {[
                      'Annual Returns Filed',
                      'Financial Statements Updated',
                      'Tax Compliant',
                      'ROC Filings Current',
                      'All Licenses Valid'
                    ].map((status, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">{status}</span>
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact for Documents */}
        <section className="py-16 bg-gradient-to-r from-[#1B5E7A] to-[#2A7A9A] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FileCheck className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6">Need Certified Copies?</h2>
              <p className="text-xl mb-8">
                Request certified copies of our registration documents and certificates
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#D4AF37] text-[#1B5E7A] font-bold 
                         rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 
                         shadow-lg"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CertificationsPage;