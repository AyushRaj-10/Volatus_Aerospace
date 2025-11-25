import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Users, Award, Target } from "lucide-react";

// --- Configuration ---
const GOLD_ACCENT = "#FFC300";
const AZURE_ACCENT = "#00BFFF"; // Deep Sky Blue for a technical, high-tech feel

const TrustedPartner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Shield,
      title: "Innovation",
      description: "Cutting-edge drone technology and AI-powered solutions for every industry need."
    },
    {
      icon: Users,
      title: "Reliability",
      description: "Proven track record with 98% client satisfaction and zero safety incidents."
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Certified pilots and industry experts with over 10 years of experience."
    },
    {
      icon: Target,
      title: "Results",
      description: "Data-driven insights that deliver measurable ROI and operational excellence."
    }
  ];

  return (
    <section 
      ref={ref} 
      // Deep black background
      className="py-32 bg-[#0A0A0A] relative overflow-hidden font-sans"
    >
      {/* Absolute Background Elements for Depth and Atmosphere */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80')` }}
      ></div>
      
      {/* Radial Glow Effect for Central Focus */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-96 h-96 bg-yellow-500/10 blur-[150px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-extrabold tracking-[0.3em] uppercase text-gray-500 mb-3">
            Partnership built on performance
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-snug">
            YOUR TRUSTED PARTNER FOR ELITE
            <br/>
            <span 
              style={{ color: GOLD_ACCENT }} 
              className="text-shadow-gold"
            >
              AERIAL INTELLIGENCE SOLUTIONS
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Our mission is clear: to deliver unmatched innovation, reliability, and technical expertise in every aerial solution we provide globally.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                // Luminous shadow for premium look
                boxShadow: `0 25px 50px rgba(0, 191, 255, 0.3), 0 0 10px rgba(0, 191, 255, 0.1)` 
              }}
              // Sophisticated Glassmorphism Card
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center group cursor-pointer transition-all duration-300 relative overflow-hidden"
            >
              
              {/* Gold/Azure Border Glow on Hover */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                    // Inner glow effect
                    boxShadow: `inset 0 0 20px ${AZURE_ACCENT}`,
                    background: 'radial-gradient(circle at top left, rgba(255,195,0,0.2) 0%, rgba(0,0,0,0) 70%)'
                }}
              ></div>

              {/* Icon Container */}
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-8 mx-auto shadow-xl shadow-cyan-900/50 relative border-2 border-white/20"
                style={{ background: `linear-gradient(135deg, ${AZURE_ACCENT}, #0077b6)` }}
              >
                <feature.icon size={36} className="text-white" />
              </motion.div>

              <h3 className="text-3xl font-extrabold text-white mb-4 tracking-wide group-hover:text-yellow-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartner;