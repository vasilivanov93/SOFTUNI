function transportPrice([arg1, arg2]){
    let n = Number(arg1);
    let dayOrNight = arg2;
    let result = 0;

    if(n < 20){
        if(dayOrNight == "day"){
            result = (0.79 * n) + 0.70;
        }else{
            result = (0.90 * n) + 0.70;
        }
    }else if(n >= 20 && n < 100){
        result = 0.09 * n;
    }else{
        result = 0.06 * n;
    }

    console.log(result.toFixed(2));
}