function feedbackLight (lightFreq: any, light: any, lightReg: any){

    if ((lightFreq === undefined) || (light === undefined) || (lightReg === undefined)){
        return ("Não preencheu o questionário")
    }
    else if ((lightFreq  === "nunca") || (lightFreq === "menosMetade") ||  (light  === "não me exponho a luz natural") || (lightReg === "muito irregulares")){
        return "string1"
    }
    else if (((lightFreq === "maisMetade") || (lightFreq === "todosDias")) && ((light !== "não me exponho a luz natural") || (lightReg !== "muito irregulares"))){
        return "string2"
    }
}

export {feedbackLight};