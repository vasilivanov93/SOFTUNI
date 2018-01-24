function firm([arg1, arg2, arg3]){
    let needHours = Number(arg1);
    let days = Number(arg2);
    let numberEmployeesWorkOvertime = Number(arg3);

    let hoursForWork = parseFloat((days - (days * 0.1)) * 8);

    let hoursOvertime = numberEmployeesWorkOvertime * days * 2;
    let totalHours = Math.floor(hoursForWork + hoursOvertime);

    if(totalHours >= needHours){
        console.log(`Yes!${totalHours - needHours} hours left.`);
    }else{
        console.log(`Not enough time!${needHours - totalHours} hours needed.`);
    }
}