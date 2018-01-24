function axe([arg1]){
    let n = Number(arg1);

    let leftPart = n * 3;
    let middlePart = n - 1;
    let rightPart = n - 1;

    console.log("-".repeat(leftPart) + "**" + "-".repeat((n * 2) - 2));

    for(let i = 1; i <= n - 1; i++){
        console.log("-".repeat(leftPart) + "*" + "-".repeat(i) + "*" + "-".repeat(n * 2 - i - 2));
    }

    for(let j = 1; j <= n / 2; j++){
        console.log("*".repeat(leftPart) + "*" + "-".repeat(n - 1) + "*" + "-".repeat(rightPart))
    }

    for(let k = 1; k <= (n / 2) - 1; k++){
        console.log("-".repeat(leftPart) + "*" + "-".repeat(middlePart) + "*" + "-".repeat(rightPart));
        leftPart--;
        middlePart += 2;
        rightPart--;
    }

    console.log("-".repeat(leftPart) + "*".repeat(middlePart + 2) + "-".repeat(Math.ceil(n / 2)));
}