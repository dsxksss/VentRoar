import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { loginContext } from "../conText/ByLoginDo";
import { DataByTrue } from "./../utils/DataByTrue";
import { getUserData } from "../server/userData";
const Login = () => {
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
        className="an-4 mt-[-7vh] loginPageStyle space-y-4"
      >
        <div id="title">
          {/* <p className="title-size">WelCome To</p> */}
          <p className="ventroar-size">VentRoar</p>
        </div>
        <div id="input" className="space-y-6 lg:space-y-10">
          <div id="uesrText">
            <input
              className="px-8 sm:px-[3rem] caret-sky-500 lg:px-16 focus:outline-none"
              type="text"
              // SM:必填项
              required
              maxLength={13}
              pattern="^[a-zA-Z][a-zA-Z0-9_]{3,12}$"
              placeholder="账号 4-13位字母数字"
              //SM:实时接收输入框里的值
              onChange={(e) => inputUserName(e.target.value)}
            />
          </div>
          <div id="userPassword">
            <input
              className="px-8 sm:px-[3rem] caret-sky-500 lg:px-16 focus:outline-none"
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
          <div id="inputButton">
            <button
              className="login-button-style"
              onClick={() =>
                setLogin(DataByTrue(userData, userName, userPassword))
              }
            >
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
