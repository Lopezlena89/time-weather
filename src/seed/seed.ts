import bcryptjs from 'bcryptjs';


interface SeedUser {
    email: string;
    password: string;
    name: string;
  }
  

interface SeedData {
    users: SeedUser[];
   
  }
  
export const initialData: SeedData = {

    users: [
      {
        email: 'fernando@google.com',
        name: 'Fernando Herrera',
        password: bcryptjs.hashSync('123456'),
       
      },
      {
        email: 'luis@google.com',
        name: 'Luis Lopez',
        password: bcryptjs.hashSync('123456'),
      
      },
  
  
    ],
}