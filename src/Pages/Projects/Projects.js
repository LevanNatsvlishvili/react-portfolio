import FrontText from 'Components/Animations/FrontText';
import Button from 'Components/Button';
import Image from 'Components/Image';
import React from 'react';
import useStore from 'Store/Context';
import Slider from './Slider';

function About() {
  const { currView } = useStore();

  return (
    <section>
      <div className="absolute left-40 z-10">
        <FrontText
          shouldDisplay={currView === 2}
          heading1="Projects"
          bottom="Portfolio"
        />
        <div>
          <Button>Read More</Button>
        </div>
      </div>
      {/* <div className="flex relative glass-effect">
        <Image src="images/me.jpg" />
        <Image src="images/me.jpg" />
        <Image src="images/me.jpg" />
        <Image src="images/me.jpg" />
      </div> */}
      <Slider />
    </section>
  );
}

export default About;
