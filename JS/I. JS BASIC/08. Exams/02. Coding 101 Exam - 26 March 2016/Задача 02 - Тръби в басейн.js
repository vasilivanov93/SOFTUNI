function vegetableExchange([arg1, arg2, arg3, arg4]){
    let v = Number(arg1);
    let p1 = Number(arg2);
    let p2 = Number(arg3);
    let h = parseFloat(arg4);

    let waterPerHourP1 = p1 * h;
    let waterPerHourP2 = p2 * h;
    let totalWater = parseFloat(waterPerHourP1 + waterPerHourP2);

    if(totalWater <= v){
        let fullPool = parseInt((totalWater) / v * 100);
        let p1InPercent = parseInt((waterPerHourP1 / totalWater) * 100);
        let p2InPercent = parseInt((waterPerHourP2 / totalWater) * 100);
        console.log(`The pool is ${fullPool}% full. Pipe 1: ${p1InPercent}%. Pipe 2: ${p2InPercent}%.`)
    }
    if(totalWater > v){
        console.log(`For ${h} hours the pool overflows with ${(totalWater - v).toFixed(1)} liters.`)
    }
}