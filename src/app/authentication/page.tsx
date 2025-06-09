import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { auth } from "@/lib/auth";

import LoginForm from "./components/login-form";
import RegisterForm from "./components/register-form";

const AuthenticationPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <div className="m-4 flex min-h-screen w-screen content-center items-center justify-center overflow-y-auto">
      <div className="m-4 flex w-full max-w-sm flex-col gap-6">
        <Image
          className="self-center"
          src="/clinicflow-blue-black.webp"
          width={200}
          height={90}
          quality={100}
          alt="clinic-flow-logo"
        />
        <Tabs defaultValue="login">
          <TabsList className="w-full">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <LoginForm />
          <RegisterForm />
        </Tabs>
      </div>
    </div>
  );
};

export default AuthenticationPage;
