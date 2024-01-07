'use client'


import { useSession } from "next-auth/react";
import { AuthPage } from "./AuthPage";
import { NoAuthPage } from "./NoAuthPage";


export const PagePrincipal = ({sessiones}:any) => {

    const { data: session} = useSession();
    const isAuthenticated = !!session?.user;
   


  return (
   <>
    {
        isAuthenticated 
        ?
        <AuthPage sessiones={sessiones}/>
        :
        <NoAuthPage/>
    }

   </>
  )
}
