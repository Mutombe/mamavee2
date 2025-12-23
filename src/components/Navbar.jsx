import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaTiktok } from 'react-icons/fa';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { RiMovie2Line, RiUserStarLine, RiContactsLine, RiHome5Line } from 'react-icons/ri';
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: RiHome5Line },
    { name: 'About', path: '/about', icon: RiUserStarLine },
    { name: 'Content', path: '/content', icon: RiMovie2Line },
    { name: 'Contact', path: '/contact', icon: RiContactsLine },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: '#' },
    { icon: FaInstagram, href: '#' },
    { icon: FaYoutube, href: '#' },
    { icon: FaTiktok, href: '#' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled
          ? 'bg-dark-900/80 backdrop-blur-xl py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="relative group">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-heading font-black tracking-tighter text-white"
          >
            MAMA <span className="text-gold-500 group-hover:text-white transition-colors duration-300">VEE</span>
          </motion.div>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="gellix-font flex items-center space-x-8 bg-white/5 px-8 py-3 rounded-full border border-white/5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative group flex items-center gap-2"
              >
                <span className={`gellix-font text-sm font-medium transition-colors duration-300 ${location.pathname === link.path ? 'text-gold-500' : 'text-gray-300 group-hover:text-white'
                  }`}>
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 border-l border-white/10 pl-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-gold-500 transition-colors transform hover:scale-110"
              >
                <social.icon />
              </a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="gellix-font px-6 py-2.5 bg-gradient-to-r from-gold-500 to-gold-400 text-dark-900 font-bold rounded-full hover:shadow-[0_0_20px_rgba(204,154,23,0.3)] transition-all"
          >
            Book Now
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} className="text-white" /> : <HiMenuAlt4 size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full bg-dark-900 z-40 flex flex-col pt-24 px-6 md:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 text-2xl font-bold ${location.pathname === link.path ? 'text-gold-500' : 'text-white'
                      }`}
                  >
                    <link.icon className={location.pathname === link.path ? 'text-gold-500' : 'text-gray-500'} />
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-12 border-t border-white/10"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-gray-400 uppercase tracking-widest text-sm">Follow Us</span>
                <div className="flex space-x-6">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.href} className="text-white hover:text-gold-500 text-xl">
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
              <button className="w-full py-4 bg-gold-500 text-dark-900 font-bold rounded-xl text-lg"
                onClick={() => {
                  navigate('/contact');
                }}>
                Book Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
