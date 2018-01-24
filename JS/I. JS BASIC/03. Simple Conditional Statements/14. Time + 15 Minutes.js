function timePlus15Minutes([arg1, arg2]){
	let minute = Number(arg1);
	let second = Number(arg2);

	let convertMinuteInSeconds = minute * 60;
	let totalSeconds = convertMinuteInSeconds + second + 15;

	let resultMinute = Math.floor(totalSeconds / 60);
	let resultSeconds = totalSeconds % 60;

	if(resultMinute == 24){
		resultMinute = 0;
	}

	if(resultSeconds < 10){
		console.log(`${resultMinute}:0${resultSeconds}`)
	}else{
		console.log(`${resultMinute}:${resultSeconds}`)
	}
}