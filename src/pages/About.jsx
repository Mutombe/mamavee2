import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaStar, FaAward, FaHeart, FaChartLine, FaQuoteLeft, FaLightbulb, FaBullseye, FaRocket, FaUsers } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import actorImage from '../assets/mamavee-actor.jpg';
import heroImage from '../assets/mamavee-hero.jpg';
import eventImage from '../assets/11.jpg';
import travelImage from '../assets/mamavee-travel.jpg';

const About = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  const stats = [
    { 
      icon: FaStar, 
      label: 'Years Active', 
      value: '5+',
      color: 'from-yellow-500 to-amber-600',
      description: 'Making people laugh'
    },
    { 
      icon: FaAward, 
      label: 'Awards Won', 
      value: '12',
      color: 'from-purple-500 to-pink-600',
      description: 'Recognition & honors'
    },
    { 
      icon: FaHeart, 
      label: 'Lives Touched', 
      value: '10M+',
      color: 'from-red-500 to-rose-600',
      description: 'Across the globe'
    },
    { 
      icon: FaChartLine, 
      label: 'Viral Hits', 
      value: '50+',
      color: 'from-blue-500 to-cyan-600',
      description: 'Trending content'
    },
  ];

  const values = [
    {
      icon: FaLightbulb,
      title: 'Authenticity',
      description: 'Staying true to our roots and keeping it real with every performance.',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: FaBullseye,
      title: 'Excellence',
      description: 'Delivering top-quality content that resonates and entertains.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Constantly pushing boundaries and exploring new creative territories.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: FaUsers,
      title: 'Community',
      description: 'Building lasting connections with fans who become family.',
      color: 'from-green-500 to-teal-600'
    },
  ];

  const testimonials = [
    {
      quote: "Mama Vee's content brings so much joy to our family. We watch together and laugh until we cry!",
      author: "Sarah M.",
      role: "Loyal Fan",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      quote: "Working with Mama Vee was incredible. The professionalism and creativity are unmatched.",
      author: "John D.",
      role: "Brand Partner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      quote: "A true inspiration! The journey from humble beginnings to global success is remarkable.",
      author: "Lisa K.",
      role: "Content Creator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-dark-900 overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative"
            >
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -top-4 -left-4 bg-gradient-to-br from-gold-500 to-amber-600 p-4 rounded-2xl shadow-2xl z-30 flex items-center gap-2"
              >
                <MdVerified className="text-white text-2xl" />
                <div>
                  <p className="text-white font-bold text-sm">Verified</p>
                  <p className="gellix-font text-white/80 text-xs">Content Creator</p>
                </div>
              </motion.div>

              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500 to-purple-600 rounded-2xl transform rotate-3 opacity-20 blur-xl"></div>
              
              {/* Main Image */}
              <motion.img 
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ duration: 0.3 }}
                src={actorImage} 
                alt="Mama Vee Actor" 
                className="relative z-10 rounded-2xl shadow-2xl w-full object-cover border-2 border-gold-500/30 aspect-[3/4] object-top"
              />
              
              {/* Quote Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-dark-800 to-dark-900 p-6 rounded-xl border border-gold-500/30 shadow-xl z-20 max-w-xs"
              >
                <FaQuoteLeft className="text-gold-500 mb-2" size={24} />
                <p className="gellix-font font-heading font-bold text-gold-500 text-xl">"Laughter is healing"</p>
                <p className="text-gray-400 text-sm mt-1">- Mama Vee</p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-500 text-sm font-bold uppercase tracking-wider">
                  About Mama Vee
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">
                The Story Behind <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 animate-gradient">
                  The Laughter
                </span>
              </h1>
              
              <p className="gellix-font text-gray-300 text-lg leading-relaxed mb-6">
                Mama Vee isn't just a <span className="text-gold-400 font-semibold">character</span>; she's a <span className="text-pink-400 font-semibold">cultural phenomenon</span>. Born from a desire to bring joy during difficult times, Mama Vee represents the strength, humor, and resilience of everyday life.
              </p>
              
              <p className="gellix-font text-gray-300 text-lg leading-relaxed mb-8">
                What started as a simple skit recorded on a smartphone has exploded into a <span className="text-gold-400 font-semibold">global brand</span>. With a unique blend of relatable comedy and heartwarming moments, Mama Vee has captured the hearts of millions across Facebook, YouTube, and Instagram.
              </p>
              
              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-gold-500/50 transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10 flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-3xl font-black text-white mb-1 group-hover:text-gold-400 transition-colors">{stat.value}</h4>
                        <p className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">{stat.label}</p>
                        <p className="gellix-font text-xs text-gray-500 mt-1">{stat.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-gold-500 font-medium tracking-widest mb-2 uppercase">Our Purpose</h2>
            <h3 className="gellix-font text-4xl md:text-5xl font-heading font-bold text-white">Mission & Vision</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500 to-amber-600 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative p-8 md:p-10 rounded-2xl border border-gold-500/30 bg-dark-900/50 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-amber-600 flex items-center justify-center mb-6 shadow-lg">
                  <FaBullseye className="text-white text-2xl" />
                </div>
                <h4 className="text-3xl font-heading font-bold text-white mb-4">Our Mission</h4>
                <p className="gellix-font text-gray-300 text-lg leading-relaxed">
                  To spread joy, laughter, and <span className="text-gold-400 font-semibold">positivity</span> across the world through authentic, relatable content that resonates with diverse audiences. We aim to be more than entertainment—we're a <span className="text-cyan-400 font-semibold">movement</span> that brings people together.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative p-8 md:p-10 rounded-2xl border border-blue-500/30 bg-dark-900/50 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                  <FaRocket className="text-white text-2xl" />
                </div>
                <h4 className="text-3xl font-heading font-bold text-white mb-4">Our Vision</h4>
                <p className="gellix-font text-gray-300 text-lg leading-relaxed">
                  To become the <span className="text-blue-400 font-semibold">leading voice</span> in African entertainment globally, inspiring the next generation of creators while building a legacy of laughter, <span className="text-pink-400 font-semibold">innovation</span>, and cultural pride that transcends borders.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-dark-800 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-gold-500 font-medium tracking-widest mb-2 uppercase">What We Stand For</h2>
            <h3 className="gellix-font text-4xl md:text-5xl font-heading font-bold text-white">Core Values</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-dark-900 border border-white/10 hover:border-gold-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <value.icon className="text-white text-xl" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">{value.title}</h4>
                  <p className="gellix-font text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#fbbf24 1px, transparent 1px), linear-gradient(90deg, #fbbf24 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-gold-500 font-medium tracking-widest mb-2 uppercase">The Journey</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">From Humble Beginnings</h3>
            <p className="gellix-font text-gray-400 mt-4 max-w-2xl mx-auto">Every great story has a beginning. Here's how a simple idea became a global movement.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12 relative">
            {/* Vertical Line with Gradient */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-500/0 via-gold-500/50 to-gold-500/0 transform md:-translate-x-1/2 ml-6 md:ml-0"></div>

            {[
              { 
                year: '2019', 
                title: 'The First Skit', 
                desc: 'Uploaded the first video "African Mothers be like" which went viral overnight, reaching 500K views in 48 hours.',
                color: 'from-blue-500 to-cyan-500',
                image: heroImage
              },
              { 
                year: '2020', 
                title: '100K Milestone', 
                desc: 'Reached 100,000 followers on Facebook. The community started growing rapidly with daily engagement soaring.',
                color: 'from-purple-500 to-pink-500',
                image: eventImage
              },
              { 
                year: '2021', 
                title: 'Brand Partnerships', 
                desc: 'Started collaborating with major brands like WorldRemit and Carex. Expanded the production team to 5 members.',
                color: 'from-amber-500 to-orange-500',
                image: travelImage
              },
              { 
                year: '2023', 
                title: 'Global Recognition', 
                desc: 'Featured in international media outlets and nominated for Best Comedy Creator at the African Content Awards.',
                color: 'from-green-500 to-teal-500',
                image: actorImage
              },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/2"></div>
                
                {/* Animated Dot with Pulse */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-1.5 ml-4 md:ml-0 z-10"
                >
                  <div className={`w-6 h-6 bg-gradient-to-br ${item.color} rounded-full border-4 border-dark-900 shadow-lg`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-full animate-ping opacity-75`} />
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}
                >
                  <div className="group relative p-6 rounded-2xl bg-dark-800 border border-white/10 hover:border-gold-500/50 transition-all duration-300 overflow-hidden">
                    {/* Background Image on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <span className={`inline-block px-4 py-1 bg-gradient-to-r ${item.color} text-white font-bold text-lg rounded-full mb-3 shadow-lg`}>
                        {item.year}
                      </span>
                      <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">{item.title}</h4>
                      <p className="gellix-font text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dark-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-500/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-gold-500 font-medium tracking-widest mb-2 uppercase">What People Say</h2>
            <h3 className="gellix-font text-4xl md:text-5xl font-heading font-bold text-white">Fan Love & Testimonials</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-8 rounded-2xl bg-dark-900 border border-white/10 group-hover:border-gold-500/50 transition-all duration-300">
                  <FaQuoteLeft className="text-gold-500 mb-4 opacity-50" size={32} />
                  <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gold-500/30"
                    />
                    <div>
                      <h5 className="text-white font-bold">{testimonial.author}</h5>
                      <p className="gellix-font text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gold-500/10 via-dark-900 to-purple-500/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, #fbbf24 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
              Ready to Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">Movement?</span>
            </h2>
            <p className="gellix-font text-gray-300 text-lg md:text-xl mb-8">
              Be part of the laughter revolution. Follow Mama Vee on social media and never miss a moment of joy!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gellix-font px-8 py-4 bg-gradient-to-r from-gold-500 to-amber-600 text-dark-900 font-bold rounded-full shadow-lg hover:shadow-gold-500/50 transition-all"
              >
                Follow on Instagram
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gellix-font px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/10 text-white font-bold rounded-full hover:border-gold-500/50 transition-all"
              >
                Watch Content
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;