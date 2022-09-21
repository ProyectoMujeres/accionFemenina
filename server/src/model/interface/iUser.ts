export interface  iUserLogin{
    email: string;
    password: string;
}

export interface  iUser extends  iUserLogin {
    name?: string;
    rol?: string;
    avatar?: string;
    user_id?: number;
    birthday?: string;
}