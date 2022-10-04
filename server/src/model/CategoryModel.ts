import connection from '../services/database.service'
import iCategory from './interface/iCategory'

class Category{  
    async getCategories(){
        const queryStr = 'SELECT type, icon, category_id FROM categories';
        const values = [];
        const result: any = await connection.query(queryStr, values);
        return result.rows;
    }

    async getCategory(category_id: any){
        const queryStr = 'SELECT * FROM categories WHERE category_id=$1';
        const values = [category_id];
        const result: any = await connection.query(queryStr, values);
        return result.rows[0];
    }
 
    async saveCategory(tag: iCategory){
        const queryStr = 'INSERT INTO categories (type, icon) VALUES ($1,$2) RETURNING *';
        const values = [tag.type, tag.icon];
        const result: any = await connection.query(queryStr, values);
        return result.rows[0];
    }

    async modifCategory(tag: any, fields: any){
        const category = await this.getCategory(tag);
        const queryStr ='UPDATE categories SET (type, icon) = ($1, $2)  WHERE category_id=$3 RETURNING *';
        const values = [fields.type || category.type, fields.icon || category.icon, tag];
        const result: any = await connection.query(queryStr, values);
        return result.rows[0];
    }

    async deleteCategory(category_id: any){
        const queryStr = 'DELETE FROM categories WHERE category_id=$1 RETURNING *';
        const values = [category_id];
        const result:any = await connection.query(queryStr, values);
        return result.rows[0];
    }
}

export default new Category();