function controlNumber([arg1, arg2, arg3]){
    let n = Number(arg1);
    let m = Number(arg2);
    let controlNumber = Number(arg3);

    let counter = 0;
    let sum = 0;

    for(let i = 1; i <= n; i++){
        for(let o = m; o >= 1; o--){
            counter++;
            sum += (i * 2) + (o * 3);

            if(sum >= controlNumber){
                console.log(`${counter} moves`);
                console.log(`Score: ${sum} >= ${controlNumber}`);
                return;
            }
        }
    }
    
    console.log(`${counter} moves`);
}