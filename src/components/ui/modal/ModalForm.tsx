'use client'

import { deleteUserModal } from "@/actions/modal/delete-user-modal";
import { setUserModal } from "@/actions/modal/set-user-modal";
import { useReminderStore } from "@/store/data-modal/ui-modaldata";
import { useUIModal } from "@/store/ui/ui-modal";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
    id:string;
    title:string;
    date:string;
    theme:string;

}



export const ModalForm = () => {

    const [errorMessage, setErrorMessage] = useState('')
    const {register, handleSubmit, formState:{errors}} = useForm<FormInputs>();

    const closeSideModal = useUIModal(state => state.closeSideModal);

    const reminder = useReminderStore(state => state.reminder);
    const setReminder = useReminderStore(state => state.setReminder);

    const { data: session } = useSession({
        required: true,
      })
      

    const onSubmit:SubmitHandler<FormInputs> = async(data)=>{
        setErrorMessage('');
        const reminder = data;
        setReminder(reminder);

        if ( reminder ) {
            await setUserModal(reminder, session!.user.id );
          } else {
            await deleteUserModal(session!.user.id);
          }

        closeSideModal();
        location.reload();
    }

  return (
    <form className="p-5 flex flex-col w-full h-full" onSubmit={handleSubmit(onSubmit)} >
                <p className="text-lg font-bold">Add Event Details</p>
                <div className="w-full h-px bg-gray-200 my-5" />
                <span className="font-bold mt-3">Event Title</span>
                <input 
                    className={
                        clsx(
                            "h-10 rounded-md bg-gray-200 pl-2 mt-3" ,
                            {
                                'border-red-500':!!errors.title
                            }
                        )
                    }
                    type="text" 
                    placeholder="Title" 
                    autoFocus
                    {...register('title',{required:true})}
                />
                <span className="font-bold mt-3">Event date</span>
                <input 
                     className={
                        clsx(
                            "h-10 rounded-md bg-gray-200 pl-2 mt-3" ,
                            {
                                'border-red-500':!!errors.date
                            }
                        )
                    }
                    type="date" 
                    placeholder="Time" 
                    {...register('date',{required:true})}
                />
                <span className="font-bold mt-3">Select a theme</span>
                <select 
                     className={
                        clsx(
                            "h-10 rounded-md bg-gray-200 pl-2 mt-3" ,
                            {
                                'border-red-500':!!errors.theme
                            }
                        )
                    }
                    {...register('theme',{required:true})}
                >
                    <option value="Blue theme" >Blue Theme</option>
                    <option value="Yellow theme">Yellow theme</option>
                    <option value="Red theme">Red theme</option>
                </select>
                <button
                  type="submit" 
                  className="w-full mt-6 h-10 bg-blue-300 rounded-lg cursor-pointer"
                >
                  Agregar
                </button>

            </form>
  )
}
