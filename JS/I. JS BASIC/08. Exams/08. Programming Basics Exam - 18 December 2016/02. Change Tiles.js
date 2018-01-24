function changeTiles([arg1, arg2, arg3, arg4, arg5, arg6, arg7]){
    let collectedMoney = parseFloat(arg1);
    let widthFloor = parseFloat(arg2);
    let lengthFloor = parseFloat(arg3);
    let sideTriangle = parseFloat(arg4);
    let heightTriangle = parseFloat(arg5);
    let pricePerOneTile = parseFloat(arg6);
    let sumForMaster = parseFloat(arg7);

    let areaFloor = widthFloor * lengthFloor;
    let areaTile = sideTriangle * heightTriangle / 2;
    let needTile = Math.ceil(areaFloor / areaTile) + 5;
    let totalSum = (needTile * pricePerOneTile) + sumForMaster;

    if(totalSum <= collectedMoney){
        console.log(`${(collectedMoney - totalSum).toFixed(2)} lv left.`);
    }else{
        console.log(`You'll need ${(totalSum - collectedMoney).toFixed(2)} lv more.`);
    }
}