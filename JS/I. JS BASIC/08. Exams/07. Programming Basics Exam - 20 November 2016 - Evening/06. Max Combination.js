function maxCombination([arg1, arg2, arg3]){
    let start = Number(arg1);
    let end = Number(arg2);
    let maxNumberCombination = Number(arg3);

    let counter = 0;
    let result = "";

    for(let i = start; i <= end; i++){
        for(let o = start; o <= end; o++){
            if(counter < maxNumberCombination){                
                result += `<${i}-${o}>`;    
            } 
            counter++; 
        }
    }
    console.log(result);
}