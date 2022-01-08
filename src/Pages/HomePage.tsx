import axios from "axios";
import { useState } from "react";

const HomePage = () => {
  const [list, setList] = useState([]);

  async function getUser() {
    //利用异步方法请求数据
    const evenyUser = await axios(
      "http://101.43.123.50:2546/api/ventroar/userDataApi/"
    );
    setList(evenyUser.data);
  }

  return (
    <>
      <div className="h-[93vh]">
        <h1>标题</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta
          reprehenderit <b className="text-sky-500">necessitatibus</b> aliquid!
          Sunt labore repellendus minus quas vel sint fugiat doloremque nemo, ut
          facere, deserunt iure ab necessitatibus debitis!
        </p>
        <button className="login-button-style" onClick={getUser}>
          Get Data
        </button>

        {list.map((c: any) => (
          <ul className="ml-8 list-disc" key={c._id}>
            <li>id: {c._id}</li>
            <li>name: {c.userName}</li>
            <li>password: {c.userPassword}</li>
            <li>phone: {c.userPhoneNumber}</li>
            <br />
          </ul>
        ))}
      </div>
    </>
  );
};

export default HomePage;
