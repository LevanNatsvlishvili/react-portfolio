import React, { useState } from 'react';
import HeaderContactLinks from './HeaderContactLinks';
import HeaderNavigation from './HeaderNavigation';
import HeaderScrollNav from './HeaderScrollNav';

function Head(props) {
  const { currView, setCurrView } = props;
  const [navMenu, setNavMenu] = useState(false);

  return (
    <header className="fixed w-full z-20">
      <HeaderContactLinks navMenu={navMenu} setNavMenu={setNavMenu} />

      <HeaderNavigation navMenu={navMenu} />

      <HeaderScrollNav currView={currView} setCurrView={setCurrView} />
    </header>
  );
}

export default Head;
