function feedbackFumo (smoke: any){

    if (smoke === "undefined"){
        return "Não preencheu"
    } else if (smoke === "sim"){
        return "string01"
    }
}

function feedbackAlcool(cage04: any){

    if (cage04 === undefined){
        return "Não preencheu"
    }  else if (cage04 === "sim"){
        return "string01"
    }
}

function feedbackMed (medsOff: any){
    
    if (medsOff === undefined){
        return "Não preencheu"
    } else if (medsOff === "sim"){
        return "string01"
    }
}

export {feedbackFumo};
export {feedbackAlcool};
export {feedbackMed};