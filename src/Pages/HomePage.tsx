import { useState } from "react";
import Footer from "../Components/Footer";
import { useSpring, animated, config } from "react-spring";
const HomePage = () => {
  const [showtext, setShowtext] = useState(false);
  const animation = useSpring({
    opacity: showtext ? 1 : 0,
    transform: showtext ? `translateY(0)` : `translateY(30)`,
    config: config.gentle,
  });

  return (
    <>
      <div className="h-[93vh] mt-3 bg-all">
        {/* <button
          className="button-style border-[2px] border-slate-700 shadow-lg"
          onClick={() => setShowtext(!showtext)}
        >
          SHOW TEXT
        </button>
        <animated.p className="select-none px-4" style={animation}>
          不用理会以下内容，还未完成...... reprehenderit
          <b className="text-sky-500">necessitatibus</b> aliquid! Sunt labore
          repellendus minus quas vel sint fugiat{" "}
          <b
            className="text-sky-500
          "
          >
            doloremque
          </b>
          nemo, ut facere, deserunt iure ab necessitatibus debitis!
        </animated.p> */}
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
