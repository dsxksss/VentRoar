//---------------------v0.2.3-------------------------
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ByDarkDo from "./conText/ToDark";

ReactDOM.render(
  //toast网络请求例子,参1:api请求,参2:设置三种状态显示的msg,参3:toast配置
  // toast.promise(
  //   new Promise((resolve) => setTimeout(resolve, 3000)),
  //   {
  //     pending: "发送中...",
  //     success: "发送成功 👌",
  //     error: "发送失败 网络繁忙 🤯",
  //   },
  //   {
  //     autoClose: 1000,
  //   }
  // );
  <ByDarkDo>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ByDarkDo>,
  document.getElementById("root")
);
