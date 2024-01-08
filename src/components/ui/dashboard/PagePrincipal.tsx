'use client'


import { useSession } from "next-auth/react";
import { AuthPage } from "./AuthPage";
import { NoAuthPage } from "./NoAuthPage";

interface Remind {
  reminder:[{
    id: string;
    userId:string;
    title: string;
    date: string;
    theme: string;
  }] 
};

interface Session{
  user: {
    id: string;
    name: string;
    email: string;
  },
  expires: string;
}

interface Props{
  sessiones:Session;
  reminders:Remind ;
}

export const PagePrincipal = ({sessiones,reminders}:Props|any) => {

    const { data: session} = useSession();
    const isAuthenticated = !!session?.user;
   


  return (
   <>
    {
        isAuthenticated 
        ?
        <AuthPage sessiones={sessiones} reminders={reminders}/>
        :
        <NoAuthPage/>
    }

   </>
  )
}
