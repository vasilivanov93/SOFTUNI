function harvest([arg1, arg2, arg3, arg4]){
    let x = Number(arg1);
    let y = parseFloat(arg2);
    let z = Number(arg3);
    let w = Number(arg4);

    let totalGrapes = parseFloat(x * y);
    let wine = parseFloat((0.4 * totalGrapes) / 2.5);

    if(wine >= z){
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wine - z)} liters left -> ${Math.ceil((wine - z) / w)} liters per person.`);
    }else{      
        console.log(`It will be a tough winter! More ${Math.floor(z - wine)} liters wine needed.`);
    }
}