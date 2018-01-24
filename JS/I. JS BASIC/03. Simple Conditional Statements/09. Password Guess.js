function passwordGuess([arg1]){
	let password = arg1;
	let correctPassword = "s3cr3t!P@ssw0rd";

	if(password == correctPassword){
		console.log("Welcome");
	}else{
		console.log("Wrong password!");
	}
}