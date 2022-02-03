import { useEffect, useContext, useState } from "react";
import { ToLinkContext } from "../conText/ToLink";
import networkLoginc from "../services/networkLogic";
import getData from "../services/getData";

function UserPage() {
  const { toLink } = useContext<any>(ToLinkContext);
  const [userData, setUserData] = useState<any>([]);

  useEffect(() => {
    //利用token获取数据库用户数据
    getUserData();
    return setUserData([]);
  }, []);

  const getUserData = async () => {
    try {
      await networkLoginc.tokenValidation();
      const data = await getData.getUserTextData(networkLoginc.getJWT());
      setUserData(data);
    } catch (err) {
      return toLink("/LoginPage");
    }
  };

  return (
    <>
      <div className="text-center h-[94vh] flex flex-col justify-center items-center">
        <div className="h-[60vh]">
          <div>
            Hi!👋👋👋 <strong>{userData.userName}</strong>{" "}
          </div>
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
      </div>
    </>
  );
}

export default UserPage;
