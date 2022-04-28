import React from 'react';
import AboutSummary from './AboutSummary';
import AboutTimeline from './AboutTimeline';

const About = () => {
  return (
    <div className="relative pt-32 px-10 z-10 h-[90vh] flex grid-cols-12 gap-8 grid">
      <div className="col-span-4 ">
        <AboutSummary />
      </div>
      <div className="col-span-8 ">
        <AboutTimeline />
      </div>
    </div>
  );
};

export default About;
