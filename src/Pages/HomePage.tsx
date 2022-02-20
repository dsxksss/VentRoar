import Footer from "../Components/Footer";
import {
  HeartIcon,
  UserIcon,
  CodeIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <div className="bg-t10 dark:bg-t3 flex h-[94vh] flex-col items-center bg-cover bg-fixed bg-center dark:bg-top dark:saturate-150 sm:bg-bottom dark:sm:bg-center">
        <div id="title">
          <p className="font-serif text-[4rem] text-gray-100">VentRoar</p>
        </div>
        <div className="space-y-2 px-4 py-1 text-[1.1rem] font-bold text-gray-100">
          <p className="text-center">上天完全是为了坚强你的</p>
          <p className="text-center">意志才在道路上设下重重的障碍</p>
          <p className="text-right">———泰戈尔</p>
        </div>
        {/* 发光按钮 s*/}
        <div className="mt-14 space-y-10">
          <div className="grid items-start justify-center gap-8">
            <div className="group relative">
              <div className="animate-tilt opacity-85 absolute -inset-1 transform rounded-lg bg-gradient-to-r from-pink-400 to-purple-400 blur duration-1000 ease-in-out group-hover:opacity-100 group-hover:duration-200 dark:-inset-0.5 dark:from-pink-600 dark:to-purple-600 dark:opacity-75"></div>
              <Link
                to={"/HeartPage"}
                className="relative flex w-56 items-center justify-between rounded-lg bg-gray-100 px-4 py-2 font-bold leading-none dark:bg-black sm:w-72 sm:px-7 sm:py-4"
              >
                <span className="flex space-x-1 text-zinc-800 dark:text-zinc-50 sm:items-center">
                  <HeartIcon className="h-6 w-6" />
                </span>
                <span className="flex items-center pl-1 text-gray-800 transition duration-500 ease-in-out group-hover:text-zinc-400 dark:text-zinc-50 dark:group-hover:text-zinc-500 sm:pl-2">
                  进入发泄墙
                </span>
                <ArrowNarrowRightIcon className="ml-3 h-6 w-7 animate-[cloes_1.5s_ease-in-out_infinite] text-zinc-900 dark:text-zinc-100" />
              </Link>
            </div>
          </div>
          <div className="grid items-start justify-center gap-8">
            <div className="group relative">
              <div className="animate-tilt opacity-85 absolute -inset-1 transform rounded-lg bg-gradient-to-r from-pink-400 to-purple-400 blur duration-1000 ease-in-out group-hover:opacity-100 group-hover:duration-200 dark:-inset-0.5 dark:from-pink-600 dark:to-purple-600 dark:opacity-75"></div>
              <Link
                to={"/LoginPage"}
                className="relative flex w-56 items-center justify-between rounded-lg bg-gray-100 px-4 py-2 font-bold leading-none dark:bg-black sm:w-72 sm:px-7 sm:py-4"
              >
                <span className="flex space-x-1 text-zinc-800 dark:text-zinc-50 sm:items-center">
                  <UserIcon className="h-6 w-6" />
                </span>
                <span className="flex items-center pl-1 text-gray-800 transition duration-500 ease-in-out group-hover:text-zinc-400 dark:text-zinc-50 dark:group-hover:text-zinc-500 sm:pl-2">
                  注册/登录账号
                </span>
                <ArrowNarrowRightIcon className="ml-3 h-6 w-7 animate-[cloes_1.5s_ease-in-out_infinite] text-zinc-900 dark:text-zinc-100" />
              </Link>
            </div>
          </div>
          <div className="grid items-start justify-center gap-8">
            <div className="group relative">
              <div className="animate-tilt opacity-85 absolute -inset-1 transform rounded-lg bg-gradient-to-r from-pink-400 to-purple-400 blur duration-1000 ease-in-out group-hover:opacity-100 group-hover:duration-200 dark:-inset-0.5 dark:from-pink-600 dark:to-purple-600 dark:opacity-75"></div>
              <Link
                to={"/AboutUsPage"}
                className="relative flex w-56 items-center justify-between rounded-lg bg-gray-100 px-4 py-2 font-bold leading-none dark:bg-black sm:w-72 sm:px-7 sm:py-4"
              >
                <span className="flex space-x-1 text-zinc-800 dark:text-zinc-50 sm:items-center">
                  <CodeIcon className="h-6 w-6" />
                </span>
                <span className="flex items-center pl-1 text-gray-800 transition duration-500 ease-in-out group-hover:text-zinc-400 dark:text-zinc-50 dark:group-hover:text-zinc-500 sm:pl-2">
                  了解我们
                </span>
                <ArrowNarrowRightIcon className="ml-3 h-6 w-7 animate-[cloes_1.5s_ease-in-out_infinite] text-zinc-900 dark:text-zinc-100" />
              </Link>
            </div>
          </div>
        </div>
        {/* 发光按钮 e*/}
        <div className="fixed bottom-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
