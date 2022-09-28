function IMC (age: number, sex: string, weight: number, height: number){

    var heightM= (height/100)
    var imc = weight/(heightM * heightM)

    if ((age === undefined) || (sex === undefined) || (weight === undefined) || (height === undefined)){
        return "Não preencheu o formulário"
    } else if (age >= 18 && age <= 64){
        if (imc < 18.5){
            return "string1"
        } else if ((imc >= 18.5) && (imc <= 24.9)){
            return "string2"
        } else if (imc > 25.0) {
            return "string3"
        } 
    } else if (age > 64){
        if  (imc < 18.5 ){
            return "string4"
        } else if ((imc >= 18.5) && (imc <= 24.9)){
            return "string5"
        } else if (imc > 25){
            return "string6"
        }
    }

}

export {IMC};