import FrontText from 'Components/Animations/FrontText';
import Button from 'Components/Button';
import React from 'react';
import useStore from 'Store/Context';

function About() {
  const { currView } = useStore();

  return (
    <section>
      <div className="absolute left-40 z-10">
        <FrontText
          shouldDisplay={currView === 1}
          heading1="About Me"
          bottom="Experience, Work and more..."
        />
        <div>
          <Button>Read More</Button>
        </div>
      </div>
      <div
        className={`w-1/2 h-1/2 ml-100 relative glass-effect ${
          currView === 1 ? 'glass-effect-active' : ''
        } `}
      >
        <img
          className="object-cover w-full h-full rounded-lg"
          src={`${process.env.PUBLIC_URL}images/me.jpg`}
          alt=""
        />
      </div>
    </section>
  );
}

export default About;
