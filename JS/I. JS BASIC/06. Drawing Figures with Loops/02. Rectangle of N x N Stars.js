function RectangleOf10x10Stars([arg1]) {
    let n = Number(arg1);

    for(i = 1; i <= n; i++){
        console.log("*".repeat(n))
    }
}