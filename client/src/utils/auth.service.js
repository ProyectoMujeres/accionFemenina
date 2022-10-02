import axios from 'axios';

export const authService = {
   login(user){
    console.log(process.env.REACT_APP_API_URL+"/login")
      return axios.post(process.env.REACT_APP_API_URL+"/login", user);
   },

   register(user){
      console.log(process.env.REACT_APP_API_URL+"/users")
      return axios.post(process.env.REACT_APP_API_URL+"/users", user);
   },
}
