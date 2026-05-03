"use client";
import { UpdateUserInfo } from "@/components/UpdateUserInfo";
import { authClient } from "@/lib/auth-client";
import { Card } from "@heroui/react";
import React from "react";

const ProfilePage = () => {

      const userData = authClient.useSession()
      const user = userData.data?.user

    return(
        <div className="my-12">
            <Card>
                <h1 className="text-2xl font-bold">My Profile</h1>

                {user?.image? (<img src={user?.image} alt="Profile Image" className="w-32 h-32 mx-auto rounded-full object-cover" />
                    ) : 
                    (<div className="w-32 h-32 mx-auto rounded-full bg-gray-300"></div>)}

                <p>Name: {user?.name}</p>
                <p>Email: {user?.email}</p>

                <UpdateUserInfo />
            </Card>
        </div>
    )
}

export default ProfilePage