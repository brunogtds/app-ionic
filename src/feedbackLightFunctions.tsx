function feedbackLight (light: any, lightReg: any, lightFreq: any){

    if ((light === undefined) || (lightReg === undefined) || (lightFreq === undefined)) {
        return ("Não preencheu o questionário")
    }
    if (light === "não"){
        return "string1"
    }
    else if ((lightFreq  === 0) || ((lightFreq !== 2) && ((lightReg === 1) || (lightReg === 0)))){
        return "string2"
    }
    else if ((lightFreq === 2) || ((lightFreq === 1) && ((lightReg !== 1) || (lightReg !== 0)))){
        return "string3"
    }
}

export {feedbackLight};