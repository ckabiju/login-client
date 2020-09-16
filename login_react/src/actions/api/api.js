import axios from 'axios'; // you can also use 'fetch' library to call Api

export default {
    user: {
        login: Credentials => 
        //axios.post("/api/auth", {Credentials}).then(res => res.data.user)
         axios.post("http://192.168.1.6:8080/api/auth/login", {Credentials}).then(res => res.data.user),

         signup: UserData => 
         axios.post("http://192.168.1.6:8080/api/auth/signup", {UserData}).then(res => res.data.user)
       
    }
}