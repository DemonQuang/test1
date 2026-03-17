import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },

            authorize: async (credentials) => {
                console.log("credentials    ", credentials)
                let user = null

                // logic to salt and hash password
                // logic to find user in database
                // if user is found and password is correct, return the user object
                // otherwise, return null
                user = {
                    id: "123",
                    name: "123",
                    email: "123",
                    isVerify: "123",
                    type: "123",
                    role: "123",
                };
                if (!user) {
                    // No user found, so this is their first attempt to login
                    // Optionally, this is also the place you could do a user registration
                    return Promise.reject(new Error("No user found with the given credentials"));
                }

                // return user object with their profile data
                return user
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
        signOut: "/auth/logout",
        error: "/auth/error", // Error code passed in query string as ?error=
    },
})