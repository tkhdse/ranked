// import { NextAuthOptions } from "next-auth"
// import { db } from "./db"
// import bcrypt from "bcrypt"
// import { PrismaAdapter } from "@next-auth/prisma-adapter"
// import GoogleProvider  from "next-auth/providers/google"
// import CredentialsProvider from "next-auth/providers/credentials"


// // function getGoogleCredentials() {
// //     const clientId = process.env.GOOGLE_CLIENT_ID
// //     const clientSecret = process.env.GOOGLE_CLIENT_SECRET

// //     if (!clientId || clientId.length === 0) {
// //         throw new Error("No client ID (google)")
// //     }

// //     if (!clientSecret || clientSecret.length === 0) {
// //         throw new Error("No client secret (google)")
// //     }
// //     return {clientId, clientSecret}
// // }

// export const authOptions: NextAuthOptions = {
//     adapter: PrismaAdapter(db),
//     providers: [

//         CredentialsProvider({
//             name: 'credentials',
//             credentials: {
//                 email: {label: "email", type: "text"},
//                 password: {label: "password ", type: "text"}
//             },
//             async authorize(credentials) {
//                 if (!credentials?.email || !credentials?.password) {
//                     throw new Error("Missing fields")
//                 }
//                 const user = await db.user.findUnique({
//                     where: {
//                         email: credentials.email
//                     }
//                 });
                
//                 if (!user || !user?.hashedPassword) {
//                     throw new Error("Invalid credentials")
//                 }
//                 const isCorrectPassword = await bcrypt.compare(
//                     credentials.password,
//                     user.hashedPassword
//                 );

//                 if (!isCorrectPassword) {
//                     throw new Error("Invalid credentials")

//                 }
//                 return user
//             }
//         })

//         // GoogleProvider({
//         //     clientId: getGoogleCredentials().clientId as string,
//         //     clientSecret: getGoogleCredentials().clientSecret as string,
//         // })
//     ],
//     debug: process.env.NODE_ENV === 'development',
//     session: {
//         strategy: 'jwt',
//     },
//     // jwt: {
//     //     secret: process.env.NEXTAUTH_JWT_SECRET
//     // },
//     secret: process.env.NEXTAUTH_SECRET,
//     // callbacks: {
//     //     session({token, session}) {
//     //         if (token) {
//     //             session.user.id = token.id
//     //             session.user.name = token.name
//     //             session.user.email = token.email
//     //             session.user.image = token.picture
//     //         }

//     //         return session
//     //     },
//     //     async jwt({token, user}) {
//     //         const dbUser = await db.
//     //     }
//     // }


// };
