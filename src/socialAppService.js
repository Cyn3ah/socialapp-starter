import axios from 'axios';

class socialAppService {

    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
    this.url = url;
    this.client = client;
    }

    getRecentMessage() {
        return this.client.get(this.url + "/messages?limit=20")
        .then(responed => {
            console.log(responed)
        })
    }

    registerUser(userData) {
        return this.client.post(this.url + "/users", userData);
    }
    
    getUsers() {
        return this.client.get(this.url + "/users");
    }
}

export default socialAppService