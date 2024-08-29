"use client";
import { useSession } from "next-auth/react";


export default function Home() {
  const { data: session, status } = useSession();

    console.log(session);
    return (
        <main className="p-8">
            <h1 className="text-4xl font-bold mb-6">Solutions intelligentes de gestion des déchets de la métropole de Lille</h1>
        </main>
    );
}
