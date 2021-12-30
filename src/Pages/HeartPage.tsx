import { useEffect, useState } from "react";
import axios from "axios"; //导入处理JSON请求的工具包

function PopularPage(props: any) {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function getUser() {
      //利用异步方法请求数据
      const evenyUser = await axios(
        "http://jsonplaceholder.typicode.com/users"
      );
      setList(evenyUser.data);
    }
    getUser(); //因为react不支持导出async函数,小方法是再包裹一个函数来内部执行调用
  }, []);
  const userStyle = "inline rounded-full";
  return (
    <>
      <div className="flex flex-col justify-center items-center overflow-y-scroll">
        <div className="text-center">
          <p>🚨以下个人信息均为虚拟信息🚧</p>
        </div>
        <div className="w-screen space-y-5">
          {list.map((user: any) => (
            <div key={user.id}>
              <div className="an-6 flex-col bg-opacity-50 py-5 mx-4 max-w-md sm:mx-auto bg-white border-l-blue-500 border-l-[7px] border-solid rounded-lg shadow-2xl flex justify-center space-x-4">
                <div>
                  <div className="text-2xl pb-3 px-3 font-medium border-gray-800 border-b text-black">
                    <p
                      className={
                        user.id % 2 === 0
                          ? `bg-blue-500 ${userStyle}`
                          : `bg-red-300 ${userStyle}`
                      }
                    >
                      {user.id % 2 === 0 ? "🎅" : "🤶"}
                    </p>
                    <br />
                    {user.name}
                  </div>
                  <p className="pt-4 px-3 text-sm text-gray-800">
                    📮: {user.email}
                    <br />
                    📱: {user.phone}
                    <br />
                    🏡: {user.address.city}
                    <br />
                    🧭: {user.address.zipcode}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PopularPage;
