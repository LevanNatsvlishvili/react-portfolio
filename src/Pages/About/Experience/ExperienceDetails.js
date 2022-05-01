import React from 'react';

const ExperienceDetails = (props) => {
  const { title, role, techStack, date, description } = props.company;
  console.log(role);
  console.log(date);
  console.log(description);
  return (
    <div className={` grid-cols-12 grid gap-5 mb-8 my-3`}>
      <div className="col-span-4 styled-card text-grey-text p-4">
        <h1 className="text-2xl text-grey-text">{title}</h1>
        <h2 className="text-base text-grey-text">{role}</h2>
        <p className="text-grey-text text-base firago-light">[{date}]</p>
      </div>
      <div className="col-span-3 styled-card p-4 ">
        <div className="scroll-bar overflow-auto h-32">
          <h6 className="text-base text-grey-text">Tech Stack:</h6>
          <ul className="text-sm text-grey-text list-disc pl-5 pt-1 ">
            {techStack?.map((tech) => (
              <li className="text-sm text-grey-text">{tech}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-5 styled-card p-4">
        <div className="text-grey-text text-sm scroll-bar overflow-auto h-32">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;
