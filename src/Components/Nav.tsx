import { ViewListIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";
// useLocation 是获取当前页面路由的一些数据

const Nav = () => {
  const { pathname } = useLocation();
  //FUNCTION:动态显示当前点击的网页
  const ShowActive = (pagaName: string) =>
    pathname === pagaName ? "text-black" : "bt-style";
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

      <div className="mr-2 mt-3 sm:hidden">
        <ViewListIcon className="h-5 w-5 text-black" />
      </div>
    </div>
  );
};

export default Nav;
