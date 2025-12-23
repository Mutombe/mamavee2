import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaFilter, FaClock, FaShareAlt } from "react-icons/fa";
import featureImage from "../assets/feature-image.jpg";

const Content = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Skits",
    "Vlogs",
    "Collaborations",
    "Behind the Scenes",
  ];

  const videos = [
    {
      id: 1,
      title: "When African Moms Visit",
      category: "Skits",
      views: "1.2M",
      duration: "4:32",
      thumbnail:
        "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1000&auto=format&fit=crop",
    },

    {
      id: 3,
      title: "The Wedding Disaster",
      category: "Skits",
      views: "2.5M",
      duration: "8:45",
      thumbnail:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Q&A: Answering Your Questions",
      category: "Vlogs",
      views: "400K",
      duration: "15:20",
      thumbnail:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Backstage at the Awards",
      category: "Behind the Scenes",
      views: "600K",
      duration: "9:30",
      thumbnail:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  const filteredVideos =
    activeFilter === "All"
      ? videos
      : videos.filter((video) => video.category === activeFilter);

  return (
    <div className="pt-20 min-h-screen bg-dark-900">
      {/* Header */}
      <section className="py-20 bg-dark-800 border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-6"
          >
            Content <span className="text-gold-500">Gallery</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Dive into the world of laughter. From viral skits to intimate vlogs,
            watch it all here.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 sticky top-20 z-30 bg-dark-900/95 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 overflow-x-auto pb-4">
          <div className="flex space-x-4 min-w-max md:justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 pb-1 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gold-500 text-dark-900 shadow-lg shadow-gold-500/20"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 container mx-auto px-6">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredVideos.map((video) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={video.id}
              className="group relative bg-dark-800 rounded-2xl overflow-hidden border border-white/5 hover:border-gold-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/10"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <FaPlay size={24} className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs font-bold rounded">
                  {video.duration}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-gold-500 text-xs font-bold uppercase tracking-wider">
                    {video.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <FaClock size={12} className="mr-1" />
                    <span>2 days ago</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <span className="text-gray-400 text-sm">
                    {video.views} Views
                  </span>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <FaShareAlt size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Series */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 md:mb-12 gap-4">
            <div>
              <h2 className="text-gold-500 font-medium tracking-widest mb-2 uppercase text-xs sm:text-sm">
                Featured Series
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white">
                The Chronicles of Mama Vee
              </h3>
            </div>
          </div>

          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] group cursor-pointer">
            <img
              src={featureImage}
              alt="Featured Series"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/70 sm:via-transparent to-dark-900/40 sm:to-transparent opacity-90" />
            <div className="absolute inset-0 sm:bottom-0 sm:inset-auto flex items-end p-6 sm:p-8 md:p-12 w-full md:w-2/3">
              <div className="w-full">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gold-500 text-dark-900 font-bold rounded-full text-xs sm:text-sm mb-3 sm:mb-4 inline-block">
                  Season Finale
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-3 sm:mb-4 leading-tight">
                  The Family Reunion Special
                </h3>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 line-clamp-2 sm:line-clamp-3">
                  Watch the hilarious conclusion to the summer series where the
                  entire extended family comes to visit. Chaos ensues!
                </p>
                <button className="px-6 sm:px-8 py-3 bg-white text-dark-900 font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center">
                  <FaPlay size={14} className="sm:w-4 sm:h-4" /> Watch Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
