import axios from "axios";

export const userService = {
    async getPostByUser(){
        const result = await axios.get(`${process.env.REACT_APP_API_URL}/users/${localStorage.getItem('user_id')}`, { headers: { authorization: `Bearer ${localStorage.getItem("user")}` }});
        console.log(result.data)
        return result.data;
    },

    async updateUser(){
        const result = await axios.put(`${process.env.REACT_APP_API_URL}/users/${localStorage.getItem('user_id')}`, { headers: { authorization: `Bearer ${localStorage.getItem("user")}`}});
        return result.data;
    },  
    
    async getUsers(){
        const result = await axios.get(`${process.env.REACT_APP_API_URL}/admin/users`, { headers: { authorization: `Bearer ${localStorage.getItem("user")}`}});
        return result.data;
    },
    
    async getUser(){
        const result = await axios.get(`${process.env.REACT_APP_API_URL}/users/${localStorage.getItem('user_id')}`, { headers: { authorization: `Bearer ${localStorage.getItem("user")}`}});
        return result.data;
    }
}