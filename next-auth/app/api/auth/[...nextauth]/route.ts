// Import NextAuth and the CredentialsProvider with correct syntax
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "email", type: "text", placeholder: "Email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials: any) {
        console.log(credentials);

        return {
          id: "1",
          name: "asim",
          email: "asim@",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks:{
    // this is to stop certain user to login
    signIn: ({user})=>{
        if(user.email ==='asim@gmail.com'){
            return false
        }
        return true
    },
    // jwt:({token,user})=>{
    //    console.log(token)
    //    return token; 
    // },
    session:({session,token,user}:any)=>{
    if(session && sessionStorage.user){
        session.user.id = token.sub;
    }
    return session;
  }

});

export const GET = handler;
export const POST = handler;
