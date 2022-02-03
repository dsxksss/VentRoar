import Footer from "../Components/Footer";
import { useState } from "react";
import logo from "../img/logo.svg";

const HomePage = () => {
  const [isDark, setDark] = useState<boolean>(false);
  return (
    <div className={`${isDark ? "dark" : " "}`}>
      <div
        className={`h-[95vh] transform duration-200 ease-in-out dark:bg-[#253446]`}
      >
        <div className="pt-20 flex flex-col justify-center items-center space-y-4">
          <img
            className="transform duration-[200ms] ease-in-out dark:bg-[#304053] bg-cover shadow-xl rounded-lg"
            src={logo}
            alt="developerCImg"
          />
          <button
            className="border-2 bg-gray-50 dark:border-gray-100 border-gray-900 rounded-md button-style dark:text-gray-100 text-gray-900 shadow-lg"
            onClick={() => setDark(!isDark)}
          >
            TO Dark
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
