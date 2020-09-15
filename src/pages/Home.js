import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";


class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Welcome to Space Squrrels</h2>
        <LoginForm />
        <hr/>
        <RegistrationForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
