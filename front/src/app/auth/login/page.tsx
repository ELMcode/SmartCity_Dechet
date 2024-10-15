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
        <div className="justify-center h-[calc(100vh-15rem)] flex items-center">
            <form method="post" onSubmit={handleSubmit} className="justify-center flex flex-col bg-cgrey px-8 py-10 w-3/12 rounded-sm drop-shadow-md shadow-slate-500">
                <h1 className=' underline font-bold'>Sign In</h1>
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <div style={{ marginBottom: '1rem' }}>
                    <label>Email : </label>
                    <input name="email" type="email" required className="px-4 py-2 block mb-2 w-full rounded-md border-solid border-slate-400 border-2"/>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Password : </label>
                    <input name="password" type="password" required className="px-4 py-2 block mb-2 w-full rounded-md border-solid border-slate-400 border-2"/>
                </div>
                <button type="submit" className="bg-blue-950 text-white px-4 py-2 w-36 mt-4 rounded-full drop-shadow shadow-sm shadow-slate-500">Sign In</button>
            </form>
        </div>
    );
}
