"use client";
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if(error){
      toast.error("Invalid Credential")
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
        provider: 'google'
    })
  }



  return (
    <div>
      <Card className="border mx-auto w-125 py-10 mt-5">
        <h1 className="text-center text-2xl font-bold">User Login Page</h1>

        <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>Email</Label>
            <Input className="rounded-lg border-2 border-gray-400 p-2" placeholder="user@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <Input className="rounded-lg border-2 border-gray-400 p-2" placeholder="Enter your password" />
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button type="submit">
              Login
            </Button>
            <Button type="reset" variant="outline">
              Reset
            </Button>
          </div>
        </Form>

        <Link href="/signup" className="text-center text-sm text-blue-500 font-semibold">
          If you have no account? Register
        </Link>

        <p className="text-center">Or</p>

        <Button onClick={handleGoogleSignIn} variant="outline" className={'w-full'}><FcGoogle /> SignIn with Google</Button>
      </Card>
      <ToastContainer />
    </div>
  );
}