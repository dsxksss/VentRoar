import { Link } from "react-router-dom";

import {
  UserIcon,
  LockClosedIcon,
  DeviceMobileIcon,
} from "@heroicons/react/outline";
import { RefreshIcon } from "@heroicons/react/solid";
import axios from "axios";

const RegisterPage = () => {
  const push = async () => {
    await axios
      .post("http://101.43.123.50:2546/userCreateApi/", userData)
      .then((res) => {
        alert(`注册成功`);
        console.log(res.data);
      })
      .catch((err) => {
        alert(`注册失败,提交格式有误或已存在相同手机号！！！`);
        return err;
      });
  };

  let userData = {
    userName: "",
    userPassword: "",
    userPhoneNumber: 0,
  };
  // useEffect(() => {
  //   console.log(userDataForm);
  // }, [userDataForm]);

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
              maxLength={8}
              pattern="^[a-zA-Z][a-zA-Z0-9_]{3,12}$"
              placeholder="要创建的账号昵称"
              //SM:实时接收输入框里的值
              onChange={(e) => (userData.userName = e.target.value)}
            />
          </div>
          <div id="uesrPhone" className="registerPage-input">
            <DeviceMobileIcon className="w-5 h-5 mr-1" />
            <input
              className="input-Style"
              type="text"
              // SM:必填项
              required
              maxLength={11}
              pattern="^[a-zA-Z][a-zA-Z0-9_]{3,12}$"
              placeholder="用来注册的11位手机号"
              //SM:实时接收输入框里的值
              onChange={(e) =>
                (userData.userPhoneNumber = parseInt(e.target.value))
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
              maxLength={14}
              pattern="^[a-zA-Z]\w{5,17}$"
              placeholder="密码 6-18位字母数字"
              //SM:实时接收输入框里的值
              onChange={(e) => (userData.userPassword = e.target.value)}
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
              placeholder="输入验证码(暂未开发)"
              readOnly
            />
          </div>

          <div id="inputButton">
            <button
              className="button-style bg-green-400 text-white shadow-lg shadow-green-400/50"
              onClick={push}
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
