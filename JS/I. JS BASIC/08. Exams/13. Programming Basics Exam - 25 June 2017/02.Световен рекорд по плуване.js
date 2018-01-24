function worldSwimmingRecord([arg1, arg2, arg3]) {
    let recordInSecond = parseFloat(arg1);
    let rangeInM = parseFloat(arg2);
    let timeInSecondPer1M = parseFloat(arg3);

    let totalSeconds = rangeInM * timeInSecondPer1M;
    let bonusSecond = Math.floor(rangeInM / 15) * 12.5;
    let totalTime = totalSeconds + bonusSecond;

    if(recordInSecond <= totalTime){
        console.log(`No, he failed! He was ${(totalTime - recordInSecond).toFixed(2)} seconds slower.`);
    }else{
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    }
}