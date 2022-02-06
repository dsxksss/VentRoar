import Footer from "../Components/Footer";
import logo from "../img/logo.svg";
import img1 from "../img/t4.png";

const HomePage = () => {
  return (
    <>
      <div className="h-[94vh] flex flex-col items-center transform duration-200 ease-in-out shadow-lg dark:bg-[#253446]">
        <div id="title">
          <p className="text-[4rem] font-serif transform duration-200 ease-in-out dark:text-gray-100">
            VentRoar
          </p>
        </div>
        <div className="text-[1.1rem] dark:text-gray-100 font-bold px-4 py-1 space-y-2">
          <p className="text-center">上天完全是为了坚强你的</p>
          <p className="text-center">意志才在道路上设下重重的障碍</p>
          <p className="text-right">———泰戈尔</p>
        </div>
        <div className="flex justify-center items-center space-x-3 h-[30vh] w-[90vw] ">
          <div className="rounded-2xl shadow-md bg-slate-50 dark:bg-[#304053] duration-200 h-[28vh] transform ease-in-out ">
            <img
              className="h-[28vh] scale-[0.9]"
              src={logo}
              alt="developerCImg"
            />
          </div>
          <div className="flex font-bold flex-col space-y-5 justify-center">
            <div className="flex indent-4 flex-col justify-center font-bold items-center h-[10vh] overflow-hidden duration-200 ease-in-out  bg-slate-50 dark:bg-[#304053] text-left rounded-2xl px-3 shadow-md py-4 text-blue-500 dark:text-green-500">
              <span>不能因为一点小挫折就垂头丧气</span>
            </div>
            <div className="flex flex-col justify-center items-center font-bold h-[15vh] overflow-hidden duration-200 ease-in-out  bg-slate-50 dark:bg-[#304053] rounded-2xl shadow-md px-3 py-4 text-center text-gray-900 dark:text-gray-300">
              <span>再困难的事情都过去了不是吗?</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-3 h-[30vh] w-[90vw] ">
          <div className="flex font-bold flex-col space-y-5 justify-center">
            <div className="flex flex-col font-bold justify-center items-center  h-[10vh] overflow-hidden duration-200 ease-in-out  bg-slate-50 dark:bg-[#304053] text-left rounded-2xl px-3 shadow-md py-4 text-gray-900 dark:text-gray-300">
              <span>用户信息全加密</span>
            </div>
            <div className="flex flex-col font-bold justify-center items-center h-[15vh] overflow-hidden duration-200 ease-in-out  bg-slate-50 dark:bg-[#304053] rounded-2xl shadow-md px-3 py-4 text-center text-blue-500 dark:text-green-500">
              <span>以匿名的方式公布...</span>
            </div>
          </div>
          <div className="shadow-md duration-300 h-[28vh] transform ease-in-out ">
            <img
              className="h-[28vh] rounded-2xl bg-cover object-bottom"
              src={img1}
              alt="developerCImg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
