function workout(args) {
    let n = Number(args[0]);
    let m = Number(args[1]);

    let result = m;
    let totalKm = m;

    for (let i = 2; i <= args.length - 1; i++) {
        let currentPercent = Number(args[i]);
        result += (result * currentPercent / 100);
        totalKm += result;
    }

    if(totalKm >= 1000){
        console.log(`You've done a great job running ${Math.ceil(totalKm - 1000)} more kilometers!`);
    }else{
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalKm)} more kilometers`);
    }
}

workout(["5", "30", "10", "15", "20" , "5", "12"]);