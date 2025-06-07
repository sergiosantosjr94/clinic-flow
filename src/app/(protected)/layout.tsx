
import { headers } from "next/headers";
import { redirect } from "next/navigation";


import { auth } from "@/lib/auth";
import LogOutButton from "../authentication/components/logout-button";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/authentication");
  }
  return (
    <div>
      {children}
      <LogOutButton />
    </div>
  );
}
