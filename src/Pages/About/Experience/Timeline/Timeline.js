import React, { useEffect, useState } from 'react';
import TimelineDesktop from './TimelineDesktop';
import TimelineMobile from './TimelineMobile';

const staticPositions = {
  1: [45],
  2: [0, 85],
  3: [0, 40, 85],
  4: [0, 30, 60, 85],
};

const Timeline = (props) => {
  const { companies, handleCompany, curr } = props;
  const [positions, setPositions] = useState([]);

  const calculateDotPositions = () => {
    if (companies.length <= 4) {
      const chosenPositions = staticPositions[companies.length];
      const newArr = companies.map((company, index) => ({
        ...company,
        position: chosenPositions[index],
      }));
      return newArr;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="hidden sm:block">
        <TimelineDesktop
          companies={companies}
          handleCompany={handleCompany}
          curr={curr}
        />
      </div>
      <div className="block sm:hidden">
        <TimelineMobile
          companies={companies}
          handleCompany={handleCompany}
          curr={curr}
        />
      </div>
    </>
  );
};

export default Timeline;
