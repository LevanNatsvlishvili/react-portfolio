import React from 'react';

const Timeline = () => {
  return (
    <div className="w-full h-20 flex items-center">
      <div className="w-full h-2.5 rounded-3xl bg-[#2C3D7A] relative">
        <div className="absolute -top-9 flex flex-col items-center">
          <h1 className="text-grey-text text-xl mb-1">Leavingstone</h1>
          <div className="w-4 h-4 bg-grey-text rounded-1/2 mt-0.5" />
          <p className="text-grey-text text-base mt-2">[2021 - Present]</p>
        </div>
        <div className="absolute -top-9 left-64 flex flex-col items-center">
          <h1 className="text-grey-text text-xl mb-1">Leavingstone</h1>
          <div className="w-4 h-4 bg-grey-text rounded-1/2 mt-0.5" />
          <p className="text-grey-text text-base mt-2">[2021 - Present]</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
