import cimg from "../img/cImg/notFindPage.svg";
function NotFoundPage() {
  return (
    <>
      <div className="flex h-[94vh] flex-col items-center justify-center text-slate-900 duration-200 dark:bg-[#253446]">
        <div className="h[40vh] w-[70vw] bg-cover md:h-[60vh]">
          <img className="dark:fill-slate-50" src={cimg} alt="notfindpage" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl dark:text-slate-50">错误! 没找到此网页!!!</h1>
          <h2 className="text-md m-2 mt-5 text-xl dark:text-slate-50">
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
