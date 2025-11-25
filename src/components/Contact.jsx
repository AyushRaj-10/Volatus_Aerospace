import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Users } from "lucide-react";

const PRIMARY_ACCENT = "#FFC300";

const Contact = () => {
  return (
    <div className="bg-black min-h-screen pt-24">
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-black text-white mb-3">
              CONTACT <span style={{ color: PRIMARY_ACCENT }}>US</span>
            </h1>
            <p className="text-xl text-gray-400">
              Get in touch with Volatus Aerospace for project inquiries, partnership, or general information.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2 text-yellow-400 font-bold">
                <Mail size={22} /> info@volatusaerospace.com
              </div>
              <div className="flex items-center gap-2 text-yellow-400 font-bold">
                <Phone size={22} /> 1-833-865-2887
              </div>
              <div className="flex items-center gap-2 text-gray-400 font-bold">
                <MapPin size={22} /> 6221 Hwy 7 #6, Vaughan, Ontario, L4H 0K8, Canada
              </div>
              <div className="flex items-center gap-2 text-gray-400 font-bold">
                <Users size={22} /> Toronto HQ & Operations Control Center (OCC)
              </div>
            </div>
            {/* Contact Form */}
            <div className="flex-1 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-black text-white mb-6">SEND AN ENQUIRY</h3>
              <form
                action="https://formspree.io/f/your-form-id" // replace with your service or backend endpoint
                method="POST"
                className="space-y-4"
              >
                <input type="text" name="name" required placeholder="Full Name" className="w-full p-3 rounded-lg bg-black/60 text-gray-200 border border-yellow-400/20" />
                <input type="email" name="email" required placeholder="Email" className="w-full p-3 rounded-lg bg-black/60 text-gray-200 border border-yellow-400/20" />
                <input type="text" name="organization" placeholder="Organization" className="w-full p-3 rounded-lg bg-black/60 text-gray-200 border border-yellow-400/20" />
                <textarea name="message" rows={4} required placeholder="How can we help you?" className="w-full p-3 rounded-lg bg-black/60 text-gray-200 border border-yellow-400/20"></textarea>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-black px-8 py-4 rounded-full text-lg flex items-center gap-3 justify-center"
                >
                  <Send size={20} /> Send Message
                </motion.button>
              </form>
            </div>
          </div>
          <div className="text-center text-gray-500 text-xs mt-10">
            For investor inquiries: <span className="text-yellow-400">investorrelations@volatusaerospace.com</span> <br />
            All US/Canada locations served by Volatus Aerospace Group.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
