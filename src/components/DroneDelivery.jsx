import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Plane, Radio, Monitor, MapPin, Zap, CheckCircle, 
  ArrowRight, Package, Clock, Shield, Target
} from "lucide-react";

const PRIMARY_ACCENT = "#FFC300";

const DroneDelivery = () => {
  return (
    <div className="bg-black min-h-screen pt-24">
      <HeroSection />
      <TechnologySection />
      <FleetSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1600&q=80')] opacity-10 bg-cover bg-center"></div>
      
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
              <Zap size={20} style={{ color: PRIMARY_ACCENT }} />
              <span style={{ color: PRIMARY_ACCENT }} className="font-extrabold text-sm tracking-wider">AUTONOMOUS DELIVERY</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              THE FUTURE OF<br/>
              <span style={{ color: PRIMARY_ACCENT }}>DRONE DELIVERY</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Revolutionizing last-mile delivery with autonomous drone systems featuring 
              DroneSpot™ infrastructure, FLYTE management software, and our advanced fleet 
              of delivery drones.
            </p>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${PRIMARY_ACCENT}99` }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-extrabold px-8 py-4 rounded-full inline-flex items-center gap-2 uppercase tracking-wider"
              >
                GET STARTED
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
              src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80"
              alt="Drone Delivery"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TechnologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const technologies = [
    {
      id: "dronespot",
      icon: MapPin,
      title: "DroneSpot™",
      subtitle: "Automated Landing Stations",
      description: "Revolutionary automated landing and charging infrastructure enabling fully autonomous drone operations with precision landing and secure package transfer.",
      features: [
        "Precision GPS landing",
        "Automated charging",
        "Weather protection",
        "Secure package lockers",
        "24/7 operations",
        "Remote monitoring"
      ]
    },
    {
      id: "flyte",
      icon: Monitor,
      title: "FLYTE",
      subtitle: "Autonomous Management Software",
      description: "Advanced fleet management platform for autonomous drone delivery operations with real-time tracking, route optimization, and safety monitoring.",
      features: [
        "Route optimization",
        "Real-time tracking",
        "Fleet management",
        "Safety monitoring",
        "Analytics dashboard",
        "API integration"
      ]
    },
    {
      id: "occ",
      icon: Radio,
      title: "OCC",
      subtitle: "Operations Control Center",
      description: "Centralized command and control system managing all delivery operations with live monitoring, emergency protocols, and performance analytics.",
      features: [
        "Live operations monitoring",
        "Emergency response",
        "Performance analytics",
        "Remote piloting",
        "Compliance tracking",
        "Customer support"
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
            DELIVERY <span style={{ color: PRIMARY_ACCENT }}>TECHNOLOGY</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Integrated systems powering the future of autonomous delivery
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              id={tech.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mb-6 shadow-2xl">
                <tech.icon size={40} className="text-black" />
              </div>

              <h3 className="text-2xl font-black text-white mb-2">{tech.title}</h3>
              <p className="text-yellow-400 font-bold text-sm mb-4">{tech.subtitle}</p>
              <p className="text-gray-400 mb-6 leading-relaxed">{tech.description}</p>

              <div className="space-y-2">
                {tech.features.map((feature, i) => (
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

const FleetSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const drones = [
    {
      id: "condor",
      name: "Condor XL",
      type: "Heavy Payload",
      description: "Long-range heavy-lift drone designed for large package delivery with extended flight time and all-weather capabilities.",
      specs: {
        "Payload": "Up to 25 lbs",
        "Range": "50+ miles",
        "Speed": "60 mph",
        "Flight Time": "60 minutes"
      },
      applications: ["Medical supplies", "Large packages", "Rural delivery"]
    },
    {
      id: "canary",
      name: "Canary",
      type: "Urban Delivery",
      description: "Compact and agile drone optimized for urban environments with precision navigation and obstacle avoidance systems.",
      specs: {
        "Payload": "Up to 10 lbs",
        "Range": "20 miles",
        "Speed": "45 mph",
        "Flight Time": "30 minutes"
      },
      applications: ["E-commerce", "Food delivery", "Urban areas"]
    },
    {
      id: "aero",
      name: "Aero II",
      type: "Multi-Purpose",
      description: "Versatile delivery drone with modular design supporting various payload configurations and mission profiles.",
      specs: {
        "Payload": "Up to 15 lbs",
        "Range": "35 miles",
        "Speed": "50 mph",
        "Flight Time": "45 minutes"
      },
      applications: ["Pharmacy", "Retail", "Express delivery"]
    }
  ];

  return (
    <section ref={ref} id="fleet" className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            DELIVERY <span style={{ color: PRIMARY_ACCENT }}>FLEET</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Advanced drones engineered for reliable autonomous delivery operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {drones.map((drone, index) => (
            <motion.div
              key={drone.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Plane size={40} className="text-yellow-400" />
                  <span className="px-3 py-1 bg-yellow-400/20 rounded-full text-yellow-400 text-xs font-bold">
                    {drone.type}
                  </span>
                </div>

                <h3 className="text-3xl font-black text-white mb-2">{drone.name}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{drone.description}</p>

                <div className="mb-6 space-y-3 p-4 bg-black/30 rounded-xl">
                  {Object.entries(drone.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">{key}:</span>
                      <span className="text-white font-bold text-sm">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <p className="text-yellow-400 font-bold text-sm mb-3">APPLICATIONS:</p>
                  <div className="flex flex-wrap gap-2">
                    {drone.applications.map((app, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Package,
      title: "Same-Day Delivery",
      description: "Fast autonomous delivery within hours of order placement"
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock delivery capabilities for urgent needs"
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Advanced safety systems and secure package handling"
    },
    {
      icon: Target,
      title: "Precision Drop",
      description: "Accurate delivery to designated DroneSpot™ locations"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mx-auto mb-4 shadow-2xl">
                <feature.icon size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
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
          PARTNER WITH US FOR DELIVERY SOLUTIONS
        </h2>
        <p className="text-xl text-black/80 mb-8 font-semibold">
          Join the autonomous delivery revolution. Contact us to discuss your delivery needs.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-yellow-400 font-extrabold px-10 py-5 rounded-full text-lg inline-flex items-center gap-2 uppercase tracking-wider"
        >
          CONTACT SALES
          <ArrowRight size={20} />
        </motion.button>
      </div>
    </section>
  );
};

export default DroneDelivery;
