
    export interface User {
        username: string;
        password: string;
        name: string;
        surname: string;
        email: string;
        phone: string;
        register_date: string;
        is_enabled: boolean;
    }

    export interface ResponseUsers {
        result: string;
        users: User[];
    }
    export interface RequestUser {
        username: string;
        password: string;
        name: string;
        surname: string;
        email: string;
        phone: string;
    }

    export interface ResponseUser {
        result: string;
        user: User;
    }

