function onTimeForTheExam([arg1, arg2, arg3, arg4]) {
    let hourExam = Number(arg1);
    let minutesExam = Number(arg2);
    let hourArrive = Number(arg3);
    let minutesArrive = Number(arg4);

    let totalMinutesExam = (hourExam * 60) + minutesExam;
    let totalMinutesArrive = (hourArrive * 60) + minutesArrive;

    let late = "Late";
    let onTime = "On time";
    let early = "Early";

    console.log(totalMinutesExam);
    console.log(totalMinutesArrive);

    if(totalMinutesExam < totalMinutesArrive){
        console.log(late);
        if(Math.abs(totalMinutesArrive - totalMinutesExam) <= 59){
            console.log(`${totalMinutesArrive - totalMinutesExam} minutes after the start`);
        }else{
            let diff = totalMinutesArrive - totalMinutesExam;
            let hour = diff / 60;
            let minutes = diff % 60;
            if(minutes <= 9){
                console.log(`${Math.floor(hour)}:0${minutes} hours after the start`);
            }else{
                console.log(`${Math.floor(hour)}:${minutes} hours after the start`);
            }
        }
    }else if(totalMinutesExam == totalMinutesArrive || Math.abs(totalMinutesArrive - totalMinutesExam) <= 30){
        console.log(onTime);
        if(Math.abs(totalMinutesArrive - totalMinutesExam) <= 30 && Math.abs(totalMinutesArrive - totalMinutesExam) > 0){
            console.log(`${Math.abs(totalMinutesArrive - totalMinutesExam)} minutes before the start`);
        }
    }else if(Math.abs(totalMinutesArrive - totalMinutesExam) > 30){
        console.log(early);
        if(Math.abs(totalMinutesArrive - totalMinutesExam) <= 59){
            console.log(`${Math.abs(totalMinutesArrive - totalMinutesExam)} minutes before the start`);
        }else{
            let diff2 = totalMinutesArrive - totalMinutesExam;
            let hour2 = diff2 / 60;
            let minutes2 = diff2 % 60;
            if(Math.abs(minutes2) <= 9){
                console.log(`${Math.floor(Math.abs(hour2))}:0${Math.abs(minutes2)} hours before the start`);
            }else{
                console.log(`${Math.floor(Math.abs(hour2))}:${Math.abs(minutes2)} hours before the start`);
            }
        }
    }
}