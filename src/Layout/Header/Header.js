import clsx from 'clsx';
import React, { useState } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  // padding: 40px 40px 0;
  // position: fixed;
  // width: 100%;
`;

const NavButton = styled.div`
  position: relative;
  width: 40px;
  height: 22px;
  cursor: pointer;
  &:before {
    content: '';
    width: 100%;
    height: 3px;
    background: #fff;
    position: absolute;
    right: 0;
    -webkit-transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    -o-transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    bottom: ${(props) => (props.navMenu ? '50%' : '0')};

    transform: ${(props) =>
      props.navMenu ? 'rotate(-45deg) translate3d(0, 50%, 0)' : ''};
  }
  &:after {
    content: '';
    width: 100%;
    height: 3px;
    background: #fff;
    position: absolute;
    right: 0;
    -webkit-transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    -o-transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);

    top: ${(props) => (props.navMenu ? '50%' : '0')};

    transform: ${(props) =>
      props.navMenu ? 'rotate(45deg) translate3d(0, -50%, 0)' : ''};
  }
`;

const NavMenu = styled.nav`
  background-image: linear-gradient(to right, #072142, #8c2b7a 42%, #ff4d5a);
  height: 100vh;
  width: 100%;
  transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
`;

function Head(props) {
  const { currView, setCurrView } = props;
  const [navMenu, setNavMenu] = useState(false);

  const handleNav = () => {
    setNavMenu(!navMenu);
  };

  const pages = [0, 1, 2, 3];

  const handleNavigation = (val) => {
    setCurrView(val);
    const axis = `translateY(-${val}00vh)`;
    document.getElementById('wrapper').style.transform = axis;
  };

  return (
    <header className="absolute w-full z-10">
      <div className="flex items-center w-full fixed w-full px-10 pt-10 z-50">
        <div>
          <h5>Levan Natsvlishvili</h5>
        </div>
        <div className="ml-auto">
          <div className="flex items-center">
            <div className="flex items-center mr-16">
              <a className="px-3" href="#">
                <img width="30px" src="/images/SocMedia/linkedin.svg" alt="" />
              </a>
              <a className="px-3" href="#">
                <img width="30px" src="/images/SocMedia/upwork.svg" alt="" />
              </a>
              <a className="px-3" href="#">
                <img
                  width="30px"
                  height="22px"
                  src="/images/SocMedia/github2.svg"
                  alt=""
                />
              </a>
            </div>
            <NavButton onClick={handleNav} navMenu={navMenu} className="">
              {/* <div id="upper"></div>
              <div id="lower"></div> */}
            </NavButton>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          'navmenu ease-linear flex justify-center items-center text-8xl text-center',
          {
            '-translate-y-full': !navMenu,
          }
        )}
      >
        <ul>
          <li className="my-10">
            <a href="#">About Me</a>
          </li>
          <li className="my-10">
            <a href="#">Projects</a>
          </li>
          <li className="my-10">
            <a href="#">Skill Set</a>
          </li>
        </ul>
      </div>
      <div className="fixed top-1/2 transform -translate-y-1/2 ml-10 border-white">
        {pages.map((page) => (
          <div
            className="py-2 my-4 cursor-pointer"
            onClick={() => handleNavigation(page)}
          >
            <div
              className={clsx('bg-white h-0.5 w-6 duration-300 ', {
                'nav-active': currView === page,
              })}
            ></div>
          </div>
        ))}
      </div>
    </header>
  );
}

export default Head;
