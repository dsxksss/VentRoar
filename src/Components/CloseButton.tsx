import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
const CloseButton = () => (
  <div className="flex animate-[cloes_1.5s_ease-in-out_infinite] items-center justify-center text-sm">
    滑动关闭
    <ArrowNarrowRightIcon className="h-5 w-7 text-gray-900 dark:text-gray-100" />
  </div>
);
export default CloseButton;
