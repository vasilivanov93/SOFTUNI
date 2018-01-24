function rocket([arg1]){
    let n = Number(arg1);

    let leftAndRightPart = ((n * 3) / 2) - 1;
    let middlePart = 0;

    for(let i = 1; i <= n; i++){        
        console.log(".".repeat(leftAndRightPart) + "/" + " ".repeat(middlePart) + "\\" + ".".repeat(leftAndRightPart));
        leftAndRightPart--;
        middlePart += 2;
    }

    console.log(".".repeat(n / 2) + "*".repeat(n * 2) + ".".repeat(n / 2));

    for(let o = 1; o <= n * 2; o++){
        console.log(".".repeat(n/ 2) + "|" + "\\".repeat((n * 2) - 2) + "|" + ".".repeat(n/ 2));
    }

    let downLeftAndRightPart = n / 2;
    let downMiddlePart = (n * 2) - 2;

    for(let p = 1; p <= n / 2; p++){
        console.log(".".repeat(downLeftAndRightPart) + "/" + "*".repeat(downMiddlePart) + "\\" + ".".repeat(downLeftAndRightPart));
        downLeftAndRightPart--;
        downMiddlePart += 2;
    }
}