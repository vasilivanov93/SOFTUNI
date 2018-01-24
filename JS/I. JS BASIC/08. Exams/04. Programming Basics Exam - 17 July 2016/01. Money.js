function money([arg1, arg2, arg3]){
    let bitcoins = Number(arg1);
    let yuan = parseFloat(arg2);
    let comission = parseFloat(arg3);

    let bitcoinsInLeva = bitcoins * 1168;
    let yuanInleva = parseFloat((yuan * 0.15) * 1.76);

    let totalEuro = parseFloat((bitcoinsInLeva + yuanInleva) / 1.95);

    let totalAfterComission = totalEuro - ((totalEuro * comission) / 100);
    console.log(totalAfterComission.toFixed(2));
}