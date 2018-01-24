function softUniLogo([arg1]){
    let n = Number(arg1);

    console.log(".".repeat(Math.floor(((12 * n) - 5) / 2)) + "#" + ".".repeat(Math.floor(((12 * n) - 5) / 2)));

    let leftAndRightPart = Math.floor((((12 * n) - 5) / 2) - 3);
    let middlePart = "#######";

    for(let i = 1; i <= (((4 * n) - 2) / 2) - 1; i++){
        console.log(".".repeat(leftAndRightPart) + middlePart + ".".repeat(leftAndRightPart));
        leftAndRightPart -= 3;
        middlePart += "######";
    }

    console.log("#".repeat(12 * n - 5));

    let left = "..";
    let middle = 12 * n - 11;
    let right = "...";
    for(let i = 1; i <= n - 2; i++){
        console.log("|" + left + "#".repeat(middle) + right);
        left += "...";
        middle -= 6;
        right += "...";
    }

    for(let i = 1; i <= n - 1; i++){
        console.log("|" + ".".repeat(((6 * n )/ 2) - 4) + "#".repeat(((12 * n )/ 2)+ 1) + ".".repeat(((6 * n )/ 2) - 4 + 1));
    }

    console.log("@" + ".".repeat(((6 * n )/ 2) - 4) + "#".repeat(((12 * n )/ 2)+ 1) + ".".repeat(((6 * n )/ 2) - 4 + 1));
}