
import React from 'react';
import { userIsAuthenticated } from "../../redux/HOCs";

// import Message from "../../components/message/Message1";
import CommentForm from "../../components/commentForm/CommentForm"
import Menu from "../../components/menu/Menu";
import FootNavBar from "../../components/footNavBar/FootNavBar";

import './About.css';

class About extends React.Component {

    render() {
        return (
            <div className="About">

                <Menu isAuthenticated={this.props.isAuthenticated} />
                <h1>About the Universe (of Squirrels)</h1>

                <CommentForm />
                <FootNavBar isAuthenticated={this.props.isAuthenticated} />
            </div>
        )
    }

}

export default userIsAuthenticated(About);
