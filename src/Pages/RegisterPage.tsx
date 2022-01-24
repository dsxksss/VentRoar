import { Link } from "react-router-dom";
import {
  UserIcon,
  LockClosedIcon,
  DeviceMobileIcon,
} from "@heroicons/react/outline";
import { RefreshIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useState, useContext } from "react";
import { loginContext } from "./../conText/ByLoginDo";
import { TextBarContext } from "../Components/TextBar";

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    userName: "",
    userPassword: "",
    userPhoneNumber: "",
  });
  const { toLink } = useContext<any>(loginContext);
  const { setTextBar } = useContext<any>(TextBarContext);
  const trueBarStyle =
    "textBar-style rounded-[4px] bg-green-400 text-white w-[100vw] md:w-[20vw]";
  const falseBarStyle =
    "textBar-style rounded-[4px] bg-red-400 text-white w-[100vw] md:w-[20vw]";
  const push = async () => {
    await axios
      .post("https://101.43.123.50:2546/userCreateApi/", userData)
      .then((res) => {
        setTextBar({
          isOpen: true,
          MsgStyle: trueBarStyle,
          msg: "注册成功,正在转入登录页面...",
        }),
          setTimeout(() => {
            toLink("/loginPage");
          }, 1500);
        setTimeout(() => {
          setTextBar((oldData: any) => ({
            ...oldData,
            isOpen: false,
          }));
        }, 3000);
      })
      .catch((err) => {
        setTextBar({
          isOpen: true,
          MsgStyle: falseBarStyle,
          msg: "注册失败! 重复注册 或 数据库已存在相同手机号 或 网络繁忙!",
        }),
          setTimeout(() => {
            setTextBar((oldData: any) => ({
              ...oldData,
              isOpen: false,
            }));
          }, 3000);
        return err;
      });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    push();
  };

  return (
    <>
      <div className="flex justify-center items-center h-[93vh]">
        <div
          id="all"
          style={{ animationDuration: "0.7s" }}
          className="an-4 mt-[-7vh] login-And-Register-PageStyle border-l-green-400 space-y-5"
        >
          <div id="title">
            <p className="ventroar-size text-green-400">VentRoar</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div id="input" className="space-y-4 lg:space-y-7">
              <div id="uesrText" className="registerPage-input">
                <UserIcon className="w-5 h-5 mr-1" />
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
                <DeviceMobileIcon className="w-5 h-5 mr-1" />
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
                <LockClosedIcon className="w-5 h-5 mr-1" />
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
                <RefreshIcon className="w-5 h-5 mr-1" />
                <input
                  className="input-Style"
                  type="password"
                  // SM:必填项
                  required
                  pattern="^[a-zA-Z]\w{5,17}$"
                  placeholder="输入验证码:暂未开发"
                  readOnly
                />
              </div>
              <div id="inputButton">
                <button
                  type="submit"
                  className="button-style rounded-[4px] bg-green-400 text-white shadow-sm shadow-gray-400 active:shadow-green-400"
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
