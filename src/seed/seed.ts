import bcryptjs from 'bcryptjs';


interface SeedUser {
    email: string;
    password: string;
    name: string;
  }
interface SeedReminders {
  userId:string
  title:string 
  date:string
  theme:string
  }
  

interface SeedData {
    users: SeedUser[];
    reminders:SeedReminders[]
   
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

    reminders:[
      {
        userId:'58cdc46a-6e1f-4132-a087-ecd391df49f9',
        title:'Ingles' ,
        date:'2024-01-11',
        theme:'Blue theme'
      },
      {
        userId:'58cdc46a-6e1f-4132-a087-ecd391df49f9',
        title:'Salir' ,
        date:'2024-01-14',
        theme:'Yellow theme'
      }
    ]
}