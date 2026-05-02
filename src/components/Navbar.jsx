"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";

const Navbar = () => {

  const userData = authClient.useSession()
  const user = userData.data?.user
  const userName = user?.name
  // console.log(user)

  const handleLogout = async () => {
    await authClient.signOut()
  }

  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={100}
            height={100}
            className="object-cover h-auto w-auto"
          />
        </div>

        <ul className="flex items-center gap-5 text-sm font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-books">All Books</Link>
          </li>
          <li>
            <Link href="/profile">My Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
            {!user && <ul className="flex items-center font-semibold text-sm gap-5">
              <li>
                <Link href={"/signup"}>SignUp</Link>
              </li>
              <li>
                <Link href={"/signin"}>SignIn</Link>
              </li>
            </ul>}
            {
              user && <div className="flex items-center gap-3">
                <span>{userName}</span>
                <Button variant="danger-soft" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            }
        </div>
        
      </nav>
    </div>
  );
};

export default Navbar;