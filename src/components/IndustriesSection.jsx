import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Droplet, Zap, HardHat, Shield, Leaf, Building2, 
  Factory, Mountain, Tractor, Home, AlertCircle, ArrowRight
} from "lucide-react";

const PRIMARY_ACCENT = "#FFC300";

const Industries = () => {
  return (
    <div className="bg-black min-h-screen pt-24">
      <HeroSection />
      <IndustriesGrid />
      <CTASection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full border border-amber-500/30 mb-8"
          >
            <Building2 size={20} style={{ color: PRIMARY_ACCENT }} />
            <span style={{ color: PRIMARY_ACCENT }} className="font-extrabold text-sm tracking-wider">INDUSTRY SOLUTIONS</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            INDUSTRIES WE <span style={{ color: PRIMARY_ACCENT }}>SERVE</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Delivering specialized drone and aviation solutions across diverse sectors worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const IndustriesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const industries = [
    {
      id: "oil-gas",
      icon: Droplet,
      title: "OIL & GAS",
      description: "Pipeline inspections, facility monitoring, leak detection, and emergency response with advanced thermal and multispectral imaging.",
      services: ["Pipeline monitoring", "Leak detection", "Facility inspections", "ROW surveillance", "Emergency response"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80",
      color: "from-yellow-400 to-amber-500"
    },
    {
      id: "energy",
      icon: Zap,
      title: "ENERGY & UTILITIES",
      description: "Solar farm inspections, wind turbine analysis, power line monitoring, and substation assessments for optimal performance.",
      services: ["Solar inspections", "Wind turbine analysis", "Power line monitoring", "Substation surveys", "Vegetation management"],
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&q=80",
      color: "from-amber-500 to-orange-500"
    },
    {
      id: "construction",
      icon: HardHat,
      title: "CONSTRUCTION",
      description: "Site surveying, progress tracking, volumetric analysis, and safety monitoring for construction projects of all sizes.",
      services: ["Site surveys", "Progress tracking", "Volumetric analysis", "3D modeling", "Safety inspections"],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      color: "from-yellow-400 to-amber-500"
    },
    {
      id: "public-safety",
      icon: AlertCircle,
      title: "PUBLIC SAFETY",
      description: "Emergency response, search and rescue, disaster assessment, and tactical support for law enforcement and first responders.",
      services: ["Emergency response", "Search & rescue", "Disaster assessment", "Tactical support", "Traffic monitoring"],
      image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&q=80",
      color: "from-amber-500 to-orange-500"
    },
    {
      id: "defense",
      icon: Shield,
      title: "DEFENSE",
      description: "Tactical surveillance, reconnaissance, border security, and specialized mission support for defense and security operations.",
      services: ["Tactical surveillance", "Reconnaissance", "Border security", "Training support", "Intelligence gathering"],
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80",
      color: "from-yellow-400 to-amber-500"
    },
    {
      id: "forestry",
      icon: Leaf,
      title: "FORESTRY & CONSERVATION",
      description: "Forest health monitoring, wildlife tracking, wildfire detection, and environmental assessment for conservation efforts.",
      services: ["Forest health monitoring", "Wildlife tracking", "Wildfire detection", "Environmental surveys", "Habitat mapping"],
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=600&q=80",
      color: "from-amber-500 to-orange-500"
    },
    {
      id: "government",
      icon: Building2,
      title: "GOVERNMENT AGENCIES",
      description: "Infrastructure assessment, emergency management, environmental monitoring, and regulatory compliance support.",
      services: ["Infrastructure surveys", "Emergency management", "Environmental monitoring", "Compliance support", "Asset management"],
      image: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=600&q=80",
      color: "from-yellow-400 to-amber-500"
    },
    {
      id: "infrastructure",
      icon: Factory,
      title: "INFRASTRUCTURE",
      description: "Bridge inspections, road surveys, railway monitoring, and critical infrastructure assessment with precision data.",
      services: ["Bridge inspections", "Road surveys", "Railway monitoring", "Dam inspections", "Structural analysis"],
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80",
      color: "from-amber-500 to-orange-500"
    },
    {
      id: "mining",
      icon: Mountain,
      title: "MINING & AGGREGATES",
      description: "Stockpile measurement, pit surveys, safety inspections, and terrain mapping for mining operations.",
      services: ["Stockpile volumetrics", "Pit surveys", "Safety inspections", "Terrain mapping", "Haul road monitoring"],
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&q=80",
      color: "from-yellow-400 to-amber-500"
    },
    {
      id: "agriculture",
      icon: Tractor,
      title: "PRECISION AGRICULTURE",
      description: "Crop monitoring, NDVI analysis, yield prediction, and precision spraying for modern farming operations.",
      services: ["Crop health monitoring", "NDVI mapping", "Yield prediction", "Irrigation planning", "Spray applications"],
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
      color: "from-amber-500 to-orange-500"
    },
    {
      id: "property",
      icon: Home,
      title: "PROPERTY DEVELOPMENT",
      description: "Land surveys, marketing imagery, construction progress, and property inspections for real estate development.",
      services: ["Land surveys", "Aerial photography", "Construction tracking", "Property inspections", "Marketing content"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
      color: "from-yellow-400 to-amber-500"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              id={industry.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center`}>
                    <industry.icon size={24} className="text-black" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-black text-white mb-4">{industry.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{industry.description}</p>

                <div className="mb-6">
                  <p className="text-sm font-bold text-yellow-400 mb-3">KEY SERVICES:</p>
                  <div className="space-y-2">
                    {industry.services.map((service, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-300">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${industry.color} text-black font-extrabold py-3 rounded-full flex items-center justify-center gap-2 uppercase tracking-wider text-sm`}
                >
                  LEARN MORE
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

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
          DON'T SEE YOUR INDUSTRY?
        </h2>
        <p className="text-xl text-black/80 mb-8 font-semibold">
          We provide custom solutions for unique industry needs. Contact us to discuss your requirements.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-yellow-400 font-extrabold px-10 py-5 rounded-full text-lg inline-flex items-center gap-2 uppercase tracking-wider"
        >
          CONTACT US
          <ArrowRight size={20} />
        </motion.button>
      </div>
    </section>
  );
};

export default Industries;
