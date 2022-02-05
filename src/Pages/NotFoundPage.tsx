import cimg from "../img/cImg/notFindPage.svg";
function NotFoundPage() {
  return (
    <>
      <div className="h-[94vh] flex flex-col duration-200 dark:bg-[#253446] justify-center items-center text-slate-900">
        <div className="bg-cover w-[70vw] h[40vh] md:h-[60vh]">
          <img className="dark:fill-slate-50" src={cimg} alt="notfindpage" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl dark:text-slate-50">错误! 没找到此网页!!!</h1>
          <h2 className="m-2 text-xl dark:text-slate-50 mt-5 text-md">
            {`没找到此网页，请回到正确的网页路径!!!`}
          </h2>
          <h1 className="mt-12 text-2xl dark:text-slate-50">
            ERROR! NOTFOUND!!!
          </h1>
          <h2 className="m-5 text-lg dark:text-slate-50">
            {`Can’t find this webpage, please go back to the correct network path`}
          </h2>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
