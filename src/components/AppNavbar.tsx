import { Alignment, Button, Navbar } from "@blueprintjs/core";
import css from "./AppNavbar.module.scss";
import { useNavigate } from "react-router-dom";
import { ROOT_PATH } from "../constants/constants";

export const AppNavbar = () => {
  const navigate = useNavigate();
  return (
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
  );
};
