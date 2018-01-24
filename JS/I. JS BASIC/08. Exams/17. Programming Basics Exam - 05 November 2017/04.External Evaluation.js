function externalEvaluation(args) {
    let n = Number(args[0]);

    let countPoor = 0;
    let countSatisfactory = 0;
    let countGood = 0;
    let countVery = 0;
    let countExcellent = 0;

    for (let i = 1; i < args.length; i++) {
        let currentPoint = parseFloat(args[i]);
        
        if(currentPoint <= 22.5){
            countPoor++;
        }else if(currentPoint > 22.5 && currentPoint <= 40.5){
            countSatisfactory++;
        }else if(currentPoint > 40.5 && currentPoint <= 58.5){
            countGood++;
        }else if(currentPoint > 58.5 && currentPoint <= 76.5){
            countVery++;
        }else if(currentPoint > 76.5 && currentPoint <= 100){
            countExcellent++;
        }
    }

    let resultPoor = countPoor / n * 100;
    let resultSatisfactory = countSatisfactory / n * 100;
    let resultGood = countGood / n * 100;
    let resultVery = countVery / n * 100;
    let resultExcellent = countExcellent / n * 100;

    console.log(`${resultPoor.toFixed(2)}% poor marks`);
    console.log(`${resultSatisfactory.toFixed(2)}% satisfactory marks`);
    console.log(`${resultGood.toFixed(2)}% good marks`);
    console.log(`${resultVery.toFixed(2)}% very good marks`);
    console.log(`${resultExcellent.toFixed(2)}% excellent marks`);
}

externalEvaluation(["18", "42", "40", "36", "56", "64", "62", "61", "91", "81", "32", "14", "49", "51", "59", "57", "72", "73", "79"]);
