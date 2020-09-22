import React from "react";
import { socialAppService } from "../../socialAppService";


class Message extends React.Component {
    constructor(props){
        super(props)
        this.state = { LikeCount: this.props.likes.length }
    }
    


        handelLike = () => {
            
            const socialAppService = new socialAppService()
            const username = socialAppService().getUsername()
            if (this.props.likes.some(like => like.username === username )) 
            return
           socialAppService
           .postlike(this.props.id)
           .then(like => (like))
           this.setState(latestState => ({ likeCount: latestState.likeCount +1 }))
        }
    
    

    render(){
        return(
        <li className="Message">At {this.props.createAt}, {this.props.username} postrd:
        <br />
        {this.props.text}
        <div className="like-count">
            Likes: {this.props.likes.length}
        </div>
        <button onClick={this.handleLike}><span role="img" aria-label="like">Like</span></button>
        </li>
        )
    }
}


export default Message;