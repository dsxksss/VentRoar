import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const loginContext = createContext({});
loginContext.displayName = "loginContext";
const ByLoginDo = ({ children }: any) => {
  const [isLogin, setLogin] = useState(false);
  const toLink = useNavigate();
  useEffect(() => {
    if (isLogin) {
      toLink("/UserPage");
    } else {
      toLink("/LoginPage");
    }
  }, [isLogin]); //当isLogin值更改时才会调用Effect方法
  return (
    <loginContext.Provider value={{ isLogin, setLogin }}>
      {children}
    </loginContext.Provider>
  );
};
export default ByLoginDo;
