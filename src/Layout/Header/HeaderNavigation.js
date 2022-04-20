import clsx from 'clsx';
import React from 'react';

function HeaderNavigation(props) {
  const { navMenu } = props;

  return (
    <nav
      className={clsx(
        'navmenu ease-linear flex justify-center items-center text-8xl text-center absolute -z-10',
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
    </nav>
  );
}

export default HeaderNavigation;
