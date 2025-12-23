import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaAward, FaHeart, FaChartLine } from 'react-icons/fa';
import actorImage from '../assets/mamavee-actor.jpg';

const About = () => {
  const stats = [
    { icon: FaStar, label: 'Years Active', value: '5+' },
    { icon: FaAward, label: 'Awards Won', value: '12' },
    { icon: FaHeart, label: 'Lives Touched', value: '10M+' },
    { icon: FaChartLine, label: 'Viral Hits', value: '50+' },
  ];

  return (
    <div className="pt-20 min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-gold-500 rounded-2xl transform rotate-3 opacity-20 blur-xl"></div>
              <img 
                src={actorImage} 
                alt="Mama Vee Actor" 
                className="relative z-10 rounded-2xl shadow-2xl w-full object-cover border border-white/10 aspect-[3/4] object-top"
              />
              <div className="absolute -bottom-6 -right-6 bg-dark-800 p-6 rounded-xl border border-gold-500/30 shadow-xl z-20 hidden md:block">
                <p className="font-heading font-bold text-gold-500 text-xl">"Laughter is healing"</p>
                <p className="text-gray-400 text-sm mt-1">- Mama Vee</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                The Story Behind <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">The Laughter</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Mama Vee isn't just a character; she's a cultural phenomenon. Born from a desire to bring joy during difficult times, Mama Vee represents the strength, humor, and resilience of everyday life.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                What started as a simple skit recorded on a smartphone has exploded into a global brand. With a unique blend of relatable comedy and heartwarming moments, Mama Vee has captured the hearts of millions across Facebook, YouTube, and Instagram.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500">
                      <stat.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-dark-800 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-gold-500 font-medium tracking-widest mb-2 uppercase">The Journey</h2>
            <h3 className="text-4xl font-heading font-bold text-white">From Humble Beginnings</h3>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12 relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/0 via-gold-500/50 to-gold-500/0 transform md:-translate-x-1/2 ml-6 md:ml-0"></div>

            {[
              { year: '2019', title: 'The First Skit', desc: 'Uploaded the first video "African Mothers be like" which went viral overnight.' },
              { year: '2020', title: '100K Milestone', desc: 'Reached 100,000 followers on Facebook. The community started growing rapidly.' },
              { year: '2021', title: 'Brand Partnerships', desc: 'Started collaborating with major brands and expanded the production team.' },
              { year: '2023', title: 'Global Recognition', desc: 'Featured in international media and nominated for Best Comedy Creator.' },
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
                
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-dark-900 transform md:-translate-x-1/2 mt-1.5 ml-4 md:ml-0 z-10"></div>
                
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="text-gold-500 font-bold text-xl mb-2 block">{item.year}</span>
                  <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
