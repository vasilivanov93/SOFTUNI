function crown(arg) {
    let n = Number(arg);

    console.log("@" + " ".repeat(n - 2) + "@" + " ".repeat(n - 2) + "@");

    console.log("**" + " ".repeat(n - 3) + "*" + " ".repeat(n - 3) + "**");

    let middlePart = 1;
    let blank = n - 5;
    let dot = 1;
    for(let i = 1; i <= n / 2 - 2; i++){
        console.log("*" + ".".repeat(dot) + "*" + " ".repeat(blank) + "*" + ".".repeat(middlePart) + "*" + " ".repeat(blank) + "*" + ".".repeat(dot) + "*");
        middlePart += 2;
        blank -= 2;
        dot++;
    }

    console.log("*" + ".".repeat(dot) + "*" + ".".repeat(middlePart) + "*" + ".".repeat(dot) + "*");

    console.log("*" + ".".repeat(dot + 1) + "*".repeat((n / 2) - 2) + "." + "*".repeat((n / 2) - 2) + ".".repeat(dot + 1) + "*");

    console.log("*".repeat((n * 2) - 1));

    console.log("*".repeat((n * 2) - 1));
}