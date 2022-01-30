import { useEffect, useState, useContext } from "react";
import timeSCV from "../utils/timeSCV";
import { loginContext } from "../conText/ByLoginDo";
import {
  ReplyIcon,
  EmojiHappyIcon,
  EmojiSadIcon,
  HeartIcon,
  DotsHorizontalIcon,
  AnnotationIcon,
  TrashIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/outline";
import { toast, Slide } from "react-toastify";
import { Menu, Transition } from "@headlessui/react";
import https from "../services/httpServices";

function PopularPage() {
  const [list, setList] = useState([]);
  const [text, setText] = useState({ textData: "" });
  const { token } = useContext<any>(loginContext);

  useEffect(() => {
    getUser();

    //toast网络请求例子,参1:api请求,参2:设置三种状态显示的msg,参3:toast配置
    // toast.promise(
    //   new Promise((resolve) => setTimeout(resolve, 3000)),
    //   {
    //     pending: "发送中...",
    //     success: "发送成功 👌",
    //     error: "发送失败 网络繁忙 🤯",
    //   },
    //   {
    //     autoClose: 1000,
    //   }
    // );

    return () => {
      setList([]);
    };
  }, []);

  const CloseButton = () => (
    <div className="flex justify-center items-center animate-[cloes_1.2s_ease-in-out_infinite]">
      滑动关闭
      <ArrowNarrowRightIcon className="text-gray-900 w-7 h-5" />
    </div>
  );

  //GET
  const getUser = async () => {
    //利用异步方法请求数据
    const { data } = await https.get(`${https.api.textDataApi}`);
    setList(data);
  };

  //POST
  const POST = async () => {
    if (token === "")
      return toast.warning("请先登录", {
        transition: Slide,
        closeButton: CloseButton,
        autoClose: false,
        toastId: "place Login", //添加id避免出现重复通知
      });
    try {
      await https.post(`${https.api.userTextApi}${token}`, text);
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
      getUser();
    } catch (err) {
      toast.error("发送失败,网络繁忙");
    }
  };

  //PUT
  const PUT = async (textId: string, smilOrheart: object) => {
    if (token === "")
      return toast.warning("请先登录", {
        transition: Slide,
        closeButton: CloseButton,
        autoClose: false,
        toastId: "place Login", //添加id避免出现重复通知
      });
    try {
      await https.put(`${https.api.userTextApi}${textId}`, smilOrheart);
      toast.success("+1", {
        toastId: "addOne", //添加id避免出现重复通知
      });
      getUser();
    } catch (err) {
      toast.error("网络繁忙", {
        toastId: "deleteOne", //添加id避免出现重复通知
      });
    }
  };
  const headerSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (text.textData !== "") POST();
    setText({ textData: "" });
  };

  return (
    <>
      <div className="bg-all">
        <div className="an-6 h-[83vh] mt-3 z-[-1] space-y-[2.3rem] snap-y scroll-smooth overflow-y-scroll">
          <div className="snap-start showText-BoxStyle mx-5 sm:mx-[3rem] md:mx-[7rem] lg:mx-[15rem] mt-5 flex flex-col">
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
            <div className="bg-slate-50/50 h-full flex justify-cente md:items-center text-[15px] px-4 pt-1 text-slate-700 ">
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
            <div className="mx-5 my-1 h-[4vh] flex justify-between items-center py-2">
              <div className="flex justify-start items-center space-x-3">
                <HeartIcon className="w-7 h-7 text-red-500" />
                999+
                <EmojiHappyIcon className="text-yellow-500 w-7 h-7" />
                999+
              </div>
              <div>
                <DotsHorizontalIcon className="w-7 h-7 text-slate-600" />
              </div>
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
                  <div className="bg-slate-50/50 h-full flex justify-cente md:items-center text-[15px] px-4 indent-8 pt-1 text-slate-700 ">
                    <p className="break-all">{c.textData}</p>
                  </div>
                  <div className="mx-5 my-1 h-[4vh] flex justify-between items-center py-2">
                    <div className="flex justify-start items-center space-x-3">
                      <button
                        className="icon-button-style"
                        onClick={() => PUT(c._id, { heart: true })}
                      >
                        <HeartIcon
                          className={`w-7 h-7 text-${
                            c.heart > 0 ? "red-500" : "slate-400"
                          }`}
                        />
                      </button>
                      {c.heart}
                      {c.smil > 0 ? (
                        <button
                          className="icon-button-style"
                          onClick={() => PUT(c._id, { smil: true })}
                        >
                          <EmojiHappyIcon className="w-7 h-7 text-yellow-500" />
                        </button>
                      ) : (
                        <button
                          className="icon-button-style"
                          onClick={() => PUT(c._id, { smil: true })}
                        >
                          <EmojiSadIcon className="w-7 h-7 text-slate-400" />
                        </button>
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
                            <Menu.Item>
                              <button className="w-full button-style outline-none rounded-full bg-gray-800 text-gray-100">
                                <span>评论帖子</span>
                                <AnnotationIcon className="w-5 h-5 inline-block text-slate-100" />
                              </button>
                            </Menu.Item>
                            {token === "" ? null : (
                              <Menu.Item>
                                <button className="w-full button-style outline-none rounded-full bg-gray-800 text-gray-100">
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
        <form
          onSubmit={headerSubmit}
          className="fixed border-t-[2px] right-0 left-0 bottom-0 h-[8vh] flex justify-center items-center"
        >
          <input
            type="text"
            placeholder="在这里输入,宣泄情绪..."
            minLength={3}
            maxLength={295}
            value={text.textData}
            className="icon-input-Style pl-2 w-[75vw] mr-5 sm:mr-10 overflow-x-auto"
            required={true}
            onChange={(e: any) => setText({ textData: e.target.value })}
          ></input>
          <button type="submit" className="icon-button-style">
            <ReplyIcon className="w-7 h-7" />
          </button>
        </form>
      </div>
    </>
  );
}

export default PopularPage;
