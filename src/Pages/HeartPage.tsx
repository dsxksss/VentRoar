import { useEffect, useState, useContext } from "react";
import timeSCV from "../utils/timeSCV";
import axios from "axios"; //导入处理JSON请求的工具包
import { loginContext } from "../conText/ByLoginDo";
import {
  PaperAirplaneIcon,
  EmojiHappyIcon,
  EmojiSadIcon,
  HeartIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { animated, config, useSpring } from "react-spring";
function PopularPage() {
  const [list, setList] = useState([]);
  const [showMsg, setShowMsg] = useState({ isOpen: false, showtext: "" });
  const [text, setText] = useState({ userText: "" });
  const { token } = useContext<any>(loginContext);
  async function getUser() {
    //利用异步方法请求数据
    const evenyUser = await axios("http://101.43.123.50:2546/userDataApi/");
    setList(evenyUser.data);
  }
  useEffect(() => {
    getUser(); //因为react不支持导出async函数,小方法是再包裹一个函数来内部执行调用
  }, []);
  const push = async () => {
    if (token === "")
      return (
        setShowMsg({ isOpen: true, showtext: "请登录!" }),
        setTimeout(() => {
          setShowMsg({ isOpen: false, showtext: "请登录!" });
        }, 2000)
      );
    await axios
      .post(`http://101.43.123.50:2546/userTextApi/${token}`, text)
      .then((res) => {
        setShowMsg({ isOpen: true, showtext: "发送成功" });
        setTimeout(() => {
          setShowMsg({ isOpen: false, showtext: "发送成功" });
        }, 2000);
        getUser();
      })
      .catch((err) => {
        setShowMsg({ isOpen: true, showtext: "发送失败,网络繁忙!" });
        setTimeout(() => {
          setShowMsg({ isOpen: false, showtext: "发送失败,网络繁忙!" });
        }, 2000);
      });
  };
  const headerSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (text.userText !== "") push();
  };
  const animation = useSpring({
    opacity: showMsg.isOpen ? 1 : 0,
    transform: showMsg.isOpen ? `translateX(0%)` : `translateX(30%)`,
    config: config.slow,
  });
  return (
    <>
      <div className="h-[83vh] mt-3 z-[-1] overflow-y-auto relative">
        {list.map((c: any) => (
          <div key={c._id} className="my-5">
            {(c.userText === "" || c.userText === undefined) &&
            (c.userTextDate === "" || c.userTextDate === undefined) ? null : (
              <div className="showText-BoxStyle mx-5 mt-5 flex flex-col ">
                {
                  <div className="mx-6 flex justify-between md:justify-start items-center">
                    <span className="text-[1.5rem] font-bold pr-4">
                      {c.userName}
                    </span>
                    <span className="text-blue-500 text-right pt-2">
                      {timeSCV(c.userTextDate)}
                    </span>
                  </div>
                }
                <div className="bg-slate-50/50  flex justify-cente md:items-center text-[15px] px-4 indent-8 pt-1 text-slate-700 ">
                  {c.userText}
                </div>
                <div className="mx-5 my-1 lg:mb-5 h-[4vh] flex justify-between items-center py-2">
                  <div className="flex justify-start items-center space-x-3">
                    <HeartIcon className="w-7 h-7 text-slate-400" />
                    <EmojiSadIcon className="w-7 h-7 text-slate-400" />
                  </div>
                  <div>
                    <DotsHorizontalIcon className="w-7 h-7 text-slate-600" />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <animated.div
          className="absolute right-[2%] top-[0%] text-center bg-green-500 button-style text-gray-100 font-bold"
          style={animation}
        >
          {showMsg.showtext}
        </animated.div>
      </div>

      <form
        onSubmit={headerSubmit}
        className="absolute border-t-[2px]  right-0 left-0 bottom-0 h-[8vh] flex justify-center items-center"
      >
        <input
          type="text"
          minLength={11}
          maxLength={150}
          className="icon-input-Style px-4 mr-5 sm:px-[20%] sm:mr-10 overflow-x-auto"
          required={true}
          onChange={(e: any) => setText({ userText: e.target.value })}
        ></input>
        <button type="submit" className="icon-button-style">
          <PaperAirplaneIcon className="w-7 h-7" />
        </button>
      </form>
    </>
  );
}

export default PopularPage;
