import { Alignment, Button, Classes, Divider, Navbar } from "@blueprintjs/core";
import css from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ROOT_PATH } from "./constants/constants";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

function App() {
  console.log(Classes.DIVIDER);
  const navigate = useNavigate();
  return (
    <div className={css.AppContainer}>
      <Navbar className={css.Navbar} fixedToTop={true}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Idmatt GameDev</Navbar.Heading>
          <Navbar.Divider />
          <Button
            icon="home"
            text="Home"
            onClick={() => navigate(ROOT_PATH + "")}
          />
          <Navbar.Divider />
          <Button
            icon="person"
            text="About"
            onClick={() => navigate(ROOT_PATH + "/About")}
          />
        </Navbar.Group>
      </Navbar>
      <Routes>
        <Route path={ROOT_PATH + "/"} element={<Home></Home>} />
        <Route path={ROOT_PATH + "/About"} element={<About></About>} />
      </Routes>
    </div>
  );
}

export default App;
