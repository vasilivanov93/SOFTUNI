function housePainting([arg1, arg2, arg3]){
    let x = parseFloat(arg1);
    let y = parseFloat(arg2);
    let h = parseFloat(arg3);

    let sideWallArea = x * y;
    let windowArea = 1.5 * 1.5;
    let twoSideTotal = (2 * sideWallArea) - (2 * windowArea);
    let backSide = x * x;
    let entrace = 1.2 * 2;
    let totalFrontAndBack = (2 * backSide) - entrace;
    let greenPaint = (totalFrontAndBack + twoSideTotal) / 3.4;

    let twoRectangleOfRoof = 2 * (x * y);
    let twoTriangle = 2 * ((x * h) / 2);
    let redPaint = (twoRectangleOfRoof + twoTriangle) / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}