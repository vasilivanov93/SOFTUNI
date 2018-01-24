function magicNumber([arg1]){
    let n = Number(arg1);
    let result = "";

    for(let a = 1; a <= 9; a++){
        for(let b = 1; b <= 9; b++){
            for(let c = 1; c <= 9; c++){
                for(let d = 1; d <= 9; d++){
                    for(let f = 1; f <= 9; f++){
                        for(let g = 1; g <= 9; g++){
                            if(a * b * c * d * f * g == n){
                                result += `${a}${b}${c}${d}${f}${g} `;
                            } 
                        }
                    }
                }
            }
        }
    }
    
    console.log(result);
}