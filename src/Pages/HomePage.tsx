import axios from "axios";
import { useState } from "react";

const HomePage = () => {
  const [list, setList] = useState([]);

  async function getUser() {
    //利用异步方法请求数据
    const evenyUser = await axios(
      "http://localhost:2546/api/ventroar/userDataApi"
    );
    setList(evenyUser.data);
  }
  // getUser(); //因为react不支持导出async函数,小方法是再包裹一个函数来内部执行调用

  return (
    <>
      <div className="h-[93vh]">
        <h1>标题</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta
          reprehenderit necessitatibus aliquid! Sunt labore repellendus minus
          quas vel sint fugiat doloremque nemo, ut facere, deserunt iure ab
          necessitatibus debitis!
        </p>
        <button className="login-button-style" onClick={getUser}>
          Get Data
        </button>

        {list.map((c: any) => (
          <ul key={c._id}>
            <li>id:{c._id}</li>
            <li>name:{c.userName}</li>
            <li>password:{c.userPassword}</li>
            <li>phone:{c.userPhoneNumber}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default HomePage;
