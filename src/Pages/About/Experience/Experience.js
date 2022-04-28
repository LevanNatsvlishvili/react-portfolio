import React from 'react';
import Timeline from './ExperienceTimeline';

const Experience = () => {
  return (
    <div>
      <Timeline />

      <div className="h-24 grid-cols-12 grid gap-5 mt-8">
        <div className="col-span-3 styled-card"></div>
        <div className="col-span-3 styled-card"></div>
        <div className="col-span-6 styled-card"></div>
      </div>
    </div>
  );
};

export default Experience;
