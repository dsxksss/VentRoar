import { useEffect, useState } from "react";
import {
  ReplyIcon,
  EmojiHappyIcon,
  EmojiSadIcon,
  HeartIcon,
  DotsHorizontalIcon,
  TrashIcon,
  LogoutIcon,
  PencilAltIcon,
} from "@heroicons/react/solid";
import { ArrowCircleDownIcon } from "@heroicons/react/outline";
import { toast, Slide } from "react-toastify";
import { Menu, Transition } from "@headlessui/react";
import timeSCV from "../utils/timeSCV";
import networkLoginc from "../services/networkLogic";
import getData from "../services/getData";
import CloseButton from "../Components/CloseButton";
import ConfirmationButton from "./../Components/ConfirmationButton";

function PopularPage() {
  const [list, setList] = useState([]);
  const [text, setText] = useState({ textData: "" });
  const [textId, setTextId] = useState("");
  const [userData, setUserData] = useState<any>([]);

  useEffect(() => {
    getUser();
    getUserData();
    return () => {
      setList([]);
      setUserData([]);
    };
  }, []);

  const getUser = async () => {
    //利用异步方法请求数据
    const data = await getData.getAllTextData();
    setList(data);
  };

  const getUserData = async () => {
    try {
      await networkLoginc.tokenValidation();
      const data = await getData.getUserTextData(networkLoginc.getJWT());
      setUserData(data);
    } catch (err) {
      setUserData([]);
    }
  };

  const userPushText = async () => {
    if (networkLoginc.getJWT() === null || networkLoginc.getJWT() === "") {
      toast.warning("请先登录", {
        transition: Slide,
        closeButton: CloseButton,
        autoClose: false,
        toastId: "placeLogin1", //添加id避免出现重复通知
      });
      return null;
    }
    try {
      await networkLoginc.pushText(text);
      toast.promise(
        new Promise((resolve) => setTimeout(resolve, 1000)),
        {
          pending: "发送中...",
          success: "发送成功 👌",
        },
        {
          autoClose: 1000,
        }
      );
      setTimeout(() => {
        getUser();
      }, 1300);
    } catch (err) {
      toast.error("发送失败,网络繁忙");
    }
  };

  const addSmilAndHeart = async (textId: string, smilOrheart: object) => {
    if (networkLoginc.getJWT() === null || networkLoginc.getJWT() === "") {
      toast.warning("请先登录", {
        transition: Slide,
        closeButton: CloseButton,
        autoClose: false,
        toastId: "placeLogin2", //添加id避免出现重复通知
      });
      return null;
    }
    try {
      await networkLoginc.pushTextAndUpdata(textId, smilOrheart);
      toast.success("+1", {
        toastId: "addOne", //添加id避免出现重复通知
      });
      getUser();
    } catch (err) {
      toast.error("你已经表达了温暖,请勿重复点击", {
        toastId: "dontOne", //添加id避免出现重复通知
      });
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
      setTimeout(() => getUser(), 1300);
    } catch (error) {
      toast.error(`删除失败,您没有权限这么做`, {
        autoClose: 1800,
        hideProgressBar: false,
        toastId: "deleteOne",
      });
    }
  };

  const adminTextDelete = async (textID: string) => {
    try {
      await networkLoginc.adminDeleteUsetText(textID);
      toast.promise(
        new Promise((resolve) => setTimeout(resolve, 1000)),
        {
          pending: "检查权限...",
          success: "管理员删除成功 👌",
        },
        {
          autoClose: 1200,
          position: "top-center",
        }
      );
      setTimeout(() => getUser(), 1300);
    } catch (error) {
      toast.error(`删除失败,您没有权限这么做`, {
        autoClose: 1800,
        hideProgressBar: false,
        toastId: "deleteOne",
      });
    }
  };

  const changeUserText = async () => {
    if (networkLoginc.getJWT() === null || networkLoginc.getJWT() === "") {
      toast.warning("请先登录", {
        transition: Slide,
        closeButton: CloseButton,
        autoClose: false,
        toastId: "placeLogin1", //添加id避免出现重复通知
      });
      return null;
    }
    try {
      await networkLoginc.changeUserText(textId, text);
      toast.promise(
        new Promise((resolve) => setTimeout(resolve, 1000)),
        {
          pending: "更改中...",
          success: "编辑成功 👌",
        },
        {
          autoClose: 1000,
        }
      );
      setTimeout(() => {
        getUser();
      }, 1300);
    } catch (error) {
      toast.error("编辑失败,这不是您的帖子!");
    }
  };

  const headerSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (text.textData !== "") userPushText();
    setText({ textData: "" });
  };
  const headerSubmit2 = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (text.textData !== "") changeUserText();
    setText({ textData: "" });
  };

  return (
    <>
      <div className="heartBg duration-200 ease-in-out dark:bg-[#253446]">
        <div className="h-[86vh] z-[-1] space-y-[2.3rem] snap-y scroll-smooth overflow-y-scroll">
          <div className="snap-start duration-200 ease-in-out showText-BoxStyle mx-5 sm:mx-[3rem] md:mx-[7rem] lg:mx-[15rem] mt-5 flex flex-col">
            <div>
              {
                <div className="mr-6 ml-2 mt-3 flex justify-between items-center">
                  <div className="flex justify-center items-end">
                    <span
                      className={`w-10 h-10 md:w-13 md:h-13 icon-999`}
                    ></span>
                    <span className="text-[1.3rem] font-bold text-green-500">
                      建设者:
                    </span>
                  </div>
                  <span className="text-blue-500 select-none text-right pt-2">
                    {timeSCV(1642525759)}
                  </span>
                </div>
              }
            </div>
            <div className="h-full flex justify-cente md:items-center text-[15px] px-4 pt-1 text-slate-700 dark:text-slate-200 ">
              <div className="break-all">
                <p className="text-center font-bold text-[1.2rem]">
                  Hi👋~!欢迎来到发泄墙
                </p>
                <p className="indent-6 font-extrabold">
                  在这里随便说点什么,比如今天的心情怎么样?是好还是坏呢?或者遇到了不开心的事也可以发泄到这上面喔,别把太多压力扛在自己身上❤️❤️❤️
                </p>
                <br />
                <p className="font-bold">注意事项❗❗❗</p>
                <ul className="font-bold list-decimal indent-8 list-inside">
                  <li>
                    不允许发表任何带有政治言论,如辱骂国家、民族、职业工作者等有关的政治性言论,如出现有关内容:发表账号所有数据删除、注册手机号禁止注册并且上交公安部检举!
                  </li>
                  <li>
                    不允许发表任何带有淫秽暴力或辱骂等词汇,如出现有关内容:发表账号封号1-3月不等,初次违反警告处理.
                  </li>
                  <li>
                    不允许发表任何带有真实姓名或真实地名词汇，如:"xxx省xxx市xxx区,张xx,刘xx等",可用虚拟昵称表示,人物a,人物b等如出现有关内容:发表账号封号1-3月不等,初次违反警告处理.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex py-3 justify-center sm:justify-end sm:mr-8 items-center">
              <ArrowCircleDownIcon className="animate-bounce h-10 w-10 text-blue-500 dark:text-green-500" />
            </div>
          </div>
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
                  <div className="h-full flex justify-cente md:items-center text-[15px] px-4 indent-8 pt-1 text-slate-900 dark:text-slate-200 ">
                    <p className="break-all">{c.textData}</p>
                  </div>
                  <div className="mx-5 my-1 h-[4vh] flex justify-between items-center py-2">
                    <div className="flex justify-start items-center space-x-3">
                      <button
                        className="icon-button-style flex justify-center items-center"
                        onClick={() => addSmilAndHeart(c._id, { heart: true })}
                      >
                        <HeartIcon
                          className={`w-7 h-7 text-${
                            c.heart > 0 ? "red-500" : "slate-400"
                          }`}
                        />
                        <span className="text-slate-900 dark:text-slate-100">
                          {c.heart}
                        </span>
                      </button>
                      {c.smil > 0 ? (
                        <button
                          className="icon-button-style flex justify-center items-center"
                          onClick={() => addSmilAndHeart(c._id, { smil: true })}
                        >
                          <EmojiHappyIcon className="w-7 h-7 text-yellow-500" />
                          <span className="text-slate-900 dark:text-slate-100">
                            {c.smil}
                          </span>
                        </button>
                      ) : (
                        <button
                          className="icon-button-style flex justify-center items-center"
                          onClick={() => addSmilAndHeart(c._id, { smil: true })}
                        >
                          <EmojiSadIcon className="w-7 h-7 text-slate-400" />
                          <span className="text-slate-900 dark:text-slate-100">
                            {c.smil}
                          </span>
                        </button>
                      )}
                    </div>
                    <div className="relative">
                      <Menu>
                        <Menu.Button className="outline-none">
                          <DotsHorizontalIcon className="icon-button-style w-7 h-7 text-slate-600 dark:text-slate-300" />
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
                                <>
                                  <Menu.Item>
                                    <button
                                      className="w-full button-style outline-none rounded-full dark:bg-gray-100 dark:text-black bg-gray-800 text-gray-100"
                                      onClick={() => setTextId(c._id)}
                                    >
                                      编辑帖子
                                      <PencilAltIcon className="w-5 h-5 inline-block text-slate-100 dark:text-gray-900 mb-1" />
                                    </button>
                                  </Menu.Item>
                                  <Menu.Item>
                                    <button
                                      className="w-full button-style outline-none rounded-full dark:bg-gray-100 dark:text-black bg-gray-800 text-gray-100"
                                      // onClick={
                                      //   userData.isAdmin
                                      //     ? () => adminTextDelete(c._id)
                                      //     : () => textDelete(c._id)
                                      // }
                                      onClick={() =>
                                        doDelete(
                                          userData.isAdmin
                                            ? () => adminTextDelete(c._id)
                                            : () => textDelete(c._id)
                                        )
                                      }
                                    >
                                      删除帖子
                                      <TrashIcon className="w-5 h-5 inline-block text-slate-100 dark:text-gray-900 mb-1" />
                                    </button>
                                  </Menu.Item>
                                </>
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

        {textId === "" && (
          <form
            onSubmit={headerSubmit}
            className="fixed right-0 left-0 bottom-0 h-[8vh] flex justify-center items-center duration-200 ease-in-out dark:bg-[#304053]"
          >
            <input
              type="textarea"
              placeholder="在这里输入,宣泄情绪..."
              minLength={3}
              maxLength={550}
              value={text.textData}
              className="icon-input-Style duration-200 ease-in-out dark:caret-slate-100 dark:bg-slate-700 pl-2 w-[75vw] mr-5 sm:mr-10 overflow-x-auto dark:overflow-auto"
              required={true}
              onChange={(e: any) => setText({ textData: e.target.value })}
            ></input>
            <button type="submit" className="icon-button-style">
              <ReplyIcon className="text-black dark:text-slate-100 w-7 h-7" />
            </button>
          </form>
        )}
        {textId !== "" && (
          <form
            onSubmit={headerSubmit2}
            className="fixed right-0 left-0 bottom-0 h-[8vh] flex justify-center items-center duration-200 ease-in-out dark:bg-[#304053]"
          >
            <input
              type="textarea"
              placeholder="编辑你的内容..."
              minLength={3}
              maxLength={550}
              value={text.textData}
              className="icon-input-Style duration-200 ease-in-out dark:caret-slate-100 dark:bg-slate-700 pl-2 w-[75vw] mr-2 sm:mr-10 overflow-x-auto dark:overflow-auto"
              required={true}
              onChange={(e: any) => setText({ textData: e.target.value })}
            ></input>
            <button type="submit" className="icon-button-style">
              <ReplyIcon className="text-black dark:text-slate-100 w-7 h-7" />
            </button>
            <button
              onClick={() => setTextId("")}
              className="ml-1 sm:ml-5 icon-button-style outline-none text-black dark:text-gray-100"
            >
              <LogoutIcon className="w-7 h-7 inline-block dark:text-slate-100 text-gray-900" />
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default PopularPage;
