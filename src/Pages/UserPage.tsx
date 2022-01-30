import { useEffect, useContext, useState } from "react";
import { loginContext } from "./../conText/ByLoginDo";
import https from "../services/httpServices";

function UserPage() {
  const { setToken, token, toLink } = useContext<any>(loginContext);
  const [userData, setUserData] = useState<any>([]);
  useEffect(() => {
    //利用token获取数据库用户数据
    const getUserData = async () => {
      try {
        const { data } = await https.get(`${https.api.userDataApi}${token}`);
        setUserData(data);
      } catch (err) {
        if (token === "") return toLink("/LoginPage");
      }
    };
    getUserData();
  }, []);

  return (
    <>
      <div className="text-center">
        <p>
          Hi!👋👋👋 <strong>{userData.userName}</strong>{" "}
        </p>
        <p>欢迎来到你的主页!!!</p>
        <button
          className="button-style bg-slate-500 text-white"
          onClick={() => {
            toLink("/LoginPage");
            setToken("");
            window.localStorage.clear();
          }}
        >
          退出登录
        </button>
      </div>
    </>
  );
}

export default UserPage;
