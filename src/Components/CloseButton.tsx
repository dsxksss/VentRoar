import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
const CloseButton = () => (
  <div className="flex justify-center text-sm items-center animate-[cloes_1.5s_ease-in-out_infinite]">
    滑动关闭
    <ArrowNarrowRightIcon className="dark:text-gray-100 text-gray-900 w-7 h-5" />
  </div>
);
export default CloseButton;
