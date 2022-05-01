import React, { useState } from 'react';
import ExperienceDetails from './ExperienceDetails';
import Timeline from './ExperienceTimeline';

const companies = [
  {
    id: 0,
    title: 'Leavingstone',
    role: 'Front-end Developer',
    date: '2021 October - present',
    timelineDate: '2021 - Present',
    techStack: [
      'React',
      'Javascript',
      'Typescript',
      'Tailwind-css',
      'Bootstrap',
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 1,
    title: 'Helix Nebula Capital',
    role: 'Front-end Developer',
    date: '2020 October - 2021 July',
    timelineDate: '2020 - 2021',
    techStack: ['React', 'Javascript', 'Tailwind-css', 'Material-ui'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    title: 'Georgian State Electrosystem',
    role: 'Full Stack Web Developer',
    date: '2020 October - 2021 July',
    timelineDate: '2020 - 2021',
    techStack: ['PHP', 'MYSQL', 'Bootstrap'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const Experience = () => {
  const [curr, setCurr] = useState(2);

  const handleCompany = (newCurr) => {
    console.log('clicked');
    setCurr(newCurr);
  };

  return (
    <div>
      <Timeline handleCompany={handleCompany} companies={companies} />
      <div className="overflow-hidden h-48 pl-2 mt-8 ">
        <div
          style={{ transform: `translateY(-${curr * 12}rem)` }}
          className="px-2 -ml-2 transition"
        >
          {companies.map((company, i) => (
            <ExperienceDetails company={company} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;