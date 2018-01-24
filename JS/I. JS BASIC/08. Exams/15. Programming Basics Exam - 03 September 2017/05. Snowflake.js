function snowflake([arg1]){
    let n = Number(arg1);

    let startDot = 0;
    let dot = n;
    for(let i = 1; i <= n - 1; i++){
        console.log(".".repeat(startDot) + "*" + ".".repeat(dot) + "*" + ".".repeat(dot) + "*" + ".".repeat(startDot));
        startDot++;
        dot--;
    }

    console.log(".".repeat(startDot) + "*" + "*".repeat(dot) + "*" + "*".repeat(dot) + "*" + ".".repeat(startDot));

    console.log("*".repeat(2 * n + 3));

    console.log(".".repeat(startDot) + "*" + "*".repeat(dot) + "*" + "*".repeat(dot) + "*" + ".".repeat(startDot));

    for(let i = n -1; i >= 1; i--){
        console.log(".".repeat(startDot - 1) + "*" + ".".repeat(dot + 1) + "*" + ".".repeat(dot + 1) + "*" + ".".repeat(startDot - 1));
        startDot--;
        dot++;
    }
}