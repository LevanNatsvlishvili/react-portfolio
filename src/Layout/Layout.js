import React, { useEffect } from 'react';
import Scroll from './Scroll';
import Header from './Header';
import useStore from 'Store/Context';
import { useLocation } from 'react-router-dom';

function useQuery() {
  const location = useLocation();
  if (location.pathname.length <= 1) {
    return true;
  }
  return false;
}

const Layout = ({ children }) => {
  const { currView, setCurrView } = useStore();
  const shouldScrollDisplay = useQuery();

  useEffect(() => {
    if (shouldScrollDisplay) {
      setCurrView(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldScrollDisplay]);

  return (
    <div className={`star-container star-${currView}`}>
      <Header
        shouldScrollDisplay={shouldScrollDisplay || false}
        currView={currView}
        setCurrView={setCurrView}
      />
      {shouldScrollDisplay && (
        <Scroll
          shouldScrollDisplay={shouldScrollDisplay || false}
          currView={currView}
          setCurrView={setCurrView}
        >
          <main>{children}</main>
        </Scroll>
      )}

      {!shouldScrollDisplay && <main>{children}</main>}
    </div>
  );
};

export default Layout;
