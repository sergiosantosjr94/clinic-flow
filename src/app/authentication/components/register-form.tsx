"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";

const RegisterForm = () => {
  return (
    <TabsContent value="register">
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>
            Change your password here. After saving, you&apos;ll be logged out.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="tabs-demo-current">Current password</Label>
            <Input id="tabs-demo-current" type="password" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="tabs-demo-new">New password</Label>
            <Input id="tabs-demo-new" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Register</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default RegisterForm;
