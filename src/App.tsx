import css from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import { ROOT_PATH } from "./constants/constants";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { AppNavbar } from "./components/AppNavbar";

function App() {
  return (
    <div className={css.AppContainer}>
      #<AppNavbar></AppNavbar>
      <Routes>
        <Route path={ROOT_PATH + "/"} element={<Home></Home>} />
        <Route path={ROOT_PATH + "/About"} element={<About></About>} />
      </Routes>
    </div>
  );
}

export default App;
