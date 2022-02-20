const ConfirmationButton = (YES: any, NO: any, { closeToast }: any) => (
  <>
    <div className="flex items-center justify-center space-x-3 text-sm">
      <button
        className="button-style rounded-full bg-red-500 text-gray-100 outline-none"
        onClick={() => YES()}
      >
        <span className="font-bold">删除</span>
      </button>
      <button
        className="button-style rounded-full bg-green-500 text-gray-100 outline-none"
        onClick={() => (NO ? NO() : closeToast)}
      >
        <span className="font-bold">取消</span>
      </button>
    </div>
  </>
);
export default ConfirmationButton;
