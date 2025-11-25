import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Send, Zap } from "lucide-react";

// --- Configuration ---
const GOLD_ACCENT = "#FFC300";
const AZURE_ACCENT = "#00BFFF";
const DARK_BG_COLOR = "#0A0A0A";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section 
      ref={ref} 
      // Deep Black base with a subtle dark gradient
      className="py-32 bg-gradient-to-br from-[#000000] to-gray-950 relative overflow-hidden font-sans"
    >
      {/* Subtle Background Texture Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80')` }}
      ></div>
      
      {/* Radial Glow Effect for Focus */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-1/2 h-1/2 bg-yellow-500/10 blur-[150px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Zap size={40} className="text-yellow-400 mx-auto mb-4" />
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            READY TO TAKE <span style={{ color: GOLD_ACCENT }}>FLIGHT?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Propel your business forward with certified aerial intelligence. Secure your free, no-obligation expert consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Primary Action Button: Gold Gradient */}
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 50px rgba(255, 195, 0, 0.7)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-extrabold px-12 py-5 rounded-full text-lg uppercase tracking-wider flex items-center gap-3 shadow-2xl shadow-yellow-500/40 transition-all duration-300"
            >
              REQUEST A QUOTE
              <Send size={20} />
            </motion.button>

            {/* Secondary Action Button: Dark Glass with Azure Ring */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${AZURE_ACCENT}50` }}
              whileTap={{ scale: 0.95 }}
              className={`bg-white/5 backdrop-blur-xl ring-2 ring-[${AZURE_ACCENT}] text-white font-extrabold px-12 py-5 rounded-full text-lg uppercase tracking-wider flex items-center gap-3 transition-all duration-300`}
            >
              <Phone size={20} className={`text-[${AZURE_ACCENT}]`} />
              CALL 833-865-2887
            </motion.button>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 text-gray-400 text-sm font-medium"
          >
            Or send a direct inquiry to our experts at <a href="mailto:info@volatusaerospace.com" className="text-yellow-400 font-bold hover:underline transition-colors duration-300">info@volatusaerospace.com</a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;