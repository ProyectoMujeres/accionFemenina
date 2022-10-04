import axios from "axios"

export const postService ={
    async getPosts(){
        const result = await axios.get(process.env.REACT_APP_API_URL+ '/posts');
        return result.data;
    }, 

    async publishPost(user_id){
        const result = await axios.post(`${process.env.REACT_APP_API_URL}/posts/${localStorage.getItem('user_id')}`, { headers: { authorization: `Bearer ${localStorage.getItem("user")}` }});
        return result.data;
    },

    async getPostByUser(){
        const result = await axios.get(`${process.env.REACT_APP_API_URL}/posts/${localStorage.getItem('user_id')}`, { headers: { authorization: `Bearer ${localStorage.getItem("user")}` }});
        return result.data;
    }
}