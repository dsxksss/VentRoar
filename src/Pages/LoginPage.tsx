import { Link } from "react-router-dom";
import { DeviceMobileIcon, LockOpenIcon } from "@heroicons/react/outline";
import { useEffect, useState, useContext } from "react";
import { ToLinkContext } from "../conText/ToLink";
import { toast, Flip } from "react-toastify";
import CloseButton from "./../Components/CloseButton";
import networkLoginc from "../services/networkLogic";
const Login = () => {
  const { toLink } = useContext<any>(ToLinkContext);
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
      await networkLoginc.tokenValidation();
      toLink("/UserPage");
    } catch (err) {
      toast.warning("登录过期,请重新登录!", {
        autoClose: 6000,
        toastId: "登录过期",
        closeButton: CloseButton,
        bodyClassName: "font-bold text-yellow-400 text-md",
      });
    }
  };

  const push = async () => {
    try {
      await networkLoginc.loginIN(userData);
      toast.success("登录成功...", {
        autoClose: 1500,
        toastId: "登录成功",
        bodyClassName: "font-bold text-center text-gary-900",
      });
      setTimeout(() => {
        toLink("/UserPage");
      }, 1500);
    } catch (err) {
      toast.error("登录失败,手机号或密码错误!", {
        autoClose: 1500,
        toastId: "登录失败",
        transition: Flip,
        bodyClassName: "font-bold text-red-500",
      });
      networkLoginc.loginOUT();
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    push();
  };

  return (
    <>
      <div className="flex h-[94vh] flex-col items-center justify-center duration-200 dark:bg-[#253446]">
        <div
          id="all"
          style={{ animationDuration: "0.7s" }}
          className="an-4 login-And-Register-PageStyle space-y-4 border-l-blue-500 lg:flex-row"
        >
          <div id="title">
            <p className="ventroar-size text-blue-500 dark:text-blue-400">
              VentRoar
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center space-y-6 lg:space-y-8">
              <div id="uesrText" className="loginPage-input">
                <DeviceMobileIcon className="mr-1 h-5 w-5 dark:text-slate-50" />
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
                <LockOpenIcon className="mr-1 h-5 w-5 dark:text-slate-50" />
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
                className="button-style rounded-[4px] bg-blue-500 text-white shadow-sm shadow-gray-400 dark:shadow-gray-800"
              >
                L O G I N
              </button>
              <div className="space-x-[2rem] text-sm font-bold text-blue-400 md:text-[1.25rem]">
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
