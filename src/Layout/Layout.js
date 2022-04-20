import React, { useState } from 'react';
import Scroll from './Scroll';
import Header from './Header';

const Layout = ({ children }) => {
  const [currView, setCurrView] = useState(0);

  return (
    <div className={`star-container star-${currView}`}>
      <Header currView={currView} setCurrView={setCurrView} />
      <Scroll currView={currView} setCurrView={setCurrView}>
        <main>{children}</main>
      </Scroll>
    </div>
  );
};

export default Layout;
