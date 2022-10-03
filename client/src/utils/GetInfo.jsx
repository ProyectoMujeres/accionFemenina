import axios from "axios"

const GetInfo= {   
    async getCategories(){    
       const result = await axios.get(process.env.REACT_APP_API_URL+"/categories");
       return result.data;
    }
}

export default GetInfo;