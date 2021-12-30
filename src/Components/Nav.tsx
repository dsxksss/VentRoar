import { ViewListIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
// useLocation 是获取当前页面路由的一些数据

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  //FUNCTION:动态显示当前点击的网页
  const ShowActive = (pagaName: string) =>
    pathname === pagaName ? "" : "bt-style";

  //FUNCTION:手机端点击导航栏显示
  const ShowListNav = (isopen: boolean) => (isopen ? "" : "hidden");

  return (
    <div className="mx-2 flex flex-row justify-between at-item">
      <div className="mt-3 justify-self-start">
        <Link className="p-2 text-lg font-bold text-black" to={"/"}>
          www.ventroar.xyz
        </Link>
      </div>

      <div className="mr-7 font-bold text-slate-300 mt-3 hidden sm:block space-x-7">
        <Link className={ShowActive("/")} to={"/"}>
          主页
        </Link>
        <Link className={ShowActive("/HeartPage")} to={"/HeartPage"}>
          <HeartIcon className="inline-block h-5 mb-1 w-5" />墙
        </Link>
        <Link className={ShowActive("/HelpPage")} to={"/HelpPage"}>
          帮助/关于
        </Link>
        <Link className={ShowActive("/LoginPage")} to={"/LoginPage"}>
          login登入
        </Link>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mr-2 mt-3 sm:hidden"
      >
        <ViewListIcon className="h-5 w-5 text-black" />
      </button>

      <div className={ShowListNav(isOpen)}>
        <div className="bg-gray-900 h-[93vh] text-white">
          <ul>
            <li>
              <Link className={ShowActive("/")} to={"/"}>
                主页
              </Link>
            </li>
            <li>
              <Link className={ShowActive("/HeartPage")} to={"/HeartPage"}>
                <HeartIcon className="inline-block h-5 mb-1 w-5" />墙
              </Link>
            </li>
            <li>
              <Link className={ShowActive("/HelpPage")} to={"/HelpPage"}>
                帮助/关于
              </Link>
            </li>
            <li>
              <Link className={ShowActive("/LoginPage")} to={"/LoginPage"}>
                login登入
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
