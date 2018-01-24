function hourglass([arg1]){
    let n = Number(arg1);
    
    console.log("*".repeat(n * 2 + 1));

    console.log(".*" + " ".repeat(n * 2 - 3) + "*.");

    let leftPart = "..";
    let middlePart = 2 * n - 5;
    let rightPart = "..";
    for(let i = 1; i <= n - 2; i++){
        console.log(leftPart + "*" + "@".repeat(middlePart) + "*" + rightPart);
        leftPart += ".";
        middlePart -= 2;
        rightPart += ".";
    }

    console.log(leftPart + "*" + rightPart);

    let downLeftAndRightPart = n - 1;
    for(let i = 1; i <= n - 2; i++){
        console.log(".".repeat(downLeftAndRightPart) + "*" + " ".repeat(i - 1) + "@" + " ".repeat(i - 1) + "*" + ".".repeat(downLeftAndRightPart));
        downLeftAndRightPart--;
    }

    console.log(".*" + "@".repeat(n * 2 - 3) + "*.");

    console.log("*".repeat(n * 2 + 1));
}