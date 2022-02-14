const ConfirmationButton = (YES: any, NO: any, { closeToast }: any) => (
  <div className="flex justify-center text-sm items-center space-x-3">
    <button
      className="button-style outline-none rounded-full bg-red-500 text-gray-100"
      onClick={() => YES()}
    >
      <span className="font-bold">删除</span>
    </button>
    <button
      className="button-style outline-none rounded-full bg-green-500 text-gray-100"
      onClick={() => (NO ? NO() : closeToast)}
    >
      <span className="font-bold">取消</span>
    </button>
  </div>
);
export default ConfirmationButton;
