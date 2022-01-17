import { Link } from "react-router-dom";
import { UserCircleIcon, LockOpenIcon } from "@heroicons/react/solid";
import axios from "axios";
const Login = () => {
  const push = async () => {
    await axios;
  };
  return (
    <>
      <div
        id="all"
        style={{ animationDuration: "0.7s" }}
        className="an-4 mt-[-7vh] login-And-Register-PageStyle border-l-blue-500/90 space-y-4"
      >
        <div id="title">
          {/* <p className="title-size">WelCome To</p> */}
          <p className="ventroar-size text-blue-500">VentRoar</p>
        </div>

        <div className="space-y-6 flex flex-col items-center lg:space-y-8">
          <div id="uesrText" className="loginPage-input">
            <UserCircleIcon className="w-5 h-5 mr-1" />
            <input
              className="input-Style"
              type="text"
              // SM:必填项
              required
              maxLength={13}
              placeholder="账号 4-13位字母数字"
              //SM:实时接收输入框里的值
            />
          </div>
          <div id="userPassword" className="loginPage-input">
            <LockOpenIcon className="w-5 h-5 mr-1" />
            <input
              className="input-Style"
              type="password"
              // SM:必填项
              required
              maxLength={18}
              placeholder="密码 6-18位字母数字"
              //SM:实时接收输入框里的值
            />
          </div>
          <button
            type="submit"
            className="button-style text-white bg-blue-500/90 shadow-lg shadow-gray-300"
          >
            l o g i n
          </button>
          <div className="text-sm md:text-[1.25rem] font-bold text-blue-400 space-x-[2rem]">
            <Link to={"/FindPswPage"}>忘记密码</Link>
            <Link to={"/RegisterPage"}>注册账号</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
