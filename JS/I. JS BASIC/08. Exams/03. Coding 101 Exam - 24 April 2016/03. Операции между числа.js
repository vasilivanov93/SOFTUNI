function operationsBetweenNumbers([arg1, arg2, arg3]) {
    let n1 = Number(arg1);
    let n2 = Number(arg2);
    let symbol = arg3;

    let result = 0;

    if(symbol == "+"){
        result = n1 + n2;
        if(result % 2 == 0){
            console.log(`${n1} + ${n2} = ${result} - even`);
        }else{
            console.log(`${n1} + ${n2} = ${result} - odd`);
        }       
    }else if(symbol == "-"){
        result = n1 - n2;
        if(result % 2 == 0){
            console.log(`${n1} - ${n2} = ${result} - even`);
        }else{
            console.log(`${n1} - ${n2} = ${result} - odd`);
        } 
    }else if(symbol == "*"){
        result = n1 * n2;
        if(result % 2 == 0){
            console.log(`${n1} * ${n2} = ${result} - even`);
        }else{
            console.log(`${n1} * ${n2} = ${result} - odd`);
        } 
    }else if(symbol == "/"){
        result = n1 / n2;
        if(n2 > 1){
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
        }else{
            console.log(`Cannot divide ${n1} by zero`);
        }
    }else if(symbol == "%"){
        result = n1 % n2;
        if(n2 > 1){
            console.log(`${n1} % ${n2} = ${result}`);
        }else{
            console.log(`Cannot divide ${n1} by zero`);
        }
    }
}

operationsBetweenNumbers(["10", "2", "+"])