function threeBrothers([arg1, arg2, arg3, arg4]) {
    let timeFirstBrother = parseFloat(arg1);
    let timeSecondBrother =  parseFloat(arg2);
    let timeThirdBrother = parseFloat(arg3);
    let timeForFishingFather = parseFloat(arg4);

    let totalTime = 1 / ((1 / timeFirstBrother)+ (1 / timeSecondBrother)+ (1 / timeThirdBrother));
    let timeOff = totalTime + (totalTime * 0.15);
    let timeLeft = timeForFishingFather - timeOff;
    let diff = timeOff - timeForFishingFather;
    console.log(`Cleaning time: ${timeOff.toFixed(2)}`);

    if(timeLeft > 0){
        console.log(`Yes, there is a surprise - time left -> ${Math.floor(timeLeft)} hours.`)
    }else{
        console.log(`No, there isn't a surprise - shortage of time -> ${Math.ceil(diff)} hours.`)
    }  
}

threeBrothers(["3", "4", "5", "3.6"]);
threeBrothers(["45", "56", "76", "20"]);
