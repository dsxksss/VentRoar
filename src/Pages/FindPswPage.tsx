import { useContext, useEffect, useState } from "react";
import { ToLinkContext } from "../conText/ToLink";
import { toast } from "react-toastify";
import networkLoginc from "../services/networkLogic";
import {
  DeviceMobileIcon,
  LockClosedIcon,
  LockOpenIcon,
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
      <div
        style={{ animationDuration: "0.7s" }}
        className="flex flex-col justify-center items-center h-[94vh] duration-200 dark:bg-[#253446]"
      >
        <div
          id="all"
          className="login-And-Register-PageStyle lg:flex-row an-4 border-l-red-500 space-y-5"
        >
          <div id="title">
            <p className="ventroar-size text-red-500">VentRoar</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div id="input" className="space-y-4 lg:space-y-7">
              <div id="uesrPhone" className="registerPage-input">
                <DeviceMobileIcon className="w-5 h-5 mr-1 text-slate-900 dark:text-slate-100" />
                <input
                  className="input-Style"
                  type="text"
                  // SM:必填项
                  required
                  minLength={11}
                  maxLength={11}
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
                <LockClosedIcon className="w-5 h-5 mr-1 text-slate-900 dark:text-slate-100" />
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
                <LockOpenIcon className="w-5 h-5 mr-1 text-slate-900 dark:text-slate-100" />
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
            <div id="inputButton" className="mt-[2rem]">
              <button
                type="submit"
                className="button-style rounded-[4px] bg-red-500 font-bold text-[1rem] text-slate-100 dark:text-slate-900 shadow-sm shadow-gray-400 dark:shadow-gray-700 active:shadow-red-400"
              >
                修 改 密 码
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default FindPswPage;
