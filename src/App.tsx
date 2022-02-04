import IndexRouters from "./Components/IndexRouters";
import { useContext } from "react";
import { ToDarkContext } from "./conText/ToDark";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { isDark } = useContext<any>(ToDarkContext);

  return (
    <div className={`${isDark ? "dark" : null}`}>
      {/* 已y轴形势滑动关闭通知draggableDirection="y" 
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
      */}
      <ToastContainer
        className={"touch-x"}
        rtl={false} //调换消息栏位置
        closeOnClick={false} //按动关闭
        autoClose={2000} //自动关闭,false为取消自动关闭
        limit={2} //最大同时显示个数
        draggable //是否启动滑动关闭
        draggablePercent={25} //滑动多少可以关闭
        hideProgressBar //隐藏进度条
        closeButton={false} //消息框关闭按钮是否显示
      />
      <IndexRouters />
    </div>
  );
};

export default App;
