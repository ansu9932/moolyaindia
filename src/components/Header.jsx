import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMoreDropdownOpen(false);
  }, [location.pathname]);
  const primaryLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About Company',
    path: '/about'
  }, {
    name: 'Our Divisions',
    path: '/divisions'
  }];
  const moreLinks = [{
    name: 'Directors/Leadership',
    path: '/directors'
  }, {
    name: 'Certifications & Registrations',
    path: '/certifications'
  }, {
    name: 'Government Compliance',
    path: '/compliance'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Government Tenders',
    path: '/tenders'
  }, {
    name: 'Careers',
    path: '/careers'
  }, {
    name: 'Contact Us',
    path: '/contact'
  }];
  const isActiveLink = path => location.pathname === path;
  return <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src="https://horizons-cdn.hostinger.com/fc3c2c7f-89e8-45ff-8bd5-6d73e57ac22f/untitled-design-3-edcXy.png" alt="Moolya India Pvt Ltd" className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            <span className="text-xl font-bold text-[#1B5E7A] hidden sm:block">
              Moolya India Pvt Ltd
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {primaryLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-all duration-300 ${isActiveLink(link.path) ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-gray-700 hover:text-[#D4AF37]'} pb-1`}>
                {link.name}
              </Link>)}

            {/* More Dropdown */}
            <div className="relative">
              <button onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)} className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-[#D4AF37] transition-colors duration-300">
                <span>More</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMoreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isMoreDropdownOpen && <motion.div initial={{
                opacity: 0,
                y: -10
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -10
              }} transition={{
                duration: 0.2
              }} className="absolute right-0 mt-2 w-64 bg-[#1B5E7A] rounded-lg shadow-xl overflow-hidden">
                    {moreLinks.map(link => <Link key={link.path} to={link.path} className={`block px-4 py-3 text-sm transition-all duration-300 ${isActiveLink(link.path) ? 'bg-[#D4AF37] text-white font-semibold' : 'text-white hover:bg-[#D4AF37] hover:pl-6'}`}>
                        {link.name}
                      </Link>)}
                  </motion.div>}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-gray-700 hover:text-[#D4AF37] transition-colors duration-300">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} transition={{
        duration: 0.3
      }} className="lg:hidden bg-white border-t shadow-lg overflow-hidden">
            <div className="px-4 py-4 space-y-2">
              {primaryLinks.map(link => <Link key={link.path} to={link.path} className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActiveLink(link.path) ? 'bg-[#D4AF37] text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                  {link.name}
                </Link>)}
              
              <div className="pt-2 mt-2 border-t">
                <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">More</p>
                {moreLinks.map(link => <Link key={link.path} to={link.path} className={`block px-4 py-2 rounded-lg text-sm transition-all duration-300 ${isActiveLink(link.path) ? 'bg-[#1B5E7A] text-white font-medium' : 'text-gray-600 hover:bg-gray-100'}`}>
                    {link.name}
                  </Link>)}
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </header>;
}
export default Header;