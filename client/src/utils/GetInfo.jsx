import axios from "axios"

const GetInfo= {   
    async getCategories(){    
       const result = await axios.get('data.json');
       return result.data;
    }       
}

export default GetInfo;