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
  UserCircleIcon,
} from "@heroicons/react/solid";
import { ArrowCircleDownIcon, LogoutIcon } from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";
import { Slide, toast } from "react-toastify";
import ConfirmationButton from "../Components/ConfirmationButton";

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
    //获取用户发送过的全部宣泄语句
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

  const doDelete = async (FCref: any) => {
    toast.error("确定要删除吗?", {
      transition: Slide,
      closeOnClick: true,
      closeButton: ConfirmationButton(FCref, null, {}),
      autoClose: false,
      position: "bottom-center",
      toastId: "doDelete", //添加id避免出现重复通知
    });
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
          autoClose: 1200,
          position: "top-center",
        }
      );
      setTimeout(() => {
        getUser();
      }, 1300);
    } catch (error) {
      toast.error(`删除失败,您没有权限这么做!`, {
        autoClose: 1800,
        hideProgressBar: false,
        toastId: "deleteOne",
      });
    }
  };

  return (
    <>
      <div className="flex h-[94vh] flex-col items-center justify-center text-center duration-200 dark:bg-[#253446]">
        <div>
          <p className="mb-3  font-bold dark:text-slate-50">
            🎉欢迎来到你的主页🎉
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex h-[7vh] flex-col items-center justify-center overflow-hidden rounded-2xl bg-slate-50 px-3  py-4 text-center font-bold text-gray-900 shadow-md duration-200 ease-in-out dark:bg-[#304053] dark:text-gray-300">
              {userData && (
                <strong
                  className={`${
                    userData.isAdmin ? "bg-green-500" : "bg-slate-900"
                  } button-style rounded-md text-slate-100 shadow-sm shadow-[#253446]`}
                >
                  <UserCircleIcon className="mb-1 mr-3 inline-block h-5 w-5 text-slate-200" />
                  {userData.userName}
                </strong>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="ml-16 flex items-center py-1">
              <ArrowCircleDownIcon className="h-8 w-8 animate-bounce text-blue-500 dark:text-green-500" />
              <span className="ml-2 mt-2 pb-3 font-bold dark:text-slate-100">
                宣泄历史
              </span>
              <button
                className="button-style ml-4 rounded-full bg-gray-900 text-gray-100 outline-none"
                onClick={() => {
                  toLink("/LoginPage");
                  networkLoginc.loginOUT();
                }}
              >
                <span>
                  退出
                  <LogoutIcon className="ml-1 mb-1 inline-block h-5 w-5 animate-[cloes_1.7s_ease-in-out_infinite] text-slate-200" />
                </span>
              </button>
            </div>
          </div>
          <div className="h-[70vh] snap-y overflow-y-scroll">
            {list.map((c: any) => (
              <div key={c._id} className="my-5">
                {(c.textData === "" || c.textData === undefined) &&
                (c.textDate === "" || c.textDate === undefined) ? null : (
                  <div className="showText-BoxStyle mx-5 mt-5 flex flex-col sm:mx-[3rem] md:mx-[7rem] lg:mx-[15rem]">
                    <div>
                      {
                        <div className="mr-6 ml-2 mt-3 flex items-center justify-between">
                          <div className="flex items-end justify-center">
                            <span
                              className={`md:w-13 md:h-13 h-10 w-10 icon-${c.img}`}
                            ></span>
                            <span className="text-[1.3rem] font-bold text-blue-400">
                              匿名者:
                            </span>
                          </div>
                          <span className="select-none pt-2 text-right text-blue-500">
                            {timeSCV(c.textDate)}
                          </span>
                        </div>
                      }
                    </div>
                    <div className="justify-cente flex h-full px-4 pt-1 indent-8 text-[15px] text-slate-700 dark:text-slate-200 md:items-center">
                      <p className="break-all">{c.textData}</p>
                    </div>
                    <div className="mx-5 my-1 flex h-[4vh] items-center justify-between py-2">
                      <div className="flex items-center justify-start space-x-3">
                        <div className="flex items-center justify-center">
                          <HeartIcon
                            className={`h-7 w-7 text-${
                              c.heart > 0 ? "red-500" : "slate-400"
                            }`}
                          />
                          <span className="text-slate-900 dark:text-slate-100">
                            {c.heart}
                          </span>
                        </div>
                        <div className="flex items-center justify-center">
                          {c.smil > 0 ? (
                            <EmojiHappyIcon className="h-7 w-7 text-yellow-500" />
                          ) : (
                            <EmojiSadIcon className="h-7 w-7 text-slate-400" />
                          )}
                          <span className="text-slate-900 dark:text-slate-100">
                            {c.smil}
                          </span>
                        </div>
                      </div>
                      <div className="relative">
                        <Menu>
                          <Menu.Button className="outline-none">
                            <DotsHorizontalIcon className="icon-button-style h-7 w-7 text-slate-600 dark:text-slate-300" />
                          </Menu.Button>
                          <Transition
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute top-full right-0 w-[9rem] space-y-2 outline-none">
                              {networkLoginc.getJWT() !== "" &&
                                networkLoginc.getJWT() !== null && (
                                  <Menu.Item>
                                    <button
                                      className="button-style w-full rounded-full bg-gray-800 text-gray-100 outline-none dark:bg-gray-100 dark:text-black"
                                      onClick={() =>
                                        doDelete(() => textDelete(c._id))
                                      }
                                    >
                                      删除帖子
                                      <TrashIcon className="mb-1 inline-block h-5 w-5 text-slate-100 dark:text-gray-900" />
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
