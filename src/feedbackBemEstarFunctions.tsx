function bemEstar(somaGad: number, somaPHQ: number, phq09: number ){

    if ((somaGad === undefined) || (somaPHQ === undefined)  || (phq09 === undefined)){
        return ("Não preencheu  formulário")
    } 

    if (phq09 >=1){
        return "string1"
    } 
    if ((somaGad >=15) && (somaPHQ >= 20)){
        return "string2"
    }else if ((somaGad >=10 && somaGad < 15) && (somaPHQ >=10 && somaPHQ < 20)){
        return "string3"
    }

    {/*}
    if ((somaGad >= 5) && (somaPHQ >= 15) && (phq09 == 0)){
        return "string1"
    } else if ((somaGad >= 5) && (somaPHQ >= 15) && (phq09 >= 1)){
        return "string1s"
    } else if ((somaGad  >= 5) && (somaPHQ >= 5 && somaPHQ <= 14) && (phq09 == 0)){
        return "string2"
    } else if ((somaGad  >= 5) && (somaPHQ >= 5 && somaPHQ <= 14) && (phq09 >= 1)){
        return "string2s"
    } else if ((somaGad >= 5) && (somaPHQ <= 4) && (phq09 == 0)){
        return "string3"
    } else if ((somaGad >= 5) && (somaPHQ <= 4) && (phq09 >= 1)){ 
        return "string3s"
    } else if ((somaGad >= 1 && somaGad <=4) && (somaPHQ >=15) && (phq09 == 0)){
        return "string4"
    } else if ((somaGad >= 1 && somaGad <=4) && (somaPHQ >=15) && (phq09 >= 1)){
        return "string4s"
    } else if ((somaGad >=1 && somaGad <=4) && (somaPHQ >=5 && somaPHQ <=14) && (phq09 == 0)){
        return "string5"
    } else if ((somaGad >=1 && somaGad <=4) && (somaPHQ >=5 && somaPHQ <=14) && (phq09 >= 1)){
        return "string5s"
    } else if ((somaGad >=1 && somaGad <=4) && (somaPHQ <=4) && (phq09 == 0)){
        return "string6"
    }  else if ((somaGad >=1 && somaGad <=4) && (somaPHQ <=4) && (phq09 >= 1)){
        return "string6s"
    } else if ((somaGad ==0) && (somaPHQ >= 15) && (phq09 == 0)){
        return "string7"
    } else if ((somaGad ==0) && (somaPHQ >= 15) && (phq09 >= 1)){
        return "string7s"
    } else  if ((somaGad ==0) && (somaPHQ >=5 && somaPHQ <=14) && (phq09 ==0) ){
        return "string8"
    } else if ((somaGad ==0) && (somaPHQ >=5 && somaPHQ <=14) && (phq09 >=1) ){
        return "string8s"
    } else if ((somaGad ==0) && (somaPHQ <=4) && (phq09 >=1)){
        return "string9"
    } */}
}

export {bemEstar};