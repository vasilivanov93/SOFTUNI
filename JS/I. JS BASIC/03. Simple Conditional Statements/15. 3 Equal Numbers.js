function threeEqualNumber([arg1, arg2, arg3]){
	let number1 = Number(arg1);
	let number2 = Number(arg2);
	let number3 = Number(arg3);

	if(number1 == number2 && number1 == number3 || 
		number2 == number3 && number2 == number1 || 
		number3 == number1 && number3 == number2){
			console.log("yes");
		}else{
			console.log("no")
		}
}