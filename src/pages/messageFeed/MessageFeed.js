
import React from "react";
import Menu from "../../components/menu/Menu";
import BackendService from "../../socialAppService";
import Message from "../message/message";

/* import { Menu } from "semantic-ui-react"; */

class MessageFeed extends React.Component {
    state = 
    { messages: [] } 
    


    componentDidMount() {
        new BackendService().getRecentMessage()
            .then(messages => {
                this.setState({ messages })
            })
    }



    render() {
        if (this.state.messages.length === 0) {
            return (<div className="MessageFeed">
                
                <h3>MessageFeed</h3>
                <h1>Loading</h1>
            </div>
            )
        }
        return (<div className="MessageFeed">
            <h3>MessageFeed</h3>
            <ul>
                <Message {...this.state.messages[0]} />
            </ul>
           </div>
        )

    }
}

export default MessageFeed;