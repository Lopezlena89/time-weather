interface Remind {
  reminder:[{
    id: string;
    userId:string;
    title: string;
    date: string;
    theme: string;
  }]
};



interface Props{
  
  reminders:Remind
}

export const MiniAnotaciones = ({reminders}:Props) => {
  if(!reminders){
    return (
      <p>Hola mundo</p>
    )
  }
    
  return (
    <div className="ml-5 flex flex-col  justify-startitems-center">
       {
        reminders.reminder.map(remind =>(
          <div key={remind.id} className="flex  font-bold text-xs overflow-hidden">
            <span >{remind.date}</span>
            <p className="font-extralight ml-3">{remind.title}</p>
          </div>
        ))
       }
    </div>
  )
}
