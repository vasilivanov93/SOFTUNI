function schoolCamp([arg1, arg2, arg3, arg4]) {
    let season = arg1;
    let typeGroup = arg2;
    let numberStudent = Number(arg3);
    let numberDays = Number(arg4);

    let sum = 0;

    if(season == "Winter"){
        if(typeGroup == "girls" || typeGroup == "boys"){
            sum = numberStudent * 9.60 * numberDays;
        }else if(typeGroup == "mixed"){
            sum = numberStudent * 10 * numberDays;
        }
    }else if(season == "Spring"){
        if(typeGroup == "girls" || typeGroup == "boys"){
            sum = numberStudent * 7.20 * numberDays;
        }else if(typeGroup == "mixed"){
            sum = numberStudent * 9.50 * numberDays;
        }
    }else if(season == "Summer"){
        if(typeGroup == "girls" || typeGroup == "boys"){
            sum = numberStudent * 15 * numberDays;
        }else if(typeGroup == "mixed"){
            sum = numberStudent * 20 * numberDays;
        }
    }

    if(numberStudent >= 50){
        sum -= sum /2;
    }else if(numberStudent >= 20 && numberStudent < 50){
        sum -= sum * 0.15;
    }else if(numberStudent >= 10 && numberStudent < 20){
        sum -= sum * 0.05;
    }

    if(season == "Winter" && typeGroup == "girls"){
        console.log(`Gymnastics ${sum.toFixed(2)} lv.`);
    }else if(season == "Winter" && typeGroup == "boys"){
        console.log(`Judo ${sum.toFixed(2)} lv.`);
    }else if(season == "Winter" && typeGroup == "mixed"){
        console.log(`Ski ${sum.toFixed(2)} lv.`);
    }

    if(season == "Spring" && typeGroup == "girls"){
        console.log(`Athletics ${sum.toFixed(2)} lv.`);
    }else if(season == "Spring" && typeGroup == "boys"){
        console.log(`Tennis ${sum.toFixed(2)} lv.`);
    }else if(season == "Spring" && typeGroup == "mixed"){
        console.log(`Cycling ${sum.toFixed(2)} lv.`);
    }

    if(season == "Summer" && typeGroup == "girls"){
        console.log(`Volleyball ${sum.toFixed(2)} lv.`);
    }else if(season == "Summer" && typeGroup == "boys"){
        console.log(`Football ${sum.toFixed(2)} lv.`);
    }else if(season == "Summer" && typeGroup == "mixed"){
        console.log(`Swimming ${sum.toFixed(2)} lv.`);
    }
}