import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Services from "./components/ServiceSection";
import DroneDelivery from "./components/DroneDelivery";
import Aviation from "./components/Aviation";
import Industries from "./components/IndustriesSection";
import About from "./components/About";
import Training from "./components/TrainingSection";
import News from "./components/News";
import Contact from "./components/Contact";

const App = () => (

    <div className="bg-black min-h-screen">
      <Navigation />
        <HeroSection/>
        <Services/>
        <DroneDelivery/>
        <Aviation/>
        <Industries/>
        <About/>
        <Training/>
        <News/>
        <Contact/>

      <Footer />
    </div>
);

export default App;
