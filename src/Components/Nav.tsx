import { useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
//导入headlessui组件依赖，来方便的创建可交互样式
import { ViewListIcon, XIcon } from "@heroicons/react/solid";
import {
  HeartIcon,
  UserCircleIcon,
  HomeIcon,
  LightBulbIcon,
} from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";
// useLocation 是获取当前页面路由的一些数据

const Nav = () => {
  const { pathname } = useLocation();
  //FUNCTION:动态显示当前点击的网页
  const ShowActive = (pagaName: string) =>
    pathname === pagaName
      ? "text-black border-b-2 border-slate-800 pb-2"
      : "bt-style";
  const ShowActiveMi = (pagaName: string) =>
    pathname === pagaName
      ? "transition ease-in duration-150 text-slate-100 font-bold bg-slate-800/90 px-[3rem] py-2 rounded-md"
      : "bt-style font-bold";
  const [open, setOpen] = useState(false); //手机导航栏的开合状态
  return (
    <div className="mt-3 flex flex-row justify-between items-center an-3">
      {/* 电脑端的显示设置 */}
      <div className="">
        <Link className="ml-2 text-lg font-bold text-black" to={"/"}>
          www.ventroar.xyz
        </Link>
      </div>

      <div className="mr-7 font-bold text-slate-300 hidden sm:block space-x-7">
        <Link className={ShowActive("/")} to={"/"}>
          <HomeIcon className="inline-block h-5 mb-1 w-5" />
          主页
        </Link>
        <Link className={ShowActive("/HeartPage")} to={"/HeartPage"}>
          <HeartIcon className="inline-block h-5 mb-1 w-5" />墙
        </Link>
        <Link className={ShowActive("/HelpPage")} to={"/HelpPage"}>
          <LightBulbIcon className="inline-block h-5 mb-1 w-5" />
          帮助
        </Link>
        <Link className={ShowActive("/LoginPage")} to={"/LoginPage"}>
          <UserCircleIcon className="inline-block h-5 mb-1 w-5" />
          login登入
        </Link>
      </div>

      {/* 手机端的显示设置 */}
      <button className="mr-3 sm:hidden">
        <ViewListIcon onClick={() => setOpen(true)} className="h-5 w-5" />
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden"
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
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
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
                    <div className="absolute top-1 right-1 mr-2 mt-3 active:outline-none sm:hidden">
                      <button
                        type="button"
                        className=""
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="pl-[2rem] pt-[1.7rem] text-xl font-bold text-gray-900">
                        导 航 栏 VENTROAR
                      </Dialog.Title>
                    </div>
                    <div className="mt-6 relative flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <div className="absolute text-center inset-0 sm:px-6">
                        <div className="flex flex-col mt-[10rem] h-[100%] space-y-[4rem] items-center">
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
                            className={ShowActiveMi("/HelpPage")}
                            to={"/HelpPage"}
                            onClick={() => setOpen(false)}
                          >
                            <LightBulbIcon className="inline-block h-5 mb-1 w-5" />
                            帮助/关于
                          </Link>
                          <Link
                            className={ShowActiveMi("/LoginPage")}
                            to={"/LoginPage"}
                            onClick={() => setOpen(false)}
                          >
                            <UserCircleIcon className="inline-block h-5 mb-1 w-5" />
                            login登入
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
