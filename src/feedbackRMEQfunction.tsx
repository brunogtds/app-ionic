function feedbackRMEQ (dataSomaRmeq: number){

    if ((dataSomaRmeq === undefined)) {
        return ("Não preencheu o questionário")
    }
    if (dataSomaRmeq >= 17){
        return "mat"
    }
    else if ((dataSomaRmeq >= 12 && dataSomaRmeq < 17)){
        return "int"
    } else if (dataSomaRmeq < 12){
        return "ves"
    } 
}

export {feedbackRMEQ};