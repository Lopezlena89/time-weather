'use server';

import prisma from '@/lib/prisma';



export const getUserModal = async( id: string ) => {
  try {

    const reminder = await prisma.reminders.findMany({
      where: { userId:id }
    });

    if ( !reminder ) return null;

 

    return {
      reminder
    };


  } catch (error) {
    console.log(error);
    return null;
  }
}

