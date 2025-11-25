import React from "react";
import { motion } from "framer-motion";
import { 
  Facebook, Twitter, Linkedin, Youtube, Instagram, Mail,
  Phone, MapPin, Send
} from "lucide-react";

// --- Configuration ---
const GOLD_ACCENT = "#FFC300";

const Footer = () => {
  // Animation variants for staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-white py-20 font-sans border-t border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-4 gap-12 mb-16 border-t border-b border-white/5 py-12"
        >
          {/* Column 1: Logo, Description & Socials */}
          <motion.div variants={itemVariants} className="md:pr-8">
            <div className="flex items-center gap-3 mb-6">
              {/* Technical SVG Logo */}
              <svg width="45" height="45" viewBox="0 0 50 50" className="drop-shadow-lg">
                <defs>
                  <linearGradient id="footerLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: GOLD_ACCENT }} />
                    <stop offset="100%" style={{ stopColor: '#f59e0b' }} />
                  </linearGradient>
                </defs>
                {/* Abstract Drone/Flight Path Shape */}
                <path fill="url(#footerLogo)" d="M25 5L35 15L45 5V25L25 35L5 25V5L15 15L25 5ZM25 35L45 45H5L25 35Z" />
              </svg>
              <div>
                <div className="text-2xl font-black tracking-widest">VOLATUS</div>
                <div className="text-xs font-bold" style={{ color: GOLD_ACCENT }}>AEROSPACE CORP.</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
              Pioneering aerial intelligence for mission-critical operations worldwide. Certified excellence, unmatched reach.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  target="_blank"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-yellow-400 hover:text-black transition-all duration-300 border border-white/10"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Solutions */}
          <motion.div variants={itemVariants} className="md:pl-8 md:border-l border-white/5">
            <h4 className="font-extrabold text-lg mb-6" style={{ color: GOLD_ACCENT }}>SOLUTIONS</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["Drone Inspections", "LIDAR Services", "Drone Delivery", "Surveillance & SAR", "Precision Agriculture", "Wildfire Detection"].map((item, i) => (
                <motion.li 
                  key={i} 
                  whileHover={{ x: 5, color: GOLD_ACCENT }}
                  className="cursor-pointer transition-all duration-200 flex items-center gap-2 font-medium"
                >
                  <Send size={14} className="text-yellow-400/50 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Company */}
          <motion.div variants={itemVariants} className="md:pl-8 md:border-l border-white/5">
            <h4 className="font-extrabold text-lg mb-6" style={{ color: GOLD_ACCENT }}>COMPANY</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["About Us", "Academy", "Investors", "Careers", "News & Media", "Contact"].map((item, i) => (
                <motion.li 
                  key={i} 
                  whileHover={{ x: 5, color: GOLD_ACCENT }}
                  className="cursor-pointer transition-all duration-200 flex items-center gap-2 font-medium"
                >
                  <Send size={14} className="text-yellow-400/50 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact & Newsletter */}
          <motion.div variants={itemVariants} className="md:pl-8 md:border-l border-white/5">
            <h4 className="font-extrabold text-lg mb-6" style={{ color: GOLD_ACCENT }}>CONTACT HUB</h4>
            <ul className="space-y-4 text-gray-400 text-sm mb-8">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-400 flex-shrink-0" />
                <a href="tel:833-865-2887" className="hover:text-yellow-400 transition-colors font-semibold tracking-wider">833-865-2887</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-400 flex-shrink-0" />
                <a href="mailto:info@volatusaerospace.com" className="hover:text-yellow-400 transition-colors">info@volatusaerospace.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>1234 Aviation Way, Suite 500<br />Toronto, ON M5V 3A8, Canada</span>
              </li>
            </ul>

            {/* Newsletter Subscription - Technical/Embedded Look */}
            <div>
              <p className="text-sm text-white mb-3 font-extrabold uppercase tracking-wider">Join The Intelligence Stream</p>
              <div className="flex gap-2 p-1 rounded-xl bg-white/5 border border-white/10 shadow-inner shadow-black/50">
                <input 
                  type="email" 
                  placeholder="Enter your professional email..." 
                  className="flex-1 px-4 py-2 rounded-lg bg-transparent text-sm text-white placeholder-gray-600 outline-none" 
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-lg font-extrabold transition-all duration-300"
                >
                  <Send size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar: Copyright and Legal */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-medium">
            © 2025 Volatus Aerospace Corp. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Terms of Service</a>
            <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;