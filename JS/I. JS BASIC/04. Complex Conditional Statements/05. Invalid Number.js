function invalidNumber([arg1]){
    let number = Number(arg1);

    if(number == 0){
        console.log();
    }else if(number < 100 || number > 200){
        console.log("invalid")
    }
}