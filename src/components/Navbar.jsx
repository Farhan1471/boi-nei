"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const userData = authClient.useSession()
  const user = userData.data?.user
  const userName = user?.name

  const handleLogout = async () => {
    await authClient.signOut()
  }

  const pathname = usePathname()

  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="logo"
              loading="eager"
              width={100}
              height={100}
              className="object-cover h-auto w-auto"
            />
          </Link>
        </div>

        <ul className="flex items-center gap-5 font-semibold">
          <li>
            <Link href="/" className={pathname === "/" ? "text-[#697BAE]" : "text-black"}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/all-books" className={pathname === "/all-books" ? "text-[#697BAE]" : "text-black"}>
              All Books
            </Link>
          </li>
          <li>
            <Link href="/profile" className={pathname === "/profile" ? "text-[#697BAE]" : "text-black"}>
              My Profile
            </Link>
          </li>
        </ul>

        <div className="flex gap-4">
            {!user && <ul className="flex items-center font-semibold text-sm gap-5">
              <li>
                <Link href={"/signup"} className={pathname === "/signup" ? "text-[#697BAE]" : "text-black"}>
                  Register
                </Link>
              </li>
              <li>
                <Link href={"/signin"} className={pathname === "/signin" ? "text-[#697BAE]" : "text-black"}>
                  Login
                </Link>
              </li>
            </ul>}
            {
              user && <div className="flex items-center gap-3">
                <span className="font-semibold text-green-600">{userName}</span>
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