import React from "react";
import './Profile.css';
import Menu from "../../components/menu/Menu";
import { userIsAuthenticated } from "../../redux/HOCs";

import MessageFeed from "../messageFeed/MessageFeed";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        
        <MessageFeed />
        <h2>Profile</h2>
        
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
