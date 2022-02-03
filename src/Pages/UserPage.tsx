import { useEffect, useContext, useState } from "react";
import { ToLinkContext } from "../conText/ToLink";
import networkLoginc from "../services/networkLogic";
import getData from "../services/getData";
import timeSCV from "../utils/timeSCV";
import {
  DotsHorizontalIcon,
  EmojiHappyIcon,
  EmojiSadIcon,
  HeartIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { toast } from "react-toastify";

function UserPage() {
  const { toLink } = useContext<any>(ToLinkContext);
  const [userData, setUserData] = useState<any>([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    getUser();
    return () => {
      setList([]);
    };
  }, []);

  //GET
  const getUser = async () => {
    //利用异步方法请求数据
    const data = await getData.getUserAllTextData(networkLoginc.getJWT());
    setList(data);
  };

  useEffect(() => {
    //利用token获取数据库用户数据
    getUserData();
    return setUserData([]);
  }, []);

  const getUserData = async () => {
    try {
      await networkLoginc.tokenValidation();
      const data = await getData.getUserTextData(networkLoginc.getJWT());
      setUserData(data);
    } catch (err) {
      return toLink("/LoginPage");
    }
  };

  const textDelete = async (textID: string) => {
    try {
      await networkLoginc.deleteUsetText(textID);
      toast.promise(
        new Promise((resolve) => setTimeout(resolve, 1000)),
        {
          pending: "删除中...",
          success: "删除成功 👌",
        },
        {
          autoClose: 1000,
        }
      );
      setTimeout(() => {
        getUser();
      }, 1300);
    } catch (error) {
      toast.error(`删除失败,您没有权限这么做或网络繁忙!`, {
        autoClose: 1800,
        hideProgressBar: false,
        toastId: "deleteOne",
      });
    }
  };

  return (
    <>
      <div className="text-center h-[94vh] flex flex-col justify-center items-center">
        <div>
          <div className="flex justify-center items-center space-x-2">
            <div>
              Hi!👋👋👋 <strong>{userData.userName}</strong>{" "}
              <p>欢迎来到你的主页!!!</p>
              <p>以下这些是你的</p>
              <p>宣泄历史⬇️</p>
            </div>
            <button
              className="button-style border-2 bg-gray-50  border-gray-900 rounded-md button-style text-gray-900 shadow-lg"
              onClick={() => {
                toLink("/LoginPage");
                networkLoginc.loginOUT();
              }}
            >
              退出登录
            </button>
          </div>

          <div className="h-[70vh] mt-5 overflow-y-scroll">
            {list.map((c: any) => (
              <div key={c._id} className="my-5 snap-start">
                {(c.textData === "" || c.textData === undefined) &&
                (c.textDate === "" || c.textDate === undefined) ? null : (
                  <div className="showText-BoxStyle mx-5 sm:mx-[3rem] md:mx-[7rem] lg:mx-[15rem] mt-5 flex flex-col">
                    <div>
                      {
                        <div className="mr-6 ml-2 mt-3 flex justify-between items-center">
                          <div className="flex justify-center items-end">
                            <span
                              className={`w-10 h-10 md:w-13 md:h-13 icon-${c.img}`}
                            ></span>
                            <span className="text-[1.3rem] font-bold text-blue-400">
                              匿名者:
                            </span>
                          </div>
                          <span className="text-blue-500 select-none text-right pt-2">
                            {timeSCV(c.textDate)}
                          </span>
                        </div>
                      }
                    </div>
                    <div className="bg-slate-50/50 h-full flex justify-cente md:items-center text-[15px] px-4 indent-8 pt-1 text-slate-700 ">
                      <p className="break-all">{c.textData}</p>
                    </div>
                    <div className="mx-5 my-1 h-[4vh] flex justify-between items-center py-2">
                      <div className="flex justify-start items-center space-x-3">
                        <HeartIcon
                          className={`w-7 h-7 text-${
                            c.heart > 0 ? "red-500" : "slate-400"
                          }`}
                        />
                        {c.heart}
                        {c.smil > 0 ? (
                          <EmojiHappyIcon className="w-7 h-7 text-yellow-500" />
                        ) : (
                          <EmojiSadIcon className="w-7 h-7 text-slate-400" />
                        )}
                        {c.smil}
                      </div>
                      <div className="relative">
                        <Menu>
                          <Menu.Button className="outline-none">
                            <DotsHorizontalIcon className="icon-button-style w-7 h-7 text-slate-600" />
                          </Menu.Button>
                          <Transition
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute w-[9rem] outline-none top-full right-0 space-y-2">
                              {networkLoginc.getJWT() !== "" &&
                                networkLoginc.getJWT() !== null && (
                                  <Menu.Item>
                                    <button
                                      className="w-full button-style outline-none rounded-full bg-gray-800 text-gray-100"
                                      onClick={() => textDelete(c._id)}
                                    >
                                      删除帖子
                                      <TrashIcon className="w-5 h-5 inline-block text-slate-100" />
                                    </button>
                                  </Menu.Item>
                                )}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPage;
