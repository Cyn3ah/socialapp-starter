import React from "react";
import dataService from "../../socialAppService";

class Message extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likeCount: this.props.likes.length,

        }
        this.client = new dataService()
    }

    handleLike = () => {
        const loggedInUsername = this.client.getUsername()
        if (this.props.likes.some(likeObject => likeObject.username === loggedInUsername))
            return
        this.client.postLike(this.props.id)
            .then(like => {
                this.setState(latestState => ({ likeCount: latestState.likeCount + 1 }))
            })
    }
    render() {
        return (
            <div>
                <li className="Message">
                    At {this.props.createdAt}, {this.props.username} posted:
                <br />
                    {this.props.text}
                    <div className="like-count">
                        Likes: {this.state.likeCount}
                    </div>
                    <button onClick={this.handleLike}><span role="img" aria-label="like">👍</span></button>
                </li>
            </div>
        )
    }
}





export default Message;