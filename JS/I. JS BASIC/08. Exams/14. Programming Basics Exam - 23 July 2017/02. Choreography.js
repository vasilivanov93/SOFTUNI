function choreography([arg1, arg2, arg3]){
    let numberSteps = Number(arg1);
    let numberDancer = Number(arg2);
    let numberDaysOfLearn = Number(arg3);

    let stepsPerDay = Math.ceil((numberSteps / numberDaysOfLearn) / numberSteps * 100);
    let percent = stepsPerDay / numberDancer;
    if(stepsPerDay <= 13){
        console.log(`Yes, they will succeed in that goal! ${percent.toFixed(2)}%.`);
    }else{
        console.log(`No, They will not succeed in that goal! Required ${percent.toFixed(2)}% steps to be learned per day.`);
    }
}