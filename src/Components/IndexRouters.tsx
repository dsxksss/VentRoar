import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import AboutUsPage from "../Pages/AboutUsPage";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/LoginPage";
import HeartPage from "../Pages/HeartPage";
import UserPage from "../Pages/UserPage";
import NotFoundPage from "../Pages/NotFoundPage";
import RegisterPage from "../Pages/RegisterPage";
import ByLoginDo from "../conText/ToLink";
import FindPswPage from "../Pages/FindPswPage";
import ChangeTextPage from "../Pages/ChangeTextPage";

const IndexRouters = () => {
  return (
    <div className="h-screen">
      <header>
        <nav className="h-[6vh]">
          <Nav />
        </nav>
      </header>

      <main>
        <ByLoginDo>
          <Routes>
            {/* 主页 */}
            <Route path="/" element={<HomePage />}></Route>
            {/* 心墙页 */}
            <Route path="/HeartPage" element={<HeartPage />}></Route>
            {/* 用户主页 */}
            <Route path="/UserPage" element={<UserPage />}></Route>
            {/* 修改帖子页 */}
            <Route path="/ChangeTextPage" element={<ChangeTextPage />}></Route>
            {/* 查找密码页 */}
            <Route path="/FindPswPage" element={<FindPswPage />}></Route>
            {/* 关于与帮助页 */}
            <Route path="/AboutUsPage" element={<AboutUsPage />}></Route>
            {/* 登录页 */}
            <Route path="/LoginPage" element={<Login />}></Route>
            {/* 注册页 */}
            <Route path="/RegisterPage" element={<RegisterPage />}></Route>
            {/* 404NOTFOUND */}
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </ByLoginDo>
      </main>
    </div>
  );
};

export default IndexRouters;
