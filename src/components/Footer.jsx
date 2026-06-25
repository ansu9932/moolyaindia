import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

function Footer() {
  const divisions = [
    { name: 'Divya Moolya', path: '/divisions' },
    { name: 'Moolya Astro', path: '/divisions' },
    { name: 'Moolya Garments', path: '/divisions' },
    { name: 'Moolya Marketing', path: '/divisions' },
    { name: 'Government Tenders Division', path: '/tenders' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <span className="text-xl font-bold text-[#D4AF37] mb-2 block">
              Moolya India Private Limited
            </span>
            <p className="text-xs text-[#D4AF37]/80 mb-4 font-medium tracking-wide">
              DIVERSIFIED EXCELLENCE, UNIFIED VISION
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p><span className="font-semibold text-white">CIN:</span> U74999UP2024PTC123456</p>
              <p><span className="font-semibold text-white">ROC:</span> ROC-Kolkata</p>
              <p><span className="font-semibold text-white">GSTIN:</span> 19AAUCM3819L1ZN</p>
              <p><span className="font-semibold text-white">PAN:</span> AAUCM3819L</p>
              <p><span className="font-semibold text-white">TAN:</span> CALM32168D</p>
              <p><span className="font-semibold text-white">MSME:</span> UDYAM-WB-12-0103279</p>
              <p className="text-xs text-[#D4AF37] pt-1">Enterprise Type: Micro Enterprise</p>
            </div>
          </div>

          {/* Office Address */}
          <div>
            <span className="text-lg font-semibold text-[#D4AF37] mb-4 block">
              Registered Office
            </span>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <p>
                  Plot No. 274, Tagaria,<br />
                  Contai, Purba Medinipur,<br />
                  West Bengal – 721433
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <p>+91 522 400 1234</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <p>info@moolyaindiapvtltd.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-[#D4AF37]" />
                <p>www.moolyaindiapvtltd.com</p>
              </div>
            </div>
          </div>

          {/* Our Divisions */}
          <div>
            <span className="text-lg font-semibold text-[#D4AF37] mb-4 block">
              Our Divisions
            </span>
            <ul className="space-y-2 text-sm">
              {divisions.map((division) => (
                <li key={division.name}>
                  <Link
                    to={division.path}
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 hover:pl-2 inline-block"
                  >
                    {division.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold text-[#D4AF37] mb-4 block">
              Quick Links
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 hover:pl-2 inline-block"
                >
                  About Company
                </Link>
              </li>
              <li>
                <Link
                  to="/certifications"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 hover:pl-2 inline-block"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  to="/compliance"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 hover:pl-2 inline-block"
                >
                  Government Compliance
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 hover:pl-2 inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="https://7965f097fa.imgdist.com/pub/bfra/br1omv5m/17w/ty4/wwx/Policies.pdf"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 hover:pl-2 inline-block"
                >
                  Policies
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 hover:pl-2 inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Ownership Disclaimer */}
        <div className="border-t border-[#D4AF37]/30 pt-8 mb-8">
          <div className="bg-gray-800/50 border border-[#D4AF37]/20 rounded-lg p-6">
            <span className="font-semibold text-[#D4AF37] text-sm uppercase tracking-wide block mb-2">
              Ownership Disclaimer
            </span>
            <p className="text-xs text-gray-400 leading-relaxed">
              Moolya India Private Limited is an independent corporate entity. All divisions operating under the Moolya brand 
              (including Divya Moolya, Moolya Astro, Moolya Garments, Moolya Marketing, and Government Tenders Division) are 
              wholly owned subsidiaries or business units of Moolya India Private Limited. No external parties hold ownership 
              stakes in these divisions unless explicitly stated in official company documentation. All business operations 
              are conducted in strict compliance with Indian corporate and regulatory laws.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#D4AF37]/30 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Moolya India Private Limited. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            CIN: U74999UP2024PTC123456 | Registered in West Bengal, India
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;