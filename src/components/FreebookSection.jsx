import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, CheckCircle } from "lucide-react";

const FreebookSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80')] opacity-10 bg-cover bg-center"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1589998059171-988d887df646?w=600&q=80"
                alt="Free Guide"
                className="w-full rounded-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              HAVE QUESTIONS ABOUT<br/>
              HIRING A DRONE SERVICE<br/>
              COMPANY?
            </h2>
            
            <h3 className="text-3xl font-bold mb-6">
              Request your <span className="text-yellow-400">FREE</span> copy today!
            </h3>

            <ul className="space-y-3 mb-8">
              {[
                "Complete guide to drone services",
                "What to look for in a provider",
                "Cost breakdown and ROI analysis",
                "Safety and compliance checklist",
                "Industry-specific case studies"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-yellow-400 flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(250, 204, 21, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black font-bold px-10 py-5 rounded-xl text-lg flex items-center gap-3 shadow-2xl"
            >
              <Download size={24} />
              DOWNLOAD FREE GUIDE
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FreebookSection;
