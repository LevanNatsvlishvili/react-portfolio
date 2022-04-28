import FrontText from 'Components/Animations/FrontText';
import Button from 'Components/Button';
import React from 'react';
import useStore from 'Store/Context';

function Skills() {
  const { currView } = useStore();

  return (
    <section>
      <div className="absolute left-40 z-10">
        <FrontText
          shouldDisplay={currView === 3}
          heading1="Skills"
          bottom="Tech Stack"
        />
        <div>
          <Button>Read More</Button>
        </div>
      </div>
      <div className="atom absolute w-1/2 h-3/4 left-1/2">
        <div className="center"></div>

        <article className="ring1">
          <div></div>
        </article>
        <article className="ring2">
          <div></div>
        </article>
        <article className="ring3">
          <div></div>
        </article>
      </div>
    </section>
  );
}

export default Skills;
