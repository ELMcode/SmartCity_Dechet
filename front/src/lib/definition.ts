

export interface User {
    id: string;
    nom: string;
    email: string;
    address: string
}


declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_BACKEND_URL: string
        }
    }
}