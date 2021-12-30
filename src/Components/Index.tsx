import { Route, Routes } from "react-router-dom";
import { getUserData } from "../server/userData";
import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import HelpPage from "../Pages/HelpPage";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/LoginPage";
import HeartPage from "../Pages/HeartPage";
import UserPage from "../Pages/UserPage";
import NotFoundPage from "../Pages/NotFoundPage";
import RegisterPage from "../Pages/RegisterPage";
import SuPage from "../Pages/Su";
class Index extends React.Component {
  state = {
    userList: getUserData(),
  };

  render() {
    return (
      <div className="h-screen">
        <header>
          <nav className="h-[7vh]">
            <Nav />
          </nav>
        </header>

        <main>
          <Routes>
            {/* 主页 */}
            <Route
              path="/"
              element={
                <div className="mx-4">
                  <HomePage />
                </div>
              }
            ></Route>
            {/* 心墙页 */}
            <Route path="/HeartPage" element={<HeartPage />}></Route>
            {/* 用户主页 */}
            <Route path="/UserPage" element={<UserPage />}></Route>
            {/* 关于与帮助页 */}
            <Route path="/HelpPage" element={<HelpPage />}></Route>
            {/* 登入页 */}
            <Route
              path="/LoginPage"
              element={
                <div className="flex justify-center items-center h-[90vh]">
                  <Login />
                </div>
              }
            ></Route>
            {/* 注册页 */}
            <Route path="/RegisterPage" element={<RegisterPage />}></Route>
            {/* 404NOTFOUND */}
            <Route path="*" element={<NotFoundPage />}></Route>
            {/* 隐藏页 */}
            <Route path="/Su" element={<SuPage />}></Route>
          </Routes>
        </main>
      </div>
    );
  }
}

export default Index;
