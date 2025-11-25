import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, BookOpen, Video, Monitor, ArrowRight, CheckCircle } from "lucide-react";

// --- Configuration for Theming and Animation ---
const GOLD_ACCENT = "#FFC300";
const DARK_BG_COLOR = "#0A0A0A";

const TrainingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Video,
      title: "Online Courses",
      description: "Learn at your own pace with comprehensive video lessons"
    },
    {
      icon: Monitor,
      title: "In-Person Training",
      description: "Hands-on experience with certified instructors"
    },
    {
      icon: BookOpen,
      title: "Flexible Learning",
      description: "Choose the format that suits your schedule"
    },
    {
      icon: GraduationCap,
      title: "Certification",
      description: "Industry-recognized credentials upon completion"
    }
  ];

  const courses = [
    {
      level: "LEVEL I",
      title: "Basic Drone Pilot",
      duration: "2 Weeks",
      price: "$1,299",
      features: ["Flight Fundamentals", "Safety Protocols", "Basic Maneuvers", "Regulatory Compliance"]
    },
    {
      level: "LEVEL II",
      title: "Advanced RPAS",
      duration: "4 Weeks",
      price: "$2,499",
      popular: true,
      features: ["Complex Operations", "Night Flying Certified", "Emergency Procedures", "Commercial License Prep"]
    },
    {
      level: "LEVEL III",
      title: "Commercial Specialist",
      duration: "6 Weeks",
      price: "$3,999",
      features: ["Advanced Sensor Integration", "Data Analysis & Mapping", "Advanced Mission Planning", "Business & Industry Applications"]
    }
  ];

  return (
    <section 
      ref={ref} 
      // Deep black background with a subtle dark gradient
      className="py-24 bg-gradient-to-b from-[#000000] to-gray-950 font-sans" 
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-extrabold tracking-[0.3em] uppercase text-yellow-400 mb-2">
            Volatus Academy
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            MASTER YOUR CRAFT
            <br/>
            <span 
              style={{ color: GOLD_ACCENT }} 
              className="text-shadow-gold" // Custom utility for text shadow
            >
              PROFESSIONAL RPAS TRAINING
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Acquire the elite skills that define industry leadership. Our programs combine flexible online modules with rigorous hands-on field experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, boxShadow: `0 15px 30px rgba(255, 195, 0, 0.2)` }}
              // Sleek, dark glass card
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-yellow-400/10 text-center transition-all duration-300 shadow-xl shadow-black/50"
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                {/* Custom layered icon background for depth */}
                <div className="absolute inset-0 bg-yellow-400/10 rounded-xl transform rotate-6 translate-x-1 translate-y-1"></div>
                <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center border border-yellow-300/30">
                  <feature.icon size={30} className="text-black" />
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2 tracking-wide">{feature.title}</h3>
              <p className="text-sm text-gray-400 font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Courses Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ 
                y: course.popular ? -15 : -8, 
                scale: course.popular ? 1.05 : 1.02,
                boxShadow: course.popular ? `0 25px 50px rgba(255, 195, 0, 0.4)` : `0 15px 30px rgba(0, 0, 0, 0.5)`
              }}
              // Card base style
              className={`rounded-3xl p-8 shadow-3xl relative transition-all duration-300 border ${
                course.popular 
                  ? 'bg-black/90 border-yellow-500/50 shadow-yellow-800/20' 
                  : 'bg-white border-gray-200 shadow-black/30'
              }`}
            >
              {course.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-xs font-black uppercase shadow-lg shadow-yellow-500/50 transform -rotate-3">
                      ELITE CHOICE
                    </div>
                </div>
              )}

              <div className="mb-6">
                <p 
                  className={`text-sm font-extrabold tracking-widest uppercase mb-2 ${
                    course.popular ? 'text-yellow-400' : 'text-gray-500'
                  }`}
                >
                  {course.level}
                </p>
                <h3 
                  className={`text-4xl font-black mb-3 ${
                    course.popular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {course.title}
                </h3>
                <p 
                  className={`text-sm font-semibold ${course.popular ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  {course.duration}
                </p>
                <p className="mt-4">
                  <span 
                    className={`text-4xl font-extrabold ${course.popular ? 'text-yellow-400' : 'text-teal-600'}`}
                  >
                    {course.price}
                  </span>
                  <span className={`text-xl font-bold ${course.popular ? 'text-gray-400' : 'text-gray-600'}`}>/course</span>
                </p>
              </div>

              <div className={`space-y-4 mb-10 border-t ${course.popular ? 'border-yellow-400/20' : 'border-gray-200'} pt-6`}>
                {course.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle 
                      size={20} 
                      className={`flex-shrink-0 ${course.popular ? 'text-yellow-400' : 'text-green-500'}`} 
                    />
                    <p className={`text-base ${course.popular ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full font-extrabold py-4 rounded-full text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 ${
                  course.popular 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg shadow-yellow-500/40 hover:from-yellow-500 hover:to-orange-600' 
                    : 'bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-600 hover:to-gray-700'
                }`}
              >
                ENROLL NOW
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;