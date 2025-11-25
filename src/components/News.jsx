import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Globe2, ArrowRight, Zap } from "lucide-react";

const PRIMARY_ACCENT = "#FFC300";

const newsItems = [
  {
    date: "Nov 2025",
    title: "Volatus Aerospace Files Prospectus for $20M Defense Expansion",
    excerpt: "Volatus has filed a final short form prospectus supporting major capital raises to expand defense-grade drone manufacturing and innovation at the Mirabel hub, supporting NATO-aligned requirements and Canadian capability.",
    url: "https://www.globenewswire.com/news-release/2025/11/21/3193055/0/en/Volatus-Aerospace-Announces-Filing-of-Final-Short-Form-Prospectus-in-Connection-With-Bought-Deal-Public-Offering.html"
  },
  {
    date: "Oct 2025",
    title: "Volatus Launches Innovation Centre at Mirabel for Sovereign Drone Production",
    excerpt: "New 200,000-sqft Innovation Centre at Montréal–Mirabel International Airport will serially manufacture defense-grade drones for Canadian and allied needs. The project supports recent government and CAF modernization priorities.",
    url: "https://www.asdnews.com/news/defense/2025/10/21/volatus-aerospace-launch-innovation-centre-drone-manufacturing-hub-at-mirabel-st"
  },
  {
    date: "Sep 2025",
    title: "Transport Canada Grants Approval for BVLOS Drone Services",
    excerpt: "Volatus is now approved to launch scalable, automated drone services for commercial inspections and delivery operations across Canada, breaking regulatory ground for autonomous flights.",
    url: "https://www.globenewswire.com/news-release/2025/09/03/3143470/0/en/volatus-aerospace-secures-approval-from-transport-canada-to-launch-scalable-automated-drone-services-in-canada-and-provides-corporate-update.html"
  },
  {
    date: "Sep 2025",
    title: "Volatus Secures Multi-Year Contract With North American Power Utility",
    excerpt: "A multi-year agreement with a leading utility will see Volatus deploying drone-based services at scale for major inspection & asset management projects across the continent.",
    url: "https://www.otcmarkets.com/stock/TAKOF/news/Volatus-Aerospace-Secures-Major-Multi-Year-Agreement-with-a-Leading-North-American-Power-Utility-to-Provide-Drone-Based-Services?id=417865"
  }
];

const News = () => (
  <div className="bg-black min-h-screen pt-24">
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
            <Star size={20} style={{ color: PRIMARY_ACCENT }} />
            <span style={{ color: PRIMARY_ACCENT }} className="font-extrabold text-sm tracking-wider">COMPANY NEWS</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-3">
            LATEST <span style={{ color: PRIMARY_ACCENT }}>UPDATES</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Announcements and industry news about Volatus Aerospace innovation, 
            corporate growth, and regulatory milestones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {newsItems.map((item, idx) => (
            <motion.a
              href={item.url}
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="block bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 group text-left transition-all"
              target="_blank" rel="noopener noreferrer"
            >
              <div className="flex items-center gap-3 text-yellow-400 mb-2 font-bold">
                <span className="uppercase">{item.date}</span>
                <Globe2 size={16} />
              </div>
              <h3 className="text-2xl font-black mb-3 text-white group-hover:text-yellow-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-4 line-clamp-2">{item.excerpt}</p>
              <div className="flex items-center gap-2 text-yellow-400 font-bold group-hover:underline">
                Read More <ArrowRight size={18} />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 pt-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-black text-white mb-3"
          >
            PRESS & INQUIRIES
          </motion.h2>
          <p className="text-gray-400 mb-6">For interviews or industry commentary, contact our media team at <span className="text-yellow-400 font-bold">info@volatusaerospace.com</span>.</p>
          <motion.a
            href="mailto:info@volatusaerospace.com"
            whileHover={{ scale: 1.05 }}
            className="inline-flex gap-2 items-center px-8 py-3 rounded-full font-bold text-black bg-gradient-to-r from-yellow-400 to-amber-400 uppercase"
          >
            Email PR Team <Zap size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  </div>
);

export default News;
