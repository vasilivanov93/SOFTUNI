function bikeRace([arg1, arg2, arg3]){
    let numberJuniors = Number(arg1);
    let numberSeniors = Number(arg2);
    let typeRoute = arg3;

    let sum = 0;
    let cost = 0;
    let sumJuniorsAndSeniors = numberJuniors + numberSeniors;

    if(typeRoute == "trail"){
        sum = parseFloat(numberJuniors * 5.50) + parseFloat(numberSeniors * 7);
        cost = parseFloat(sum * 0.05);

        let diffTrail = parseFloat(sum - cost);
        console.log(diffTrail.toFixed(2));
    }else if(typeRoute == "cross-country"){
        sum = parseFloat(numberJuniors * 8) + parseFloat(numberSeniors * 9.50);
        cost = parseFloat(sum * 0.05);

        if(sumJuniorsAndSeniors >= 50){
            let diff = parseFloat(sum - cost);
            let discount = parseFloat(diff * 0.25);
            let diffCross = parseFloat(diff - discount);
            console.log(diffCross.toFixed(2));
        }else{
            let diffCrossCountry = parseFloat(sum - cost);
            console.log(diffCrossCountry.toFixed(2));
        }
    }else if(typeRoute == "downhill"){
        sum = parseFloat(numberJuniors * 12.25) + parseFloat(numberSeniors * 13.75);
        cost = parseFloat(sum * 0.05);

        let diffDownhill = parseFloat(sum - cost);
        console.log(diffDownhill.toFixed(2));
    }else if(typeRoute == "road"){
        sum = parseFloat(numberJuniors * 20) + parseFloat(numberSeniors * 21.50);
        cost = parseFloat(sum * 0.05);

        let diffRoad = parseFloat(sum - cost);
        console.log(diffRoad.toFixed(2));
    }
}