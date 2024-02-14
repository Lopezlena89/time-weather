'use server'

import { cookies } from 'next/headers'

export const addCookies = () =>{
    cookies().set('add', 'true',{expires:1000})
}

export const removeCookies = (id:string) =>{
    cookies().set('remove',id,{expires:1000})
}


