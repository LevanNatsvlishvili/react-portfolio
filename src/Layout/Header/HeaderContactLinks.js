import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from 'Routing/Paths';

const SocialLink = ({ url, img, media }) => (
  <a className="px-3 " target="_blank" href={url} rel="noreferrer">
    <div className="text-base flex items-center w-8 h-8 overflow-hidden transition-all duration-150 ease-in hover:w-28">
      <img width="30px" height="30px" src={img} alt="" className="w-7 h-7" />
      <p className="ml-2">{media}</p>
    </div>
  </a>
);

function HeaderContactLinks(props) {
  const { navMenu, setNavMenu } = props;

  const handleNav = () => {
    setNavMenu(!navMenu);
  };

  return (
    <div className="flex items-center w-screen fixed px-6 sm:px-10 pt-6 sm:pt-10 z-50">
      <div>
        <div className="flex items-center mr-16">
          <SocialLink
            url="https://www.linkedin.com/in/levnac"
            media="Linkedin"
            img="/images/SocMedia/linkedin.svg"
          />
          <SocialLink
            url="https://github.com/LevanNatsvlishvili"
            media="Github"
            img="/images/SocMedia/github2.svg"
          />
          <SocialLink
            url="https://www.upwork.com/freelancers/~01d797802b8c4359ad"
            media="Linkedin"
            img="/images/SocMedia/upwork.svg"
          />
        </div>
      </div>
      <div className="ml-auto">
        <div className="flex items-center">
          <div
            onClick={handleNav}
            className={clsx('navbutton', { 'navbutton-active': navMenu })}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContactLinks;
