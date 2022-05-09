import Image from 'Components/Image';
import React from 'react';

const projects = [
  {
    title: 'Clothing Store Template',
    url: 'https://levannatsvlishvili.github.io/clothingstoretemplate/',
    thumbnail: '/images/projects/clothingstore.png',
    techStack: ['React', 'Material-UI', 'javascript'],
  },
  {
    title: 'Clothing Store Template',
    url: 'https://levannatsvlishvili.github.io/clothingstoretemplate/',
    thumbnail: '/images/projects/clothingstore.png',
    techStack: ['React', 'Material-UI', 'javascript'],
  },
  {
    title: 'Clothing Store Template',
    url: 'https://levannatsvlishvili.github.io/clothingstoretemplate/',
    thumbnail: '/images/projects/clothingstore.png',
    techStack: ['React', 'Material-UI', 'javascript'],
  },
  {
    title: 'Clothing Store Template',
    url: 'https://levannatsvlishvili.github.io/clothingstoretemplate/',
    thumbnail: '/images/projects/clothingstore.png',
    techStack: ['React', 'Material-UI', 'javascript'],
  },
  {
    title: 'Clothing Store Template',
    url: 'https://levannatsvlishvili.github.io/clothingstoretemplate/',
    thumbnail: '/images/projects/clothingstore.png',
    techStack: ['React', 'Material-UI', 'javascript'],
  },
  {
    title: 'Clothing Store Template',
    url: 'https://levannatsvlishvili.github.io/clothingstoretemplate/',
    thumbnail: '/images/projects/clothingstore.png',
    techStack: ['React', 'Material-UI', 'javascript'],
  },
  {
    title: 'Clothing Store Template',
    url: 'https://levannatsvlishvili.github.io/clothingstoretemplate/',
    thumbnail: '/images/projects/clothingstore.png',
    techStack: ['React', 'Material-UI', 'javascript'],
  },
  {
    title: 'Clothing Store Template',
    url: 'https://levannatsvlishvili.github.io/clothingstoretemplate/',
    thumbnail: '/images/projects/clothingstore.png',
    techStack: ['React', 'Material-UI', 'javascript'],
  },
  {
    title: 'Clothing Store Template',
    url: 'https://levannatsvlishvili.github.io/clothingstoretemplate/',
    thumbnail: '/images/projects/clothingstore.png',
    techStack: ['React', 'Material-UI', 'javascript'],
  },
];

const Projects = () => {
  return (
    <div className="relative pt-32 px-10 z-10 h-[90vh] w-screen ">
      <div className="styled-card h-full px-4">
        <div className="px-4 grid-cols-12 flex gap-8 gap-y-10 grid overflow-auto scroll-bar h-full">
          {projects.map((project, i) => (
            <div
              key={i}
              className="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = (props) => {
  const { title, url, thumbnail, techStack } = props.project;
  return (
    <div className="project-card relative glass-effect">
      <Image src={thumbnail} className="w-full h-full rounded-xl " />
      <div className="opacity-0 z-10 transition duration-300 w-full h-full absolute top-0 rounded-xl bg-[#181D5E]/30 blur" />
      <div className="opacity-0 z-20 flex transition duration-300 w-full h-full absolute top-0 rounded-xl  items-center justify-center flex-col">
        <h1 className="text-lg text-center">{title}</h1>
        <h3 className="text-sm text-orange w-1/2 text-center">
          {techStack.join(', ')}
        </h3>
        <a
          className="text-grey-text border-blue-glow border-2 text-xs w-28 h-7 flex items-center justify-center bg-[#0D162860] rounded-3xl mt-5"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          VISIT
        </a>
      </div>
    </div>
  );
};

export default Projects;
