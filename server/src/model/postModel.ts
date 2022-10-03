import connection from '../services/database.service'
import iPost from './interface/iPost'

class Post{   
    async getPostsByUserId(user_id: any){
        const queryStr = 'SELECT p.post_id, u.avatar, u.name, p.content, p.date, c.type FROM posts p LEFT JOIN users u ON p.user_id = u.user_id INNER JOIN categories c ON p.category_id = c.category_id WHERE p.user_id=$1';
        const values = [user_id];
        const result:any = await connection.query(queryStr, values);
        return result.rows;
    }

    async getPostsByUser(){
        const queryStr = 'SELECT p.post_id, u.avatar, u.name, p.content, p.date, c.type FROM posts p LEFT JOIN users u ON p.user_id = u.user_id INNER JOIN categories c ON p.category_id = c.category_id';
        const result: any = await connection.query(queryStr);
        return result.rows;
    }
    
    async savePost(posts: iPost){
        const queryStr = 'INSERT INTO posts (content, category_id, user_id) VALUES ($1, $2, $3) RETURNING *';
        const values = [posts.content, posts.category_id, posts.user_id] as string[];
        const result: any = await connection.query(queryStr, values);
        return result.rows[0];
    }

    async modifPost(publish: any, fields: any, user_id: any){
        const queryStr='UPDATE posts SET (content, category_id) = ($1,$2)  WHERE post_id =$3 AND user_id=$4 RETURNING *';
        const values = [fields.content || publish.content, fields.category_id || publish.category_id, user_id];
        const result: any = await connection.query(queryStr, values);
        console.log(fields.content, publish.content)
        return result.rows[0];
    }
    
    async deletePost(post_id: any){
        const queryStr = 'DELETE FROM posts WHERE post_id=$1 RETURNING *';
        const values = [post_id];
        const result:any= await connection.query(queryStr, values);
        return result.rows[0];
    }
}

export default new Post(); 