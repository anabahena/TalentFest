export interface Roles{
    editor?:boolean;
    admin?:boolean;
}

export interface UserI{
    email:string;
    password:string;
    uid:any;
    roles:Roles;

}