function twoNumbersSum(args){
    let n = Number(args[0]);
    let selary = parseFloat(args[1]);

    let countJelev = 0;
    let countRoYAl = 0;
    let countRoli = 0;
    let countTrifon = 0;
    let countSino = 0;
    let countOthers = 0;

    for(let i = 2; i <= n + 1; i++){
        let currentLektor = args[i];
        
        if(currentLektor == "Jelev"){
            countJelev++;
        }else if(currentLektor == "RoYaL"){
            countRoYAl++;
        }else if(currentLektor == "Roli"){
            countRoli++;
        }else if(currentLektor == "Trofon"){
            countTrifon++;
        }else if(currentLektor == "Sino"){
            countSino++;
        }else if(currentLektor != "Roli" || currentLektor != "Sino" || currentLektor != "Trofon" || currentLektor != "RoYaL" || currentLektor != "Jelev"){
            countOthers++;
        }
    }

    let selaryPart = selary / n;
    let selaryJelev = selaryPart * countJelev;
    let selaryRoYAl = selaryPart * countRoYAl;
    let selaryRoli = selaryPart * countRoli;
    let selaryTrifon = selaryPart * countTrifon;
    let selarySino = selaryPart * countSino;
    let selaryOthers = selaryPart * countOthers;

    console.log(`Jelev salary: ${selaryJelev.toFixed(2)} lv`);
    console.log(`RoYaL salary: ${selaryRoYAl.toFixed(2)} lv`);
    console.log(`Roli salary: ${selaryRoli.toFixed(2)} lv`);
    console.log(`Trofon salary: ${selaryTrifon.toFixed(2)} lv`);
    console.log(`Sino salary: ${selarySino.toFixed(2)} lv`);
    console.log(`Others salary: ${selaryOthers.toFixed(2)} lv`);
}