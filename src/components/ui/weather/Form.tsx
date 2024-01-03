'use client'

import { useState } from "react"

export const Form = () => {
    const [formClient, setFormClient] = useState('');
    

    const onChange = ({target}) =>{
       setFormClient(target.value);
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(formClient)
    }
    
  return (
   <>
    <form onSubmit={(e)=>onSubmit(e)}>
        <input 
            type="text" 
            onChange={onChange} 
            placeholder="Ciudad" 
            className="text-black z-1 " />
    </form>
   </>
  )
}
