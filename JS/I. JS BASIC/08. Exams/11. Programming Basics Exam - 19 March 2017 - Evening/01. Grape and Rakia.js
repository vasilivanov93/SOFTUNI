function grapeAndRakia([arg1, arg2, arg3]){
    let areaVineyard = parseFloat(arg1);
    let kgGrapePer2M = parseFloat(arg2);
    let loss = parseFloat(arg3);

    let kgGrape = (areaVineyard * kgGrapePer2M) - loss;
    let rakia = ((kgGrape * 0.45) / 7.50) * 9.80;
    let sellGrape = kgGrape * 0.55 * 1.50;

    console.log(rakia.toFixed(2));
    console.log(sellGrape.toFixed(2));
}