import { useState, createContext } from "react";
import { animated, config, useSpring } from "react-spring";
export const TextBarContext = createContext({});
const TextBar = ({ children }: any) => {
  const [textBar, setTextBar] = useState({
    isOpen: false,
    msg: "",
    MsgStyle: "",
  });
  const animation = useSpring({
    opacity: textBar.isOpen ? 1 : 0,
    transform: textBar.isOpen ? `translateX(0%)` : `translateX(30%)`,
    config: config.slow,
  });
  return (
    <TextBarContext.Provider value={{ textBar, setTextBar }}>
      <animated.div
        className={`textBar-style ${textBar.MsgStyle}`}
        style={animation}
      >
        {textBar.msg}
      </animated.div>
      {children}
    </TextBarContext.Provider>
  );
};
export default TextBar;
