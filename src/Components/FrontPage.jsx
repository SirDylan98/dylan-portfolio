import React from "react";

import Hero from "./Hero";

import Certificates from "./Certificates";
import Skills from "./Skills";
import Abouts from "./Abouts";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

import ProjectOverview from "./ProjectOverview";
import Navbar from "./Navbar";
export default function FrontPage() {
  return (
    <>
    <Navbar/>
      <Hero />
      <Abouts />
      <Portfolio />
      <Skills />
      <Certificates />
      <Contact />
      <br />
      <br />
      
    </>
  );
}
