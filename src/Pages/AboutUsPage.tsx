import cimg from "../img/cImg/developer.svg";

function HelpPage() {
  return (
    <>
      <div className="h-[94vh] overflow-y-scroll px-3 pt-[1.1rem] duration-200 dark:bg-[#253446]">
        <div
          style={{ animationDuration: "2.5s" }}
          className="an-3 flex flex-col-reverse items-center justify-center sm:flex-row "
        >
          <div className="bg-cover">
            <img src={cimg} alt="developerCImg" />
          </div>
          <div>
            <h1 className="mb-3 text-center text-[2.3rem] dark:text-slate-50 md:text-[2.7rem] lg:text-[3rem]">
              网站介绍
            </h1>
            <p className="text-center indent-4 text-[1rem]  font-bold dark:text-slate-50 md:text-[1.3rem] lg:text-[1.6rem]">
              倾诉最近遇到的不开心的事情，发泄到这上面，此网站用匿名的方式可以和别人交流倾诉最近遇到的不开心
            </p>
            <br />
            <p
              className="
        text-center text-[1.2rem] font-bold text-red-500 md:text-[1.5rem] lg:text-[1.8rem]"
            >
              🎉🎉 版本V:1.0.0 🎉🎉
              <br />
              剩下的工作是创建一个此网页的手机端app,如果有多余时间也会增加、优化此网站功能。
            </p>
            <br />
          </div>
        </div>
        <div className="px-2 md:text-[1.7rem]">
          <p>
            <span className="dark:text-slate-50">待开发🚧 :</span>

            <b className="text-yellow-400">
              Heart页面交互优化、优化页面交互、优化交互动画等、修复部分BUG......
            </b>
          </p>
          <p>
            <span className="dark:text-slate-50">已完成✅ :</span>

            <b className="text-green-500">
              网站主页样式、登入页面样式、Heart页面样式、注册页面样式、找回密码页面样式及功能、用户主页样式及后台逻辑、从数据库获取数据、登入和注册的后端逻辑、关于页面样式、前后端数据库链接、自动登录功能、夜间模式、
            </b>
          </p>
        </div>
      </div>
    </>
  );
}

export default HelpPage;
