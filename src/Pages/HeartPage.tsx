import { useEffect, useState } from "react";
import {
  EmojiHappyIcon,
  EmojiSadIcon,
  HeartIcon,
  DotsHorizontalIcon,
  TrashIcon,
  LogoutIcon,
  PencilAltIcon,
} from "@heroicons/react/solid";
import {
  PaperAirplaneIcon,
  ArrowCircleDownIcon,
} from "@heroicons/react/outline";
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
        <div className="z-[-1] h-[86vh] snap-y space-y-[2.3rem] overflow-y-scroll scroll-smooth">
          <div className="showText-BoxStyle mx-5 mt-5 flex snap-start flex-col duration-200 ease-in-out sm:mx-[3rem] md:mx-[7rem] lg:mx-[15rem]">
            <div>
              {
                <div className="mr-6 ml-2 mt-3 flex items-center justify-between">
                  <div className="flex items-end justify-center">
                    <span
                      className={`md:w-13 md:h-13 icon-999 h-10 w-10`}
                    ></span>
                    <span className="text-[1.3rem] font-bold text-green-500">
                      建设者:
                    </span>
                  </div>
                  <span className="select-none pt-2 text-right text-blue-500">
                    {timeSCV(1642525759)}
                  </span>
                </div>
              }
            </div>
            <div className="justify-cente flex h-full px-4 pt-1 text-[15px] text-slate-700 dark:text-slate-200 md:items-center ">
              <div className="break-all">
                <p className="text-center text-[1.2rem] font-bold">
                  Hi👋~!欢迎来到发泄墙
                </p>
                <p className="indent-6 font-extrabold">
                  在这里随便说点什么,比如今天的心情怎么样?是好还是坏呢?或者遇到了不开心的事也可以发泄到这上面喔,别把太多压力扛在自己身上❤️❤️❤️
                </p>
                <br />
                <p className="font-bold">注意事项❗❗❗</p>
                <ul className="list-inside list-decimal indent-8 font-bold">
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
            <div className="flex items-center justify-center py-3 sm:mr-8 sm:justify-end">
              <ArrowCircleDownIcon className="h-10 w-10 animate-bounce text-blue-500 dark:text-green-500" />
            </div>
          </div>
          {list.map((c: any) => (
            <div key={c._id} className="my-5 snap-start">
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
                  <div className="justify-cente flex h-full px-4 pt-1 indent-8 text-[15px] text-slate-900 dark:text-slate-200 md:items-center ">
                    <p className="break-all">{c.textData}</p>
                  </div>
                  <div className="mx-5 my-1 flex h-[4vh] items-center justify-between py-2">
                    <div className="flex items-center justify-start space-x-3">
                      <button
                        className="icon-button-style flex items-center justify-center"
                        onClick={() => addSmilAndHeart(c._id, { heart: true })}
                      >
                        <HeartIcon
                          className={`h-7 w-7 text-${
                            c.heart > 0 ? "red-500" : "slate-400"
                          }`}
                        />
                        <span className="text-slate-900 dark:text-slate-100">
                          {c.heart}
                        </span>
                      </button>
                      {c.smil > 0 ? (
                        <button
                          className="icon-button-style flex items-center justify-center"
                          onClick={() => addSmilAndHeart(c._id, { smil: true })}
                        >
                          <EmojiHappyIcon className="h-7 w-7 text-yellow-500" />
                          <span className="text-slate-900 dark:text-slate-100">
                            {c.smil}
                          </span>
                        </button>
                      ) : (
                        <button
                          className="icon-button-style flex items-center justify-center"
                          onClick={() => addSmilAndHeart(c._id, { smil: true })}
                        >
                          <EmojiSadIcon className="h-7 w-7 text-slate-400" />
                          <span className="text-slate-900 dark:text-slate-100">
                            {c.smil}
                          </span>
                        </button>
                      )}
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
                                <>
                                  <Menu.Item>
                                    <button
                                      className="button-style w-full rounded-full bg-gray-800 text-gray-100 outline-none dark:bg-gray-100 dark:text-black"
                                      onClick={() => setTextId(c._id)}
                                    >
                                      编辑帖子
                                      <PencilAltIcon className="mb-1 inline-block h-5 w-5 text-slate-100 dark:text-gray-900" />
                                    </button>
                                  </Menu.Item>
                                  <Menu.Item>
                                    <button
                                      className="button-style w-full rounded-full bg-gray-800 text-gray-100 outline-none dark:bg-gray-100 dark:text-black"
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
                                      <TrashIcon className="mb-1 inline-block h-5 w-5 text-slate-100 dark:text-gray-900" />
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
            className="fixed right-0 left-0 bottom-0 flex h-[8vh] items-center justify-center duration-200 ease-in-out dark:bg-[#304053]"
          >
            <input
              type="textarea"
              placeholder="在这里输入,宣泄情绪..."
              minLength={3}
              maxLength={550}
              value={text.textData}
              className="icon-input-Style mr-5 w-[75vw] overflow-x-auto pl-2 duration-200 ease-in-out dark:overflow-auto dark:bg-slate-700 dark:caret-slate-100 sm:mr-10"
              required={true}
              onChange={(e: any) => setText({ textData: e.target.value })}
            ></input>
            <button type="submit" className="icon-button-style">
              <PaperAirplaneIcon className="h-7 w-7 text-black dark:text-slate-100" />
            </button>
          </form>
        )}
        {textId !== "" && (
          <form
            onSubmit={headerSubmit2}
            className="fixed right-0 left-0 bottom-0 flex h-[8vh] items-center justify-center duration-200 ease-in-out dark:bg-[#304053]"
          >
            <input
              type="textarea"
              placeholder="编辑你的内容..."
              minLength={3}
              maxLength={550}
              value={text.textData}
              className="icon-input-Style mr-2 w-[65vw] overflow-x-auto pl-2 duration-200 ease-in-out dark:overflow-auto dark:bg-slate-700 dark:caret-slate-100 sm:mr-10"
              required={true}
              onChange={(e: any) => setText({ textData: e.target.value })}
            ></input>
            <button type="submit" className="icon-button-style">
              <PaperAirplaneIcon className="h-7 w-7 text-black dark:text-slate-100" />
            </button>
            <button
              onClick={() => setTextId("")}
              className="icon-button-style ml-3 text-black outline-none dark:text-gray-100 sm:ml-5"
            >
              <LogoutIcon className="inline-block h-7 w-7 text-gray-900 dark:text-slate-100" />
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default PopularPage;
