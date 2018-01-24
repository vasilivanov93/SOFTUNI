function christmasToy([arg1]) {
    let n = Number(arg1);

    console.log("-".repeat(n * 2) + "*".repeat(n) + "-".repeat(n * 2));

    let dash = (n * 2) - 2;
    let stars = 1;
    let and = n + 2;
    for (let i = 1; i <= n / 2; i++) {
        console.log("-".repeat(dash) + "*".repeat(stars) + "&".repeat(and) + "*".repeat(stars) + "-".repeat(dash));
        dash -= 2;
        stars++;
        and += 2;
    }

    let newDash = n - 1;
    let newStars = 2;
    let curlyDash= (n * 3) - 2;
    for (let i = 1; i <= n / 2; i++) {
        console.log("-".repeat(newDash) + "*".repeat(newStars) + "~".repeat(curlyDash) + "*".repeat(newStars) + "-".repeat(newDash));
        newDash--;;
        curlyDash += 2;
    }

    console.log("-".repeat(newDash + 1) + "*".repeat(newStars - 1) + "|".repeat(curlyDash) + "*".repeat(newStars - 1) + "-".repeat(newDash + 1));

    for (let i = n / 2; i >= 1; i--) {
        newDash++;;
        curlyDash -= 2;
        console.log("-".repeat(newDash) + "*".repeat(newStars) + "~".repeat(curlyDash) + "*".repeat(newStars) + "-".repeat(newDash));       
    }

    for (let i = n / 2; i >= 1; i--) {
        dash += 2;
        stars--;
        and -= 2;
        console.log("-".repeat(dash) + "*".repeat(stars) + "&".repeat(and) + "*".repeat(stars) + "-".repeat(dash));
    }

    console.log("-".repeat(n * 2) + "*".repeat(n) + "-".repeat(n * 2));
}

christmasToy(["8"]);