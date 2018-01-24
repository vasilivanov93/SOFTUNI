function workHours([arg1, arg2, arg3]){
    let needHour = Number(arg1);
    let numberMaster = Number(arg2);
    let workDays =Number(arg3);

    let workHour = numberMaster * workDays * 8;

    if(workHour <= needHour){
        console.log(`${needHour - workHour} overtime`);
        console.log(`Penalties: ${(needHour - workHour) * workDays}`);
    }else{
        console.log(`${workHour - needHour} hours left`);
    }
}