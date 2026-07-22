"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <main>
      {!session ? (
        <div className="">  
          <h1>Google Login</h1>
          <button onClick={() => signIn("google")}>Login with Google</button>
        </div>
      ) : (
        <div className="">
          <h1>Welcome</h1>
          <h2>{session.user?.name}</h2>
          <h2>{session.user?.email}</h2>
          <button onClick={() => signOut()}>Logout</button>
        </div>
      )}
    </main>
  );
}
