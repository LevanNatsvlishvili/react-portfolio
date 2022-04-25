import clsx from 'clsx';
import React from 'react';

function HeaderScrollNav(props) {
  const { currView, setCurrView } = props;

  const pages = [0, 1, 2, 3, 4];

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
          className={clsx(
            'py-2 py-5 nav-scroll cursor-pointer relative flex justify-center items-center duration-300 ',
            {
              'nav-active': currView === page,
            }
          )}
          onClick={() => handleNavigation(page)}
        >
          <div className="absolute bg-white rounded-full h-1.5 w-1.5"></div>
          <div className="absolute bg-white duration-300"></div>
          <div className="absolute bg-white duration-300"></div>
          <div className="absolute rotate-45 bg-white duration-300"></div>
          <div className="absolute -rotate-45 bg-white duration-300"></div>
        </div>
      ))}
      {/* {pages.map((page) => (
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
      ))} */}
    </div>
  );
}

export default HeaderScrollNav;
