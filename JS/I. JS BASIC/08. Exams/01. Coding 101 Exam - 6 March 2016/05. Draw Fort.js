function drawFort(arg) {
	let n = Number(arg);
	let w = 2 * n;
	let h = n;
    
	if (n % 2 == 0) {
		console.log("/" + "^".repeat(n / 2) + "\\" + "_".repeat((2 * n) - 4 - n) + "/" + "^".repeat(n / 2) + "\\");
	} else {
        console.log("/" + "^".repeat(Math.trunc(n / 2)) + "\\" + "_".repeat((2 * n + 1) - 4 - n) +  "/" + "^".repeat(Math.trunc(n / 2)) + "\\");
	}

	for (i = 1; i <= n - 3; i++) {
		console.log("|" + " ".repeat(2 * n - 2) + "|");
	}

	if (n % 2 == 0) {
		console.log("|" + " ".repeat(n / 2) + " " + "_".repeat((2 * n) - 4 - n) + " " + " ".repeat(n / 2) + "|");
	} else {
		console.log("|" + " ".repeat(Math.trunc(n / 2)) + " " + "_".repeat((2 * n + 1) - 4 - n) +  " " + " ".repeat(Math.trunc(n / 2)) + "|");
    }
    
	if (n % 2 == 0) {
		console.log("\\" + "_".repeat(n / 2) + "/" + " ".repeat((2 * n) - 4 - n) + "\\" + "_".repeat(n / 2) + "/");
	} else {
		console.log("\\" +"_".repeat(Math.trunc(n / 2)) +"/" + " ".repeat((2 * n + 1) - 4 - n) +"\\" + "_".repeat(Math.trunc(n / 2)) +"/");
	}
}

drawFort(["19"]);