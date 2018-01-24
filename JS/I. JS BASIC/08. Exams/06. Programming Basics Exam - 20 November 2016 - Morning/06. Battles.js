function battles([arg1, arg2, arg3]){
    let firstPlayerPakemon = Number(arg1);
    let secondPlayerPakemon = Number(arg2);
    let maxNumberBattle = Number(arg3);

    let counter = 0
    let result = "";

    for(let i = 1; i <= firstPlayerPakemon; i++){
        for(let o = 1; o <= secondPlayerPakemon; o++){
            if(counter < maxNumberBattle){                
                result += `(${i} <-> ${o}) `;    
            } 
            counter++; 
        }
    }
    console.log(result);
}