import { useContext, useEffect, useState } from "react";
import { ToLinkContext } from "../conText/ToLink";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import networkLoginc from "../services/networkLogic";
import {
  DeviceMobileIcon,
  LockClosedIcon,
  KeyIcon,
} from "@heroicons/react/outline";

const FindPswPage = () => {
  const [userData, setUserData] = useState({
    userPhoneNumber: "",
    userPassword: "",
    userKey: "",
  });
  const { toLink } = useContext<any>(ToLinkContext);

  useEffect(() => {
    tokenPush();
    return;
    // console.log(localStorage.getItem("tokenForServer"));
  }, [toLink]);

  const tokenPush = async () => {
    try {
      await networkLoginc.tokenValidation();
      toLink("/UserPage");
    } catch (err) {}
  };

  //POST
  const push = async () => {
    try {
      await networkLoginc.changeUserPassword(userData);
      toast.promise(
        new Promise((resolve) => setTimeout(resolve, 1000)),
        {
          pending: "修改密码中...",
          success: "修 改 成 功 👌正在跳转到登录页面...",
        },
        {
          autoClose: 1400,
        }
      );
      setTimeout(() => {
        toLink("/loginPage");
      }, 2000);
    } catch (err) {
      toast.error("修改密码失败!", {
        autoClose: 3000,
        hideProgressBar: false,
        toastId: "注册失败",
      });
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
          className="login-And-Register-PageStyle an-4 space-y-5 border-l-red-500 lg:flex-row"
        >
          <div id="title">
            <p className="ventroar-size text-red-500">VentRoar</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div id="input" className="space-y-4 lg:space-y-7">
              <div id="uesrPhone" className="registerPage-input">
                <DeviceMobileIcon className="mr-1 h-5 w-5 text-slate-900 dark:text-slate-100" />
                <input
                  className="input-Style"
                  type="text"
                  // SM:必填项
                  required
                  minLength={11}
                  maxLength={11}
                  pattern="^1[3456789]\d{9}$"
                  placeholder="要找回的手机号"
                  //SM:实时接收输入框里的值
                  onChange={(e) =>
                    setUserData((data) => ({
                      ...data,
                      userPhoneNumber: e.target.value,
                    }))
                  }
                />
              </div>
              <div id="userPassword1" className="registerPage-input">
                <LockClosedIcon className="mr-1 h-5 w-5 text-slate-900 dark:text-slate-100" />
                <input
                  className="input-Style"
                  type="password"
                  // SM:必填项
                  required
                  minLength={8}
                  maxLength={16}
                  placeholder="新密码8-16位"
                  //SM:实时接收输入框里的值
                  onChange={(e) =>
                    setUserData((data) => ({
                      ...data,
                      userPassword: e.target.value,
                    }))
                  }
                />
              </div>
              <div id="userPassword2" className="registerPage-input">
                <KeyIcon className="mr-1 h-5 w-5 text-slate-900 dark:text-slate-100" />
                <input
                  className="input-Style"
                  type="password"
                  // SM:必填项
                  required
                  minLength={4}
                  maxLength={8}
                  placeholder="密钥4-8位(用于找回密码)"
                  //SM:实时接收输入框里的值
                  onChange={(e) =>
                    setUserData((data) => ({
                      ...data,
                      userKey: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div id="inputButton" className="mt-[1.2rem]">
              <button
                type="submit"
                className="button-style rounded-[4px] bg-red-500 text-[1rem] font-bold text-slate-100 shadow-sm shadow-gray-400 active:shadow-red-400 dark:text-slate-900 dark:shadow-gray-700"
              >
                修 改 密 码
              </button>
            </div>
            <div className="mt-[1.3rem] space-x-[2rem] text-sm font-bold text-red-500 sm:mt-[1.5rem] md:text-[1.25rem]">
              <Link to={"/LoginPage"}>登录账号</Link>
              <Link to={"/RegisterPage"}>注册账号</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default FindPswPage;
