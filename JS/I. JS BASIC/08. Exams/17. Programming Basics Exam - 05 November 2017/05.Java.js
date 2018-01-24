function java([arg1]) {
    let n = Number(arg1);

    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n) + "~ ~ ~ ");       
    }

    console.log("=".repeat(3 * n + 5));

    for (let i = 1; i <= n - 2; i++) {
        if(i == Math.floor(n / 2)){
        console.log("|" + "~".repeat(n) + "JAVA" + "~".repeat(n) + "|" + " ".repeat(n - 1) + "|");
        }else{
            console.log("|" + "~".repeat(n) + "~~~~" + "~".repeat(n) + "|" + " ".repeat(n - 1) + "|");
        }
    }

    console.log("=".repeat(3 * n + 5));

    let space = 0;
    let monkey = (n * 2) + 4;
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(space) + "\\" + "@".repeat(monkey) + "/");
        space++;
        monkey -= 2;
    }

    console.log("=".repeat(2 * n + 6));
}

java(["5"]);