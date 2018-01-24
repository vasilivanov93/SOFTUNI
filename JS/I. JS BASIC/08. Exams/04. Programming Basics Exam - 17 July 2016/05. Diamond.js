function diamond([arg1]){
    let n = Number(arg1);

    console.log(".".repeat(n) + "*".repeat(n * 3) + ".".repeat(n));

    let middlePoint = n * 3;

    for(let i = 1; i < n; i++){
        console.log(".".repeat(n - i) + "*" + ".".repeat(middlePoint) + "*" + ".".repeat(n - i));
        middlePoint += 2;
    }

    console.log("*".repeat(n * 5));

    for(let i = 1; i < 2 * n + 1; i++){
        let midPoint = (5 * n) - (i * 2) - 2;
        console.log(".".repeat(i) + "*" + ".".repeat(midPoint) + "*" + ".".repeat(i));
    }

    console.log(".".repeat((n * 2) + 1) + "*".repeat(n - 2) + ".".repeat((n * 2) + 1));
}