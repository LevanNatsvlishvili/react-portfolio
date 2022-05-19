import FrontText from 'Components/Animations/FrontText';
import Button from 'Components/Button';
import React from 'react';
import { paths } from 'Routing/Paths';
import useStore from 'Store/Context';

function About() {
  const { currView } = useStore();

  return (
    <section>
      <div className="absolute left-1/5 sm:left-40 z-10">
        <FrontText
          shouldDisplay={currView === 1}
          heading1="About Me"
          bottom="Experience, Contracts and more..."
        />
        <div>
          <Button to={paths.about}>Read More</Button>
        </div>
      </div>
      <div
        className={`w-[90%] lg:w-1/2 h-[70%] lg:h-1/2 lg:ml-100 relative glass-effect ${
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
