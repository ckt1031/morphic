import NextAuth from 'next-auth'
import Auth0 from 'next-auth/providers/auth0'
import ZITADEL from "next-auth/providers/zitadel";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    ZITADEL,
    // Auth0({
    //   issuer: process.env.AUTH_AUTH0_ISSUER,
    //   clientId: process.env.AUTH_AUTH0_ID,
    //   clientSecret: process.env.AUTH_AUTH0_SECRET
    // })
  ]
})
