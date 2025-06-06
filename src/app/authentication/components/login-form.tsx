"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import { authClient } from "@/lib/auth-client";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginSchema = z.object({
    email: z
      .string({ message: "Email is required." })
      .email({ message: "Email is invalid." })
      .trim(),
    password: z
      .string({ message: "Password is required." })
      .trim()
      .min(8, { message: "Password must contain 8 caracteres." }),
  });

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true);
    await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
      },
      {
        onSuccess: () => {
          setIsLoading(false);
          toast.success("Sucesss");
        },
        onError: () => {
          toast.error("Email or password is wrong.");
          setIsLoading(false);
        },
      },
    );
  }

  return (
    <TabsContent value="login">
      <Card>
        <CardHeader className="gap-2">
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Welcome Back! We&apos;re excited to have you here.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? <LoaderCircle className="animate-spin" /> : ""}
                SignUp
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </TabsContent>
  );
};

export default LoginForm;
