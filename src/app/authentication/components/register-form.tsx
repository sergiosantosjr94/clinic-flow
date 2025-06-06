"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { redirect } from "next/navigation";
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

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const RegisterSchema = z
    .object({
      name: z.string({ message: "Name is required" }).min(3).trim(),
      email: z
        .string({ message: "Email is required." })
        .email({ message: "Email is invalid." })
        .trim(),
      password: z
        .string({ message: "Password is required." })
        .trim()
        .min(8, { message: "Password must contain 8 caracteres." })
        .max(12),
      confirmPassword: z
        .string({ message: "Confirm Passowrds is required." })
        .trim(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
  });

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    setIsLoading(true);
    await authClient.signUp.email(
      {
        name: values.name,
        email: values.email,
        password: values.password,
      },
      {
        onSuccess: () => {
          setIsLoading(false);
          toast.success("User succesfully created.");
          redirect("/dashboard");
        },
        onError: () => {
          toast.error("Error creating user.");
        },
      },
    );
  }

  return (
    <TabsContent value="register">
      <Card>
        <CardHeader className="gap-2">
          <CardTitle>Register</CardTitle>
          <CardDescription>
            Welcome! We&apos;re super excited to have you.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm password</FormLabel>
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

export default RegisterForm;
