import React, { useEffect, useState } from 'react';

const staticPositions = {
  1: [45],
  2: [0, 85],
  3: [0, 45, 85],
  4: [0, 30, 60, 85],
};

const Timeline = (props) => {
  const { companies, handleCompany } = props;
  const [positions, setPositions] = useState([]);
  console.log(companies.length);

  const calculateDotPositions = () => {
    if (companies.length <= 4) {
      return staticPositions[companies.length];
    }

    const sectionPercentage = 100 / companies.length;
    const arr = [];

    for (let i = 0; i < companies.length; i++) {
      arr.push(sectionPercentage * i);
    }
    console.log(arr);
    return arr;
  };

  useEffect(() => {
    setPositions(calculateDotPositions());
  }, []);

  return (
    <div className="w-full h-20 flex items-center">
      <div className="w-full h-2.5 rounded-3xl bg-[#2C3D7A] relative">
        {positions.length &&
          positions.map((position, index) => (
            <TimelineDot
              position={position}
              onClick={() => handleCompany(index)}
            />
          ))}
      </div>
    </div>
  );
};

const TimelineDot = ({ position, onClick }) => (
  <div
    onClick={onClick}
    style={{ left: `${position}%` }}
    className="absolute -top-9 flex flex-col items-center cursor-pointer"
  >
    <h1 className="text-white text-xl mb-1">Leavingstone</h1>
    <div className="w-4 h-4 bg-grey-text rounded-1/2 mt-0.5" />
    <p className="text-grey-text text-base mt-2 firago-light">
      [2021 - Present]
    </p>
  </div>
);

export default Timeline;
