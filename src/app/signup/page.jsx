"use client";
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SignUpPage() {

    const router = useRouter()

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const {data, error} = await authClient.signUp.email({
        name,
        email,
        password,
        image,
    })
    

    console.log({data, error})

    if(!error) {
      await authClient.signOut()
      router.push('/signin')
    }
    else{
      toast.error("Something went wrong!")
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
        <h1 className="text-center text-2xl font-bold">User Registration Page</h1>

        <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input className="rounded-lg border-2 border-gray-400 p-2" placeholder="Enter your name" />
            <FieldError />
          </TextField>

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

          <TextField isRequired name="image" type="text">
            <Label>Image URL</Label>
            <Input className="rounded-lg border-2 border-gray-400 p-2" placeholder="Image URL" />
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
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button type="submit">
              Register
            </Button>
            <Button type="reset" variant="outline">
              Reset
            </Button>
          </div>

          <Link href="/signin" className="text-center text-sm text-blue-500 font-semibold">
            Already have an account? Sign In
          </Link>
        </Form>

        <p className="text-center">Or</p>

        <Button onClick={handleGoogleSignIn} variant="outline" className={'w-full'}><FcGoogle /> SignIn with Google</Button>

      </Card>
      <ToastContainer />
    </div>
  );
}