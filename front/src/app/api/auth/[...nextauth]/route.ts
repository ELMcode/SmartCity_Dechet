import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { User } from '@/lib/definition';
import axios from 'axios';


const handler = NextAuth({

    pages: {
        signIn: '/',
    },
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials): Promise<User | null> {
                if (!credentials) return null;

                const { email, password } = credentials;

                // const user = mockDatabase.find(user => user.email === email && user.password === password);

                const user = await axios.post(`http://localhost:8000/auth/login`, {
                    email: email,
                    password: password
                })

                console.log(user.data)

                if (user) {
                    return user.data;
                } else {
                    return null;
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.user = user;
            return token;
        },
        async session({ session, token }) {
            session.user = token.user as any;
            return session;
        },
    },
});

export { handler as GET, handler as POST };