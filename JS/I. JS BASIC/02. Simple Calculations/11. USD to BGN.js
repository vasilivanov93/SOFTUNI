function usdToBgn([arg1]){
	let usd = Number(arg1);
	
	let bgn = usd * 1.79549;

	console.log(`${bgn.toFixed(2)} BGN`);
}