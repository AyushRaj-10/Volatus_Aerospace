import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Battery, Radio, Eye, ArrowRight } from "lucide-react";

// --- Configuration ---
const GOLD_ACCENT = "#FFC300";
const DARK_BG_COLOR = "#000000";

const EquipmentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const equipment = [
    {
      icon: Cpu,
      name: "Enterprise Drones",
      description: "Professional-grade drones for complex commercial applications and large-scale operations.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&q=80"
    },
    {
      icon: Eye,
      name: "Sensors & Payloads",
      description: "Advanced thermal, LiDAR, and multispectral imaging systems for critical data acquisition.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80"
    },
    {
      icon: Battery,
      name: "Power Solutions",
      description: "Extended flight time batteries, intelligent charging hubs, and field power systems.",
      image: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=600&q=80"
    },
    {
      icon: Radio,
      name: "Control Systems",
      description: "Ergonomic, professional controllers and integrated ground station software for mission control.",
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=600&q=80"
    }
  ];

  return (
    <section 
      ref={ref} 
      // Absolute black background for contrast
      className="py-32 bg-[#000000] font-sans"
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
            THE HARDWARE OF THE FUTURE
            <br/>
            <span 
              style={{ color: GOLD_ACCENT }} 
              className="text-shadow-gold"
            >
              PROFESSIONAL EQUIPMENT
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Source the most reliable, high-performance drone equipment and accessories built for demanding industrial applications.
          </p>
        </motion.div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipment.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                y: -15, 
                scale: 1.05, 
                // Enhanced luminous shadow
                boxShadow: `0 25px 50px rgba(255, 195, 0, 0.3)` 
              }}
              className="group cursor-pointer transition-all duration-300 relative rounded-3xl overflow-hidden"
            >
              {/* Image Container (Visual Focus) */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl border-b border-white/20">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
                />
                {/* Image Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Content Card (Information Area) */}
              <div className="relative p-6 bg-white/5 backdrop-blur-md rounded-b-3xl border border-white/10 border-t-0">
                
                {/* Icon Badge - Prominent Gold */}
                <div className="absolute top-[-30px] left-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-xl shadow-yellow-500/30 border border-white/30"
                  >
                    <item.icon size={30} className="text-black" />
                  </motion.div>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-2 pt-8 tracking-wide">
                  {item.name}
                </h3>
                <p className="text-gray-400 mb-6 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
                
                <motion.button
                  whileHover={{ x: 8 }}
                  className="text-yellow-400 font-extrabold flex items-center gap-2 transition-transform duration-300 text-sm uppercase tracking-wider"
                >
                  VIEW PRODUCTS
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;