import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Target, Users, Award, Shield, Zap, CheckCircle,
  ArrowRight, TrendingUp, Globe2, Rocket
} from "lucide-react";

const PRIMARY_ACCENT = "#FFC300";

const About = () => {
  return (
    <div className="bg-black min-h-screen pt-24">
      <HeroSection />
      <MissionSection />
      <LeadershipSection />
      <SafetySection />
      <InvestorsSection />
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
            <Rocket size={20} style={{ color: PRIMARY_ACCENT }} />
            <span style={{ color: PRIMARY_ACCENT }} className="font-extrabold text-sm tracking-wider">ABOUT VOLATUS</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            PIONEERING THE FUTURE OF<br/>
            <span style={{ color: PRIMARY_ACCENT }}>AERIAL INTELLIGENCE</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Leading provider of advanced aerial intelligence solutions, combining drone and 
            piloted aircraft expertise to deliver comprehensive services worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="mission" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              OUR <span style={{ color: PRIMARY_ACCENT }}>MISSION</span>
            </h2>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-6">
              We provide advanced aerial intelligence solutions by combining drone and 
              piloted aircraft expertise to deliver actionable insights that drive operational 
              excellence across industries.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              From autonomous drone delivery to large-scale infrastructure inspections, 
              we leverage cutting-edge technology and deep industry expertise to help 
              our clients make better decisions, improve safety, and optimize operations.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "50+", label: "Countries Served" },
                { value: "1000+", label: "Projects Completed" },
                { value: "98%", label: "Client Satisfaction" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center"
                >
                  <p className="text-4xl font-black mb-2" style={{ color: PRIMARY_ACCENT }}>{stat.value}</p>
                  <p className="text-sm text-gray-400 font-semibold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
              alt="Mission"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LeadershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously pushing the boundaries of aerial technology"
    },
    {
      icon: Users,
      title: "Excellence",
      description: "Delivering superior quality in every project we undertake"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Uncompromising commitment to safety in all operations"
    },
    {
      icon: Globe2,
      title: "Global Impact",
      description: "Creating positive change across industries worldwide"
    }
  ];

  return (
    <section ref={ref} id="leadership" className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            OUR <span style={{ color: PRIMARY_ACCENT }}>VALUES</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mx-auto mb-6">
                <value.icon size={40} className="text-black" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
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
    <section ref={ref} id="safety" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              SAFETY & <span style={{ color: PRIMARY_ACCENT }}>COMPLIANCE</span>
            </h2>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Our comprehensive Safety Management System (SMS) ensures the highest standards 
              of operational safety, regulatory compliance, and risk management across all 
              drone and aviation operations.
            </p>

            <div className="space-y-4">
              {[
                "Transport Canada certified",
                "FAA Part 135 compliance ready",
                "Comprehensive risk assessment",
                "Continuous safety monitoring",
                "Regular crew training",
                "Incident reporting & analysis",
                "Emergency response protocols",
                "Quality assurance programs"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={24} className="text-green-400 flex-shrink-0" />
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
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
              <div className="text-center mb-8">
                <Shield size={80} style={{ color: PRIMARY_ACCENT }} className="mx-auto mb-4" />
                <h3 className="text-3xl font-black text-white mb-2">100%</h3>
                <p className="text-gray-400">Safety Record</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Award, label: "15+ Certifications" },
                  { icon: Users, label: "50+ Certified Pilots" },
                  { icon: TrendingUp, label: "Zero Incidents" },
                  { icon: Zap, label: "10K+ Flight Hours" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <stat.icon size={32} style={{ color: PRIMARY_ACCENT }} className="mx-auto mb-2" />
                    <p className="text-sm text-gray-400 font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InvestorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="investors" className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            INVESTOR <span style={{ color: PRIMARY_ACCENT }}>RELATIONS</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Publicly traded on the TSX Venture Exchange. Access investor resources, 
            financial reports, and company updates.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Financial Reports",
              "Press Releases",
              "Corporate Governance"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 cursor-pointer"
              >
                <p className="text-white font-bold">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
          JOIN OUR TEAM
        </h2>
        <p className="text-xl text-black/80 mb-8 font-semibold">
          Explore career opportunities at the forefront of aerial technology
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-yellow-400 font-extrabold px-10 py-5 rounded-full text-lg inline-flex items-center gap-2 uppercase tracking-wider"
        >
          VIEW CAREERS
          <ArrowRight size={20} />
        </motion.button>
      </div>
    </section>
  );
};

export default About;
