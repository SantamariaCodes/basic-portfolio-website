import React, { useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer";

function Portfolio() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="bg-customColor">
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Home homeRef={homeRef} projectsRef={projectsRef} />
      <About aboutRef={aboutRef} contactRef={contactRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default Portfolio;
