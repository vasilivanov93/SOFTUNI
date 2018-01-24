function stop([arg1]){
    let n = Number(arg1);

    console.log(".".repeat(n + 1) + "_".repeat((n * 2) + 1) + ".".repeat(n + 1));

    for (let i = 0; i < n; i++)
    {
        let innerCount = 2 * (n + i) - 1;
        console.log(".".repeat(n - i) + "//" + "_".repeat(innerCount) + "\\\\" + ".".repeat(n - i));
    }

    console.log("//" + "_".repeat((n * 2) - 3) + "STOP!" + "_".repeat((n * 2) - 3) + "\\\\");

    console.log("\\\\" + "_".repeat((n * 4) - 1) + "//");

    for (let i = n - 1; i > 0; i--)
    {
        let innerCount = 2 * (n + i) - 1;
        console.log(".".repeat(n - i) + "\\\\" + "_".repeat(innerCount) + "//" + ".".repeat(n - i));
    }
}