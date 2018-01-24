function numberInRange1To100(args){
    let i = 0;
    let num = Number(args[i]);
    while(num < 1 || num > 100){
        i++;
        console.log("Invalid number!");
        num = Number(args[i]);
    }

    console.log(`The number is: ${num}`)
}