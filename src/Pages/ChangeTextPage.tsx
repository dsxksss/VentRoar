import { LogoutIcon, ReplyIcon } from "@heroicons/react/solid";

export default function ({ oldText, setText, setElemet }: any) {
  return (
    <div className="fixed right-0 left-0 bottom-0 flex h-[8vh] items-center justify-center duration-200 ease-in-out dark:bg-[#304053]">
      <input
        type="text"
        placeholder="编辑帖子..."
        minLength={3}
        maxLength={550}
        className="icon-input-Style mr-5 w-[75vw] overflow-x-auto pl-2 duration-200 ease-in-out dark:overflow-auto dark:bg-slate-700 dark:caret-slate-100 sm:mr-10"
        required={true}
        onChange={(e: any) => setText({ textData: e.target.value })}
      ></input>
      <button className="icon-button-style">
        <ReplyIcon className="h-7 w-7 text-black dark:text-slate-100" />
      </button>
      <button className="icon-button-style ml-1 text-black outline-none dark:text-gray-100 sm:ml-5">
        <LogoutIcon className="inline-block h-7 w-7 text-gray-900 dark:text-slate-100" />
      </button>
    </div>
  );
}
