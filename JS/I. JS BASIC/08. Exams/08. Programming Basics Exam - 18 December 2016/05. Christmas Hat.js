function christmasHat([arg1]){
    let n = Number(arg1);

    console.log(".".repeat((n * 2) - 1) + "/" + "|" + "\\" + ".".repeat((n * 2) - 1));

    console.log(".".repeat((n * 2) - 1) + "\\" + "|" + "/" + ".".repeat((n * 2) - 1));

    console.log(".".repeat((n * 2) - 1) + "***" + ".".repeat((n * 2) - 1));

    let leftAndRightPart = n * 2 - 2;

    for(let i = 1; i <= (n * 2) - 1; i++){
        console.log(".".repeat(leftAndRightPart) + "*" + "-".repeat(i) + "*" + "-".repeat(i) + "*" + ".".repeat(leftAndRightPart));
        leftAndRightPart--;
    }

    console.log("*".repeat(4 * n + 1));

    console.log("*.".repeat(n * 2) + "*");

    console.log("*".repeat(4 * n + 1));
}