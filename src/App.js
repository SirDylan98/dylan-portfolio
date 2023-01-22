import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Certificates from "./Components/Certificates";
import Skills from "./Components/Skills";
import Abouts from "./Components/Abouts";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ProjectOverview from "./Components/ProjectOverview";
function App() {
  return (
    <div>
      <Navbar />

      <Hero />
      <Abouts />
      <Portfolio />

      <Skills />
      <Certificates />
      
      <Contact />
      <ProjectOverview/>
      <Footer />
    </div>
  );
}

export default App;
