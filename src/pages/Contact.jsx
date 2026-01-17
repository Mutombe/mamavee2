import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [contactMethod, setContactMethod] = useState('whatsapp');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const constructMessage = () => {
    const { firstName, lastName, email, phone, subject, message } = formData;
    const fullName = `${firstName} ${lastName}`.trim();
    
    let messageText = `Hello! 👋\n\n`;
    messageText += `*Name:* ${fullName || 'Not provided'}\n`;
    messageText += `*Email:* ${email || 'Not provided'}\n`;
    if (phone) messageText += `*Phone:* ${phone}\n`;
    messageText += `*Subject:* ${subject}\n\n`;
    messageText += `*Message:*\n${message || 'No message provided'}`;
    
    return messageText;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const messageText = constructMessage();
    
    if (contactMethod === 'whatsapp') {
      // WhatsApp URL
      const whatsappNumber = '263716238857';
      const encodedMessage = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    } else {
      // Email mailto link
      const emailAddress = 'admin@mamavee.co.zw';
      const subject = encodeURIComponent(`${formData.subject} - Contact from ${formData.firstName} ${formData.lastName}`);
      const body = encodeURIComponent(messageText);
      const mailtoUrl = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
    }
  };

  const contactMethods = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: FaWhatsapp,
      color: 'from-green-600 to-green-500',
      hoverColor: 'hover:border-green-500/50',
      description: 'Get instant reply via WhatsApp',
      badge: 'Fastest Response'
    },
    {
      id: 'email',
      name: 'Email',
      icon: MdEmail,
      color: 'from-blue-600 to-blue-500',
      hoverColor: 'hover:border-blue-500/50',
      description: 'Send us a detailed email',
      badge: 'Professional'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-dark-900 flex flex-col">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-dark-800 via-dark-900 to-dark-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-500/5 skew-x-12 transform translate-x-20"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/20 border border-gold-500/30 rounded-full mb-6"
          >
            <FaPaperPlane className="text-gold-500" />
            <span className="text-gold-400 font-bold text-sm">LET'S CONNECT</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-black text-white mb-6"
          >
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="gellix-font text-gray-400 max-w-2xl mx-auto text-lg"
          >
            For bookings, collaborations, press inquiries, or just to say hello. We'd love to hear from you.
          </motion.p>
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

            <div className="space-y-6 mb-12">
              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/263716238857"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start space-x-6 group p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <FaWhatsapp size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-lg font-bold text-white">WhatsApp</h4>
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">
                      Fastest
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2">+263 71 623 8857</p>
                  <p className="gellix-font text-gray-500 text-sm">Click to chat instantly</p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start space-x-6 group p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Email Us</h4>
                  <p className="gellix-font text-gray-400 hover:text-gold-400 transition-colors cursor-pointer">
                    admin@mamavee.co.zw
                  </p>
                  <p className="gellix-font text-gray-400 hover:text-gold-400 transition-colors cursor-pointer">
                    press@mamavee.co.zw
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start space-x-6 group p-6 rounded-2xl bg-gradient-to-br from-gold-500/10 to-gold-600/5 border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-600 to-gold-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <FaPhoneAlt size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Call Us</h4>
                  <p className="gellix-font  text-gray-400">+263 71 623 8857</p>
                  <p className="gellix-font text-gray-500 text-sm">(Mon-Fri, 9am-5pm CAT)</p>
                </div>
              </motion.div>

              {/* Office */}
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start space-x-6 group p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Office</h4>
                  <p className="gellix-font text-gray-400">42 Glamorgan Avenue, Harare, Zimbabwe</p>
                  <p className="gellix-font text-gray-500 text-sm">Available for meetings</p>
                </div>
              </motion.div>
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-white/10">
              <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                <span>Follow Mama Vee</span>
                <span className="text-gold-500">✨</span>
              </h4>
              <div className="flex space-x-4">
                {[
                  { Icon: FaFacebookF, url: 'https://facebook.com/mamavee', color: 'hover:bg-blue-600' },
                  { Icon: FaInstagram, url: 'https://instagram.com/mamavee', color: 'hover:bg-pink-600' },
                  { Icon: FaYoutube, url: 'https://youtube.com/@mamavee', color: 'hover:bg-red-600' },
                  { Icon: FaXTwitter, url: 'https://twitter.com/mamavee', color: 'hover:bg-black' }
                ].map(({ Icon, url, color }, index) => (
                  <motion.a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 ${color} hover:text-white transition-all duration-300 border border-white/10 hover:border-transparent shadow-lg`}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-dark-800 p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-6">Send a Message</h3>

            {/* Contact Method Selection */}
            <div className="mb-8">
              <label className="block text-gray-400 text-sm font-bold mb-4">Choose Contact Method</label>
              <div className="grid grid-cols-2 gap-4">
                {contactMethods.map((method) => (
                  <motion.button
                    key={method.id}
                    type="button"
                    onClick={() => setContactMethod(method.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                      contactMethod === method.id
                        ? `bg-gradient-to-br ${method.color} border-transparent text-white shadow-lg`
                        : `bg-dark-900 border-white/10 text-gray-400 ${method.hoverColor}`
                    }`}
                  >
                    {contactMethod === method.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center"
                      >
                        <FaCheckCircle className={`text-${method.id === 'whatsapp' ? 'green' : 'blue'}-600`} size={16} />
                      </motion.div>
                    )}
                    <method.icon className="text-2xl mb-2 mx-auto" />
                    <p className="gellix-font font-bold text-sm">{method.name}</p>
                    <p className={`gellix-font text-xs mt-1 ${contactMethod === method.id ? 'text-white/80' : 'text-gray-500'}`}>
                      {method.description}
                    </p>
                    {method.badge && (
                      <span className={`inline-block mt-2 px-2 py-0.5 rounded-full text-xs font-bold ${
                        contactMethod === method.id ? 'bg-white/20' : 'bg-gold-500/20 text-gold-400'
                      }`}>
                        {method.badge}
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-600"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-600"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2">
                    Phone Number {contactMethod === 'whatsapp' && <span className="text-green-500">(Recommended)</span>}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-600"
                    placeholder="+263 71 234 5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-bold mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-colors"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Booking Request">Booking Request</option>
                  <option value="Brand Partnership">Brand Partnership</option>
                  <option value="Press/Media">Press/Media</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Fan Message">Fan Message</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-bold mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-600 resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
                <p className="text-gray-500 text-xs mt-2">
                  {formData.message.length} / 500 characters
                </p>
              </div>

              {/* Info Box */}
              <div className={`p-4 rounded-lg border ${
                contactMethod === 'whatsapp' 
                  ? 'bg-green-500/10 border-green-500/30' 
                  : 'bg-blue-500/10 border-blue-500/30'
              }`}>
                <div className="flex items-start gap-3">
                  {contactMethod === 'whatsapp' ? (
                    <FaWhatsapp className="text-green-400 text-xl flex-shrink-0 mt-0.5" />
                  ) : (
                    <MdEmail className="text-blue-400 text-xl flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className={`font-bold text-sm ${
                      contactMethod === 'whatsapp' ? 'text-green-400' : 'text-blue-400'
                    } mb-1`}>
                      {contactMethod === 'whatsapp' ? 'WhatsApp Message' : 'Email Client'}
                    </p>
                    <p className="gellix-font text-gray-400 text-xs leading-relaxed">
                      {contactMethod === 'whatsapp' 
                        ? 'Clicking submit will open WhatsApp with your message pre-filled. You can edit it before sending.'
                        : 'Clicking submit will open your email client with the message pre-filled. You can edit it before sending.'
                      }
                    </p>
                  </div>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 font-bold rounded-lg transition-all transform flex items-center justify-center gap-2 shadow-lg ${
                  contactMethod === 'whatsapp'
                    ? 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-500 hover:to-green-400 shadow-green-500/30'
                    : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400 shadow-blue-500/30'
                }`}
              >
                {contactMethod === 'whatsapp' ? (
                  <>
                    <FaWhatsapp size={20} /> Open WhatsApp
                  </>
                ) : (
                  <>
                    <MdEmail size={20} /> Open Email Client
                  </>
                )}
              </motion.button>
            </form>

            {/* Privacy Note */}
            <p className="gellix-font text-gray-500 text-xs text-center mt-6">
              🔒 Your information is secure and will only be used to respond to your inquiry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600/10 via-dark-900 to-gold-500/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, #10b981 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Need a Quick Response?
          </h3>
          <p className="gellix-font text-gray-400 mb-8 max-w-2xl mx-auto">
            For the fastest response, reach out via WhatsApp. We typically respond within minutes during business hours.
          </p>
          <motion.a
            href="https://wa.me/263716238857?text=Hello%20Mama%20Vee!%20I%20have%20an%20inquiry%20about..."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-full shadow-lg hover:shadow-green-500/50 transition-all"
          >
            <FaWhatsapp size={24} /> Chat on WhatsApp
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Contact;