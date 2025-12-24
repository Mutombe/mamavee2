import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (type) => {
    setModalContent(type);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent('');
    document.body.style.overflow = 'unset';
  };

  const privacyPolicyContent = {
    title: "Privacy Policy",
    lastUpdated: "December 2024",
    sections: [
      {
        title: "1. Information We Collect",
        content: "We collect information you provide directly to us, including your name, email address, phone number, and any other information you choose to provide when contacting us or subscribing to our content. We may also collect information about your device and how you interact with our website."
      },
      {
        title: "2. How We Use Your Information",
        content: "We use the information we collect to communicate with you, respond to your inquiries, send you updates about our content and services, improve our website and services, and comply with legal obligations. We may also use your information for marketing purposes with your consent."
      },
      {
        title: "3. Information Sharing",
        content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, as long as they agree to keep this information confidential."
      },
      {
        title: "4. Social Media Integration",
        content: "Our website includes links to social media platforms including Facebook, Instagram, YouTube, and Twitter/X. When you interact with these platforms through our website, they may collect information about you according to their own privacy policies."
      },
      {
        title: "5. Cookies and Tracking",
        content: "We use cookies and similar tracking technologies to enhance your experience on our website, analyze site traffic, and understand where our visitors are coming from. You can control cookies through your browser settings."
      },
      {
        title: "6. Data Security",
        content: "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure."
      },
      {
        title: "7. Your Rights",
        content: "You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us at any time. To exercise these rights, please contact us using the information provided below."
      },
      {
        title: "8. Children's Privacy",
        content: "Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately."
      },
      {
        title: "9. Changes to This Policy",
        content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date."
      },
      {
        title: "10. Contact Us",
        content: "If you have any questions about this Privacy Policy, please contact us at admin@mamavee.co.zw or through our Contact page."
      }
    ]
  };

  const termsOfServiceContent = {
    title: "Terms of Service",
    lastUpdated: "December 2024",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content: "By accessing and using this website, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website or services."
      },
      {
        title: "2. Use License",
        content: "Permission is granted to temporarily access the materials (information or software) on Mama Vee's website for personal, non-commercial viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials, use the materials for any commercial purpose, attempt to decompile or reverse engineer any software contained on the website, remove any copyright or proprietary notations from the materials."
      },
      {
        title: "3. Content Ownership",
        content: "All content on this website, including but not limited to text, images, videos, logos, and graphics, is the property of Mama Vee or its content suppliers and is protected by international copyright laws. The compilation of all content on this site is the exclusive property of Mama Vee."
      },
      {
        title: "4. User Conduct",
        content: "You agree not to use the website to: upload or transmit any material that is unlawful, threatening, abusive, defamatory, or obscene; impersonate any person or entity; interfere with or disrupt the website or servers; attempt to gain unauthorized access to any portion of the website; collect or store personal data about other users."
      },
      {
        title: "5. Intellectual Property",
        content: "The Mama Vee name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Mama Vee. You may not use such marks without our prior written permission."
      },
      {
        title: "6. Third-Party Links",
        content: "Our website may contain links to third-party websites or services that are not owned or controlled by Mama Vee. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services."
      },
      {
        title: "7. Booking and Services",
        content: "When booking Mama Vee for events or services, all arrangements must be confirmed in writing. Cancellation policies and fees will be outlined in the booking agreement. We reserve the right to cancel bookings under certain circumstances with appropriate notice."
      },
      {
        title: "8. Brand Partnerships",
        content: "All brand partnership and collaboration proposals are subject to review and approval. We maintain editorial control over all content created and reserve the right to decline partnerships that don't align with our brand values."
      },
      {
        title: "9. Disclaimer of Warranties",
        content: "The materials on Mama Vee's website are provided on an 'as is' basis. Mama Vee makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property."
      },
      {
        title: "10. Limitation of Liability",
        content: "In no event shall Mama Vee or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Mama Vee's website."
      },
      {
        title: "11. Governing Law",
        content: "These terms and conditions are governed by and construed in accordance with the laws of Zimbabwe, and you irrevocably submit to the exclusive jurisdiction of the courts in that location."
      },
      {
        title: "12. Changes to Terms",
        content: "We reserve the right to modify these terms at any time. Your continued use of the website following any changes indicates your acceptance of the new terms."
      },
      {
        title: "13. Contact Information",
        content: "For any questions regarding these Terms of Service, please contact us at admin@mamavee.co.zw or visit our Contact page."
      }
    ]
  };

  const currentContent = modalContent === 'privacy' ? privacyPolicyContent : termsOfServiceContent;

  return (
    <>
      <footer className="bg-dark-900 border-t border-white/5 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="text-3xl font-heading font-bold text-white mb-6 block">
                MAMA <span className="text-gold-500">VEE</span>
              </Link>
              <p className="gellix-font text-gray-400 max-w-md mb-8 leading-relaxed">
                Empowering, entertaining, and inspiring millions. Join the journey and be part of the movement.
              </p>
              <div className="flex space-x-4">
                {[
                  { Icon: FaFacebookF, url: 'https://facebook.com/mamavee' },
                  { Icon: FaInstagram, url: 'https://instagram.com/mamavee' },
                  { Icon: FaYoutube, url: 'https://youtube.com/@mamavee' },
                  { Icon: FaXTwitter, url: 'https://twitter.com/mamavee' }
                ].map(({ Icon, url }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {['Home', 'About', 'Content', 'Contact'].map((item) => (
                  <li key={item} className="gellix-font">
                    <Link 
                      to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} 
                      className="gellix-font text-gray-400 hover:text-gold-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="gellix-font flex items-start space-x-3 text-gray-400">
                  <FaEnvelope size={20} className="text-gold-500 mt-1 flex-shrink-0" />
                  <a href="mailto:admin@mamavee.co.zw" className="hover:text-gold-500 transition-colors">
                    admin@mamavee.co.zw
                  </a>
                </li>
                <li className="gellix-font flex items-start space-x-3 text-gray-400">
                  <FaMapMarkerAlt size={20} className="text-gold-500 mt-1 flex-shrink-0" />
                  <span>Harare, Zimbabwe</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Mama Vee. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-gray-600">
                Designed by{' '}
                <a 
                  href="https://bitstudio.co.zw" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gold-500 font-bold hover:text-gold-400 transition-colors"
                >
                  Bit Studio
                </a>
              </span>
            </div>
            <div className="flex space-x-6">
              <button
                onClick={() => openModal('privacy')}
                className="gellix-font hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => openModal('terms')}
                className="gellix-font hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-dark-800 rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-gradient-to-br from-dark-800 to-dark-900 border-b border-white/10 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
                    {currentContent.title}
                  </h2>
                  <p className="text-sm text-gray-400">
                    Last Updated: {currentContent.lastUpdated}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-red-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors flex-shrink-0"
                >
                  <MdClose size={24} />
                </motion.button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(85vh-120px)] p-6 md:p-8">
                <div className="space-y-8">
                  {/* Introduction */}
                  <div className="p-6 bg-gold-500/10 border border-gold-500/30 rounded-xl">
                    <p className="text-gray-300 leading-relaxed">
                      {modalContent === 'privacy' 
                        ? "At Mama Vee, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website and services."
                        : "Welcome to Mama Vee's website. By accessing and using our website, you agree to comply with and be bound by the following Terms of Service. Please read these terms carefully before using our services."
                      }
                    </p>
                  </div>

                  {/* Sections */}
                  {currentContent.sections.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                          <span className="text-dark-900 font-bold text-sm">
                            {index + 1}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                            {section.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      </div>
                      {index < currentContent.sections.length - 1 && (
                        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-8" />
                      )}
                    </motion.div>
                  ))}

                  {/* Footer Note */}
                  <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaEnvelope className="text-blue-400 text-sm" />
                      </div>
                      <div>
                        <h4 className="text-blue-400 font-bold mb-2">Questions or Concerns?</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          If you have any questions about {modalContent === 'privacy' ? 'our Privacy Policy' : 'these Terms of Service'}, 
                          please don't hesitate to contact us at{' '}
                          <a href="mailto:admin@mamavee.co.zw" className="text-gold-400 hover:text-gold-300 transition-colors">
                            admin@mamavee.co.zw
                          </a>
                          {' '}or visit our{' '}
                          <Link to="/contact" onClick={closeModal} className="text-gold-400 hover:text-gold-300 transition-colors">
                            Contact page
                          </Link>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="sticky bottom-0 bg-dark-800 border-t border-white/10 p-6 flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={closeModal}
                  className="flex-1 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-lg transition-colors border border-white/10"
                >
                  Close
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    closeModal();
                    // Navigate to contact page
                    window.location.href = '/contact';
                  }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-dark-900 font-bold rounded-lg transition-all shadow-lg"
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;