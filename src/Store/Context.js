import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const StoreContext = createContext({});

export const StoreContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [currView, setCurrView] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleNavigationLoading = (path) => {
    setLoading(true);

    setTimeout(() => {
      navigate(path);
    }, 700);
    setTimeout(() => {
      setLoading(false);
    }, 1100);
  };

  return (
    <StoreContext.Provider
      value={{
        currView,
        setCurrView,
        loading,
        setLoading,
        handleNavigationLoading,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export default useStore;
