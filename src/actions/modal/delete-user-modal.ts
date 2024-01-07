'use server';

import prisma from '@/lib/prisma';



export const deleteUserModal = async( id: string ) => {

  try {

    const deleted = await prisma.reminders.delete({
      where: { id }
    });

    return { ok: true };
    
  } catch (error) {
    console.log(error);
  
    return {
      ok: false,
      message: 'No se pudo eliminar el recordatorio'
    }


}
}