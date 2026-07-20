import Header from "@/components/Header";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import React, { ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth.api.getSession({ headers: await headers() });
  console.log(session);
  return (
    <main className="min-h-screen text-gray-400">
      <Header session={session} />

      <div>{children}</div>
    </main>
  );
};

export default RootLayout;
