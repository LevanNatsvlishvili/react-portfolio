import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from 'Routing/Paths';

function HeaderNavigationMobile(props) {
  const { navMenu } = props;

  return (
    <nav
      className={clsx(
        `navmenu bg-global overflow-hidden ease-linear flex justify-center items-center text-6xl sm:text-8xl text-center absolute z-20`,
        { '-translate-y-full': !navMenu }
      )}
    >
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

export default HeaderNavigationMobile;
