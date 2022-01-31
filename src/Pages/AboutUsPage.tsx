import { useState } from "react";
import cimg from "../img/cImg/developer.svg";
import getUserData from "../services/getUserData";

function HelpPage() {
  const [list, setList] = useState<[]>([]);
  let userCout = 0;
  return (
    <>
      <div className="pt-[1.1rem] px-3 h-[93vh] overflow-y-auto">
        <div
          style={{ animationDuration: "2.5s" }}
          className="an-3 overflow-auto flex flex-col-reverse sm:flex-row items-center justify-center "
        >
          <div className="bg-cover">
            <img src={cimg} alt="developerCImg" />
          </div>
          <div>
            <h1 className="text-[2.3rem] md:text-[2.7rem] lg:text-[3rem] text-center mb-3">
              网站介绍
            </h1>
            <p className="text-[1rem] md:text-[1.3rem] lg:text-[1.6rem]  font-bold indent-4 text-center">
              倾诉最近遇到的不开心的事情，发泄到这上面，此网站用匿名的方式可以和别人交流倾诉最近遇到的不开心
            </p>
            <br />
            <p
              className="
        text-center text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] font-bold text-red-500"
            >
              网站还在火速开发中🚀🚀🚀 版本V:0.2.5
            </p>
            <br />
          </div>
        </div>
        <div className="md:text-[1.7rem]">
          <p>
            待开发🚧 :
            <br />
            <b className="text-yellow-400">
              网站主页样式、关于页面样式、Heart页面样式、Heart页面交互优化、用户主页样式及后台逻辑、优化页面交互、优化交互动画等、修复部分BUG......
            </b>
          </p>
          <p>
            已完成✅ :
            <br />
            <b className="text-green-500">
              登入页面样式、注册页面样式、从数据库获取数据、登入和注册的后端逻辑、前后端数据库链接
            </b>
          </p>
          <button
            className="button-style bg-green-400 text-white shadow-lg shadow-green-400/50"
            onClick={async () => {
              setList(await getUserData());
            }}
          >
            Get Data
          </button>
        </div>
      </div>
      {list !== [] && (
        <div>
          {list.map((c: any) => (
            <ul key={c._id} className="overflow-x-auto">
              <li>
                <p>{(userCout += 1)}</p>
              </li>
              <li>
                <p>username:{c.userName}</p>
              </li>
              <li>
                <p>userphone:{c.userPhoneNumber}</p>
              </li>
              <li>
                <p>userpassword:{c.userPassword}</p>
              </li>
              <br />
            </ul>
          ))}
        </div>
      )}
    </>
  );
}

export default HelpPage;
