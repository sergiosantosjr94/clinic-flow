"use client";
import { authClient } from "@/lib/auth-client";

const Dashboard = () => {
  const session = authClient.useSession();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {session?.data?.user?.name}</p>
    </div>
  );
};

export default Dashboard;
