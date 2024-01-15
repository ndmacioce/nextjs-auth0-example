'use client'

import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  
  const {user, isLoading } = useUser();
  
  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    {user ? (
      <>
      Welcome {user.email}!
      <a href="/api/auth/logout">Logout</a>
      </>
    ) : (
      <a href="/api/auth/login">Login</a>
    )}
    
    </main>
  )
}
