function twoNumbersSum([arg1, arg2, arg3]){
    let start = Number(arg1);
    let end = Number(arg2);
    let magicNumber = Number(arg3);

    let counter = 0;

    for(let i = start; i >= end; i--){
        for(let o = start; o >= end; o--){
            counter++;
            if(i + o == magicNumber){
                console.log(`Combination N:${counter} (${i} + ${o} = ${magicNumber})`);
                return;
            }       
        } 
         
    }
    console.log(`${counter} combinations - neither equals ${magicNumber}`);  
}