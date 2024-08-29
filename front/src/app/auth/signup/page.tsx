"use client";
import { User } from "@/lib/definition";
import axios from "axios";
import { useState } from "react";

export default function Register() {
    const [error, setError] =  useState("");
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

        console.log(response);
    }

    return (
        <div className="justify-center h-[calc(100vh-4rem)] flex items-center">
            <form onSubmit={handleRegister} className="bg-cgrey px-8 py-10 w-3/12">
                {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}

                <input
                    type="text"
                    placeholder="Nom"
                    className="px-4 py-2 block mb-2 w-full"
                    name="nom"
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 block mb-2 w-full"
                    name="email"
                />
                
                <input
                    type="text"
                    placeholder="Adresse"
                    className="px-4 py-2 block mb-2 w-full"
                    name="address"
                />

                <input
                    type="password"
                    placeholder="Mot de passe"
                    className="px-4 py-2 block mb-2 w-full"
                    name="password"
                />

                <input
                    type="password"
                    placeholder="Confirmer le mot de passe"
                    className="px-4 py-2 block mb-2 w-full"
                    name="confirmpassword"
                />

                <button className="bg-blue-500 text-white px-4 py-2 block w-full mt-4">
                    S'inscrire
                </button>
            </form>
        </div>
    )
}