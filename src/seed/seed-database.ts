

import prisma from '../lib/prisma';
import { initialData } from './seed';




async function main() {

  // 1. Borrar registros previos
  // await Promise.all( [

  await prisma.user.deleteMany();

  // ]);
  
  const { users } = initialData;


  await prisma.user.createMany({
    data: users
  });

  console.log( 'Seed ejecutado correctamente' );
}


( () => {

  if ( process.env.NODE_ENV === 'production' ) return;
  main();
} )();