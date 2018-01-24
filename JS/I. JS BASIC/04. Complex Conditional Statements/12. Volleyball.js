function volleyball([arg1, arg2, arg3]){
    let typeYear = arg1;
    let p = Number(arg2);
    let h = Number(arg3);

    let weeksInSofia = 48 - h;
    let saturdayGames = weeksInSofia * (3 / 4);
    let gameInHoliday = p * (2 /3);
    let totalGameOfWeekAndHoliday = saturdayGames + h + gameInHoliday;

    if(typeYear == "leap"){
        let bonusGameInLeapYear = totalGameOfWeekAndHoliday * 0.15;
        let totalGame = bonusGameInLeapYear + totalGameOfWeekAndHoliday;
        console.log(Math.floor(totalGame));
    }else if(typeYear == "normal"){
        console.log(Math.floor(totalGameOfWeekAndHoliday));
    }
}