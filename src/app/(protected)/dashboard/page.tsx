import { headers } from "next/headers";
import { redirect } from "next/navigation";

import LogOutButton from "@/app/authentication/components/logout-button";
import { auth } from "@/lib/auth";

const Dashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/authentication");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {session?.user.name}</p>
      <LogOutButton />
    </div>
  );
};

export default Dashboard;
