function profit([arg1, arg2, arg3, arg4]){
    let oneLv = Number(arg1);
    let twoLv = Number(arg2);
    let fiveLv = Number(arg3);
    let sum = Number(arg4);

    let result = 0;

    for(let a = 0; a <= oneLv; a++){
        for(let b = 0; b <= twoLv; b++){
            for(let c = 0; c <= fiveLv; c++){
                if(a * 1 + b * 2 + c * 5 == sum){
                    result = `${a} * 1 lv. + ${b} * 2 lv. + ${c} * 5 lv. = ${sum} lv.`;
                    console.log(result);
                }
            }
        }
    }
}