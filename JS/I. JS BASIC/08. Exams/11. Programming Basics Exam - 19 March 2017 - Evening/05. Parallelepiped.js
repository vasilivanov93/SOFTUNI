function parallelepiped([arg1]){
    let n = Number(arg1);

    console.log("+" + "~".repeat(n - 2) + "+" + ".".repeat(n * 2 + 1));

    let rightPart = n * 2;
    for(let i = 1; i <= n * 2 + 1; i++){
        console.log("|" + ".".repeat(i - 1) + "\\" + "~".repeat(n - 2) + "\\" + ".".repeat(rightPart));
        rightPart--;
    }

    let middlePart = n * 2;
    for(let i = 1; i <= n * 2 + 1; i++){
        console.log(".".repeat(i - 1) + "\\" + ".".repeat(middlePart) + "|" + "~".repeat(n - 2) + "|");
        middlePart--;
    }

    console.log(".".repeat(n * 2 + 1) + "+" + "~".repeat(n - 2) + "+");
}