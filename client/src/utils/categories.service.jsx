import axios from "axios"

export const categoryService= {   
    async getCategories(){    
       const result = await axios.get(process.env.REACT_APP_API_URL+"/categories");
       return result.data;
    }
}
