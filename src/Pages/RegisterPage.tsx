import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { loginContext } from "../conText/ByLoginDo";
import { DataByTrue } from "./../utils/DataByTrue";
import { getUserData } from "../server/userData";
import {
  UserIcon,
  LockClosedIcon,
  DeviceMobileIcon,
} from "@heroicons/react/outline";
import { RefreshIcon } from "@heroicons/react/solid";

const RegisterPage = () => {
  let userData: any[] = [];
  //HOOK:
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  useEffect(() => {
    userData = getUserData();
  }, [userData]);

  //FUNCTION:
  const inputUserName = (e: string) => {
    setUserName(e);
  };
  const inputUserPassword = (e: string) => {
    setUserPassword(e);
  };
  const { setLogin } = useContext<any>(loginContext);
  return (
    <>
      <div
        id="all"
        style={{ animationDuration: "0.7s" }}
        className="an-4 mt-[-7vh] login-And-Register-PageStyle border-l-green-400 space-y-5"
      >
        <div id="title">
          <p className="ventroar-size text-green-400">VentRoar</p>
        </div>
        <div id="input" className="space-y-4 lg:space-y-7">
          <div id="uesrText" className="registerPage-input">
            <UserIcon className="w-5 h-5 mr-1" />
            <input
              className="input-Style"
              type="text"
              // SM:必填项
              required
              maxLength={13}
              pattern="^[a-zA-Z][a-zA-Z0-9_]{3,12}$"
              placeholder="要创建的账号昵称"
              //SM:实时接收输入框里的值
              onChange={(e) => inputUserName(e.target.value)}
            />
          </div>
          <div id="uesrPhone" className="registerPage-input">
            <DeviceMobileIcon className="w-5 h-5 mr-1" />
            <input
              className="input-Style"
              type="text"
              // SM:必填项
              required
              maxLength={13}
              pattern="^[a-zA-Z][a-zA-Z0-9_]{3,12}$"
              placeholder="用来注册的11位手机号"
              //SM:实时接收输入框里的值
              onChange={(e) => inputUserName(e.target.value)}
            />
          </div>

          <div id="userPassword1" className="registerPage-input">
            <LockClosedIcon className="w-5 h-5 mr-1" />
            <input
              className="input-Style"
              type="password"
              // SM:必填项
              required
              maxLength={18}
              pattern="^[a-zA-Z]\w{5,17}$"
              placeholder="密码 6-18位字母数字"
              //SM:实时接收输入框里的值
              onChange={(e) => inputUserPassword(e.target.value)}
            />
          </div>
          <div id="userPassword2" className="registerPage-input">
            <RefreshIcon className="w-5 h-5 mr-1" />
            <input
              className="input-Style"
              type="password"
              // SM:必填项
              required
              maxLength={18}
              pattern="^[a-zA-Z]\w{5,17}$"
              placeholder="请重复输入上述密码"
              //SM:实时接收输入框里的值
              onChange={(e) => inputUserPassword(e.target.value)}
            />
          </div>

          <div id="inputButton">
            <button
              className="register-button-style"
              onClick={() =>
                setLogin(DataByTrue(userData, userName, userPassword))
              }
            >
              注 册
            </button>
          </div>
          <div className="text-xs">
            <Link to={"/LoginPage"}>已有账号? 登入VentRoar</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
