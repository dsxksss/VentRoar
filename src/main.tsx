//---------------------v0.2.3-------------------------
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
ReactDOM.render(
  <BrowserRouter>
    {/* 已y轴形势滑动关闭通知draggableDirection="y" */}
    <ToastContainer
      closeOnClick={false} //按动关闭
      autoClose={2000} //自动关闭,false为取消自动关闭
      limit={2} //最大同时显示个数
      draggable //是否启动滑动关闭
      hideProgressBar={false} //隐藏进度条
      closeButton={false} //消息框关闭按钮是否显示
    />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
