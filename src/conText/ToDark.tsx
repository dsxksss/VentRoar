import { useState, useEffect, createContext } from "react";
export const ToDarkContext = createContext({});
ToDarkContext.displayName = "ToDarkContext";
const ByDarkDo = ({ children }: any) => {
  const [isDark, setDark] = useState(false);
  useEffect(() => {}, [isDark]);
  return (
    <ToDarkContext.Provider value={{ isDark, setDark }}>
      {children}
    </ToDarkContext.Provider>
  );
};
export default ByDarkDo;
