function squareFrame([arg1]) {
    let n = Number(arg1);

    console.log("+ " + "- ".repeat(n - 2) + "+");
    for(i = 1; i <= n - 2; i++){
        console.log("| " + "- ".repeat(n - 2) + "|");
    }
    console.log("+ " + "- ".repeat(n - 2) + "+");
}