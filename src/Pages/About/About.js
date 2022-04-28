import React from 'react';

const About = () => {
  return (
    <div className="relative pt-32 px-10 z-10 h-[90vh]">
      <div className="styled-card w-1/3 flex-col pt-12 h-full flex items-center">
        <div className="about-image-container">
          <img
            className="about-image-container-image"
            src={`${process.env.PUBLIC_URL}images/me2.jpg`}
            alt=""
          />
        </div>
        <h5 className="pt-8 text-grey-text text-3xl">Levan Natsvlishvili</h5>
        <h1 className="pt-1 text-grey-text text-xl">Front-end Developer</h1>
        <p className="pt-6 text-grey-text text-center text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default About;
