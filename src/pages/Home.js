import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";

import { userIsNotAuthenticated } from "../redux/HOCs";
import DropDown from "../components/dropDown/DropDown";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Welcome to Space Squrrels</h2>
        <LoginForm />
        <DropDown />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
