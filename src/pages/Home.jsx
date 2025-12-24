import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaPlay,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaGlobe,
  FaHandshake,
  FaMicrophoneAlt,
  FaTheaterMasks,
  FaMusic,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import heroImage from "../assets/mamavee-hero.jpg";
import actorImage from "../assets/mamavee-actor.jpg";
import carexImage from "../assets/mamavee-carex.jpg";
import beerImage from "../assets/beerImage.jpg";
import travelImage from "../assets/mamavee-travel.jpg";
import eventImage from "../assets/11.jpg";
import randomImage1 from "../assets/1.jpg";
import randomImage2 from "../assets/2.jpg";
import randomImage3 from "../assets/3.jpg";
import randomImage4 from "../assets/4.jpg";
import randomImage5 from "../assets/5.jpg";
import randomImage6 from "../assets/6.jpg";
import randomImage7 from "../assets/7.jpg";
import randomImage8 from "../assets/8.jpg";
import randomImage9 from "../assets/9.jpg";
import randomImage10 from "../assets/10.jpg";
import randomImage12 from "../assets/12.jpg";
import randomImage13 from "../assets/13.jpg";
import randomImage14 from "../assets/14.jpg";
import randomImage15 from "../assets/15.jpg";
import randomImage18 from "../assets/18.jpg";
import worldremitImage from "../assets/mamavee-worldremit.jpg";

