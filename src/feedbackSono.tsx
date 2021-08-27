function feedbackSono (dateWakeUpFD: string, dateSleepFD: string, dateWakeUp2: string, dateSleep2: string){

    if ((dateWakeUp2 || dateSleep2) === undefined || "undefined" || null){
        return "valores inválidos"
    } else {
        return "valores válidos"
    }
}

export {feedbackSono};