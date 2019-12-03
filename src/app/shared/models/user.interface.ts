export interface Roles{
    cobranza?:boolean;
    marketing?:boolean;
    atenClientes?: boolean;
}

export interface UserI{
    email:string;
    password:string;
    uid:any;
    roles:Roles;
}


