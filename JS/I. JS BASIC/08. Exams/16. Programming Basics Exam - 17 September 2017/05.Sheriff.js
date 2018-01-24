function sheriff([arg1]){
    let n = Number(arg1);

    console.log(".".repeat(Math.floor(n * 3 / 2)) + "x" + ".".repeat(Math.floor(n * 3 / 2)));

    console.log(".".repeat(Math.floor(n * 3 / 2 - 1)) + "/x\\" + ".".repeat(Math.floor(n * 3 / 2 - 1)));

    console.log(".".repeat(Math.floor(n * 3 / 2 - 1)) + "x|x" + ".".repeat(Math.floor(n * 3 / 2 - 1)));

    let dot = n / 2;
    let x = n;
    for(let i = 1; i <= n / 2; i++){
        console.log(".".repeat(dot) + "x".repeat(x) + "|" + "x".repeat(x) + ".".repeat(dot));
        dot--;
        x++;
    }

    console.log(".".repeat(dot) + "x".repeat(x) + "|" + "x".repeat(x) + ".".repeat(dot));

    for(let i = n / 2; i >= 1; i--){
        console.log(".".repeat(dot + 1) + "x".repeat(x - 1) + "|" + "x".repeat(x - 1) + ".".repeat(dot + 1));
        dot++;
        x--;
    }

    console.log(".".repeat(Math.floor(n * 3 / 2 - 1)) + "/x\\" + ".".repeat(Math.floor(n * 3 / 2 - 1)));

    console.log(".".repeat(Math.floor(n * 3 / 2 - 1)) + "\\x/" + ".".repeat(Math.floor(n * 3 / 2 - 1)));

    for(let i = 1; i <= n / 2; i++){
        console.log(".".repeat(dot) + "x".repeat(x) + "|" + "x".repeat(x) + ".".repeat(dot));
        dot--;
        x++;
    }

    console.log(".".repeat(dot) + "x".repeat(x) + "|" + "x".repeat(x) + ".".repeat(dot));

    for(let i = n / 2; i >= 1; i--){
        console.log(".".repeat(dot + 1) + "x".repeat(x - 1) + "|" + "x".repeat(x - 1) + ".".repeat(dot + 1));
        dot++;
        x--;
    }

    console.log(".".repeat(Math.floor(n * 3 / 2 - 1)) + "x|x" + ".".repeat(Math.floor(n * 3 / 2 - 1)));

    console.log(".".repeat(Math.floor(n * 3 / 2 - 1)) + "\\x/" + ".".repeat(Math.floor(n * 3 / 2 - 1)));

    console.log(".".repeat(Math.floor(n * 3 / 2)) + "x" + ".".repeat(Math.floor(n * 3 / 2)));
}

sheriff([3]);