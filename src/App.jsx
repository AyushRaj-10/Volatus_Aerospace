import React from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import TrustedPartner from "./components/TrustedPartner";
import ServicesSection from "./components/ServiceSection";
import IndustriesSection from "./components/IndustriesSection";
import TrainingSection from "./components/TrainingSection";
import EquipmentSection from "./components/EquipmentSection";
import FreebookSection from "./components/FreebookSection";
import BlogSection from "./components/BlogSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-900 overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <TrustedPartner />
      <ServicesSection />
      <IndustriesSection />
      <TrainingSection />
      <EquipmentSection />
      <FreebookSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
}
