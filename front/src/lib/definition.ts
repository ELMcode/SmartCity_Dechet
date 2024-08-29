

export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    address: {
        number: string;
        street: string;
        complement?: string;
        postalCode: string;
    };
}