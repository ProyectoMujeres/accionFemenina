import  connection  from "../services/database.service";
import { iUser, iUserLogin } from "./interface/iUser";

class User {
    async saveUser(users: iUser){
        const queryStr='INSERT INTO users (name, email, password, birthdate, role, avatar) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
        const values = [users.name, users.email, users.password, users.birthdate, users.role, users.avatar] as string[];
        const result: any = await connection.query(queryStr, values);
        return result.rows[0];
    }
    
    async getUser(users: iUserLogin){
        const queryStr = 'SELECT * FROM users WHERE email= $1';
        const values = [users.email];
        const result: any = await connection.query(queryStr, values);
        return result.rows[0];
    }

    async getOneUser(user_id: any){
        const queryStr = 'SELECT * FROM users WHERE user_id= $1';
        const values = [user_id];
        const result: any = await connection.query(queryStr, values);
        return result.rows[0];
    }

    async getUsers(){
        const queryStr = 'SELECT * FROM users';
        const values = [];
        const result:any = await connection.query(queryStr, values);
        return result.rows;
    }

    async getUserByEmail(email: string){
        const queryStr = 'SELECT * FROM users WHERE email= $1';
        const values = [email];
        const result:any = await connection.query(queryStr, values);
        return result.rows[0];
    }

    async modifUser(id: any, fields: any){
        const user= await this.getOneUser(id);
        const queryStr='UPDATE users SET (name, email, rol, avatar) = ($1, $2, $3, $4)  WHERE user_id = $5 RETURNING *';
        const values = [fields.name || user.name, fields.email || user.email, fields.rol || user.rol, fields.avatar || user.avatar, id];
        const result: any = await connection.query(queryStr, values);
        return result.rows[0];
    }

    async deleteUser(user_id: any){
        const queryStr = 'DELETE FROM users WHERE user_id=$1 RETURNING *';
        const values = [user_id];
        const result: any = await connection.query(queryStr, values);
        return result.rows[0];
    }
}

export default new User();