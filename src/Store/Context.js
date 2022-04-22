import React, { createContext, useState, useContext } from 'react';

export const StoreContext = createContext({});

export const StoreContextProvider = ({ children }) => {
  const [currView, setCurrView] = useState(0);

  return (
    <StoreContext.Provider
      value={{
        currView,
        setCurrView,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export default useStore;
