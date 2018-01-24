function lutenitsa([arg1, arg2, arg3]) {
    let kgTomatto = parseFloat(arg1);
    let numberBoxes = Number(arg2);
    let numberJars = Number(arg3);

    let totalLutenitsa = kgTomatto / 5;
    let jars = totalLutenitsa / 0.535;
    let boxes = jars / numberJars;

    let boxesLeft = boxes - numberBoxes;
    let jarsLeft = jars - (numberBoxes * numberJars);

    let boxesNeeds = numberBoxes - boxes;
    let jarsNeeds = (numberBoxes * numberJars) - jars;

    console.log(`Total lutenica: ${Math.floor(totalLutenitsa)} kilograms.`);
    if(boxes > numberBoxes){
        console.log(`${Math.floor(boxesLeft)} boxes left.`);
        console.log(`${Math.floor(jarsLeft)} jars left.`);
    }else{
        console.log(`${Math.floor(boxesNeeds)} more boxes needed.`);
        console.log(`${Math.floor(jarsNeeds)} more jars needed.`);
    }
}

//lutenitsa(["82000", "400", "20"]);
lutenitsa(["12345.67", "520", "36"]);