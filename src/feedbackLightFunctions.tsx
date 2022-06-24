function feedbackLight (light: any, lightReg: any){

    if ((light === undefined) || (lightReg === undefined)){
        return ("Não preencheu o questionário")
    }
    else if ((light  === "não") || (lightReg === "muito irregulares")){
        return "string1"
    }
    else if (((light === "sim") || (lightReg !== "muito irregulares"))){
        return "string2"
    }
}

export {feedbackLight};