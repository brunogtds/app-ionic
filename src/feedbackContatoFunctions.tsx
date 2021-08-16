function feedbackSocialDist (socialDist: any){

    if (socialDist === undefined){
        return "Não prencheu o questionário"
    } 
    else if ((socialDist === "todoTempo") || (socialDist== "maiorParte")){
        return "string1";
    }
    else if ((socialDist === "menosMetade") || (socialDist == "não")){
        return "string2";
    }
    
}

function feedbackContactN (contactN: any){

    if (contactN === undefined){
        return "Não preencheu o questionário"
    } 
    else if ((contactN === "nenhuma")) {
        return "string1";
    } 
    else {
        return "string2";
    }
}

export {feedbackSocialDist};
export {feedbackContactN};