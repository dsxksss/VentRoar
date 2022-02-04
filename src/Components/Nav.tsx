import { useContext, useState } from "react";
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

const Nav = () => {
  const { pathname } = useLocation();
  //FUNCTION:动态显示当前点击的网页
  const ShowActive = (pagaName: string) =>
    pathname === pagaName ? "text-black" : "bt-style";
  const ShowActiveMi = (pagaName: string) =>
    pathname === pagaName
      ? "transition ease-out duration-150 text-slate-100 active:bg-slate-700 w-[25vh] font-bold bg-slate-700 px-full py-2 rounded-md"
      : "bt-style font-bold px-[3rem] py-2";
  const [open, setOpen] = useState(false); //手机导航栏的开合状态
  const { isDark, setDark } = useContext<any>(ToDarkContext); //切换夜间模式

  return (
    <div className="z-[10] shadow-md bg-slate-50 fixed inset-0 shadow-gray-300/50 h-[6vh] flex flex-row justify-between items-center an-3">
      {/* 电脑端的显示设置 */}
      <div className="">
        <Link
          className="ml-4 text-lg font-bold text-black inline-block mb-1"
          to={"/"}
        >
          ventroar.xyz
        </Link>
      </div>

      <div className="mr-7 font-bold text-gray-500/60 hidden sm:block space-x-7">
        <Link className={ShowActive("/")} to={"/"}>
          <HomeIcon className="inline-block h-5 mb-1 w-5" />
          主页
        </Link>
        <Link className={ShowActive("/HeartPage")} to={"/HeartPage"}>
          <HeartIcon className="inline-block h-5 mb-1 w-5" />墙
        </Link>
        <Link className={ShowActive("/AboutUsPage")} to={"/AboutUsPage"}>
          <UserGroupIcon className="inline-block h-5 mb-1 w-5" />
          关于我们
        </Link>
        <Link
          className=" text-gray-100 bg-blue-500 px-2 py-1 shadow-lg rounded-[0.3rem]"
          to={"/LoginPage"}
        >
          <UserCircleIcon className="inline-block h-5 mb-1 w-5" />
          login登录
        </Link>
        <button className="icon-button-style" onClick={() => setDark(!isDark)}>
          {isDark ? (
            <MoonIcon className="text-blue-500 inline-block h-5 w-5 mb-1" />
          ) : (
            <SunIcon className="text-yellow-500 inline-block h-5 w-5 mb-1" />
          )}
        </button>
      </div>

      {/* 手机端的显示设置 */}

      <div className="mr-3 sm:hidden border-none outline-none space-x-4">
        <button
          type="button"
          className="icon-button-style border-none outline-none"
          onClick={() => setDark(!isDark)}
        >
          {isDark ? (
            <MoonIcon className="text-blue-500 inline-block h-5 w-5 mb-1" />
          ) : (
            <SunIcon className="text-yellow-500 inline-block h-5 w-5 mb-1" />
          )}
        </button>
        <button className="">
          <ViewListIcon
            onClick={() => setOpen(true)}
            className="inline-block h-5 w-5 mb-1"
          />
        </button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden z-[15]"
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
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
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
                    <div className="absolute top-1 right-1 mr-2 mt-1 active:outline-none">
                      <button
                        type="button"
                        className="border-none outline-none"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                    <div>
                      <Dialog.Title className="mt-[2rem] flex flex-col justify-center rounded-[0.3rem] py-[1rem] mx-[1rem] text-xl text-center font-bold text-white bg-blue-400">
                        <div>V E N T R O A R</div>导 航 栏
                      </Dialog.Title>
                    </div>
                    <div className="mt-5 relative flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <div className="absolute text-center inset-0 sm:px-6">
                        <div className="flex flex-col mt-[3.5rem] h-[60vh] space-y-[3rem] items-center">
                          <Link
                            className={ShowActiveMi("/")}
                            to={"/"}
                            onClick={() => setOpen(false)}
                          >
                            <HomeIcon className="inline-block h-5 mb-1 w-5" />
                            主页
                          </Link>
                          <Link
                            className={ShowActiveMi("/HeartPage")}
                            to={"/HeartPage"}
                            onClick={() => setOpen(false)}
                          >
                            查看
                            <HeartIcon className="inline-block h-5 mb-1 w-5" />
                            墙
                          </Link>
                          <Link
                            className={ShowActiveMi("/AboutUsPage")}
                            to={"/AboutUsPage"}
                            onClick={() => setOpen(false)}
                          >
                            <UserGroupIcon className="inline-block h-5 mb-1 w-5" />
                            关于我们
                          </Link>
                          <Link
                            className={ShowActiveMi("/LoginPage")}
                            to={"/LoginPage"}
                            onClick={() => setOpen(false)}
                          >
                            <UserCircleIcon className="inline-block h-5 mb-1 w-5" />
                            login登录
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
