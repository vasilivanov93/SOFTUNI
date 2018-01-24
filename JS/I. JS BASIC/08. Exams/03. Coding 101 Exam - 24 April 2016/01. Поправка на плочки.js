function repairOnTile([arg1, arg2, arg3, arg4, arg5]){
    let n = Number(arg1);
    let w = parseFloat(arg2);
    let l = parseFloat(arg3);
    let m = Number(arg4);
    let o = Number(arg5);

    let areaSquare = n * n;
    let bench = m * o;
    let covaregeArea = areaSquare - bench;
    let areaOfATile = parseFloat(l * w);

    let needTile = parseFloat(covaregeArea / areaOfATile);
    let needTime = parseFloat(needTile * 0.2);

    console.log(needTile.toFixed(2));
    console.log(needTime.toFixed(2));
}