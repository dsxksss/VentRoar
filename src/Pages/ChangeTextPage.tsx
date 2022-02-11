import { LogoutIcon, ReplyIcon } from "@heroicons/react/solid";

export default function ({ oldText, setText, setElemet }: any) {
  return (
    <div className="fixed right-0 left-0 bottom-0 h-[8vh] flex justify-center items-center duration-200 ease-in-out dark:bg-[#304053]">
      <input
        type="text"
        placeholder="编辑帖子..."
        minLength={3}
        maxLength={550}
        className="icon-input-Style duration-200 ease-in-out dark:caret-slate-100 dark:bg-slate-700 pl-2 w-[75vw] mr-5 sm:mr-10 overflow-x-auto dark:overflow-auto"
        required={true}
        onChange={(e: any) => setText({ textData: e.target.value })}
      ></input>
      <button className="icon-button-style">
        <ReplyIcon className="text-black dark:text-slate-100 w-7 h-7" />
      </button>
      <button className="ml-1 sm:ml-5 icon-button-style outline-none text-black dark:text-gray-100">
        <LogoutIcon className="w-7 h-7 inline-block dark:text-slate-100 text-gray-900" />
      </button>
    </div>
  );
}
