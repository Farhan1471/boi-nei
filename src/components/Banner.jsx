import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";


const Banner = () => {
    return(
      <div className="mx-auto flex justify-center items-center min-h-[80vh] w-full px-4 gap-8 lg:gap-10 lg:px-8 py-10 mt-5 sm:flex-row flex-col-reverse">
        {/* Left Side */}
        <div className="w-full text-center lg:text-left lg:w[50%]">
          <h1 className="text-6xl font-extrabold mb-4">Find Your <br /> Next Read</h1>
          <p className="mx-auto max-w-xl text-gray-600 lg:mx-0">
            Explore our curated archive of human knowledge. From timeless classics to the cutting edge of technology and science, your next discovery awaits in the digital halls of ScholasticArch.
          </p>
          <Link href="/all-books">
            <Button variant="solid" className="border-2 border-[#697BAE] text-[#697BAE] mt-6 rounded-full w-[40%] hover:opacity-90 hover:bg-[#697BAE] hover:text-white transition duration-300">
              Browse Now
            </Button>
          </Link>
        </div>

        {/* Right Side */}
        <div className="w-full max-w-md lg:w-[60%] lg:mx-w-none">
          <Image
            src="/hero.svg"
            alt="Hero"
            width={500}
            height={300}
            className="object-contain h-auto w-full"
          />
        </div>
      </div>
    )
}

export default Banner;