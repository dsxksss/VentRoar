//---------------------v0.2.3-------------------------
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
ReactDOM.render(
  <BrowserRouter>
    <ToastContainer autoClose={2000} />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
