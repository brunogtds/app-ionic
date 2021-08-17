function feedbackHobbies (hobbiesFreq: any){
    
    if (hobbiesFreq === undefined){
        return ("Não preencheu o questionário")
    } else if  (hobbiesFreq === "nenhuma vez"){
        return "string1";
    }
}

function feedbackExercise (exercise: any){

    if (exercise === undefined){
        return ("Não preencheu o questionário")
    } else if  (exercise  === "sim"){
        return "string1"
    } else if  (exercise === "não"){
        return "string2"
    }
}

export {feedbackHobbies};
export {feedbackExercise};

