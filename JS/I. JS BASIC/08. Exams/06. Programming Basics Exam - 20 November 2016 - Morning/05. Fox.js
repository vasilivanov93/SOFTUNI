function fox([arg1]){
    let n = Number(arg1);

    let middlePart = (n * 2) - 1;

    for(let i = 1; i <= n; i++){
        console.log("*".repeat(i) + "\\" + "-".repeat(middlePart) + "/" + "*".repeat(i));
        middlePart -= 2;
    }

    let leftPart = n / 2;
    let midPart = n;
    let rightPart = n / 2;

    for(let k = 1; k <= Math.floor(n / 3); k++){
        console.log("|" + "*".repeat(leftPart) + "\\" + "*".repeat(midPart) + "/" + "*".repeat(rightPart) + "|");
        leftPart++;
        midPart -= 2;
        rightPart++;
    }

    let downMiddlePart = (n * 2) - 1;

    for(let l = 1; l <= n; l++){
        console.log("-".repeat(l) + "\\" + "*".repeat(downMiddlePart) + "/" + "-".repeat(l));
        downMiddlePart -= 2;
    }
}