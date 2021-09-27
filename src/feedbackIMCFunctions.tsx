function IMC (age: number, sex: string, weight: number, height: number){

    var heightM= (height/100)
    var imc = weight/(heightM * heightM)

    if ((age === undefined) || (sex === undefined) || (weight === undefined) || (height === undefined)){
        return "Não preencheu o formulário"
    } else if (age >= 18 && age <= 64){
        if (imc < 18.5){
            return "adp 18-64"
        } else if ((imc >= 18.5) && (imc <= 24.9)){
            return "pn 18-64"
        } else if ((imc >= 25.0) && (imc <= 29.9 ) && ((sex === "masculino") || (sex === "n/a"))){
            return "s m 18-64"
        } else if ((imc >= 25.0) && (imc <= 29.9) && (sex === "feminino")){
            return "s f 18-64"
        } else if ((imc >= 30) &&  ((sex === "masculino") || (sex === "n/a"))){
            return "o m 18-64"
        } else if ((imc >= 30) && (sex === "feminino")){
            return "o f 18-64"
        }
    } else if (age > 64){
        if  (imc <= 22.9 ){
            return "adp 65"
        } else if ((imc >= 23) && (imc <= 30.9)){
            return "pn 65"
        } else if (imc >= 31){
            return "o 65"
        }
    }

}

export {IMC};