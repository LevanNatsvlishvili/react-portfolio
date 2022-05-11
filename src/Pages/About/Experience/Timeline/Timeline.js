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
