import { useContext, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
//导入headlessui组件依赖，来方便的创建可交互样式
import { MoonIcon, SunIcon, ViewListIcon, XIcon } from "@heroicons/react/solid";
import { Link, useLocation } from "react-router-dom";
// useLocation 是获取当前页面路由的一些数据
import { Fragment } from "react";
import { ToDarkContext } from "./../conText/ToDark";
import {
  HeartIcon,
  UserCircleIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import getData from "../services/getData";
import networkLoginc from "../services/networkLogic";

const Nav = () => {
  const { pathname } = useLocation();
  //FUNCTION:动态显示当前点击的网页
  const ShowActive = (pagaName: string) =>
    pathname === pagaName || pathname === "/UserPage"
      ? "text-black dark:text-blue-400"
      : "bt-style";
  const ShowActiveMi = (pagaName: string) =>
    pathname === pagaName || pathname === "/UserPage"
      ? `transition transform ease-out duration-150 active:bg-slate-700 w-[25vh] font-bold ${
          isDark ? `bg-slate-100 text-slate-900` : `bg-slate-700 text-slate-100`
        } px-full py-2 rounded-md`
      : `${isDark ? "text-white" : "text-black"} font-bold px-[3rem] py-2`;
  const [open, setOpen] = useState(false); //手机导航栏的开合状态
  const [user, setUser] = useState<any>([]);
  const { isDark, setDark } = useContext<any>(ToDarkContext); //切换夜间模式

  useEffect(() => {
    //利用token获取数据库用户数据
    getUserName();
    return () => {
      setUser([]);
    };
  }, [localStorage.getItem("token")]);

  //GET
  const getUserName = async () => {
    //获取用户发送过的全部宣泄语句
    try {
      const data = await getData.getUserTextData(networkLoginc.getJWT());
      setUser(data);
    } catch (e) {}
  };

  return (
    <div className="an-3 fixed inset-0 z-[10] flex h-[6vh] transform flex-row items-center justify-between bg-slate-50 shadow-md shadow-gray-300/50 duration-200 dark:bg-[#253446] dark:shadow-gray-800">
      {/* 电脑端的显示设置 */}
      <div className="">
        <Link
          className="ml-4 mb-1 inline-block text-lg font-bold text-black dark:text-slate-100"
          to={"/"}
        >
          ventroar.xyz
        </Link>
      </div>

      <div className="mr-7 hidden space-x-7 font-bold text-gray-500/60 dark:text-slate-100 sm:block">
        <Link className={ShowActive("/")} to={"/"}>
          <HomeIcon className="mb-1 inline-block h-5 w-5" />
          主页
        </Link>
        <Link className={ShowActive("/HeartPage")} to={"/HeartPage"}>
          <HeartIcon className="mb-1 inline-block h-5 w-5" />墙
        </Link>
        <Link className={ShowActive("/AboutUsPage")} to={"/AboutUsPage"}>
          <UserGroupIcon className="mb-1 inline-block h-5 w-5" />
          关于我们
        </Link>
        <Link
          className="rounded-[0.3rem] bg-blue-500 px-2 py-1 text-gray-100 shadow-lg"
          to={"/LoginPage"}
        >
          <UserCircleIcon className="mb-1 inline-block h-5 w-5" />
          {user.userName && <span>{user.userName}</span>}
          {!user.userName && <span>Login登录</span>}
        </Link>
        <button className="icon-button-style" onClick={() => setDark(!isDark)}>
          {isDark ? (
            <MoonIcon className="mb-1 inline-block h-5 w-5 text-yellow-300" />
          ) : (
            <SunIcon className="mb-1 inline-block h-5 w-5 text-yellow-500" />
          )}
        </button>
      </div>

      {/* 手机端的显示设置 */}

      <div className="mr-3 space-x-4 border-none outline-none sm:hidden">
        <button
          type="button"
          className="icon-button-style border-none outline-none"
          onClick={() => setDark(!isDark)}
        >
          {isDark ? (
            <MoonIcon className="mb-1 inline-block h-5 w-5 text-yellow-300" />
          ) : (
            <SunIcon className="mb-1 inline-block h-5 w-5 text-yellow-500" />
          )}
        </button>
        <button className="outline-none">
          <ViewListIcon
            onClick={() => setOpen(true)}
            className="mb-1 inline-block h-5 w-5 outline-none dark:text-gray-300"
          />
        </button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[15] overflow-hidden"
          onClose={setOpen}
        >
          <div className="absolute inset-0 overflow-hidden">
            {/* 灰色模态 */}
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay
                className={`absolute inset-0 ${
                  isDark ? `bg-gray-800` : `bg-gray-500`
                }  bg-opacity-75 transition-opacity`}
              />
            </Transition.Child>

            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-1 right-1 mr-2 mt-2 active:outline-none">
                      <button
                        type="button"
                        className="border-none outline-none"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon
                          className={`h-5 w-5 ${
                            isDark ? "text-slate-100" : "text-slate-900 "
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>

                  <div
                    className={`flex h-full flex-col py-6 ${
                      isDark ? "bg-[#304053]" : "bg-white"
                    } shadow-xl`}
                  >
                    <div>
                      <Dialog.Title className="mx-[1rem] mt-[2rem] flex flex-col justify-center rounded-[0.3rem] bg-blue-400 py-[1rem] text-center text-xl font-bold text-white">
                        <div>V E N T R O A R</div>导 航 栏
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-5 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <div className="absolute inset-0 text-center sm:px-6">
                        <div className="mt-[3.5rem] flex h-[60vh] flex-col items-center space-y-[3rem]">
                          <Link
                            className={ShowActiveMi("/")}
                            to={"/"}
                            onClick={() => setOpen(false)}
                          >
                            <HomeIcon className="mb-1 inline-block h-5 w-5" />
                            主页
                          </Link>
                          <Link
                            className={ShowActiveMi("/HeartPage")}
                            to={"/HeartPage"}
                            onClick={() => setOpen(false)}
                          >
                            查看
                            <HeartIcon className="mb-1 inline-block h-5 w-5" />
                            墙
                          </Link>
                          <Link
                            className={ShowActiveMi("/AboutUsPage")}
                            to={"/AboutUsPage"}
                            onClick={() => setOpen(false)}
                          >
                            <UserGroupIcon className="mb-1 inline-block h-5 w-5" />
                            关于我们
                          </Link>
                          <Link
                            className={ShowActiveMi("/LoginPage")}
                            to={"/LoginPage"}
                            onClick={() => setOpen(false)}
                          >
                            <UserCircleIcon className="mb-1 inline-block h-5 w-5" />
                            {user.userName && <span>{user.userName}</span>}
                            {!user.userName && <span>Login登录</span>}
                          </Link>
                        </div>
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Nav;
