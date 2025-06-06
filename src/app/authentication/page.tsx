import Image from "next/image";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import LoginTab from "./components/LoginTab";
import RegisterTab from "./components/RegisterTab";

const AuthenticationPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#f4f4f5]">
      <div className="flex w-full max-w-sm flex-col gap-6">
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
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <LoginTab />
          <RegisterTab />
        </Tabs>
      </div>
    </div>
  );
};

export default AuthenticationPage;
