import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronDown, Search, ChevronRight, Phone, Globe, Zap 
} from "lucide-react";

// --- Configuration ---
const PRIMARY_ACCENT = "#FFC300"; // Rich Gold/Amber
const DARK_BG = "rgba(10, 10, 10, 0.95)"; // Near-Black Slate for background/backdrop

const dropdownVariants = {
  initial: { opacity: 0, y: -10, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.2 } },
};

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileExpandedItems, setMobileExpandedItems] = useState({});
  const timeoutRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40); // Increased scroll depth for effect
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to manage body scroll and clear dropdown on mobile toggle
  useEffect(() => {
    if (mobileOpen) {
        setActiveDropdown(null);
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
  }, [mobileOpen]);

  const handleDropdownEnter = (index) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const toggleMobileItem = (index) => {
    setMobileExpandedItems(prev => ({
      // Optional: Close others when opening one (accordion behavior)
      // [index]: !prev[index] 
      ...prev,
      [index]: !prev[index]
    }));
  };

  const navItems = [
    // ... (navItems data remains unchanged)
    {
      title: "EQUIPMENT",
      links: [
        "DRONE STORE",
        "PLATFORMS",
        { 
          title: "VOLATUS ENGINEERING", 
          subLinks: ["AERIEPORT DRONE NESTING STATION", "CUSTOM SOLUTIONS"] 
        },
      ],
    },
    {
      title: "SERVICES",
      links: [
        "DRONE SERVICES QUOTE",
        "SURVEILLANCE AS A SERVICE",
        "PIPELINE SERVICES",
        "DRONE LIDAR INSPECTIONS",
        "DRONE INSPECTION SERVICES",
        "DRONE DELIVERY SERVICES",
        "WILDFIRE SERVICES",
        {
          title: "GEOMATICS",
          subLinks: [
            "LIDAR",
            "PHOTOGRAMMETRY",
            "AERIAL IMAGERY",
            "PRECISION AGRICULTURE",
            "CHANGE DETECTION",
          ],
        },
      ],
    },
    {
      title: "ACADEMY",
      links: [
        {
          title: "CANADA TRAINING",
          subLinks: [
            "LEVEL 1 COMPLEX COURSE",
            "ADVANCED RPAS BUNDLE",
            "ADVANCED RPAS GROUND SCHOOL",
          ],
        },
        "UK TRAINING COURSES",
        "DRONES IN ED",
        "THE DRONE MENTOR",
      ],
    },
    { title: "INVESTORS", links: [] },
    {
      title: "INDUSTRIES",
      links: [
        "OIL & GAS",
        "ENERGY & UTILITIES",
        "CONSTRUCTION",
        "DEFENSE",
        "FORESTRY & CONSERVATION",
        "GOVERNMENT AGENCIES",
        "INFRASTRUCTURE",
        "MINING & AGGREGATES",
        "PRECISION AGRICULTURE",
        "PUBLIC SAFETY",
      ],
    },
    {
      title: "ABOUT",
      links: ["ABOUT US", "CONTACT", "VOLATUS NEWS", "DRONE NETWORK NEWS"],
    },
  ];

  // Renamed and stylized the rendering function for clarity and premium look
  const renderDropdownItem = (link, idx) => {
    if (typeof link === "string") {
      return (
        <motion.div
          key={idx}
          initial={{ x: -15, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: idx * 0.05 }}
          className="group/item py-2.5 px-4 text-gray-800 hover:text-white cursor-pointer font-medium transition-all duration-300 rounded-xl relative overflow-hidden text-sm"
        >
          {/* Gold/Amber Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-600 translate-x-[-100%] group-hover/item:translate-x-0 transition-transform duration-300 ease-out"></div>
          <span className="relative z-10">{link}</span>
        </motion.div>
      );
    } else {
      // Nested Dropdown Structure
      return (
        <div key={idx} className="group/sub relative">
          <motion.div
            initial={{ x: -15, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="py-2.5 px-4 text-gray-800 hover:text-white cursor-pointer font-medium flex items-center justify-between rounded-xl transition-all duration-300 relative overflow-hidden text-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-600 translate-x-[-100%] group-hover/sub:translate-x-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10">{link.title}</span>
            <ChevronRight size={16} className="relative z-10 group-hover/sub:translate-x-1 transition-transform duration-300" />
          </motion.div>
          
          {/* Nested Sub-Dropdown Content */}
          <div className="invisible group-hover/sub:visible opacity-0 group-hover/sub:opacity-100 absolute left-full top-0 ml-4 transition-all duration-300 z-[60] pt-1">
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              // Glassmorphism and dark shadow
              className="bg-white/95 backdrop-blur-xl shadow-2xl shadow-slate-900/50 rounded-2xl py-3 px-2 w-72 border-2 border-amber-500/10"
            >
              {link.subLinks.map((subLink, subIdx) => (
                <motion.div
                  key={subIdx}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: subIdx * 0.03 }}
                  className="group/subitem py-2 px-4 text-gray-800 hover:text-white cursor-pointer rounded-lg transition-all duration-300 relative overflow-hidden text-sm font-medium"
                >
                  {/* Teal/Cyan Secondary Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 translate-x-[-100%] group-hover/subitem:translate-x-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative z-10">{subLink}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      );
    }
  };


  return (
    <>
      <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 font-sans ${
          scrolled 
            ? "bg-black/80 backdrop-blur-2xl shadow-2xl shadow-black/70 py-3 border-b border-white/5" 
            : "bg-transparent py-5" // Changed from green gradient to transparent/dark
        }`}>
        <div className="w-full mx-auto flex items-center justify-between px-6 max-w-[1700px]">
          
          {/* Logo */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center cursor-pointer group flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <svg width="48" height="48" viewBox="0 0 50 50" className="text-yellow-400 group-hover:scale-110 transition-transform duration-500">
                  <defs>
                    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: PRIMARY_ACCENT }} />
                      <stop offset="100%" style={{ stopColor: '#f59e0b' }} />
                    </linearGradient>
                  </defs>
                  {/* Modernized logo path (using the original geometry but with new colors) */}
                  <path fill="url(#logoGrad)" d="M25 5L5 15L25 25L45 15L25 5ZM5 35L25 45L45 35V25L25 35L5 25V35Z" />
                </svg>
                <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 rounded-full"></div>
              </div>
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <div className="text-2xl font-extrabold tracking-wider text-white leading-none">VOLATUS</div>
                <div className="text-[10px] font-extrabold tracking-[0.3em] text-yellow-400 leading-none mt-0.5">AEROSPACE</div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center max-w-5xl">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative"
                onMouseEnter={() => handleDropdownEnter(index)}
                onMouseLeave={handleDropdownLeave}
              >
                <div 
                  className={`flex items-center gap-1 cursor-pointer px-4 py-3 rounded-xl transition-all duration-300 
                  ${activeDropdown === index ? 'bg-white/10' : 'hover:bg-white/5'}`}
                >
                  <p className="font-semibold text-white text-sm tracking-wider group-hover:text-yellow-400 transition-colors duration-300">
                    {item.title}
                  </p>
                  {item.links.length > 0 && (
                    <motion.div
                      animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={14} className="text-white group-hover:text-yellow-400" />
                    </motion.div>
                  )}
                </div>

                <AnimatePresence>
                  {item.links.length > 0 && activeDropdown === index && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="absolute left-1/2 transform -translate-x-1/2 top-full mt-4 z-50"
                    >
                      {/* Premium Glassmorphism Container */}
                      <div className="bg-white/95 backdrop-blur-xl shadow-2xl shadow-slate-900/50 rounded-2xl p-4 w-72 border-2 border-amber-500/10">
                         {/* Removed the CSS arrow/pointer element for a cleaner look */}
                        {item.links.map(renderDropdownItem)} 
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right Actions */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex items-center gap-4 flex-shrink-0"
          >
            <motion.a 
              href="tel:833-865-2887" 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-yellow-400 font-extrabold text-sm hover:text-yellow-300 transition-all duration-300 group px-3 py-2 rounded-xl hover:bg-white/10"
            >
              <Phone size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xs whitespace-nowrap">833-865-2887</span>
            </motion.a>

            {/* Language Dropdown - Refined for premium look */}
            <div className="relative group/lang">
              <div className="flex items-center gap-1 cursor-pointer px-3 py-2 rounded-xl hover:bg-white/10 transition-all duration-300">
                <Globe size={18} className="text-white" />
                <p className="text-white font-semibold text-sm">EN</p>
                <ChevronDown size={14} className="text-white group-hover/lang:rotate-180 transition-transform duration-300" />
              </div>
              
              <div className="invisible group-hover/lang:visible opacity-0 group-hover/lang:opacity-100 absolute top-full right-0 mt-2 transition-all duration-300">
                <div className="bg-white/95 backdrop-blur-xl shadow-xl shadow-slate-900/50 rounded-xl py-2 w-20 border border-amber-500/10">
                  <p className="py-1.5 px-4 text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-yellow-500 hover:to-amber-600 cursor-pointer font-semibold text-sm transition-all duration-300 mx-1 rounded-lg">FR</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-3 rounded-full hover:bg-white/10 transition-all duration-300 text-white"
            >
              <Search size={18} />
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 40px rgba(255, 195, 0, 0.6)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-extrabold px-6 py-2.5 rounded-full text-sm tracking-wider uppercase hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 shadow-lg shadow-yellow-500/30"
            >
              <div className="flex items-center gap-1">
                <Zap size={16} className="animate-pulse" />
                <span>Contact Us</span>
              </div>
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={32} /> : <Menu size={32} />}
          </motion.button>
        </div>
      </nav>

      {/* Search Modal (Styling Enhanced) */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[90] flex items-start justify-center pt-32"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -50, opacity: 0, scale: 0.95 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl shadow-3xl shadow-black/50 w-full max-w-3xl mx-4 p-8 border border-yellow-400/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 border-b-2 border-yellow-400/50 pb-4">
                <Search size={32} className="text-yellow-500" />
                <input 
                  type="text" 
                  placeholder="Search for services, equipment, training..." 
                  className="flex-1 text-2xl outline-none placeholder:text-gray-400" 
                  autoFocus 
                />
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSearchOpen(false)}
                >
                  <X size={32} className="text-gray-500 hover:text-yellow-600 transition-colors" />
                </motion.button>
              </div>
              <div className="mt-6 space-y-3">
                <p className="text-sm text-gray-500 font-extrabold tracking-widest">POPULAR SEARCHES</p>
                {["Drone Inspections", "LIDAR Services", "Training Courses", "Equipment Store"].map((term, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5, backgroundColor: "#FFFBEB" }}
                    className="px-4 py-2 bg-gray-50 rounded-lg cursor-pointer transition-all duration-200 border-l-4 border-transparent hover:border-yellow-400"
                  >
                    <p className="text-gray-700 font-medium">{term}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu (Greatly Enhanced with Framer Motion Layout) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 150, damping: 25 }}
            className="lg:hidden fixed top-0 right-0 w-full max-w-sm h-screen bg-black/95 backdrop-blur-xl shadow-2xl shadow-black/80 px-8 py-20 overflow-y-auto z-[80]"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                layout // Important for smooth height transitions
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 30 }}
                className="mb-4 border-b border-white/10 pb-4"
              >
                <div 
                  className={`flex items-center justify-between cursor-pointer py-2 ${item.links.length > 0 ? 'hover:text-yellow-400' : ''}`}
                  onClick={() => item.links.length > 0 && toggleMobileItem(index)}
                >
                  <p className="font-extrabold text-white text-lg tracking-wide">{item.title}</p>
                  {item.links.length > 0 && (
                    <motion.div
                        animate={{ rotate: mobileExpandedItems[index] ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown size={22} className="text-yellow-400" />
                    </motion.div>
                  )}
                </div>
                
                <AnimatePresence initial={false}>
                  {item.links.length > 0 && mobileExpandedItems[index] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2 mt-2 space-y-1 overflow-hidden"
                    >
                      {item.links.map((link, idx) => (
                        <motion.p
                          key={idx}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ x: 5, color: PRIMARY_ACCENT }}
                          className="py-1.5 text-gray-300 cursor-pointer text-sm font-medium transition-colors"
                        >
                          {typeof link === "string" ? link : link.title}
                        </motion.p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            <motion.div
              className="mt-8 space-y-4 border-t border-white/10 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: navItems.length * 0.1 + 0.3 }}
            >
              <a href="tel:833-865-2887" className="block text-yellow-400 font-extrabold text-xl tracking-wide hover:text-yellow-300">
                <Phone size={20} className="inline mr-2" /> 833-865-2887
              </a>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-extrabold px-6 py-3 rounded-full hover:from-yellow-500 hover:to-amber-600 transition-colors shadow-lg shadow-yellow-500/30 text-lg uppercase"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;