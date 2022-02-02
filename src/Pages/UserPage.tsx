import { useEffect, useContext, useState } from "react";
import { loginContext } from "./../conText/ByLoginDo";
import networkLoginc from "../services/networkLogic";
import getData from "../services/getData";

function UserPage() {
  const { toLink } = useContext<any>(loginContext);
  const [userData, setUserData] = useState<any>([]);

  useEffect(() => {
    //利用token获取数据库用户数据
    getUserData();
    return setUserData([]);
  }, []);

  const getUserData = async () => {
    try {
      await networkLoginc.tokenValidation();
      const { data } = await getData.getUserTextData(networkLoginc.getJWT());
      setUserData(data);
    } catch (err) {
      return toLink("/LoginPage");
    }
  };

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
            networkLoginc.loginOUT();
          }}
        >
          退出登录
        </button>
      </div>
    </>
  );
}

export default UserPage;
