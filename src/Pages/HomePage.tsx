import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="h-[94vh] bg-fixed bg-t10 bg-center sm:bg-bottom dark:sm:bg-center dark:saturate-150 dark:bg-t3 dark:bg-top bg-cover flex flex-col items-center">
        <div id="title">
          <p className="text-[4rem] font-serif text-gray-100">VentRoar</p>
        </div>
        <div className="text-[1.1rem] text-gray-100 font-bold px-4 py-1 space-y-2">
          <p className="text-center">上天完全是为了坚强你的</p>
          <p className="text-center">意志才在道路上设下重重的障碍</p>
          <p className="text-right">———泰戈尔</p>
        </div>

        <div className="flex sm:m-[10vh] justify-center items-center space-x-3 h-[28vh] w-[90vw]">
          <div className="flex font-bold flex-col space-y-5 justify-center text-[1.1rem] sm:text-gray-50 text-gray-100">
            <div className="flex flex-col font-bold justify-start items-center h-[8vh] duration-200 ease-in-out text-left rounded-2xl px-3 py-4">
              <span>用户信息全加密</span>
            </div>
            <div className="flex flex-col font-bold justify-start items-center h-[13vh] rounded-2xl px-3 py-4 text-left">
              <span>以匿名的方式公布...</span>
            </div>
          </div>
          <div className="duration-300 h-[26vh] transform ease-in-out ">
            <div className="h-[13rem] w-[10rem] sm:w-[26vw] sm:h-[50vh] sm:bg-center rounded-2xl bg-t7 sm:bg-t7 dark:bg-t4 sm:dark:bg-t5 bg-cover object-bottom" />
          </div>
        </div>
        <div className="fixed bottom-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
