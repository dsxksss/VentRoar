import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { loginContext } from "./../conText/ByLoginDo";

function UserPage() {
  const { token, toLink } = useContext<any>(loginContext);
  const [userData, setUserData] = useState<any>([]);
  useEffect(() => {
    if (token === "" || token === undefined) return toLink("/");
    //利用token获取数据库用户数据
    const getUserData = async () => {
      await axios
        .get(`http://101.43.123.50:2546/userDataApi/${token}`)
        .then((res) => {
          setUserData(res.data);
        })
        .catch(() => {
          toLink("/");
        });
    };
    getUserData();
  }, [userData]);

  return (
    <>
      {userData !== [] ? (
        <div className="text-center">
          <p>
            Hi!👋👋👋 <strong>{userData.userName}</strong>{" "}
          </p>
          <p>欢迎来到你的主页!!!</p>
        </div>
      ) : (
        <div>"读取用户数据发生错误"</div>
      )}
    </>
  );
}

export default UserPage;
