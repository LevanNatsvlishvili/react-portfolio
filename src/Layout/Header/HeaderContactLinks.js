import clsx from 'clsx';
import React from 'react';

function HeaderContactLinks(props) {
  const { navMenu, setNavMenu } = props;

  const handleNav = () => {
    setNavMenu(!navMenu);
  };

  return (
    <div className="flex items-center w-full fixed w-full px-10 pt-10 z-50">
      <div>
        <h5>Levan Natsvlishvili</h5>
      </div>
      <div className="ml-auto">
        <div className="flex items-center">
          <div className="flex items-center mr-16">
            <a
              className="px-3"
              target="_blank"
              href="https://www.linkedin.com/in/levnac/"
              rel="noreferrer"
            >
              <img width="30px" src="/images/SocMedia/linkedin.svg" alt="" />
            </a>
            <a
              className="px-3"
              target="_blank"
              href="https://www.upwork.com/freelancers/~01d797802b8c4359ad"
              rel="noreferrer"
            >
              <img width="30px" src="/images/SocMedia/upwork.svg" alt="" />
            </a>
            <a
              className="px-3"
              target="_blank"
              href="https://github.com/LevanNatsvlishvili"
              rel="noreferrer"
            >
              <img
                width="30px"
                height="22px"
                src="/images/SocMedia/github2.svg"
                alt=""
              />
            </a>
          </div>
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
