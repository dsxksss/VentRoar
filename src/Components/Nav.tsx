import { Menu } from "@headlessui/react";
//导入headlessui组件依赖，来方便的创建可交互样式
import { ViewListIcon, XIcon } from "@heroicons/react/solid";
import {
  HeartIcon,
  UserCircleIcon,
  HomeIcon,
  LightBulbIcon,
} from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";
// useLocation 是获取当前页面路由的一些数据

const Nav = () => {
  const { pathname } = useLocation();
  //FUNCTION:动态显示当前点击的网页
  const ShowActive = (pagaName: string) =>
    pathname === pagaName ? "text-black" : "bt-style";

  return (
    <div className="mx-2 flex flex-row justify-between an-3">
      {/* 电脑端的显示设置 */}
      <div className="mt-3 justify-self-start">
        <Link className="p-2 text-lg font-bold text-black" to={"/"}>
          www.ventroar.xyz
        </Link>
      </div>

      <div className="mr-7 font-bold text-slate-300 mt-3 hidden sm:block space-x-7">
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
      <Menu>
        <Menu.Button className="absolute top-1 right-2 mr-2 mt-3 sm:hidden">
          <ViewListIcon className="h-5 w-5 text-black" />
        </Menu.Button>

        <Menu.Items
          style={{
            zIndex: "1",
            animationDuration: "0.6s",
            animationTimingFunction: "var(--ease-out-quart)",
          }} //页面显示层级关系设置为最顶上
          className="an-2 font-bold text-slate-400 fixed flex flex-col bg-slate-100 
            items-center justify-evenly rounded-b-2xl h-[40vh] outline-none w-screen top-0 left-0 sm:hidden"
        >
          <Menu.Button className="absolute top-1 right-2 mr-2 mt-3 sm:hidden">
            <XIcon className="h-5 w-5 " />
          </Menu.Button>
          <Menu.Item>
            <Link className={ShowActive("/")} to={"/"}>
              <HomeIcon className="inline-block h-5 mb-1 w-5" />
              主页
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link className={ShowActive("/HeartPage")} to={"/HeartPage"}>
              查看
              <HeartIcon className="inline-block h-5 mb-1 w-5" />墙
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link className={ShowActive("/HelpPage")} to={"/HelpPage"}>
              <LightBulbIcon className="inline-block h-5 mb-1 w-5" />
              帮助/关于
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link className={ShowActive("/LoginPage")} to={"/LoginPage"}>
              <UserCircleIcon className="inline-block h-5 mb-1 w-5" />
              login登入
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default Nav;
