import axios from "axios";
import { useState } from "react";
import Footer from "../Components/Footer";
const HomePage = () => {
  const [list, setList] = useState([]);

  async function getUser() {
    //利用异步方法请求数据
    const evenyUser = await axios("http://101.43.123.50:2546/userDataApi/");
    setList(evenyUser.data);
  }
  let userCout = 0;

  return (
    <>
      <div className="h-[93vh]">
        <h1 className="text-[2.3rem]">网站介绍:</h1>
        <p className="text-[1rem] indent-4">
          倾诉最近遇到的不开心的事情，发泄到这上面，此网站用匿名的方式可以和别人交流倾诉最近遇到的不开心
        </p>
        <hr />
        <p
          className="
        text-center text-[1.2rem] font-bold text-red-600"
        >
          网站还在火速开发中🚀🚀🚀
          <br />
          版本V:0.2.4
        </p>
        <hr />

        <p>
          待开发🚧 :
          <br />
          <b className="text-yellow-400">
            登入和注册的后端逻辑、网站主页样式、前后端数据库链接、帮助页面、
            Heart页面样式、Heart页面交互优化、用户主页样式及后台逻辑、优化页面交互、优化交互动画等......
          </b>
        </p>
        <br />
        <p>
          已完成✅ :
          <br />
          <b className="text-green-500">
            登入页面样式、注册页面样式、从数据库获取数据
          </b>
        </p>
        <br />
        <p>
          不用理会以下内容，还未完成...... reprehenderit
          <b className="text-sky-500">necessitatibus</b> aliquid! Sunt labore
          repellendus minus quas vel sint fugiat{" "}
          <b
            className="text-sky-500
          "
          >
            doloremque
          </b>
          nemo, ut facere, deserunt iure ab necessitatibus debitis!
        </p>
        <button
          className="button-style bg-green-400 text-white shadow-lg shadow-green-400/50"
          onClick={getUser}
        >
          Get Data
        </button>
      </div>
      <div className="text-left">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              {list.map((c: any) => (
                <table
                  key={c._id}
                  className="table-fixed min-w-full divide-y divide-gray-200"
                >
                  <thead className="bg-gray-200/50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
                      >
                        Number
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
                      >
                        UserName
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
                      >
                        UserPhoneNumber
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
                      >
                        UserPassword
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-50 divide-y text-blue-500 divide-gray-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {(userCout += 1)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {c.userName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {c.userPhoneNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {c.userPassword}
                    </td>
                  </tbody>
                </table>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
