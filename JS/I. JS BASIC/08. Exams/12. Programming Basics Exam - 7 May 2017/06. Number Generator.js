function numberGenerator([arg1, arg2, arg3, arg4, arg5]) {
    let n = Number(arg1);
    let m = Number(arg2);
    let l = Number(arg3);
    let specialNumber = Number(arg4);
    let controlNumber = Number(arg5);

    let number = 0;

    for(let i = n; i >= 1; i--){
        for(let o = m; o >= 1; o--){
            for(let p = l; p >= 1; p--){
                number = i * 100 + o * 10 + p;

                if(number % 3 == 0){
                    specialNumber += 5
                }else if(number % 10 == 5){
                    specialNumber -= 2;
                }else if(number % 2 == 0){
                    specialNumber *= 2;
                }

                if(specialNumber >= controlNumber){
                    console.log(`Yes! Control number was reached! Current special number is ${specialNumber}.`);
                    return;
                }
            }
        }
    }

    console.log(`No! ${specialNumber} is the last reached special number.`);
}