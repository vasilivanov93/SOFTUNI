function barcodeGenerator([arg1, arg2]) {
    let start = Number(arg1);
    let end = Number(arg2);

    let firstStart = Math.floor(start / 1000);
    let secondStart = Math.floor((start / 100) % 10);
    let thirdStart = Math.floor((start / 10) % 10)
    let fourthStart = Math.floor(start % 10);
    
    let firstEnd = Math.floor(end / 1000);
    let secondEnd = Math.floor((end / 100) % 10);
    let thirdEnd = Math.floor((end / 10) % 10);
    let fourthEnd = Math.floor(end % 10);

    let result = "";

    for (let i = firstStart; i <= firstEnd; i++){
        for (let j = secondStart; j <= secondEnd; j++){
            for (let k = thirdStart; k <= thirdEnd; k++){
                for (let l = fourthStart; l <= fourthEnd; l++){
                    if (i % 2 != 0 && j % 2 != 0 && k % 2 != 0 && l % 2 !=0 ){
                        result += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }

    console.log(result);
}

barcodeGenerator(["2345", "6789"])