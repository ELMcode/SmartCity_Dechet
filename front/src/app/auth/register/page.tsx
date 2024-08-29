"use client";
import { User } from "@/lib/definition";
import axios from "axios";
import { useState } from "react";

export default function Register() {
    const [error, setError] = useState("");
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if (formData.get('password') !== formData.get('confirmpassword')) {
            setError("Les mots de passe ne correspondent pas");
            return;
        }
        const response = await axios.post("http://localhost:8000/auth/register", {
            nom: formData.get('nom'),
            email: formData.get('email'),
            password: formData.get('password'),
            adresse: formData.get('address'),
        })

        if (response.status === 201) {
            window.location.href = "/auth/login";
        }
    }

    return (
        <div className="justify-center h-[calc(100vh-15rem)] flex items-center">
            <form onSubmit={handleRegister} className="bg-cgrey px-8 py-10 w-3/12 rounded-sm drop-shadow-md shadow-slate-500">
                {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}

                <input
                    type="text"
                    placeholder="Nom"
                    className="px-4 py-2 block mb-2 w-full rounded-md border-solid border-slate-400 border-2"
                    name="nom"
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 block mb-2 w-full rounded-md border-solid border-slate-400 border-2"
                    name="email"
                />

                <input
                    type="text"
                    placeholder="Adresse"
                    className="px-4 py-2 block mb-2 w-full rounded-md border-solid border-slate-400 border-2"
                    name="address"
                />

                <input
                    type="password"
                    placeholder="Mot de passe"
                    className="px-4 py-2 block mb-2 w-full rounded-md border-solid border-slate-400 border-2"
                    name="password"
                />

                <input
                    type="password"
                    placeholder="Confirmer le mot de passe"
                    className="px-4 py-2 block mb-2 w-full rounded-md border-solid border-slate-400 border-2"
                    name="confirmpassword"
                />

                <button className="bg-blue-950 text-white px-4 py-2 w-36 mt-4 rounded-full drop-shadow shadow-sm shadow-slate-500">
                    S'inscrire
                </button>
            </form>
        </div>
    )
}