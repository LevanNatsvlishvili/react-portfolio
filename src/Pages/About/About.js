import FrontText from 'Components/Animations/FrontText';
import Button from 'Components/Button';
import React from 'react';
import useStore from 'Store/Context';

function About() {
  const { currView } = useStore();

  return (
    <section>
      <div className="w-full absolute left-40">
        <FrontText
          shouldDisplay={currView === 1}
          heading1="About Me"
          bottom="Design, development and more..."
        />
        <div>
          <Button>Show More</Button>
        </div>
      </div>
    </section>
  );
}

export default About;
