import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="pt-20 min-h-screen bg-dark-900 flex flex-col">
      {/* Header */}
      <section className="py-20 bg-dark-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-500/5 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-6"
          >
            Get in <span className="text-gold-500">Touch</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            For bookings, collaborations, press inquiries, or just to say hello. We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-heading font-bold text-white mb-8">Contact Information</h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-dark-900 transition-all duration-300">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Email Us</h4>
                  <p className="text-gray-400">bookings@mamavee.com</p>
                  <p className="text-gray-400">press@mamavee.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-dark-900 transition-all duration-300">
                  <FaPhoneAlt size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Call Us</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-gray-500 text-sm">(Mon-Fri, 9am-5pm EST)</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-dark-900 transition-all duration-300">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Office</h4>
                  <p className="text-gray-400">123 Creative Blvd, Suite 400</p>
                  <p className="text-gray-400">Los Angeles, CA 90028</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="text-white font-bold mb-6">Follow Mama Vee</h4>
              <div className="flex space-x-4">
                {[FaFacebookF, FaInstagram, FaYoutube, FaXTwitter].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-dark-800 p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl"
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-bold mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-bold mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-colors">
                  <option>General Inquiry</option>
                  <option>Booking Request</option>
                  <option>Brand Partnership</option>
                  <option>Press/Media</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-bold mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="Tell us more..."
                ></textarea>
              </div>

              <button className="w-full py-4 bg-gold-500 text-dark-900 font-bold rounded-lg hover:bg-gold-400 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
                Send Message <FaPaperPlane size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
