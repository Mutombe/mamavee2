import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlay, FaArrowRight, FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaGlobe, FaHandshake, FaMicrophoneAlt, FaTheaterMasks, FaMusic } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import heroImage from '../assets/mamavee-hero.jpg';
import actorImage from '../assets/mamavee-actor.jpg';
import carexImage from '../assets/mamavee-carex.jpg';
import beerImage from '../assets/beerImage.jpg';
import travelImage from '../assets/mamavee-travel.jpg';
import eventImage from '../assets/mamavee-event.jpg';
import worldremitImage from '../assets/mamavee-worldremit.jpg';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="w-full overflow-hidden bg-dark-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            className="w-full h-full"
          >
            <img 
              src={heroImage} 
              alt="Mama Vee Background" 
              className="w-full h-full object-cover opacity-50 object-top"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-transparent to-dark-900/90" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-6">
              <span className="w-12 h-[1px] bg-gold-500"></span>
              <h2 className="text-gold-500 font-medium tracking-[0.3em] uppercase text-sm md:text-base">
                The Official Brand
              </h2>
              <span className="w-12 h-[1px] bg-gold-500"></span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-6xl sm:text-7xl md:text-9xl lg:text-[11rem] font-heading font-black text-white mb-4 sm:mb-6 tracking-tighter leading-none drop-shadow-2xl px-2"
            >
              MAMA <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 relative inline-block">
                VEE
                <motion.span 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="absolute -top-2 -right-4 sm:-top-4 sm:-right-8 md:-top-8 md:-right-12 text-blue-400 text-2xl sm:text-4xl md:text-6xl"
                >
                  <MdVerified />
                </motion.span>
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-gray-200 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md"
            >
              Comedian • Actor • Musician • Brand Ambassador
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col md:flex-row items-center justify-center gap-6"
            >
              <Link to="/content" className="px-10 py-5 bg-gold-500 text-dark-900 font-bold rounded-full hover:bg-gold-400 transition-all transform hover:scale-105 flex items-center gap-3 shadow-[0_0_30px_rgba(204,154,23,0.3)]">
                <FaPlay className="text-sm" /> Watch Latest Video
              </Link>
              <Link to="/contact" className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-3 hover:border-gold-500/50">
                Book Now <FaArrowRight />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-gold-500 uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold-500 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-800 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Facebook', value: '1M+', icon: FaFacebookF, color: 'hover:text-blue-500' },
              { label: 'Instagram', value: '500K+', icon: FaInstagram, color: 'hover:text-pink-500' },
              { label: 'YouTube', value: '250K+', icon: FaYoutube, color: 'hover:text-red-500' },
              { label: 'TikTok', value: '800K+', icon: FaTiktok, color: 'hover:text-cyan-400' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-gold-500/30 transition-all duration-300 group hover:bg-white/10 hover:-translate-y-2"
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-4 text-gray-500 transition-colors duration-300 ${stat.color}`} />
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400 uppercase tracking-wider text-xs font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Entertainer Section (Multi-faceted) */}
      <section className="py-32 bg-dark-900 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-gold-500 font-medium tracking-widest mb-4 uppercase">The Entertainer</h2>
            <h3 className="text-4xl md:text-6xl font-heading font-bold text-white">A Man of Many Talents</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Actor */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden"
            >
              <img src={actorImage} alt="Actor" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mb-4 text-dark-900">
                  <FaTheaterMasks size={24} />
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">The Actor</h4>
                <p className="text-gray-300 line-clamp-3">Bringing characters to life with depth, nuance, and undeniable charisma. From dramatic roles to comedic genius.</p>
              </div>
            </motion.div>

            {/* Card 2: Musician */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden md:-mt-12"
            >
              <img src={eventImage} alt="Musician" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mb-4 text-dark-900">
                  <FaMusic size={24} />
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">The Musician</h4>
                <p className="text-gray-300 line-clamp-3">Captivating audiences with rhythm and soul. Live performances that leave a lasting impression.</p>
              </div>
            </motion.div>

            {/* Card 3: Comedian */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden"
            >
              <img src={heroImage} alt="Comedian" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mb-4 text-dark-900">
                  <FaMicrophoneAlt size={24} />
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">The Comedian</h4>
                <p className="text-gray-300 line-clamp-3">Laughter is the best medicine, and Mama Vee is the doctor. Viral skits and stand-up that hits home.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Ambassador Section */}
      <section className="py-32 bg-dark-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-500/5 -skew-x-12 transform translate-x-32" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-gold-500 font-medium tracking-widest mb-4 uppercase flex items-center gap-2">
                <FaHandshake /> Trusted Partner
              </h2>
              <h3 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
                Brand Ambassador
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Connecting top-tier brands with engaged audiences through authentic storytelling and influence. Proudly representing global names in finance, lifestyle, and health.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <span className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-white font-bold">WorldRemit</span>
                <span className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-white font-bold">Carex</span>
                <span className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-white font-bold">Doves</span>
              </div>

              <Link to="/contact" className="text-gold-500 font-bold hover:text-white transition-colors flex items-center gap-3 group text-lg">
                Partner With Mama Vee <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-2xl border border-white/5"
              >
                <img src={beerImage} alt="WorldRemit" className="w-full h-full object-cover object-top" />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 mt-8"
              >
                <img src={carexImage} alt="Carex" className="w-full h-full object-cover object-top" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle / Travel */}
      {/* Lifestyle / Travel */}
      <section className="py-16 md:py-32 bg-dark-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9]">
            <img src={travelImage} alt="Travel Lifestyle" className="w-full h-full object-cover object-top md:object-top" />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-dark-900/95 via-dark-900/70 md:via-transparent to-dark-900/40 md:to-transparent" />
            <div className="absolute inset-0 flex items-end md:items-center p-6 sm:p-8 md:p-12 lg:p-20">
              <div className="max-w-xl w-full">
                <h2 className="text-gold-500 font-medium tracking-widest mb-3 md:mb-4 uppercase flex items-center gap-2 text-xs sm:text-sm">
                  <FaGlobe className="text-sm sm:text-base" /> Global Citizen
                </h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 md:mb-6 leading-tight">
                  Taking The Brand Global
                </h3>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  From local stages to international destinations. Follow the journey as Mama Vee takes the brand across borders.
                </p>
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-dark-900 font-bold rounded-full hover:bg-gold-500 transition-colors flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center">
                  <FaInstagram /> Follow The Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-500/5" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Join The Family</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-12 text-lg">
            Subscribe to get exclusive updates, behind-the-scenes content, and early access to merch drops. No spam, just love.
          </p>
          <form className="max-w-lg mx-auto flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-8 py-5 bg-dark-900/50 border border-white/10 rounded-full text-white focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-500 backdrop-blur-sm"
            />
            <button className="px-10 py-5 bg-gold-500 text-dark-900 font-bold rounded-full hover:bg-gold-400 transition-colors whitespace-nowrap shadow-lg shadow-gold-500/20">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
