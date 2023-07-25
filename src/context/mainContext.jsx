import { useState, createContext } from "react";

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [classyProd, setClassyProd] = useState(null);
  const [breathableProd, setBreathableProd] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [productId,setProductId] = useState("");
  const token = JSON.parse(localStorage.getItem("user", "token"));

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
        token,
        productId,
        setProductId
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
