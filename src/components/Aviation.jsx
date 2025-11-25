import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Plane, Shield, Radio, Clock, CheckCircle, 
  ArrowRight, Zap, Users, Award, Target
} from "lucide-react";

const PRIMARY_ACCENT = "#FFC300";

const Aviation = () => {
  return (
    <div className="bg-black min-h-screen pt-24">
      <HeroSection />
      <ServicesSection />
      <SafetySection />
      <CapabilitiesSection />
      <CTASection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80')] opacity-10 bg-cover bg-center"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full border border-amber-500/30 mb-8"
            >
              <Plane size={20} style={{ color: PRIMARY_ACCENT }} />
              <span style={{ color: PRIMARY_ACCENT }} className="font-extrabold text-sm tracking-wider">FIXED-WING OPERATIONS</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              AVIATION<br/>
              <span style={{ color: PRIMARY_ACCENT }}>SERVICES</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Professional charter and aircraft management services for aerial surveillance, 
              reconnaissance, and specialized mission support using our fleet of piloted aircraft.
            </p>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${PRIMARY_ACCENT}99` }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-extrabold px-8 py-4 rounded-full inline-flex items-center gap-2 uppercase tracking-wider"
              >
                LEARN MORE
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
              alt="Aviation Services"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      id: "charter",
      icon: Plane,
      title: "CHARTER SERVICES",
      description: "On-demand aircraft charter for aerial surveillance, reconnaissance, and specialized missions with experienced pilots and modern aircraft.",
      features: [
        "On-demand flights",
        "Experienced pilots",
        "Modern aircraft fleet",
        "Custom mission planning",
        "Real-time communication",
        "Flexible scheduling"
      ]
    },
    {
      id: "management",
      icon: Target,
      title: "AIRCRAFT MANAGEMENT",
      description: "Comprehensive aircraft management services including maintenance, crew training, regulatory compliance, and operational support.",
      features: [
        "Fleet management",
        "Maintenance coordination",
        "Crew training",
        "Regulatory compliance",
        "Performance tracking",
        "Cost optimization"
      ]
    },
    {
      id: "surveillance",
      icon: Radio,
      title: "AERIAL SURVEILLANCE",
      description: "Specialized aerial surveillance operations for border security, infrastructure monitoring, environmental assessment, and emergency response.",
      features: [
        "Advanced sensors",
        "Long-endurance flights",
        "Real-time data transmission",
        "Multi-sensor integration",
        "24/7 operations capability",
        "Secure communications"
      ]
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            AVIATION <span style={{ color: PRIMARY_ACCENT }}>CAPABILITIES</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional piloted aircraft services for specialized missions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mb-6 shadow-2xl">
                <service.icon size={40} className="text-black" />
              </div>

              <h3 className="text-2xl font-black text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

              <div className="space-y-2">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SafetySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="safety" className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              SAFETY MANAGEMENT<br/>
              <span style={{ color: PRIMARY_ACCENT }}>SYSTEM</span>
            </h2>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Our comprehensive Safety Management System (SMS) ensures the highest standards 
              of safety, regulatory compliance, and operational excellence across all aviation operations.
            </p>

            <div className="space-y-4">
              {[
                "Transport Canada certified operations",
                "FAA Part 135 compliance ready",
                "Comprehensive risk assessment protocols",
                "Continuous safety monitoring",
                "Regular crew training and certification",
                "Incident reporting and analysis",
                "Emergency response procedures",
                "Maintenance quality assurance"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Shield size={24} style={{ color: PRIMARY_ACCENT }} className="flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Shield, value: "100%", label: "Safety Record" },
                { icon: Award, value: "15+", label: "Certifications" },
                { icon: Users, value: "50+", label: "Certified Pilots" },
                { icon: Clock, value: "10K+", label: "Flight Hours" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={32} className="text-black" />
                  </div>
                  <p className="text-4xl font-black text-white mb-2" style={{ color: PRIMARY_ACCENT }}>{stat.value}</p>
                  <p className="text-sm text-gray-400 font-semibold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CapabilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const capabilities = [
    {
      title: "Long-Endurance Missions",
      description: "Extended flight operations for comprehensive coverage"
    },
    {
      title: "Multi-Sensor Integration",
      description: "Advanced sensor packages for diverse mission requirements"
    },
    {
      title: "Secure Communications",
      description: "Encrypted data links for sensitive operations"
    },
    {
      title: "Night Operations",
      description: "24/7 capability with advanced night vision systems"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            OPERATIONAL <span style={{ color: PRIMARY_ACCENT }}>CAPABILITIES</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center"
            >
              <h3 className="text-xl font-black text-white mb-3">{cap.title}</h3>
              <p className="text-gray-400 text-sm">{cap.description}</p>
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
          NEED SPECIALIZED AVIATION SERVICES?
        </h2>
        <p className="text-xl text-black/80 mb-8 font-semibold">
          Contact our aviation team to discuss your mission requirements
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-yellow-400 font-extrabold px-10 py-5 rounded-full text-lg inline-flex items-center gap-2 uppercase tracking-wider"
        >
          CONTACT AVIATION TEAM
          <ArrowRight size={20} />
        </motion.button>
      </div>
    </section>
  );
};

export default Aviation;
