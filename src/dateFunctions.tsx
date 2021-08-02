import { pathToFileURL } from "url";

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
        
        console.log("Data do preenchimento " + submitDate.toDate())
        var dateDifference = dateLiberaModulo - today.valueOf()
        
        return millisToDaysHoursMinutes(dateDifference)
    }
}

export { pad };
export { millisToDaysHoursMinutes };
export { verifyTimeLeft };
