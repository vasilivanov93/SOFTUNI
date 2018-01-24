function evenPowersOfTwo([arg1]){
    let n = Number(arg1);

    let num = 1;
    for(let i = 0; i <= n; i+=2){
        console.log(num);
        num *= 4;
    }  
}