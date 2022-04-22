import React from 'react';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Welcome from './Welcome';

const pageList = [<Welcome />, <About />];

// const RenderPages = () => (
//   <div className="relative z-index-1">{pageList.map((page) => page)}</div>
// );

function Pages() {
  return (
    <div className="relative z-index-1">
      <Welcome />
      <About />
      <section className="green">3</section>
      <section className="purple">4</section>
    </div>
  );
}

export default Pages;
