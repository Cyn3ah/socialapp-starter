import axios from 'axios';
import { store } from "./redux"

class socialAppService {

    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
    this.url = url;
    this.client = client;
    }

    getLoginData(){
        return store.getState().auth.login.result
    }

    getUsername () {
     const loginData = JSON.parse(localStorage.getItem("login"))
     const { username } = loginData.result
     
     return username
    }
    getToken () {
        
        const { token } =  store.getState().auth.login.result
        return token
        
    }
  
    getRecentMessage() {
        return this.client
        .get(this.url + "/messages?limit=20")
        .then(responed => {
            return responed.data.messages
        })
    }

   postLike(messageId) {
       const requestBody = { messageId}
       const config = {
           headers: {
               Authorization: `Bearer ${this.getToken()}`
           }
       }
     return this.client
       .post(this.url + "/likes", requestBody, config)
       .then(response => response.data.like)
       
   }



    registerUser(userData) {
        return this.client.post(this.url + "/users", userData);
    }
    
    getUsers() {
        return this.client.get(this.url + "/users");
    }
}

export default socialAppService;