import { Link } from "react-router-dom";
import { UserCircleIcon, LockOpenIcon } from "@heroicons/react/solid";
import { useEffect, useState, useContext } from "react";
import { loginContext } from "./../conText/ByLoginDo";
import { toast, Flip } from "react-toastify";
import cimg from "../img/cImg/loginPage.svg";
import CloseButton from "./../Components/CloseButton";
import login from "../services/login";
const Login = () => {
  const { toLink } = useContext<any>(loginContext);
  const [userData, setUserData] = useState({
    userPassword: "",
    userPhoneNumber: "",
  });
  useEffect(() => {
    tokenPush();
    return;
    // console.log(localStorage.getItem("tokenForServer"));
  }, [toLink]);

  const tokenPush = async () => {
    try {
      await login.tokenValidation();
      setTimeout(() => {
        toLink("/UserPage");
      }, 50);
    } catch (err) {
      toast.warning("登录过期,请重新登录!", {
        autoClose: 6000,
        closeButton: CloseButton,
        bodyClassName: "font-bold text-yellow-400 text-md",
      });
    }
  };

  const push = async () => {
    try {
      await login.loginIN(userData);
      toast.success("登录成功...", {
        autoClose: 1500,
        bodyClassName: "font-bold text-center text-gary-900",
      });
      setTimeout(() => {
        toLink("/UserPage");
        toast.clearWaitingQueue();
      }, 1500);
    } catch (err) {
      toast.error("登录失败!手机号或密码错误!", {
        autoClose: 1500,
        toastId: "登录失败",
        transition: Flip,
        bodyClassName: "font-bold text-red-500",
      });
      login.loginOUT();
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    push();
  };

  return (
    <>
      <div
        style={{ animationDuration: "0.7s" }}
        className="an-4 flex flex-col justify-center items-center h-[93vh]"
      >
        <div className="sm:hidden bg-cover mt-[-18vh] w-[92vw]">
          <img src={cimg} alt="cat" />
        </div>
        <div
          id="all"
          className="login-And-Register-PageStyle lg:flex-row border-l-blue-500 space-y-4"
        >
          <div id="title">
            <p className="ventroar-size text-blue-500">VentRoar</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6 flex flex-col items-center lg:space-y-8">
              <div id="uesrText" className="loginPage-input">
                <UserCircleIcon className="w-5 h-5 mr-1" />
                <input
                  className="input-Style"
                  type="text"
                  // SM:必填项
                  required
                  maxLength={13}
                  placeholder="手机号码"
                  //SM:实时接收输入框里的值
                  onChange={(e) =>
                    setUserData((data) => ({
                      ...data,
                      userPhoneNumber: e.target.value,
                    }))
                  }
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
                  placeholder="用户密码"
                  //SM:实时接收输入框里的值
                  onChange={(e) =>
                    setUserData((data) => ({
                      ...data,
                      userPassword: e.target.value,
                    }))
                  }
                />
              </div>
              <button
                type="submit"
                className="button-style rounded-[4px] text-white bg-blue-500 shadow-lg shadow-gray-300"
              >
                L O G I N
              </button>
              <div className="text-sm md:text-[1.25rem] font-bold text-blue-400 space-x-[2rem]">
                <Link to={"/FindPswPage"}>忘记密码</Link>
                <Link to={"/RegisterPage"}>注册账号</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
