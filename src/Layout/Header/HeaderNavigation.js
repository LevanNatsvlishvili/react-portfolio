import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from 'Routing/Paths';

function HeaderNavigation(props) {
  const { navMenu } = props;

  return (
    <nav
      className={clsx(
        `navmenu  bg-global overflow-hidden ease-linear flex justify-center items-center text-6xl sm:text-8xl text-center absolute z-20`,
        {
          'nav-lightning': navMenu,
          'navbar-visible': navMenu,
          'navbar-hidden': !navMenu,
        }
      )}
    >
      <div className={`cloud-circle cloud-1`}></div>
      <div className={`cloud-circle cloud-2`}></div>
      <div className={`cloud-circle invisible lg:visible cloud-3`}></div>
      <div className={`cloud-circle invisible lg:visible cloud-4`}></div>
      <svg width="0" height="0">
        <filter id="filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".01"
            numOctaves="10"
          />
          <feDisplacementMap in="SourceGraphic" scale="180" />
        </filter>
      </svg>
      <ul className="relative">
        <li className="my-10">
          <Link to={paths.home}>Home</Link>
        </li>
        <li className="my-10">
          <Link to={paths.about}>About Me</Link>
        </li>
        <li className="my-10">
          <Link to={paths.projects}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
