function multiplyTable([agr1]) {
    let n = Number(agr1);

    let firstNumber = Math.floor(n / 100);
    let secondNumber = Math.floor((n / 10) % 10);
    let thirdNumber = Math.floor(n % 10);

    let result = "";
    
    for (let a = 1; a <= thirdNumber; a++) {
        for (let b = 1; b <= secondNumber; b++) {
            for (let c = 1; c <= firstNumber; c++) {
                if(a > 0 && b > 0 && c > 0){
                    result = `${a} * ${b} * ${c} = ${a * b * c};`;
                    console.log(result);
                }
            }
        }
    } 
}

multiplyTable(["324"])