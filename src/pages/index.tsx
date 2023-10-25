import React, { useRef } from "react";
import Navbar from "../layout/Navbar/Navbar";
import Home from "../sections/Header";
import About from "../sections/About/About";
import Projects from "../sections/Projects/Projects";
import Contact from "../sections/Contact/Contact";
import Footer from "../layout/Footer";

function Portfolio() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="bg-bgCustomColor">
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
