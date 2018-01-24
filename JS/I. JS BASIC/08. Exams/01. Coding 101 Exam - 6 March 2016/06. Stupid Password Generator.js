function stupidPasswordGenerator([arg1, arg2]){
    let n = Number(arg1);
    let l = Number(arg2);
    let result = "";

    for(let a = 1; a <= n; a++){
        for(let s = 1; s <= n; s++){
            for(let d = 97; d < 97 + l; d++){
                for(let f = 97; f < 97 + l; f++){
                    for(let g = 1; g <= n; g++){
                        if(g > a && g > s){
                            result += `${a}${s}${String.fromCharCode(d)}${String.fromCharCode(f)}${g} `; 
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}