export interface Roles {
    cobranza: boolean;
    atenclientes: boolean;
    marketing: boolean;
}

export interface ClientsI {
    id: number;
    nameClient: string;
    age: number;
    state: string;
    serviceType: string;
    antiguedad: number;
    rating: number;
    uid?: string;
    roles: Roles;
    Moroso: boolean;
}

