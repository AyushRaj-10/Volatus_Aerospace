import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- Configuration ---
const GOLD_ACCENT = "#FFC300";

const IndustriesSection = () => {
  const ref = useRef(null);
  // Increase amount for better mobile/smaller screen visibility before animation fires
  const isInView = useInView(ref, { once: true, amount: 0.3 }); 

  const industries = [
    // Data remains the same, assuming these images are placeholders for high-quality assets
    { 
      img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80", 
      title: "OIL & GAS",
      desc: "Pipeline inspections, facility monitoring, and emergency response"
    },
    { 
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&q=80", 
      title: "ENERGY & UTILITIES",
      desc: "Solar farm inspections, wind turbine analysis, and power line monitoring"
    },
    { 
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80", 
      title: "CONSTRUCTION",
      desc: "Site surveying, progress tracking, and volumetric analysis"
    },
    { 
      img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80", 
      title: "DEFENSE",
      desc: "Tactical surveillance, reconnaissance, and border security"
    },
    { 
      img: "https://images.unsplash.com/photo-1511497584788-876760111969?w=600&q=80", 
      title: "FORESTRY & CONSERVATION",
      desc: "Forest health monitoring, wildlife tracking, and fire detection"
    },
    { 
      img: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&q=80", 
      title: "MINING & AGGREGATES",
      desc: "Stockpile measurement, safety inspections, and terrain mapping"
    },
    { 
      img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80", 
      title: "PRECISION AGRICULTURE",
      desc: "Crop monitoring, spraying services, and yield optimization"
    },
    { 
      img: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&q=80", 
      title: "PUBLIC SAFETY",
      desc: "Emergency response, search & rescue, and disaster assessment"
    }
  ];

  return (
    <section 
      ref={ref} 
      className="py-24 bg-[#050505] font-sans" // Very deep black background
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            WHERE TECHNOLOGY MEETS INDUSTRY
            <br/>
            <span 
              style={{ color: GOLD_ACCENT }} 
              className="text-shadow-gold" // Custom utility for text shadow
            >
              SECTORS WE TRANSFORM
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl">
            Delivering specialized, scalable drone solutions to drive efficiency, safety, and innovation across diverse sectors worldwide.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // Enhanced hover effect for a premium feel
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: `0 20px 40px rgba(255, 195, 0, 0.3)` // Gold glow effect
              }}
              className="relative group cursor-pointer rounded-3xl overflow-hidden h-96 border border-white/10 transition-all duration-500"
            >
              <img 
                src={industry.img} 
                alt={industry.title} 
                className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700" 
              />
              
              {/* Dynamic Overlay - Deepens and adds golden tint on hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent 
                group-hover:from-black/90 group-hover:via-black/70 group-hover:to-yellow-900/10 
                transition-all duration-500"
              ></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <motion.h3 
                  className="text-3xl font-extrabold text-white mb-2 tracking-wide"
                >
                  {industry.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  // Fade in the description on hover
                  animate={isInView ? { opacity: 0, y: 15 } : {}} 
                  variants={{
                    rest: { opacity: 0, y: 15 },
                    hover: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-base text-gray-300 transition-opacity duration-300"
                  // Using an invisible motion.div to drive the paragraph animation on group hover
                  whileHover="hover"
                >
                  {industry.desc}
                </motion.p>
              </div>
              
              {/* Call-to-action Arrow - Prominent Gold Button */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0, scale: 0.5 }}
                variants={{
                    hover: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: 0.1 } }
                }}
                className="absolute top-6 right-6"
                whileHover="hover"
              >
                <div 
                    className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full p-3 
                    shadow-lg shadow-yellow-500/40 transform group-hover:rotate-45 transition-transform duration-500"
                >
                  <ArrowRight size={24} className="text-black" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;