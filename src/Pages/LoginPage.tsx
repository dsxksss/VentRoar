import { Link } from "react-router-dom";
import { UserCircleIcon, LockOpenIcon } from "@heroicons/react/solid";
import { Alert, Button, Snackbar } from "@mui/material";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Joi from "joi";
import { loginContext } from "./../conText/ByLoginDo";
const Login = () => {
  const [open, setOpen] = useState(false);
  const { setToken, token, toLink } = useContext<any>(loginContext);
  const [data, setData] = useState({
    msg: "请输入您的账号密码!",
    userPassword: "",
    userPhoneNumber: "",
    token: "",
  });

  useEffect(() => {
    if (token !== "") toLink("/UserPage");
  }, [open]);

  const push = async () => {
    await axios
      .post("http://101.43.123.50:2546/userLoginApi/", userData)
      .then((res) => {
        setData((data) => ({
          ...data,
          msg: `登录成功,转入用户页面...`,
        }));
        setOpen(true);
        setTimeout(() => {
          setToken(res.data);
        }, 1200);
        console.log(res.data);
      })
      .catch((err) => {
        setData({
          ...data,
          msg: `登录失败,账号或密码错误!`,
        });
        setOpen(true);
        return err;
      });
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

  const userData = {
    userPhoneNumber: data.userPhoneNumber,
    userPassword: data.userPassword,
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    if (data.token !== "") console.log(data.token);
    e.preventDefault();
    if (dataByTrue(userData)) push();
  };

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
  return (
    <>
      <div className="flex justify-center items-center h-[93vh]">
        <div
          id="all"
          style={{ animationDuration: "0.7s" }}
          className="an-4 mt-[-7vh] login-And-Register-PageStyle border-l-blue-500 space-y-4"
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
                  onChange={(e) =>
                    setData((data) => ({
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
                    setData((data) => ({
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
        <Snackbar
          open={open}
          //显示位置vertical:垂直位置,horizontal:水平位置
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          autoHideDuration={2000} //多少秒后关闭
          onClose={handleClick}
          sx={{ mt: 7 }}
          action={action} //其他额外内容
        >
          <Alert
            onClose={handleClick}
            severity={
              data.msg === "登录成功,转入用户页面..." ? "success" : "error"
            }
          >
            {data.msg}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default Login;
