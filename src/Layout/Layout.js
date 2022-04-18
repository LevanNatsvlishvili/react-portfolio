import React from 'react';
import Scroll from './Scroll';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Scroll>
        <main>{children}</main>
      </Scroll>
    </div>
  );
};

export default Layout;
