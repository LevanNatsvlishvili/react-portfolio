import FrontText from 'Components/Animations/FrontText';
import Button from 'Components/Button';
import React from 'react';
import useStore from 'Store/Context';
import Slider from './Slider';

function About() {
  const { currView } = useStore();

  return (
    <section>
      <div className="absolute left-1/5 sm:left-40 z-10">
        <FrontText
          shouldDisplay={currView === 2}
          heading1="Projects"
          bottom="Portfolio"
        />
        <div>
          <Button>Read More</Button>
        </div>
      </div>
      <Slider shouldDisplay={currView === 2} />
    </section>
  );
}

export default About;
