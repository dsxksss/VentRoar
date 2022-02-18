import Footer from "../Components/Footer";

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

        <div className="flex h-[28vh] w-[90vw] items-center justify-center space-x-3 sm:m-[10vh]">
          <div className="flex flex-col justify-center space-y-5 text-[1.1rem] font-bold text-gray-100 sm:text-gray-50">
            <div className="flex h-[8vh] flex-col items-center justify-start rounded-2xl px-3 py-4 text-left font-bold duration-200 ease-in-out">
              <span>用户信息全加密</span>
            </div>
            <div className="flex h-[13vh] flex-col items-center justify-start rounded-2xl px-3 py-4 text-left font-bold">
              <span>以匿名的方式公布...</span>
            </div>
          </div>
          <div className="h-[26vh] transform duration-300 ease-in-out ">
            <div className="bg-t7 sm:bg-t7 dark:bg-t4 sm:dark:bg-t5 h-[13rem] w-[10rem] rounded-2xl bg-cover object-bottom sm:h-[50vh] sm:w-[26vw] sm:bg-center" />
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
