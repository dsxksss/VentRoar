import { Link } from "react-router-dom";
import Joi from "joi";
import {
  UserIcon,
  LockClosedIcon,
  DeviceMobileIcon,
} from "@heroicons/react/outline";
import { RefreshIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Alert, Button, Snackbar } from "@mui/material";
import { loginContext } from "./../conText/ByLoginDo";

const RegisterPage = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    msg: "请填写完您的注册信息!",
    userName: "",
    userPassword: "",
    userPhoneNumber: "",
    token: "",
  });
  const { toLink } = useContext<any>(loginContext);
  useEffect(() => {}, [open]);
  const push = async () => {
    await axios
      .post("http://101.43.123.50:2546/userCreateApi/", userData)
      .then((res) => {
        setData((data) => ({
          ...data,
          msg: `注册成功,正在跳转登录界面...`,
        }));
        setOpen(true);
        setTimeout(() => {
          console.log(res.data);
          toLink("/loginPage");
        }, 1500);
      })
      .catch((err) => {
        setData((data) => ({
          ...data,
          msg: `注册失败,请检查格式如已注册请勿重复注册!`,
        }));
        setOpen(true);
        return err;
      });
  };

  let userData = {
    userName: data.userName,
    userPassword: data.userPassword,
    userPhoneNumber: data.userPhoneNumber,
  };

  // FUNCTION: 封装的数据验证函数;
  const dataByTrue = (data: any) => {
    //创建前端传来的标准数据模版格式
    const schema = Joi.object({
      userName: Joi.string().min(5).max(50).required(),
      userPassword: Joi.string().min(8).max(1024).required(),
      userPhoneNumber: Joi.string().min(11).required(),
    });
    //返回验证结果
    return schema.validate(data);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
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
                  maxLength={8}
                  pattern="^[a-zA-Z][a-zA-Z0-9_]{4,12}$"
                  placeholder="账号名5-11位英文开头"
                  //SM:实时接收输入框里的值
                  onChange={(e) =>
                    setData((data) => ({
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
                  pattern="(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$"
                  placeholder="用来注册的11位手机号"
                  //SM:实时接收输入框里的值
                  onChange={(e) =>
                    setData((data) => ({
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
                  maxLength={14}
                  pattern="^[a-zA-Z]\w{5,17}$"
                  placeholder="密码6-18位字母开头"
                  //SM:实时接收输入框里的值
                  onChange={(e) =>
                    setData((data) => ({
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
            severity={
              data.msg === "注册成功,正在跳转登录界面..." ? "success" : "error"
            }
          >
            {data.msg}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default RegisterPage;
