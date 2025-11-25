import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Eye, CloudRain, Wrench, Radio, Cpu, Target, 
  ArrowRight, CheckCircle, Sparkles, Zap
} from "lucide-react";

// --- Configuration ---
const GOLD_ACCENT = "#FFC300";
const DARK_BG_COLOR = "#000000"; // Absolute black for contrast

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Note: Using utility classes for color/gradient definition as they are complex.
  const services = [
    {
      icon: Eye,
      title: "DRONE INSPECTIONS",
      description: "Comprehensive aerial inspections for infrastructure, energy facilities, and industrial assets with AI-powered defect detection.",
      color: "from-blue-500 to-cyan-500",
      gradient: "from-blue-500/10 via-cyan-500/10 to-blue-500/10",
      luminous_shadow: "0 0 40px rgba(59, 130, 246, 0.5)", // Blue
      features: ["4K Video", "Thermal Imaging", "AI Analysis", "Real-time Reporting"],
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&q=80"
    },
    {
      icon: Radio,
      title: "LIDAR & GEOMATICS",
      description: "High-precision 3D mapping, surveying, and geospatial analysis for construction, mining, and environmental projects.",
      color: "from-purple-500 to-pink-500",
      gradient: "from-purple-500/10 via-pink-500/10 to-purple-500/10",
      luminous_shadow: "0 0 40px rgba(168, 85, 247, 0.5)", // Purple
      features: ["3D Modeling", "Point Cloud", "GIS Integration", "Accuracy ±2cm"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80"
    },
    {
      icon: Cpu,
      title: "DRONE DELIVERY",
      description: "Autonomous delivery solutions for medical supplies, e-commerce, and emergency response with real-time tracking.",
      color: "from-orange-500 to-yellow-500",
      gradient: "from-orange-500/10 via-yellow-500/10 to-orange-500/10",
      luminous_shadow: "0 0 40px rgba(249, 115, 22, 0.5)", // Orange
      features: ["Autonomous Flight", "Live Tracking", "Safe Delivery", "24/7 Operations"],
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=400&q=80"
    },
    {
      icon: Wrench,
      title: "PIPELINE SERVICES",
      description: "Advanced pipeline monitoring and inspection services using multispectral imaging and leak detection technology.",
      color: "from-green-500 to-teal-500",
      gradient: "from-green-500/10 via-teal-500/10 to-green-500/10",
      luminous_shadow: "0 0 40px rgba(16, 185, 129, 0.5)", // Green
      features: ["Leak Detection", "ROW Monitoring", "Corrosion Analysis", "Compliance Reports"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80"
    },
    {
      icon: Target,
      title: "PRECISION AGRICULTURE",
      description: "Data-driven farming solutions with NDVI analysis, crop health monitoring, and variable rate application mapping.",
      color: "from-red-500 to-orange-500",
      gradient: "from-red-500/10 via-orange-500/10 to-red-500/10",
      luminous_shadow: "0 0 40px rgba(239, 68, 68, 0.5)", // Red
      features: ["Crop Analysis", "NDVI Mapping", "Yield Prediction", "Spray Systems"],
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80"
    },
    {
      icon: CloudRain,
      title: "WILDFIRE SERVICES",
      description: "Early wildfire detection and monitoring using thermal sensors, smoke detection, and real-time data transmission.",
      color: "from-pink-500 to-purple-500",
      gradient: "from-pink-500/10 via-purple-500/10 to-pink-500/10",
      luminous_shadow: "0 0 40px rgba(236, 72, 153, 0.5)", // Pink
      features: ["Heat Detection", "Smoke Analysis", "Risk Assessment", "Emergency Response"],
      image: "https://images.unsplash.com/photo-1603345928902-1a4a69b3dc9e?w=400&q=80"
    }
  ];
  
  // Custom variant for staggered feature animation
  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -10, opacity: 0 },
    show: { x: 0, opacity: 1 }
  };


  return (
    <section 
        ref={ref} 
        // Absolute black background
        className="py-32 bg-[#000000] relative overflow-hidden font-sans"
    >
      {/* Animated Background Elements - Simplified for Elegance */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-yellow-400/30 mb-6"
          >
            <Sparkles size={20} className="text-yellow-400" />
            <span className="text-yellow-400 font-extrabold text-sm tracking-widest uppercase">COMPREHENSIVE SOLUTIONS</span>
            <Sparkles size={20} className="text-yellow-400" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            ELITE AERIAL DATA {" "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent inline-block">
              SERVICES
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Scalable drone solutions tailored to generate actionable intelligence for your most complex challenges.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={listVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants} // Applies fade/slide in to the card group
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Card Container */}
              <motion.div
                whileHover={{ 
                    y: -15, 
                    scale: 1.05,
                    boxShadow: service.luminous_shadow // Custom luminous shadow
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                // Base Glassmorphism Card Style
                className="relative h-full bg-white/5 backdrop-blur-3xl rounded-3xl p-8 border border-white/10 shadow-3xl overflow-hidden cursor-pointer transition-all duration-300"
              >
                {/* Luminous Background Gradient Overlay */}
                <div 
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                ></div>
                
                {/* Background Image with Darker Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with Enhanced Animation */}
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="relative mb-6"
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-2xl shadow-black/50 border border-white/20`}>
                      <service.icon size={40} className="text-white" />
                    </div>
                  </motion.div>

                  {/* Title with Gradient on Hover */}
                  <h3 className={`text-3xl font-black mb-4 tracking-wide transition-all duration-300 ${
                    hoveredIndex === index 
                      ? `bg-gradient-to-r ${service.color} bg-clip-text text-transparent` 
                      : 'text-white'
                  }`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed text-base group-hover:text-gray-300 transition-colors duration-300 font-light">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <motion.div 
                    className="space-y-3 mb-8"
                    variants={listVariants}
                    initial="hidden"
                    animate={hoveredIndex === index ? "show" : "hidden"}
                  >
                    {service.features.map((feature, i) => (
                      <motion.div 
                        key={i}
                        variants={itemVariants}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA Button with Enhanced Hover */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${service.color} text-white font-extrabold py-3.5 rounded-full text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-lg group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                  >
                    {/* Button Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      animate={hoveredIndex === index ? { x: ['-100%', '100%'] } : {}}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                    />
                    <span className="relative z-10">VIEW CASE STUDY</span>
                    <motion.div
                      animate={hoveredIndex === index ? { x: [0, 5, 0] } : {}}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="relative z-10"
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  </motion.button>
                </div>

                {/* Number Badge - Large, transparent numbering for design depth */}
                <div className="absolute bottom-[-10px] right-[-10px]">
                  <span className={`text-9xl font-black opacity-10 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}>
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-6 text-xl font-medium">
            Ready to integrate aerial intelligence? Request a detailed consultation today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(255, 195, 0, 0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-extrabold px-12 py-4 rounded-full text-lg uppercase tracking-wider inline-flex items-center gap-3 shadow-2xl shadow-yellow-500/40 hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
          >
            GET A CUSTOM QUOTE
            <Zap size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;