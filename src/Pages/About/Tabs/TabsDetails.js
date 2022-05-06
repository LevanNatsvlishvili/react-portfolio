import React from 'react';
import Skill from '../Components/Skill';

const skills = [
  {
    logo: 'images/skills/javascript.svg',
    skill: 'Javascript',
    level: 'Advanced',
    time: '3 Years',
  },
  {
    logo: 'images/skills/react.svg',
    skill: 'React',
    level: 'Advanced',
    time: '2 Years',
  },
  {
    logo: 'images/skills/html.svg',
    skill: 'HTML',
    level: 'Advanced',
    time: '3 Years',
  },
  {
    logo: 'images/skills/css.svg',
    skill: 'CSS',
    level: 'Advanced',
    time: '3 Years',
  },
  {
    logo: 'images/skills/material-ui.svg',
    skill: 'Material-UI',
    level: 'Advanced',
    time: '2 Years',
  },
  {
    logo: 'images/skills/tailwind.svg',
    skill: 'Tailwind-CSS',
    level: 'Intermediate',
    time: '< 1 Years',
  },
  {
    logo: 'images/skills/typescript.svg',
    skill: 'Typescript',
    level: 'Intermediate',
    time: '1 Year',
  },
  {
    logo: 'images/skills/next.svg',
    skill: 'Next',
    level: 'Basics',
    time: '< 1 Years',
  },
];

const TabsDetails = (props) => {
  const { title, role, date } = props.company;

  return (
    <div className="grid-cols-12  mb-8 my-3">
      <div className="styled-card text-grey-text p-4 ">
        <div className="scroll-bar overflow-y-auto overflow-x-hidden h-60 p-2 ">
          <div className="w-full grid grid-cols-12 gap-x-10 gap-y-8">
            {skills.map((skill) => (
              <div className="col-span-4">
                <Skill
                  logo={skill.logo}
                  skill={skill.skill}
                  level={skill.level}
                  time={skill.time}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsDetails;
