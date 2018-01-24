function dogHouse([arg1, arg2]){
    let lengthA = Number(arg1);
    let heightB = Number(arg2);

    let twoSide = lengthA * (lengthA / 2) * 2;
    let rearWall = ((lengthA / 2) * (lengthA / 2)) + ((lengthA / 2 * (heightB - lengthA / 2)) / 2);
    let entrance = (lengthA / 5) * (lengthA / 5);
    let frontWall = rearWall- entrance;
    let totalArenaOfSide = twoSide + rearWall + frontWall;
    let greenPaint = totalArenaOfSide / 3;
    let roof = lengthA * (lengthA / 2) * 2;
    let redPaint = roof / 5;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}