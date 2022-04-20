import clsx from 'clsx';
import React from 'react';

function HeaderScrollNav(props) {
  const { currView, setCurrView } = props;

  const pages = [0, 1, 2, 3];

  const handleNavigation = (val) => {
    setCurrView(val);
    const axis = `translateY(-${val}00vh)`;
    document.getElementById('wrapper').style.transform = axis;
  };

  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 ml-10 border-white">
      {pages.map((page) => (
        <div
          key={page}
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
  );
}

export default HeaderScrollNav;
