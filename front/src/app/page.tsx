"use client";
import { useSession } from "next-auth/react";


export default function Home() {
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
      <h1>Home</h1>
  );
}
