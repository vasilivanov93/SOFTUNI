function cups([arg1, arg2, arg3]){
    let plannedCups = Number(arg1);
    let masters = Number(arg2);
    let workDays = Number(arg3);

    let workHours = masters * workDays * 8;
    let madeCups = Math.floor(workHours / 5);

    if(madeCups <= plannedCups){
        console.log(`Losses: ${((plannedCups - madeCups) * 4.2).toFixed(2)}`);
    }else{
        console.log(`${((madeCups - plannedCups) * 4.2).toFixed(2)} extra money`);
    }
}