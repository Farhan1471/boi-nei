"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const BorrowButton =() => {

    const router = useRouter()
    const {data} = authClient.useSession()
    const user = data?.user

    const handleBorrow = () => {
        // if(!user){
        //     router.push("/signin");
        //     return;
        // }

        toast.success("Book borrowed successfully!")
    }

    return(
        <button className="mt-2 px-4 py-2 bg-[#697BAE] cursor-pointer text-white rounded hover:bg-[#616e90]"
        onClick={handleBorrow}>
        Borrow This Book
        </button>
    )
}

export default BorrowButton;