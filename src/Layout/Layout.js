import React from 'react';
import Scroll from './Scroll';
import Header from './Header';
import useStore from 'Store/Context';

const Layout = ({ children }) => {
  const { currView, setCurrView } = useStore();
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
