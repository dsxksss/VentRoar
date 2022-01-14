import { Link } from "react-router-dom";
import { UserCircleIcon, LockOpenIcon } from "@heroicons/react/solid";
const Login = () => {
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
        <div id="input" className="flex flex-col space-y-6 lg:space-y-10">
          <div id="uesrText" className="loginPage-input">
            <UserCircleIcon className="w-5 h-5 mr-1" />
            <input
              className="input-Style"
              type="text"
              // SM:必填项
              required
              maxLength={13}
              pattern="^[a-zA-Z][a-zA-Z0-9_]{3,12}$"
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
              pattern="^[a-zA-Z]\w{5,17}$"
              placeholder="密码 6-18位字母数字"
              //SM:实时接收输入框里的值
            />
          </div>
          <div id="inputButton">
            <button className="button-style text-white bg-blue-400 shadow-lg shadow-sky-400/30">
              l o g i n
            </button>
          </div>
          <div className="text-xs">
            <Link to={"/RegisterPage"}>还没账号? 点我注册加入VentRoar</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
