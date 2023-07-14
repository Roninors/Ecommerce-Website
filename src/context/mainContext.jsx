import { useState, createContext } from "react";
export const MainContext = createContext();

const MainContextProvider = ({ children }) => {

    const [classyProd,setClassyProd] = useState(null);
    const [breathableProd,setBreathableProd] = useState(null);

  return (
    <MainContext.Provider value={{ classyProd,setClassyProd,breathableProd,setBreathableProd}}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