// Scrolling Column Component
const ScrollingColumn = ({ images, direction, delay = 0 }) => {
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedImages = [...images, ...images];

  return (
    <div
      className="relative overflow-hidden h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        animate={{
          y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          delay: delay,
        }}
        style={{
          willChange: "transform",
        }}
        className={`flex flex-col gap-4 ${isPaused ? "pause-animation" : ""}`}
      >
        {duplicatedImages.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-80 rounded-xl overflow-hidden flex-shrink-0"
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
          </div>
        ))}
      </motion.div>

      <style jsx>{`
        .pause-animation {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};

// WikiLink Component for inline clickable words
const WikiLink = ({ children, href = "#" }) => (
  <a
    href={href}
    className="text-gold-400 hover:text-gold-300 underline decoration-dotted underline-offset-2 transition-colors cursor-pointer"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Hero background images for scrolling columns
  const column1Images = [
    heroImage,
    randomImage3,
    randomImage6,
    randomImage7,
    randomImage8,
  ];

  const column2Images = [
    randomImage9,
    randomImage10,
    randomImage4,
    randomImage12,
    randomImage2,
  ];

  const column3Images = [
    randomImage1,
    randomImage5,
    randomImage13,
    randomImage14,
    randomImage15,
  ];

  // Social media links
  const socialLinks = [
    {
      label: "Facebook",
      value: "1M+",
      icon: FaFacebookF,
      color: "hover:text-blue-500",
      url: "https://facebook.com/mamavee",
    },
    {
      label: "Instagram",
      value: "500K+",
      icon: FaInstagram,
      color: "hover:text-pink-500",
      url: "https://instagram.com/mamavee",
    },
    {
      label: "YouTube",
      value: "250K+",
      icon: FaYoutube,
      color: "hover:text-red-500",
      url: "https://youtube.com/@mamavee",
    },
    {
      label: "TikTok",
      value: "800K+",
      icon: FaTiktok,
      color: "hover:text-gold-400",
      url: "https://tiktok.com/@mamavee",
    },
  ];

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full overflow-hidden bg-dark-900">
      {/* Hero Section with Infinite Scrolling Columns */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Infinite Scrolling Background Columns */}
        <div className="absolute inset-0 flex gap-4 px-2">
          <div className="flex-1 h-full">
            <ScrollingColumn images={column1Images} direction="up" delay={0} />
          </div>
          <div className="flex-1 h-full hidden sm:block">
            <ScrollingColumn
              images={column2Images}
              direction="down"
              delay={0}
            />
          </div>
          <div className="flex-1 h-full hidden lg:block">
            <ScrollingColumn images={column3Images} direction="up" delay={0} />
          </div>
        </div>

        {/* Original Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-transparent to-dark-900/90" />

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center gap-2 mb-6"
            >
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
              MAMA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 relative inline-block">
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

            {/* Clickable Roles */}
            <motion.p
              variants={fadeInUp}
              className="text-gray-200 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md"
            >
              <button
                onClick={() => scrollToSection("entertainer")}
                className="gellix-font text-cyan-400 hover:text-gold-300 transition-colors hover:underline"
              >
                Comedian
              </button>{" "}
              •{" "}
              <button
                onClick={() => scrollToSection("entertainer")}
                className="gellix-font text-pink-400 hover:text-pink-300 transition-colors hover:underline"
              >
                Actor
              </button>{" "}
              •{" "}
              <button
                onClick={() => scrollToSection("entertainer")}
                className="gellix-font text-purple-400 hover:text-purple-300 transition-colors hover:underline"
              >
                Musician
              </button>{" "}
              •{" "}
              <button
                onClick={() => scrollToSection("brand-ambassador")}
                className="gellix-font text-amber-400 hover:text-amber-300 transition-colors hover:underline"
              >
                Brand Ambassador
              </button>
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col md:flex-row items-center justify-center gap-6"
            >
              <Link
                to="/content"
                className="gellix-font px-10 py-5 bg-gold-500 text-dark-900 font-bold rounded-full hover:bg-gold-400 transition-all transform hover:scale-105 flex items-center gap-3 shadow-[0_0_30px_rgba(204,154,23,0.3)]"
              >
                <FaPlay className="text-sm" /> Watch Latest Video
              </Link>
              <Link
                to="/contact"
                className="gellix-font px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-3 hover:border-gold-500/50"
              >
                Book Now <FaArrowRight />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-gold-500 uppercase tracking-[0.2em]">
            Scroll
          </span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold-500 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* Stats Section - Clickable Social Links */}
      <section className="py-20 bg-dark-800 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {socialLinks.map((stat, index) => (
              <motion.a
                key={index}
                href={stat.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-gold-500/30 transition-all duration-300 group hover:bg-white/10 hover:-translate-y-2 cursor-pointer"
              >
                <stat.icon
                  className={`w-8 h-8 mx-auto mb-4 text-gray-500 transition-colors duration-300 ${stat.color} group-hover:scale-110`}
                />
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                  {stat.value}
                </h3>
                <p className="gellix-font text-gray-400 uppercase tracking-wider text-xs font-bold group-hover:text-white transition-colors">
                  {stat.label}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* The Entertainer Section */}
      <section id="entertainer" className="py-32 bg-dark-900 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="gellix-font text-gray-400 font-medium tracking-widest mb-4 uppercase">
              The{" "}
              <a
                href="#entertainer"
                className="text-gold-400 hover:text-gold-300 transition-colors underline underline-offset-4 gellix-font"
              >
                Entertainer
              </a>
            </h2>
            <h3 className="text-4xl md:text-6xl font-heading font-bold text-white">
              A Man of Many Talents
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Actor */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden"
            >
              <img
                src={actorImage}
                alt="Actor"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top"
              />
              {/* Colorful Bottom Overlay - Cool Blue/Purple */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-purple-900/60 to-transparent opacity-90" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Link
                  to="/acting"
                  className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mb-4 text-dark-900 hover:bg-gold-400 transition-all hover:scale-110 cursor-pointer inline-flex"
                >
                  <FaTheaterMasks size={24} />
                </Link>
                <Link to="/acting">
                  <h4 className="text-3xl font-bold text-white mb-2 hover:text-gold-400 transition-colors cursor-pointer">
                    The Actor
                  </h4>
                </Link>
                <p className="gellix-font text-gray-200 line-clamp-3">
                  Bringing <WikiLink>characters</WikiLink> to life with depth,{" "}
                  <WikiLink>nuance</WikiLink>, and undeniable charisma. From{" "}
                  <WikiLink>dramatic roles</WikiLink> to comedic genius.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Musician */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden md:-mt-12"
            >
              <img
                src={eventImage}
                alt="Musician"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top"
              />
              {/* Colorful Bottom Overlay - Warm Orange/Red */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/95 via-red-900/60 to-transparent opacity-90" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Link
                  to="/music"
                  className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mb-4 text-dark-900 hover:bg-gold-400 transition-all hover:scale-110 cursor-pointer inline-flex"
                >
                  <FaMusic size={24} />
                </Link>
                <Link to="/music">
                  <h4 className="text-3xl font-bold text-white mb-2 hover:text-gold-400 transition-colors cursor-pointer">
                    The Musician
                  </h4>
                </Link>
                <p className="gellix-font text-gray-200 line-clamp-3">
                  Captivating <WikiLink>audiences</WikiLink> with rhythm and{" "}
                  <WikiLink>soul</WikiLink>.{" "}
                  <WikiLink>Live performances</WikiLink> that leave a lasting
                  impression.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Comedian */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden"
            >
              <img
                src={heroImage}
                alt="Comedian"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top"
              />
              {/* Colorful Bottom Overlay - Teal/gold */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/95 via-gold-900/60 to-transparent opacity-90" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Link
                  to="/comedy"
                  className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mb-4 text-dark-900 hover:bg-gold-400 transition-all hover:scale-110 cursor-pointer inline-flex"
                >
                  <FaMicrophoneAlt size={24} />
                </Link>
                <Link to="/comedy">
                  <h4 className="text-3xl font-bold text-white mb-2 hover:text-gold-400 transition-colors cursor-pointer">
                    The Comedian
                  </h4>
                </Link>
                <p className="gellix-font text-gray-200 line-clamp-3">
                  <WikiLink>Laughter</WikiLink> is the best medicine, and Mama
                  Vee is the doctor. Viral <WikiLink>skits</WikiLink> and{" "}
                  <WikiLink>stand-up</WikiLink> that hits home.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

{/* Brand Ambassador Section */}
<section
  id="brand-ambassador"
  className="py-32 bg-dark-800 relative overflow-hidden"
>
  <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-500/5 -skew-x-12 transform translate-x-32" />
  <div className="container mx-auto px-6 relative z-10">
    <div className="flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-1/2">
        <h2 className="text-gold-500 font-medium tracking-widest mb-4 uppercase flex items-center gap-2">
          <FaHandshake /> Trusted{" "}
          <a
            href="#brand-ambassador"
            className="text-gray-400 hover:text-gray-400 transition-colors underline underline-offset-4"
          >
            Partner
          </a>
        </h2>
        <h3 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
          Brand{" "}
          <a
            href="#brand-ambassador"
            className="text-gold-400 hover:text-gold-300 transition-colors underline decoration-dotted underline-offset-8"
          >
            Ambassador
          </a>
        </h3>
        <p className="gellix-font text-gray-300 text-lg leading-relaxed mb-8">
          Connecting <WikiLink>top-tier brands</WikiLink> with engaged{" "}
          <WikiLink>audiences</WikiLink> through authentic{" "}
          <WikiLink>storytelling</WikiLink> and influence. Proudly
          representing global names in <WikiLink>finance</WikiLink>,{" "}
          <WikiLink>lifestyle</WikiLink>, and <WikiLink>health</WikiLink>.
        </p>

        {/* Brand Logos */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          {/* WorldRemit */}
          <motion.a
            href="https://www.worldremit.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="group p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl hover:border-gold-500/50 transition-all flex items-center justify-center h-24 backdrop-blur-sm relative overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300" />
            <img
              src="/wr.png"
              alt="WorldRemit Logo"
              className="max-w-full max-h-full object-contain relative z-10 filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="hidden text-white font-bold text-sm">WorldRemit</span>
          </motion.a>

          {/* Doves */}
          <motion.a
            href="https://www.doves.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="group p-4 bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-xl hover:border-gold-500/50 transition-all flex items-center justify-center h-24 backdrop-blur-sm relative overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-teal-500/0 group-hover:from-green-500/20 group-hover:to-teal-500/20 transition-all duration-300" />
            <img
              src="/doves.png"
              alt="Doves Logo"
              className="max-w-full max-h-full object-contain relative z-10 filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="hidden text-white font-bold text-sm">Doves</span>
          </motion.a>

          {/* Sky Path */}
          <motion.a
            href="https://www.skypath.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl hover:border-gold-500/50 transition-all flex items-center justify-center h-24 backdrop-blur-sm relative overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300" />
            <img
              src="/sky.png"
              alt="Sky Path Logo"
              className="max-w-full max-h-full object-contain relative z-10 filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="hidden text-white font-bold text-sm">Sky Path</span>
          </motion.a>

          {/* Mama Vee Rice */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // You can add a modal or redirect to a product page
              alert('Mama Vee Rice - Coming Soon!');
            }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="group p-4 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl hover:border-gold-500/50 transition-all flex items-center justify-center h-24 backdrop-blur-sm relative overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/20 group-hover:to-orange-500/20 transition-all duration-300" />
            <img
              src="/rice.png"
              alt="Mama Vee Rice Logo"
              className="max-w-full max-h-full object-contain relative z-10 filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="hidden text-white font-bold text-xs text-center">Mama Vee Rice</span>
          </motion.a>

          {/* Oden Foods */}
          <motion.a
            href="https://www.odenfoods.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl hover:border-gold-500/50 transition-all flex items-center justify-center h-24 backdrop-blur-sm relative overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300" />
            <img
              src="/of.png"
              alt="Oden Foods Logo"
              className="max-w-full max-h-full object-contain relative z-10 filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="hidden text-white font-bold text-sm">Oden Foods</span>
          </motion.a>

                    {/* Carex */}
          <motion.a
            href="https://www.carex.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group p-4 bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl hover:border-gold-500/50 transition-all flex items-center justify-center h-24 backdrop-blur-sm relative overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-pink-500/0 group-hover:from-red-500/20 group-hover:to-pink-500/20 transition-all duration-300" />
            <img
              src="/carex.png"
              alt="Carex Logo"
              className="max-w-full max-h-full object-contain relative z-10 filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="hidden text-white font-bold text-sm">Carex</span>
          </motion.a>
        </div>

        <Link
          to="/contact"
          className="text-gold-500 font-bold hover:text-white transition-colors flex items-center gap-3 group text-lg"
        >
          Partner With Mama Vee{" "}
          <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>

      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
        {/* Image 1 - Beer/Choya with warm golden overlay */}
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 relative group h-[400px]"
        >
          <img
            src={beerImage}
            alt="Brand Partnership"
            className="w-full h-full object-cover object-top"
          />
          {/* Vibrant Gradient Overlay matching the warm tones */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/60 via-orange-500/40 to-yellow-600/50 opacity-60 group-hover:opacity-80 transition-all duration-500 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent" />
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-transparent blur-xl" />
          </div>
        </motion.div>

        {/* Image 2 - Carex with cool blue overlay */}
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 mt-8 relative group h-[400px]"
        >
          <img
            src={carexImage}
            alt="Brand Collaboration"
            className="w-full h-full object-cover object-top"
          />
          {/* Vibrant Gradient Overlay matching the blue/red Carex branding */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 via-red-500/40 to-gold-600/50 opacity-60 group-hover:opacity-80 transition-all duration-500 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent" />
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-transparent blur-xl" />
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

    {/* Lifestyle / Travel - Enhanced Section */}
      <section className="py-16 md:py-32 bg-dark-900 relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] group">
            <img
              src={randomImage18}
              alt="Travel Lifestyle"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Enhanced gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-dark-900/95 via-dark-900/70 md:via-transparent to-dark-900/40 md:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-blue-500/10 opacity-50" />
            
            <div className="absolute inset-0 flex items-end md:items-center p-6 sm:p-8 md:p-12 lg:p-20">
              <div className="max-w-xl w-full">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-gold-500 font-medium tracking-widest mb-3 md:mb-4 uppercase flex items-center gap-2 text-xs sm:text-sm">
                    <FaGlobe className="text-sm sm:text-base" /> Global Citizen
                  </h2>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 md:mb-6 leading-tight">
                    Taking The{" "}
                    <button
                      onClick={() => scrollToSection("brand-ambassador")}
                      className="text-gold-400 hover:text-gold-400 transition-colors underline  decoration-2 underline-offset-4 cursor-pointer"
                    >
                      Brand
                    </button>{" "}
                    Global
                  </h3>
                  <p className="gellix-font text-gray-300 text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                    From local stages to international destinations. Follow the
                    journey as Mama Vee takes the{" "}
                    <button
                      onClick={() => scrollToSection("brand-ambassador")}
                      className="text-gold-400 hover:text-gold-300 transition-colors underline decoration-dotted cursor-pointer"
                    >
                      brand
                    </button>{" "}
                    across borders.
                  </p>
                  <motion.a
                    href="https://instagram.com/mamavee"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="gellix-font px-6 sm:px-8 py-3 sm:py-4 bg-white text-dark-900 font-bold rounded-full hover:bg-gold-500 transition-all flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center shadow-lg hover:shadow-gold-500/50 group"
                  >
                    <FaInstagram className="group-hover:rotate-12 transition-transform" /> Follow The Journey
                  </motion.a>
                </motion.div>
              </div>
            </div>

            {/* Animated border on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 border-2 border-gold-500/50 rounded-2xl md:rounded-3xl" />
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
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Join The Family
          </h2>
          <p className="gellix-font text-gray-300 max-w-xl mx-auto mb-12 text-lg">
            Subscribe to get exclusive updates, behind-the-scenes content, and
            early access to merch drops. No spam, just love.
          </p>
          <form className="max-w-lg mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-8 py-5 bg-dark-900/50 border border-white/10 rounded-full text-white focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-500 backdrop-blur-sm"
            />
            <button className="gellix-font px-10 py-5 bg-gold-500 text-dark-900 font-bold rounded-full hover:bg-gold-400 transition-colors whitespace-nowrap shadow-lg shadow-gold-500/20">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
