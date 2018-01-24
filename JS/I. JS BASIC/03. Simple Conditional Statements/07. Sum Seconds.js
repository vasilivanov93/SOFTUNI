function sumSeconds([arg1, arg2, arg3]){
	let secondRunner1 = Number(arg1);
	let secondRunner2 = Number(arg2);
	let secondRunner3 = Number(arg3);

	let sumSecond = secondRunner1 + secondRunner2 + secondRunner3;

	let minutes = Math.floor(sumSecond / 60);
	let seconds = sumSecond % 60;

	if(seconds <= 9){
		console.log(`${minutes}:0${seconds}`)
	}else{
		console.log(`${minutes}:${seconds}`)
	}
}