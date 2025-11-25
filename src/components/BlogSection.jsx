import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, ArrowRight, ExternalLink } from "lucide-react";

// --- Configuration ---
const GOLD_ACCENT = "#FFC300";
const DARK_BG_COLOR = "#000000";

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const articles = [
    {
      title: "The Value of Drone Mapping for Construction Progress Monitoring",
      excerpt: "Drone mapping empowers all project stakeholders—subcontractors, clients, investors, and project management—by providing shared, actionable progress data and detailed volumetric analysis.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      date: "Nov 15, 2025",
      category: "CONSTRUCTION"
    },
    {
      title: "Over 200 Lives Saved and Counting: How Lifeseeker Uses Cell Phones",
      excerpt: "Cell phone technology is now a critical tool in saving lives. Thanks to an early partnership with Volatus, Lifeseeker provides unparalleled SAR capabilities by locating lost individuals via their mobile signal.",
      image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&q=80",
      date: "Nov 10, 2025",
      category: "PUBLIC SAFETY"
    },
    {
      title: "Understanding Drone Technology: How Drones Revolutionize T&D Inspections",
      excerpt: "The synergy of drones and expertly outsourced data analysis is emerging as a potent solution for Transmission & Distribution (T&D) inspections and asset analysis, ensuring superior grid reliability and safety.",
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&q=80",
      date: "Nov 5, 2025",
      category: "ENERGY & UTILITIES"
    }
  ];

  return (
    <section 
      ref={ref} 
      className="py-32 bg-[#000000] font-sans" // Deep black background
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            INDUSTRY <span style={{ color: GOLD_ACCENT }} className="text-shadow-gold">INSIGHTS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Stay ahead with the latest news, expert analysis, and updates shaping the drone industry's future.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                boxShadow: `0 25px 50px rgba(255, 195, 0, 0.3)` // Premium Gold Glow
              }}
              // Dark Glass Card Style
              className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 group cursor-pointer transition-all duration-300"
            >
              {/* Image and Category Badge */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-xs font-extrabold uppercase shadow-lg shadow-yellow-500/30">
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 text-gray-500 text-sm mb-4">
                  <Calendar size={18} className="text-gray-500" />
                  <span className="font-semibold">{article.date}</span>
                </div>

                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2 leading-snug">
                  {article.title}
                </h3>

                <p className="text-gray-400 mb-6 line-clamp-3 text-sm font-light">
                  {article.excerpt}
                </p>

                <motion.button
                  whileHover={{ x: 8 }}
                  className="text-yellow-400 font-extrabold flex items-center gap-2 uppercase tracking-wider text-sm transition-transform duration-300"
                >
                  READ MORE
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(255, 195, 0, 0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-extrabold px-10 py-4 rounded-full text-lg uppercase tracking-wider flex items-center gap-3 mx-auto shadow-2xl shadow-yellow-500/40 hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
          >
            VIEW ALL INSIGHTS
            <ExternalLink size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;