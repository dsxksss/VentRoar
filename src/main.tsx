//---------------------v0.2.5-------------------------
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ByDarkDo from "./conText/ToDark";

ReactDOM.render(
  <ByDarkDo>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ByDarkDo>,
  document.getElementById("root")
);
