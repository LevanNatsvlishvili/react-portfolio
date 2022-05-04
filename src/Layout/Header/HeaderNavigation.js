import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from 'Routing/Paths';

function HeaderNavigation(props) {
  const { navMenu } = props;

  return (
    <nav
      className={clsx(
        'navmenu ease-linear flex justify-center items-center text-8xl text-center absolute z-20',
        {
          '-translate-y-full': !navMenu,
        }
      )}
    >
      <ul>
        <li className="my-10">
          <Link to={paths.home}>Home</Link>
        </li>
        <li className="my-10">
          <Link to={paths.about}>About Me</Link>
        </li>
        <li className="my-10">
          <Link to={paths.projects}>Projects</Link>
        </li>
        <li className="my-10">
          <Link to={paths.skills}>Skill Set</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
