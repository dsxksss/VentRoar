import { Link } from "react-router-dom";
import { UserCircleIcon, LockOpenIcon } from "@heroicons/react/solid";
import { useEffect, useState, useContext } from "react";
import { loginContext } from "./../conText/ByLoginDo";
import { TextBarContext } from "../Components/TextBar";
import cimg from "../img/cImg/loginPage.svg";
import axios from "axios";

const Login = () => {
  let local = window.localStorage;
  const { setToken, token, toLink } = useContext<any>(loginContext);
  const { setTextBar } = useContext<any>(TextBarContext);
  const [userData, setUserData] = useState({
    userPassword: "",
    userPhoneNumber: "",
  });
  useEffect(() => {
    if (token !== "") toLink("/UserPage");
    if (local.getItem("tokenForServer") !== "") {
      tokenPush();
    }
    // console.log(localStorage.getItem("tokenForServer"));
  }, []);
  const trueBarStyle =
    "textBar-style rounded-[4px] bg-green-400 text-white w-[100vw] md:w-[20vw]";
  const falseBarStyle =
    "textBar-style rounded-[4px] bg-red-400 text-white w-[100vw] md:w-[20vw]";

  const tokenPush = async () => {
    await axios
      .post(
        `https://ventroar.xyz:2546/userLoginApi/${local.getItem(
          "tokenForServer"
        )}`
      )
      .then(() => {
        setTimeout(() => {
          setToken(local.getItem("tokenForServer"));
        }, 1200);
        // console.log(res.data);
      })
      .catch((err) => {
        setTextBar({
          isOpen: true,
          MsgStyle: falseBarStyle,
          msg: "登录过期,请重新登录!",
        });
        local.clear();
        return err;
      });
  };
  const push = async () => {
    await axios
      .post("https://ventroar.xyz:2546/userLoginApi/", userData)
      .then((res) => {
        setTextBar({
          isOpen: true,
          MsgStyle: trueBarStyle,
          msg: "登录成功...",
        });
        setToken(res.data.token);
        local.setItem("tokenForServer", res.data.token);
        local.setItem("oldTime", res.data.time);
        console.log(local.getItem("tokenForServer"), local.getItem("oldTime"));
        setTimeout(() => {
          setTextBar((oldData: any) => ({
            ...oldData,
            isOpen: false,
          }));
        }, 1500);
        console.log(res.data);
      })
      .catch((err) => {
        setTextBar({
          isOpen: true,
          MsgStyle: falseBarStyle,
          msg: "登录失败!手机号或密码错误!",
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
