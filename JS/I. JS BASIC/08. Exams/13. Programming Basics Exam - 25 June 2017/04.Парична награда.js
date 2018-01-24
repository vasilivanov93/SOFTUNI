function moneyPrize(args) {
    let projectPart = Number(args[0]);
    let moneyPerOnePoint = parseFloat(args[1]);

    let pointEvenPosition = 0;
    let pointOddPosition = 0;

    for(let i = 2; i <= projectPart + 1; i++){
        let currentPoint = Number(args[i]);
        if(i % 2 == 1){
            pointEvenPosition += currentPoint * 2;
        }else{
            pointOddPosition += currentPoint;
        }
    }

    let totalPoint = pointEvenPosition + pointOddPosition;
    let prize = moneyPerOnePoint * totalPoint;
    
    console.log(`The project prize was ${prize.toFixed(2)} lv.`)
}