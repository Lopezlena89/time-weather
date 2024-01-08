'use client'

import { IoChevronBackOutline,IoChevronForwardOutline } from "react-icons/io5";
import { DateCalendar } from './DateCalendar';
import { daysFormat, monthFormat } from "@/utils/data-numbers";
import { useEffect, useState } from "react";

interface Remind{
    reminder:[{
      id: string;
      userId:string;
      title: string;
      date: string;
      theme: string;
    }] 
  };
  
  interface Props {
    reminders:Remind ;
  }


export const CalendarSchedule = ({reminders}:Props) => {
    
    const [data, setData] = useState([])
    const [date, setDate] = useState<Date>();
    const [dayNumber, setDayNumber] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    const [howMuchDays, setHowMuchDays] = useState(0);
    const [dayStartMonth, setDayStartMonth] = useState(0);

    // date:Number(remind.date.split('').splice(8,10).join('')),
    

    const contadorMonthMas = () =>{
        if(month === 11){
            setMonth(0);
            setYear(year+1)
            var diasMes = new Date(year+1, 0, 0).getDate();
            setHowMuchDays(diasMes)//Cuantos dias del mes tiene
            var indice = new Date(year+1, 0, 1).getDay()
            setDayStartMonth(indice);//Que dia de la semana inicia el mes
            return
        }
        setMonth(month+1);
        var diasMes = new Date(year, month+2, 0).getDate();
        setHowMuchDays(diasMes)//Cuantos dias del mes tiene
        var indice = new Date(year, month+1, 1).getDay()
        setDayStartMonth(indice);//Que dia de la semana inicia el mes
    }

    const contadorMonthMenos = () =>{
        if(month === 0) {
            setMonth(11)
            setYear(year-1)
            var diasMes = new Date(year-1, 12, 0).getDate();
            setHowMuchDays(diasMes);
            var indice = new Date(year-1, 11, 1).getDay()

            setDayStartMonth(indice);//Que dia de la semana inicia el mes
            return;
        }
        setMonth(month-1);
        var diasMes = new Date(year, month, 0).getDate();
            setHowMuchDays(diasMes);
        var indice = new Date(year,month-1, 1).getDay()
        setDayStartMonth(indice);//Que dia de la semana inicia el mes
    }


    useEffect(() => {
        const fechaActual = new Date();
        setDate(fechaActual);
        setDayNumber(fechaActual.getDay());//Fecha actual
        setMonth(fechaActual.getMonth());//Mes actual
        setYear(fechaActual.getFullYear());//Anio actual
        var diasMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0).getDate();
        setHowMuchDays(diasMes)//Cuantos dias del mes tiene
        var indice = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1).getDay()
        setDayStartMonth(indice);//Que dia de la semana inicia el mes
       
    }, [])
   
  return (
    
    <div 
        className="w-full border border-solid border-gray-300 bg-white rounded-lg shadow overflow-hidden "
        style={{height:'calc(100vh - 100px)', fontSize:'11px'}}         
    >
        <div className="flex  items-center justify-between py-2 px-6">
            <div>
                <span  className="text-lg font-bold text-gray-800">{monthFormat[month]}</span>
                <span  className="ml-1 text-lg text-gray-600 font-normal">{year}</span>
            </div>
            <div className="border rounded-lg px-1" style={{paddingTop:'2px'}}>
                <button 
                    type="button"
                    className="mr-1 leading-none rounded-lg transition ease-in-out duration-300 inline-flex cursor-pointer hover:bg-gray-100 p-1 items-center"> 
                    <IoChevronBackOutline size={25} onClick={contadorMonthMenos}  className=" text-gray-500 inline-flex leading-none"/>
                </button>
                <div className="border-r inline-flex h-6"/>		
                <button 
                    type="button"
                    className=" ml-1 leading-none rounded-lg transition ease-in-out duration-300 inline-flex items-center cursor-pointer hover:bg-gray-100 p-1" >
                    <IoChevronForwardOutline size={25} onClick={contadorMonthMas}  className=" text-gray-500 inline-flex leading-none " />						  
                </button>
			</div>
        </div>
       
        <div className="grid grid-cols-7 grid-row-6 justify-items-center p-2 text-black">
            
            {

                daysFormat.map(day =>{
                    const data = reminders.reminder.filter(remind => Number(remind.date.split('').splice(8,10).join('')) + 1 === day)
                    
                    return  <DateCalendar 
                    key={day}
                    indice={day}
                    days={howMuchDays} 
                    month={ month}
                    year={year}
                    currentDay={dayNumber}
                    dayStartMonth={dayStartMonth}
                    date={date!}
                    dataRemind = {data}
                />

                })
                    
                    
                       
            }

            
        </div>

    </div>
  )
}
