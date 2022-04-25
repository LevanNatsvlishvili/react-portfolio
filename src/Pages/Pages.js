import React from 'react';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Projects from './Projects';
import Welcome from './Welcome';

function Pages() {
  return (
    <div className="relative z-index-1">
      <Welcome />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default Pages;
