import connection from '../services/database.service'
import iCategory from './interface/iCategory'

class Category{  
    async getCategories(){
        const queryStr = 'SELECT * FROM categories;';
        const result: any = await connection.query(queryStr,[]);
        return result.rows;
    }

    async getCategory(category_id: any){
        const queryStr = 'SELECT * FROM categories WHERE category_id=$1;';
        const result: any = await connection.query(queryStr,[category_id]);
        return result.rows[0];
    }
 
    async saveCategory(tag: iCategory){
        const queryStr = 'INSERT INTO categories (type, icon) VALUES ($1,$2) RETURNING *;';
        const result: any = await connection.query(queryStr,[tag.type, tag.icon]);
        return result.rows[0];
    }

    async modifCategory(tag: any, fields: any){
        const category = await this.getCategory(tag);
        const queryStr ='UPDATE categories SET (type, icon) = ($1, $2)  WHERE category_id=$3 RETURNING *;';
        const result: any = await connection.query(queryStr, [fields.type || category.type, fields.icon || category.icon, tag]);
        console.log(fields.type, category.type, tag)
        return result.rows[0];
    }

    async deleteCategory(category_id: any){
        const queryStr = 'DELETE FROM categories WHERE category_id=$1 RETURNING *;';
        const result:any = await connection.query(queryStr, [category_id]);
        return result.rows[0];
    }
}

export default new Category();