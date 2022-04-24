import FrontText from 'Components/Animations/FrontText';
import Button from 'Components/Button';
import Image from 'Components/Image';
import React from 'react';
import useStore from 'Store/Context';

function Skills() {
  const { currView } = useStore();

  return (
    <section>
      <div className="absolute left-40 z-10">
        <FrontText
          shouldDisplay={currView === 2}
          heading1="Skills"
          bottom="Tech Stack"
        />
        <div>
          <Button>Read More</Button>
        </div>
      </div>
      {/* <div className="w-1/2 h-1/2 ml-100 relative">
        <div class="circles">
          <div></div>
          <div></div>
          <div></div>
          <span></span>
        </div>
      </div> */}
      <div className="atom absolute w-100 h-100 left-1/2">
        <div class="center"></div>

        <article class="ring1">
          <div></div>
        </article>
        <article class="ring2">
          <div></div>
        </article>
        <article class="ring3">
          <div></div>
        </article>
      </div>
    </section>
  );
}

export default Skills;
