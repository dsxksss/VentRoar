import { Link } from "react-router-dom";
import { UserCircleIcon, LockOpenIcon } from "@heroicons/react/solid";
import { Alert, Button, Snackbar } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Joi from "joi";
const Login = () => {
  const push = async () => {
    await axios
      .post("http://101.43.123.50:2546/userLoginApi/", loginData)
      .then((res) => {
        setMsg(`登录成功`);
        setOpen(true);
        console.log(res.data);
      })
      .catch((err) => {
        setMsg(`登录失败,账号或密码错误!!!`);
        setOpen(true);
        return err;
      });
  };

  let loginData = {
    userPassword: "",
    userPhoneNumber: "",
  };

  // FUNCTION: 封装的数据验证函数;
  const dataByTrue = (data: any) => {
    //创建前端传来的标准数据模版格式
    const schema = Joi.object({
      userPhoneNumber: Joi.string().min(11).required(),
      userPassword: Joi.string().min(8).max(1024).required(),
    });
    //返回验证结果
    return schema.validate(data);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (dataByTrue(loginData)) push();
  };
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClick}>
        关闭
      </Button>
    </>
  );
  const [msg, setMsg] = useState("请输入您的账号密码!");
  return (
    <>
      <div
        id="all"
        style={{ animationDuration: "0.7s" }}
        className="an-4 mt-[-7vh] login-And-Register-PageStyle border-l-blue-500/90 space-y-4"
      >
        <div id="title">
          {/* <p className="title-size">WelCome To</p> */}
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
                onChange={(e) => (loginData.userPhoneNumber = e.target.value)}
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
                onChange={(e) => (loginData.userPassword = e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="button-style text-white bg-blue-500/90 shadow-lg shadow-gray-300"
            >
              l o g i n
            </button>
            <div className="text-sm md:text-[1.25rem] font-bold text-blue-400 space-x-[2rem]">
              <Link to={"/FindPswPage"}>忘记密码</Link>
              <Link to={"/RegisterPage"}>注册账号</Link>
            </div>
          </div>
        </form>
      </div>
      <Snackbar
        open={open}
        //显示位置vertical:垂直位置,horizontal:水平位置
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={6000} //多少秒后关闭
        onClose={handleClick}
        sx={{ mt: 7 }}
        action={action} //其他额外内容
      >
        <Alert
          onClose={handleClick}
          severity={msg === "登录成功" ? "success" : "error"}
        >
          {msg}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Login;
