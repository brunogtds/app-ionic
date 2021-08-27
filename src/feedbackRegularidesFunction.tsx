function regularides(alimento: string, sono: string){

    console.log('alimento: ' + alimento);
    console.log('sono: ' + sono);
    if (((alimento) || (sono)) === undefined){
        return "não respondeu o formulário"
    } else if ((alimento === "regulares" || alimento === "muito regulares") && (sono === "irregulares" || sono === "muito irregulares")){
        return 1;
    } else if ((alimento === "regulares" || alimento === "muito regulares") && (sono === "regulares" || sono === "muito regulares")){
        return 2;
    } else if ((alimento === "irregulares" || alimento === "muito irregulares") && (sono === "irregulares" || sono === "muito irregulares")){
        return 3;
    } else if ((alimento === "irregulares" || alimento === "muito irregulares") && (sono === "regulares" || sono === "muito regulares")){
        return 4;
    }

}

export {regularides};