function compoundInterest([arg1, arg2, arg3, arg4]) {
	let p = Number(arg1);
	let i = Number(arg2);
	let n = Number(arg3);
	let t = Number(arg4);
	
    let formula = p * Math.pow((1 + ((i / 100) / (12 / n))), ((12 / n) * t));

    console.log(formula.toFixed(2));
}

compoundInterest(1500, 4.3, 3, 6)