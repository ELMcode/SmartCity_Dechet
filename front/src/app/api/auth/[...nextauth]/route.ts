import NextAuth from 'next-auth';
import CredentialsProvider  from 'next-auth/providers/credentials';
import { User } from '@/lib/definition';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req): Promise<User | null> {

                if (!credentials) return null

                const { email, password } = credentials;

                const user = { 
                    id: '1148', 
                    email, 
                    firstName: 'Sam', 
                    lastName: 'az', 
                    address: { 
                        number: '123', 
                        street: 'Main ', 
                        postalCode: '12345'
                    }
                };

                if (password === 'password') {
                    return user
                } else {
                    return null
                }
            }
        })
    ]
});

export {handler as GET, handler as POST};