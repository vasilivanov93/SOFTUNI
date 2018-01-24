function theSongOfTheWheels([arg1]){
    let n = Number(arg1);

    let result = "";
    let password = "";
    let count = 0;

    for(let a = 1; a <= 9; a++){
        for(let b = 1; b <= 9; b++){
            for(let c = 1; c <= 9; c++){
                for(let d = 1; d <= 9; d++){
                    if(a < b && c > d){
                        if(a * b + c * d == n){
                            count++;
                            result += `${a}${b}${c}${d} `;
                            if(count == 4){
                               password = `Password: ${a}${b}${c}${d}`;
                            }
                        } 
                    }
                }
            }
        }    
    }

    if(count > 4){
        console.log(result);
        console.log(password)
    }else if(count < 4){
        console.log(result);
        console.log("No!")
    }
}

theSongOfTheWheels(["11"])