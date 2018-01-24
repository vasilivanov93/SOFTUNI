function sumOrMultiplication([arg1]) {
    let n = Number(arg1);
    
    let resultSum = "";
    let resultMultiplication = "";

    for(let i= 1; i <= 30; i++){
        for(let o = 1; o <= 30; o++){
            for(let p = 1; p <= 30; p++){
                if((p > i && p > o && o > i && i < o)){
                    if(i + o + p == n){
                        resultSum = `${i} + ${o} + ${p} = ${n}`;
                        console.log(resultSum);
                    }
                }

                if(p < i && p < o && o < i && i > o){
                    if(i * o * p == n){
                        resultMultiplication = `${i} * ${o} * ${p} = ${n}`;
                        console.log(resultMultiplication);
                    }
                }
            }
        }
    }

    if(resultMultiplication == false && resultSum == false){
        console.log("No!");
    }
}