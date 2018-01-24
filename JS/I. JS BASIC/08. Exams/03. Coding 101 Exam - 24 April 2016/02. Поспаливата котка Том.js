function sleepTom([arg1]){
    let number = Number(arg1);

    let weekDays = number * 127;
    let workDays = (365 - number) * 63;
    let total = weekDays + workDays;

    let hour = total % 24;
    let minutes = total / 60;

    if(30000 > total){
        let diff = 30000 - total;
        let hour = Math.floor(diff / 60);
        let minutes = diff % 60;
        console.log("Tom sleeps well");
        console.log(`${hour} hours and ${minutes} minutes less for play`);
    }else{
        let diff = total - 30000;
        let hour = Math.floor(diff / 60);
        let minutes = diff % 60;
        console.log("Tom will run away");
        console.log(`${hour} hours and ${minutes} minutes more for play`)
    }
}