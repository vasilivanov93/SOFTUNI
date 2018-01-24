function wireNet([arg1, arg2, arg3, arg4, arg5]) {
    let wight = Number(arg1);    
    let length = Number(arg2);
    let height = parseFloat(arg3);
    let priceFor1M = parseFloat(arg4);
    let weight = parseFloat(arg5);

    let lengthGrid = (wight * 2) + (length * 2);
    let priceGrid = lengthGrid * priceFor1M;
    let areaGrid = lengthGrid * height;
    let weightGrid = areaGrid * weight;

    console.log(lengthGrid.toFixed(0));
    console.log(priceGrid.toFixed(2));
    console.log(weightGrid.toFixed(3));
}

wireNet(["10", "50", "1.5", "2.10", "0.95"]);