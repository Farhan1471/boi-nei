import React from "react";
import Image from "next/image";

const Navbar = () => {
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

        <ul className="flex items-center gap-5 text-sm">
          <li>Home
            {/* <Link href={"/"}>Home</Link> */}
          </li>
          <li>All Books
            {/* <Link href={"/all-photos"}>All Photos</Link> */}
          </li>
          <li>My Profile
            {/* <Link href={"/pricing"}>Pricing</Link> */}
          </li>
          <li>
            {/* <Link href={"/profile"}>Profile</Link> */}
          </li>
        </ul>

        <div className="flex gap-4">
            <ul className="flex items-center  text-sm gap-5">
              <li>
                {/* <Link href={"/signup"}>SignUp</Link> */}
              </li>
              <li>
                {/* <Link href={"/signin"}>SignIn</Link> */}
              </li>
            </ul>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;