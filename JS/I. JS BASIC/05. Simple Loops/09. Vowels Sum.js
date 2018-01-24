function vowelsSum([arg1]){
    let s = arg1;

    let sum = 0;

    for(let i = 1; i <= s.length; i++){
        let currentWords = s[i];

        if(currentWords == "a"){
            sum += 1; 
        }else if(currentWords == "e"){
            sum += 2;
        }else if(currentWords == "i"){
            sum += 3;
        }else if(currentWords == "o"){
            sum += 4;
        }else if(currentWords == "u"){
            sum += 5;
        }
    }

    console.log(sum);
}