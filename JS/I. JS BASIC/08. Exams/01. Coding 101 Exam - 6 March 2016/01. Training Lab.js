function trainingLab([arg1, arg2]){
    let w = parseFloat(arg1);
    let h = parseFloat(arg2);

    let hInCm = h * 100;
    let hResidue = hInCm - 100;
    let officesOnLine = Math.floor(hResidue / 70);

    let wInCm = w * 100;
    let row = Math.floor(wInCm / 120);

    let numberOfPlaces = officesOnLine * row - 3;

    console.log(numberOfPlaces);
}