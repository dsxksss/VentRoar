import Footer from "../Components/Footer";
import logo from "../img/logo.svg";

const HomePage = () => {
  return (
    <>
      <div
        className={`h-[94vh] transform duration-200 ease-in-out dark:bg-[#253446]`}
      >
        <div className="pt-20 flex flex-col justify-center items-center space-y-4">
          <img
            className="transform duration-[200ms] ease-in-out dark:bg-[#304053] bg-cover shadow-xl rounded-lg"
            src={logo}
            alt="developerCImg"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
