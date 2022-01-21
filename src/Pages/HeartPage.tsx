import { useEffect, useState, useContext } from "react";
import timeSCV from "../utils/timeSCV";
import axios from "axios"; //导入处理JSON请求的工具包
import { loginContext } from "../conText/ByLoginDo";
import { TextBarContext } from "../Components/TextBar";
import {
  ReplyIcon,
  EmojiHappyIcon,
  EmojiSadIcon,
  HeartIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

function PopularPage() {
  const [list, setList] = useState([]);
  const [text, setText] = useState({ userText: "" });
  const { token } = useContext<any>(loginContext);
  const { setTextBar } = useContext<any>(TextBarContext);
  async function getUser() {
    //利用异步方法请求数据
    return setList(
      (await axios("http://101.43.123.50:2546/userDataApi/")).data
    );
  }
  useEffect(() => {
    getUser(); //因为react不支持导出async函数,小方法是再包裹一个函数来内部执行调用
  }, []);
  const push = async () => {
    if (token === "")
      return (
        setTextBar({
          isOpen: true,
          MsgStyle: "textBar-style bg-red-400 text-white w-[40vw]",
          msg: "请先登录!",
        }),
        setTimeout(() => {
          setTextBar((oldData: any) => ({
            ...oldData,
            isOpen: false,
          }));
        }, 3000)
      );
    await axios
      .post(`http://101.43.123.50:2546/userTextApi/${token}`, text)
      .then((_res) => {
        setTextBar({
          isOpen: true,
          MsgStyle: "textBar-style bg-red-400 text-white w-[40vw]",
          msg: "发送成功",
        });
        setTimeout(() => {
          setTextBar((oldData: any) => ({
            ...oldData,
            isOpen: false,
          }));
        }, 3000);
        getUser();
      })
      .catch((_err) => {
        setTextBar({
          isOpen: true,
          MsgStyle: "textBar-style bg-red-400 text-white w-[40vw]",
          msg: "发送失败,网络繁忙!",
        });
        setTimeout(() => {
          setTextBar((oldData: any) => ({
            ...oldData,
            isOpen: false,
          }));
        }, 3000);
      });
  };
  const headerSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (text.userText !== "") push();
  };
  return (
    <>
      <div className="h-[83vh] mt-3 z-[-1] snap-y scroll-smooth overflow-y-scroll">
        {list.map((c: any) => (
          <div key={c._id} className="my-5 snap-start">
            {(c.userText === "" || c.userText === undefined) &&
            (c.userTextDate === "" || c.userTextDate === undefined) ? null : (
              <div className="showText-BoxStyle mx-5 mt-5 flex flex-col">
                <div>
                  {
                    <div className="mx-6 flex justify-between items-center">
                      <span className="text-[1.5rem] font-bold pr-4">
                        {c.userName}
                      </span>
                      <span className="text-blue-500 select-none text-right pt-2">
                        {timeSCV(c.userTextDate)}
                      </span>
                    </div>
                  }
                </div>
                <div className="bg-slate-50/50 h-full flex justify-cente md:items-center text-[15px] px-4 indent-8 pt-1 text-slate-700 ">
                  <p className="break-all">{c.userText}</p>
                </div>
                <div className="mx-5 my-1 h-[4vh] flex justify-between items-center py-2">
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
      </div>
      <form
        onSubmit={headerSubmit}
        className="fixed border-t-[2px] right-0 left-0 bottom-0 h-[8vh] flex justify-center items-center"
      >
        <input
          type="textarea"
          minLength={11}
          maxLength={150}
          className="icon-input-Style pl-2 w-[75vw] mr-5 sm:mr-10 overflow-x-auto"
          required={true}
          onChange={(e: any) => setText({ userText: e.target.value })}
        ></input>
        <button type="submit" className="icon-button-style">
          <ReplyIcon className="w-7 h-7" />
        </button>
      </form>
    </>
  );
}

export default PopularPage;
