import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const loginContext = createContext({});
// loginContext.displayName = "loginContext";
const ByLoginDo = ({ children }: any) => {
  const [token, setToken] = useState("");
  const toLink = useNavigate();
  useEffect(() => {
    if (token !== "") {
      toLink("/UserPage");
    } else {
      toLink("/");
    }
  }, [token]); //当token值更改时才会调用Effect方法
  return (
    <loginContext.Provider value={{ token, setToken, toLink }}>
      {children}
    </loginContext.Provider>
  );
};
export default ByLoginDo;
