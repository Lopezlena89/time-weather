

import prisma from '../lib/prisma';
import { initialData } from './seed';




async function main() {

  // 1. Borrar registros previos
  // await Promise.all( [

  await prisma.user.deleteMany();
  await prisma.reminders.deleteMany();
  

  // ]);
  
  const { users,reminders } = initialData;


  await prisma.user.createMany({
    data: users
  });
  await prisma.reminders.createMany({
    data: reminders
  });

  console.log( 'Seed ejecutado correctamente' );
}


( () => {

  if ( process.env.NODE_ENV === 'production' ) return;
  main();
} )();