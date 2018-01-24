function factorial([arg1]){
    let n = Number(arg1);
    let factorial = 1;

    do{
        factorial *= n;
        n--;
    }while(n > 1){
        console.log(factorial);
    }
}