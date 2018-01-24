function christmasSock([arg1]) {
    let n = Number(arg1);

    console.log("|" + "-".repeat(n * 2) + "|");

    console.log("|" + "*".repeat(n * 2) + "|");

    console.log("|" + "-".repeat(n * 2) + "|");

    let dash = n - 1;
    let wollyDash = 2;
    for (let i = 1; i <= n  - 2; i++) {
        console.log("|" + "-".repeat(dash) + "~".repeat(wollyDash) + "-".repeat(dash) + "|");
        dash--;
        wollyDash += 2;
    }

    console.log("|" + "-".repeat(dash) + "~".repeat(wollyDash) + "-".repeat(dash) + "|");

    for (let i = n - 2; i >= 1; i--) {
        dash++;
        wollyDash -= 2;
        console.log("|" + "-".repeat(dash) + "~".repeat(wollyDash) + "-".repeat(dash) + "|");
    }

    let newDash = 0;
    let dot = (n * 2) + 1;
    for (let i = 1; i <= n + 3; i++) {
        if(i == Math.floor(n / 2) + 1){
            console.log("-".repeat(newDash) + "\\" + ".".repeat(n - 2) + "MERRY" + ".".repeat(n - 2) + "\\");
        }else if(i == Math.floor(n / 2) + 3){
            console.log("-".repeat(newDash) + "\\" + ".".repeat(n - 2) + "X-MAS" + ".".repeat(n - 2) + "\\");
        }else if(i == n + 3){
            console.log("-".repeat(newDash) + "\\" + "_".repeat(dot) + ")");
        }
        else{
            console.log("-".repeat(newDash) + "\\" + ".".repeat(dot) + "\\");
        }
        newDash++;
    }
}

christmasSock(["6"]);