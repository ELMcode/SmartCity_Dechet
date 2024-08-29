"use client";
import { getCsrfToken } from 'next-auth/react';
import { FormEvent } from 'react';
import { signIn } from 'next-auth/react';

export default async function SignIn() {
    const csrfToken = await getCsrfToken();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const res = await signIn("credentials", {
          email: formData.get("email"),
          password: formData.get("password"),
          redirect: true,
        
        });
      };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
            <h1>Sign In</h1>
            <form method="post" onSubmit={handleSubmit}>
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <div style={{ marginBottom: '1rem' }}>
                    <label>Email</label>
                    <input name="email" type="email" required />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Password</label>
                    <input name="password" type="password" required />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}
