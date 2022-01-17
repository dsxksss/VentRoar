function HelpPage() {
  return (
    <>
      <div className="pt-[5rem] px-3 h-[93vh] overflow-y-auto">
        <div
          style={{ animationDuration: "2.5s" }}
          className="an-3 overflow-auto"
        >
          <div className="shadow-xl">
            <h1 className="text-[2.3rem] text-center mb-3">网站介绍</h1>

            <p className="text-[1rem] font-bold indent-4 text-center">
              倾诉最近遇到的不开心的事情，发泄到这上面，此网站用匿名的方式可以和别人交流倾诉最近遇到的不开心
            </p>
            <br />

            <p
              className="
        text-center text-[1.2rem] font-bold text-red-600"
            >
              网站还在火速开发中🚀🚀🚀
              <br />
              版本V:0.2.4
            </p>

            <br />
            <p>
              待开发🚧 :
              <br />
              <b className="text-yellow-400">
                登入和注册的后端逻辑、网站主页样式、前后端数据库链接、帮助页面、
                Heart页面样式、Heart页面交互优化、用户主页样式及后台逻辑、优化页面交互、优化交互动画等......
              </b>
            </p>
            <p>
              已完成✅ :
              <br />
              <b className="text-green-500">
                登入页面样式、注册页面样式、从数据库获取数据
              </b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpPage;
