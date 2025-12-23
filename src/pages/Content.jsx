import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaFilter, FaClock, FaShareAlt, FaYoutube, FaTimes, FaEye, FaCalendar } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import featureImage from "../assets/feature-image.jpg";

const Content = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = [
    "All",
    "Skits",
    "Comedy",
    "Trending",
    "Latest",
  ];

  const videos = [
    {
      id: 1,
      title: "Stilleto Mzilikazi at it again 😳😂",
      category: "Skits",
      views: "3.1K",
      duration: "1:32",
      uploadedAgo: "4 days ago",
      youtubeId: "owrkd6D7XIg",
      thumbnail: `https://img.youtube.com/vi/owrkd6D7XIg/maxresdefault.jpg`,
      trending: true,
    },
    {
      id: 2,
      title: "Madzimai Windimiru 😳😂",
      category: "Comedy",
      views: "6.2K",
      duration: "1:55",
      uploadedAgo: "6 days ago",
      youtubeId: "h6pS4c8K-TA",
      thumbnail: `https://img.youtube.com/vi/h6pS4c8K-TA/maxresdefault.jpg`,
      trending: true,
    },
    {
      id: 3,
      title: "Ndadya ma fibroids 😳😭",
      category: "Skits",
      views: "4.3K",
      duration: "0:42",
      uploadedAgo: "8 days ago",
      youtubeId: "tk5c9rJT_LU",
      thumbnail: `https://img.youtube.com/vi/tk5c9rJT_LU/maxresdefault.jpg`,
      trending: false,
    },
    {
      id: 4,
      title: "Sweet Mistake 😳😂 Touch is a Move",
      category: "Comedy",
      views: "11K",
      duration: "3:17",
      uploadedAgo: "11 days ago",
      youtubeId: "sIcHt1vlPjk",
      thumbnail: `https://img.youtube.com/vi/sIcHt1vlPjk/maxresdefault.jpg`,
      trending: true,
    },
  ];

  const filteredVideos =
    activeFilter === "All"
      ? videos
      : activeFilter === "Trending"
      ? videos.filter((video) => video.trending)
      : activeFilter === "Latest"
      ? [...videos].sort((a, b) => {
          const aTime = parseInt(a.uploadedAgo);
          const bTime = parseInt(b.uploadedAgo);
          return aTime - bTime;
        })
      : videos.filter((video) => video.category === activeFilter);

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="pt-20 min-h-screen bg-dark-900">
      {/* Header with Animated Background */}
      <section className="py-20 bg-gradient-to-br from-dark-800 via-dark-900 to-dark-800 border-b border-white/5 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full mb-6"
          >
            <FaYoutube className="text-red-500 text-xl" />
            <span className="gellix-font text-red-400 font-bold text-sm">YOUTUBE CHANNEL</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-black text-white mb-6"
          >
            Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-gold-500 to-red-500">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="gellix-font text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Dive into the world of laughter. From viral skits to comedy gold,
            watch it all here. Subscribe for more! 🔔
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mt-10"
          >
            {[
              { label: "Total Views", value: "24.6K+", icon: FaEye },
              { label: "Videos", value: videos.length, icon: FaPlay },
              { label: "Latest Upload", value: "4 days ago", icon: FaCalendar },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <stat.icon className="text-red-400" />
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-lg">{stat.value}</p>
                  <p className="gellix-font text-gray-500 text-xs">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters with Pills Design */}
      <section className="py-10 sticky top-20 z-30 bg-dark-900/95 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-gray-400">
              <FaFilter className="text-gold-500" />
              <span className="font-bold text-sm">Filter by:</span>
            </div>
            <span className="gellix-font text-gray-500 text-sm">
              {filteredVideos.length} video{filteredVideos.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`gellix-font px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {filter}
                {filter === "Trending" && activeFilter === filter && (
                  <span className="ml-2 text-xs">🔥</span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Grid with Enhanced YouTube Cards */}
      <section className="py-16 container mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredVideos.map((video, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                key={video.id}
                onClick={() => openVideoModal(video)}
                className="group relative bg-dark-800 rounded-2xl overflow-hidden border border-white/5 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 cursor-pointer transform hover:-translate-y-2"
              >
                {/* Trending Badge */}
                {video.trending && (
                  <div className="absolute top-3 left-3 z-20 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                    🔥 Trending
                  </div>
                )}

                {/* YouTube Thumbnail with Play Overlay */}
                <div className="relative aspect-video overflow-hidden bg-dark-900">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* YouTube Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300"
                    >
                      <FaPlay size={20} className="text-white ml-1" />
                    </motion.div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/90 text-white text-xs font-bold rounded backdrop-blur-sm">
                    {video.duration}
                  </div>

                  {/* YouTube Logo Watermark */}
                  <div className="absolute top-3 right-3 opacity-70 group-hover:opacity-100 transition-opacity">
                    <FaYoutube className="text-red-600 text-2xl drop-shadow-lg" />
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    {/* Channel Avatar */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-gold-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white font-bold text-sm">MV</span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-white mb-1 group-hover:text-red-400 transition-colors line-clamp-2 leading-tight">
                        {video.title}
                      </h3>
                      <p className="gellix-font text-gray-500 text-xs font-medium">Mama Vee Official</p>
                    </div>
                  </div>

                  {/* Video Stats */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <div className="flex items-center gap-4 text-gray-400 text-xs">
                      <div className="flex items-center gap-1">
                        <FaEye size={12} />
                        <span className="font-semibold">{video.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock size={12} />
                        <span>{video.uploadedAgo}</span>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <span className="px-2.5 py-1 bg-red-500/10 text-red-400 text-xs font-bold rounded-full">
                      {video.category}
                    </span>
                  </div>
                </div>

                {/* Hover Effect Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 via-transparent to-transparent" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {filteredVideos.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaYoutube className="text-red-500 text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No videos found</h3>
            <p className="gellix-font text-gray-400">Try selecting a different filter</p>
          </motion.div>
        )}
      </section>

      {/* Featured Series */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 md:mb-12 gap-4">
            <div>
              <h2 className="text-red-500 font-medium tracking-widest mb-2 uppercase text-xs sm:text-sm flex items-center gap-2">
                <FaYoutube /> Featured Series
              </h2>
              <h3 className="gellix-font text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white">
                The Chronicles of Mama Vee
              </h3>
            </div>
            <a
              href="https://www.youtube.com/@MamaVeeOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-full transition-colors text-sm flex items-center gap-2"
            >
              <FaYoutube /> Subscribe
            </a>
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] group cursor-pointer border-2 border-white/5 hover:border-red-500/50 transition-all duration-300"
          >
            <img
              src={featureImage}
              alt="Featured Series"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/70 sm:via-transparent to-dark-900/40 sm:to-transparent opacity-90" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                <FaPlay size={28} className="text-white ml-1" />
              </div>
            </div>

            <div className="absolute inset-0 sm:bottom-0 sm:inset-auto flex items-end p-6 sm:p-8 md:p-12 w-full md:w-2/3">
              <div className="w-full">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-full text-xs sm:text-sm mb-3 sm:mb-4 inline-block shadow-lg">
                  🎬 Season Finale
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-3 sm:mb-4 leading-tight">
                  The Family Reunion Special
                </h3>
                <p className="gellix-font text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 line-clamp-2 sm:line-clamp-3">
                  Watch the hilarious conclusion to the summer series where the
                  entire extended family comes to visit. Chaos ensues! 😂
                </p>
                <button className="px-6 sm:px-8 py-3 bg-white text-dark-900 font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center shadow-lg">
                  <FaPlay size={14} className="sm:w-4 sm:h-4" /> Watch Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeVideoModal}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors z-10"
              >
                <MdClose size={24} />
              </motion.button>

              {/* Video Info Header */}
              <div className="bg-dark-800 rounded-t-2xl p-6 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-gold-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">MV</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {selectedVideo.title}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                      <span className="flex items-center gap-1">
                        <FaEye /> {selectedVideo.views} views
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock /> {selectedVideo.uploadedAgo}
                      </span>
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold">
                        {selectedVideo.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* YouTube Embed */}
              <div className="relative bg-black rounded-b-2xl overflow-hidden border-x border-b border-white/10">
                <div className="relative w-full pt-[56.25%]">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4">
                <a
                  href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-full transition-colors flex items-center justify-center gap-2"
                >
                  <FaYoutube /> Watch on YouTube
                </a>
                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-colors flex items-center gap-2">
                  <FaShareAlt /> Share
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subscribe CTA */}
      <section className="py-20 bg-gradient-to-br from-red-600/10 via-dark-900 to-gold-500/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, #ef4444 1px, transparent 1px)`,
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
            <FaYoutube className="text-red-500 text-6xl mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
              Never Miss a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gold-500">Video</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-8">
              Subscribe to the YouTube channel and turn on notifications 🔔 to catch all the latest comedy skits and behind-the-scenes content!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://www.youtube.com/@MamaVeeOfficial?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-full shadow-lg hover:shadow-red-500/50 transition-all flex items-center justify-center gap-2"
              >
                <FaYoutube size={24} /> Subscribe Now
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/10 text-white font-bold rounded-full hover:border-red-500/50 transition-all"
              >
                Share Channel
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Content;