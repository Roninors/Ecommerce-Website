import { useState, createContext } from "react";

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [classyProd, setClassyProd] = useState(null);
  const [breathableProd, setBreathableProd] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [goTo, setGoTo] = useState("login");

  const token = localStorage.getItem("user", "token");

  return (
    <MainContext.Provider
      value={{
        classyProd,
        setClassyProd,
        breathableProd,
        setBreathableProd,
        showMenu,
        setShowMenu,
        showSearch,
        setShowSearch,
        goTo,
        setGoTo,
        token
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
