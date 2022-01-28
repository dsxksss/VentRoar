import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import AboutUsPage from "../Pages/AboutUsPage";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/LoginPage";
import HeartPage from "../Pages/HeartPage";
import UserPage from "../Pages/UserPage";
import NotFoundPage from "../Pages/NotFoundPage";
import RegisterPage from "../Pages/RegisterPage";
import SuPage from "../Pages/Su";
import ByLoginDo from "../conText/ByLoginDo";
import FindPswPage from "../Pages/FindPswPage";
import TextBar from "./TextBar";

const IndexRouters = () => {
  return (
    <div className="h-screen">
      <header>
        <nav className="h-[7vh] z-[999]">
          <Nav />
        </nav>
      </header>

      <main>
        <ByLoginDo>
          <TextBar>
            <Routes>
              {/* 主页 */}
              <Route path="/" element={<HomePage />}></Route>
              {/* 心墙页 */}
              <Route path="/HeartPage" element={<HeartPage />}></Route>
              {/* 用户主页 */}
              <Route path="/UserPage" element={<UserPage />}></Route>
              {/* 用户主页 */}
              <Route path="/FindPswPage" element={<FindPswPage />}></Route>
              {/* 关于与帮助页 */}
              <Route path="/AboutUsPage" element={<AboutUsPage />}></Route>
              {/* 登录页 */}
              <Route path="/LoginPage" element={<Login />}></Route>
              {/* 注册页 */}
              <Route path="/RegisterPage" element={<RegisterPage />}></Route>
              {/* 404NOTFOUND */}
              <Route path="*" element={<NotFoundPage />}></Route>
              {/* 隐藏页 */}
              <Route path="/Su" element={<SuPage />}></Route>
            </Routes>
          </TextBar>
        </ByLoginDo>
      </main>
    </div>
  );
};

export default IndexRouters;
