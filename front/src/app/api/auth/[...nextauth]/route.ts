import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { User } from '@/lib/definition';

const mockDatabase: (User & { password: string })[] = [
    {
        id: '1',
        email: 'test@test.com',
        password: 'password123',
        firstName: 'John',
        lastName: 'Doe',
        address: {
            number: '123',
            street: 'Main St',
            complement: '',
            postalCode: '12345'
        }
    },
    {
        id: '2',
        email: 'jane@doe.com',
        password: 'mypassword',
        firstName: 'Jane',
        lastName: 'Doe',
        address: {
            number: '456',
            street: 'Second St',
            complement: 'Apt 1',
            postalCode: '67890'
        }
    }
];

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
                console.log('ok');
                if (!credentials) return null;

                const { email, password } = credentials;

                const user = mockDatabase.find(user => user.email === email && user.password === password);

                if (user) {
                    const { password, ...userWithoutPassword } = user;
                    console.log(userWithoutPassword);
                    return userWithoutPassword;
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