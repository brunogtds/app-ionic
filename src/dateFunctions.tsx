import { pathToFileURL } from "url";
import {format, sub} from 'date-fns';

function pad(number: any) {
    var result = "" + number;
    if (result.length < 2) {
        result = "0" + result;
    }

    return result;
}

function millisToDaysHoursMinutes(millis : number) {
    var cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        d = Math.floor(millis / cd),
        h = Math.floor( (millis - d * cd) / ch),
        m = Math.round( (millis - d * cd - h * ch) / 60000)

        if( m === 60 ){
            h++;
            m = 0;
          }
        if( h === 24 ){
            d++;
            h = 0;
        }
          
    if(d < 0 || h < 0 || m < 0){
        return "Modulo liberado"
        
    } else{
        return "Ainda faltam: " + d + " dia(s), " + pad(h) + " hora(s) e " + pad(m) + " minuto(s) para a liberação dessa parte!";
    }
}

  //Checking the dates

function verifyTimeLeft(submitDate : any){
    
    if(submitDate === undefined){
        return "Falta preencher a parte anterior"
    } else{
    
        var today = Date.now()
        //add 86400000*14 = add 14 days in milliseconds
        var dateLiberaModulo = submitDate.toDate().valueOf() + 86400000*14

        //var dateLiberaModulo = submitDate.toDate().valueOf() + 120000
        
      //  console.log("Data do preenchimento " + submitDate.toDate())
        var dateDifference = dateLiberaModulo - today.valueOf()
        
        return millisToDaysHoursMinutes(dateDifference)
    }
}

function converToHoursAndMinutes(hours: number)
{ 
    let hour : number = Math.trunc(hours)  
    let minutes : number = Math.round((hours - hour) * 60)
    return hour + ":" + minutes     
}

function diffHoursMinutes(dateWakeUp: string , dateSleep: string){

 
    let wakeUpTimestamp = format(new Date(dateWakeUp), 'HH.mm').toString(); 
    let sleepTimestamp = format(new Date(dateSleep), 'HH.mm').toString();

   // console.log("********")

    let wakeUpTimeArray = wakeUpTimestamp.split('.')
    let sleepTimeArray = sleepTimestamp.split('.')

    let wakeUpHour : number = Number(wakeUpTimeArray[0])
    let wakeUpMinute : number = Number(wakeUpTimeArray[1])
    let sleepHour : number = Number(sleepTimeArray[0])
    let sleepMinute : number = Number(sleepTimeArray[1])

   // console.log('wakeUpHour = ' + wakeUpHour)
   // console.log('wakeUpMinute = ' + wakeUpMinute)
   // console.log('sleepHour = ' + sleepHour)
   // console.log('sleepMinute = ' + sleepMinute)

    //transform the minutes to hours
    wakeUpMinute = wakeUpMinute / 60
    sleepMinute = sleepMinute / 60

    //add to get the time initial timestamps in hours rather than hours and minutes
    wakeUpHour += wakeUpMinute
    sleepHour += sleepMinute

    if (sleepHour > 18){
        sleepHour =  sleepHour - 24;
    }

    let duration = wakeUpHour - sleepHour;
    console.log("duration: " + duration)
    console.log("durationHourMinute: " + converToHoursAndMinutes(duration))
    return duration 
   
}

function timeStampToFloat(date: string){
    let timestamp = format(new Date(date), 'HH.mm').toString(); 
    let timestampArray = timestamp.split('.')

    let timestampHour : number = Number(timestampArray[0])
    let timestampMinute : number = Number(timestampArray[1])

    timestampMinute = timestampMinute / 60
    timestampHour += timestampMinute

    if (timestampHour > 18){
        timestampHour = timestampHour - 24
    }

    return timestampHour
}

export { pad };
export { millisToDaysHoursMinutes };
export { verifyTimeLeft };
export {diffHoursMinutes};
export {timeStampToFloat}