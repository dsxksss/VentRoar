import axios from "axios";
import { useState } from "react";
import Footer from "../Components/Footer";
import { useSpring, animated, config } from "react-spring";
const HomePage = () => {
  const [list, setList] = useState([]);
  async function getUser() {
    //利用异步方法请求数据
    const evenyUser = await axios("http://101.43.123.50:2546/userDataApi/");
    setList(evenyUser.data);
  }
  let userCout = 0;

  const [showtext, setShowtext] = useState(false);
  const animation = useSpring({
    opacity: showtext ? 1 : 0,
    transform: showtext ? `translateY(0%)` : `translateY(-50%)`,
    config: config.gentle,
  });

  return (
    <>
      <div className="h-[93vh]">
        <animated.p style={animation}>
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
        </animated.p>
        <button
          className="button-style bg-green-400 text-white shadow-lg shadow-green-400/50"
          onClick={getUser}
        >
          Get Data
        </button>
        <button
          className="button-style border-[1px] border-slate-200 shadow-lg"
          onClick={() => setShowtext(!showtext)}
        >
          SHOW TEXT
        </button>
      </div>
      {list.map((c: any) => (
        <ul key={c._id} className="overflow-x-auto">
          <li>
            <p>{(userCout += 1)}</p>
          </li>
          <li>
            <p>username:{c.userName}</p>
          </li>
          <li>
            <p>userphone:{c.userPhoneNumber}</p>
          </li>
          <li>
            <p>userpassword:{c.userPassword}</p>
          </li>
          <br />
        </ul>
      ))}
      <Footer />
    </>
  );
};

export default HomePage;
