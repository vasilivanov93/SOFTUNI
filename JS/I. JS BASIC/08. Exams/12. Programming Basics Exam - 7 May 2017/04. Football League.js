function footballLeague(args) {
    let capacityStation = Number(args[0]);
    let numberAllFens = Number(args[1]);

    let countA = 0;
    let countB = 0;
    let countV = 0;
    let countG = 0;

    for(let i = 2; i <= numberAllFens + 1; i++){
        let currentFen = args[i];

        if(currentFen == "A"){
            countA++;
        }else if(currentFen == "B"){
            countB++;
        }else if(currentFen == "V"){
            countV++;
        }else if(currentFen == "G"){
            countG++;
        }
    }

    let percentA = countA / numberAllFens * 100;
    let percentB = countB / numberAllFens * 100;
    let percentV = countV / numberAllFens * 100;
    let percentG = countG / numberAllFens * 100;
    let percent = numberAllFens / capacityStation * 100;

    console.log(`${percentA.toFixed(2)}%`);
    console.log(`${percentB.toFixed(2)}%`);
    console.log(`${percentV.toFixed(2)}%`);
    console.log(`${percentG.toFixed(2)}%`);
    console.log(`${percent.toFixed(2)}%`);
}