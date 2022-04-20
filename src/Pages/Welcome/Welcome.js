import Blackhole from 'Components/Animations/Blackhole';
import React from 'react';

function Welcome() {
  return (
    <div className="w-full h-full z-2">
      <div className="h-full flex items-center p-44 flex-column">
        <h1 className="text-7xl">
          Levan <br />
          Natsvlishvili
        </h1>
        <h2 className="text-7xl">Front-end developer</h2>
      </div>

      <div className="absolute top-0 left-1/4">
        <Blackhole />
      </div>
    </div>
  );
}

export default Welcome;
