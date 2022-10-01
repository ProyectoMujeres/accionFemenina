export interface iUserLogin{
    email: string;
    password: string;
}

export interface  iUser extends iUserLogin{
    name?: string;
    role?: string;
    avatar?: string;
    user_id?: number;
    birthdate?: string;
}