import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://farhans-boi-nei.vercel.app"
})
export const { signIn, signUp, signOut, useSession } = createAuthClient()