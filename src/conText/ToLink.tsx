import { createContext } from "react";
import { useNavigate } from "react-router-dom";
export const ToLinkContext = createContext({});
ToLinkContext.displayName = "ToLinkContext";
const ByLoginDo = ({ children }: any) => {
  const toLink = useNavigate();
  return (
    <ToLinkContext.Provider value={{ toLink }}>
      {children}
    </ToLinkContext.Provider>
  );
};
export default ByLoginDo;
