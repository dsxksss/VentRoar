import { Link } from "react-router-dom";
import {
  UserIcon,
  LockClosedIcon,
  DeviceMobileIcon,
} from "@heroicons/react/outline";
import { RefreshIcon } from "@heroicons/react/solid";
import { useState, useContext } from "react";
import { loginContext } from "./../conText/ByLoginDo";
import cimg from "../img/cImg/registerPage.svg";
import https from "../services/httpServices";
import { toast } from "react-toastify";
import CloseButton from "../Components/CloseButton";

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    userName: "",
    userPassword: "",
    userPhoneNumber: "",
  });
  const { toLink } = useContext<any>(loginContext);

  //POST
  const push = async () => {
    try {
      await https.post(`${https.api.userCreateApi}`, userData);

      toast.promise(
        new Promise((resolve) => setTimeout(resolve, 1000)),
        {
          pending: "注册中...",
          success: "注 册 成 功 👌",
        },
        {
          autoClose: 1000,
        }
      );

      setTimeout(() => {
        toLink("/loginPage");
      }, 1500);
    } catch (err) {
      toast.error("注册失败!数据库已存在相同手机号或网络繁忙!", {
        autoClose: false,
        closeButton: CloseButton,
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
        className="flex flex-col justify-center items-center h-[93vh] an-4"
      >
        <div className="sm:hidden bg-cover mt-[-22vh] w-[92vw]">
          <img src={cimg} alt="Graduation" />
        </div>
        <div
          id="all"
          className="login-And-Register-PageStyle lg:flex-row border-l-green-400 space-y-5"
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
