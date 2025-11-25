import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Eye, Radio, Wrench, Target, CloudRain, Shield, CheckCircle, 
  ArrowRight, Zap, Camera, Wifi, Database, Monitor
} from "lucide-react";

const PRIMARY_ACCENT = "#FFC300";

const Services = () => {
  return (
    <div className="bg-black min-h-screen pt-24">
      <HeroSection />
      <ServicesGrid />
      <ProcessSection />
      <CTASection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1600&q=80')] opacity-5 bg-cover bg-center"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full border border-amber-500/30 mb-8"
          >
            <Zap size={20} style={{ color: PRIMARY_ACCENT }} />
            <span style={{ color: PRIMARY_ACCENT }} className="font-extrabold text-sm tracking-wider">COMPREHENSIVE AERIAL SOLUTIONS</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            DRONE <span style={{ color: PRIMARY_ACCENT }}>SERVICES</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
            Advanced drone and piloted aircraft services combining cutting-edge technology 
            with expert teams to deliver precise, actionable intelligence for your operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      id: "inspections",
      icon: Eye,
      title: "DRONE INSPECTIONS",
      description: "Comprehensive aerial inspections for infrastructure, energy facilities, and industrial assets using advanced sensors and AI-powered defect detection.",
      features: [
        "4K & Thermal Imaging",
        "AI Defect Detection",
        "Real-time Reporting",
        "3D Modeling",
        "Asset Condition Analysis",
        "Compliance Documentation"
      ],
      industries: ["Energy", "Oil & Gas", "Infrastructure"],
      color: "from-yellow-400 to-amber-500"
    },
    {
      id: "lidar",
      icon: Radio,
      title: "LIDAR & GEOMATICS",
      description: "High-precision 3D mapping, surveying, and geospatial analysis for construction, mining, environmental monitoring, and urban planning.",
      features: [
        "3D Point Cloud Data",
        "±2cm Accuracy",
        "GIS Integration",
        "Volumetric Analysis",
        "Terrain Modeling",
        "Change Detection"
      ],
      industries: ["Construction", "Mining", "Government"],
      color: "from-amber-500 to-orange-500"
    },
    {
      id: "pipeline",
      icon: Wrench,
      title: "PIPELINE SERVICES",
      description: "Advanced pipeline monitoring and inspection services using multispectral imaging, leak detection technology, and ROW (Right-of-Way) surveillance.",
      features: [
        "Leak Detection",
        "ROW Monitoring",
        "Corrosion Analysis",
        "Thermal Imaging",
        "Compliance Reports",
        "Emergency Response"
      ],
      industries: ["Oil & Gas", "Utilities"],
      color: "from-yellow-400 to-amber-500"
    },
    {
      id: "surveillance",
      icon: Shield,
      title: "SURVEILLANCE AS A SERVICE",
      description: "24/7 aerial surveillance solutions for security, border protection, wildlife monitoring, and emergency response using advanced drone and aircraft systems.",
      features: [
        "24/7 Operations",
        "Night Vision",
        "Live Feed",
        "Motion Detection",
        "Thermal Sensors",
        "Real-time Alerts"
      ],
      industries: ["Defense", "Public Safety", "Conservation"],
      color: "from-amber-500 to-orange-500"
    },
    {
      id: "agriculture",
      icon: Target,
      title: "PRECISION AGRICULTURE",
      description: "Data-driven farming solutions with NDVI analysis, crop health monitoring, variable rate application mapping, and automated spray systems.",
      features: [
        "NDVI Mapping",
        "Crop Health Analysis",
        "Yield Prediction",
        "Spray Systems",
        "Soil Analysis",
        "Irrigation Planning"
      ],
      industries: ["Agriculture", "Forestry"],
      color: "from-yellow-400 to-amber-500"
    },
    {
      id: "wildfire",
      icon: CloudRain,
      title: "WILDFIRE SERVICES",
      description: "Early wildfire detection and monitoring using thermal sensors, smoke detection algorithms, and real-time data transmission for rapid response.",
      features: [
        "Heat Detection",
        "Smoke Analysis",
        "Risk Assessment",
        "Emergency Response",
        "Fire Mapping",
        "Resource Coordination"
      ],
      industries: ["Forestry", "Government", "Conservation"],
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group cursor-pointer relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <motion.div
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.6 }}
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-2xl relative z-10`}
              >
                <service.icon size={40} className="text-black" />
              </motion.div>

              <h3 className="text-2xl font-black text-white mb-4 relative z-10">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed relative z-10">
                {service.description}
              </p>

              <div className="mb-6 relative z-10">
                <p className="text-sm font-bold text-yellow-400 mb-3">KEY CAPABILITIES:</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6 relative z-10">
                <p className="text-sm font-bold text-yellow-400 mb-3">INDUSTRIES:</p>
                <div className="flex flex-wrap gap-2">
                  {service.industries.map((industry, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white font-semibold">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full bg-gradient-to-r ${service.color} text-black font-extrabold py-3 rounded-full flex items-center justify-center gap-2 relative z-10 uppercase tracking-wider text-sm`}
              >
                GET A QUOTE
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      icon: Camera,
      title: "Data Capture",
      description: "Advanced sensors collect high-resolution visual, thermal, and LiDAR data"
    },
    {
      icon: Database,
      title: "Processing",
      description: "AI-powered analysis identifies defects, anomalies, and actionable insights"
    },
    {
      icon: Monitor,
      title: "Reporting",
      description: "Comprehensive reports with 3D models, analytics, and recommendations"
    },
    {
      icon: Wifi,
      title: "Delivery",
      description: "Real-time dashboards and secure cloud access to all data and insights"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            OUR <span style={{ color: PRIMARY_ACCENT }}>PROCESS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From data capture to actionable insights in four streamlined steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
              )}
              
              <div className="relative z-10">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mx-auto mb-4 shadow-2xl">
                  <step.icon size={40} className="text-black" />
                </div>
                <div className="w-10 h-10 rounded-full bg-black border-4 border-yellow-400 flex items-center justify-center mx-auto -mt-8 mb-4">
                  <span className="text-yellow-400 font-black">{index + 1}</span>
                </div>
                <h3 className="text-xl font-black text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
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
          READY TO GET STARTED?
        </h2>
        <p className="text-xl text-black/80 mb-8 font-semibold">
          Contact us today for a free consultation and custom quote for your project
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-yellow-400 font-extrabold px-10 py-5 rounded-full text-lg inline-flex items-center gap-2 uppercase tracking-wider"
        >
          REQUEST A QUOTE
          <ArrowRight size={20} />
        </motion.button>
      </div>
    </section>
  );
};

export default Services;
