import { Link } from "react-router-dom";
import {
  UserIcon,
  LockClosedIcon,
  DeviceMobileIcon,
  KeyIcon,
} from "@heroicons/react/outline";
import { useState, useContext, useEffect } from "react";
import { ToLinkContext } from "../conText/ToLink";
import { toast } from "react-toastify";
import networkLoginc from "../services/networkLogic";

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    userName: "",
    userPassword: "",
    userPhoneNumber: "",
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
      await networkLoginc.createUser(userData);
      toast.promise(
        new Promise((resolve) => setTimeout(resolve, 1000)),
        {
          pending: "注册中...",
          success: "注册成功👌正在跳转到登录页面...",
        },
        {
          autoClose: 1400,
        }
      );
      setTimeout(() => {
        toLink("/loginPage");
      }, 2000);
    } catch (err) {
      toast.error("注册失败!数据库已存在相同手机号", {
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
          className="login-And-Register-PageStyle lg:flex-row an-4 border-l-green-400 space-y-5"
        >
          <div id="title">
            <p className="ventroar-size text-green-400">VentRoar</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div id="input" className="space-y-4 lg:space-y-7">
              <div id="uesrText" className="registerPage-input">
                <UserIcon className="w-5 h-5 mr-1 text-slate-900 dark:text-slate-100" />
                <input
                  className="input-Style"
                  type="text"
                  // SM:必填项
                  required
                  minLength={3}
                  maxLength={8}
                  placeholder="昵称3-8位"
                  //SM:实时接收输入框里的值
                  onChange={(e) =>
                    setUserData((data) => ({
                      ...data,
                      userName: e.target.value,
                    }))
                  }
                />
              </div>
              <div id="uesrPhone" className="registerPage-input">
                <DeviceMobileIcon className="w-5 h-5 mr-1 text-slate-900 dark:text-slate-100" />
                <input
                  className="input-Style"
                  type="text"
                  // SM:必填项
                  required
                  minLength={11}
                  maxLength={11}
                  placeholder="11位手机号"
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
                  placeholder="密码8-16位"
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
                <KeyIcon className="w-5 h-5 mr-1 text-slate-900 dark:text-slate-100" />
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
              <div id="inputButton">
                <button
                  type="submit"
                  className="button-style rounded-[4px] bg-green-400 font-bold text-[1rem] text-slate-100 dark:text-slate-900 shadow-sm shadow-gray-400 dark:shadow-gray-700 active:shadow-green-400"
                >
                  注 册
                </button>
              </div>
              <div className="text-sm md:text-xl font-bold text-green-400">
                <Link to={"/LoginPage"}>已有账号? 登入VentRoar</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
