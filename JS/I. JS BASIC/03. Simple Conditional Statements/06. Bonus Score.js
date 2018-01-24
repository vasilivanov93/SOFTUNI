function bonusScore([arg1]){
	let a = Number(arg1);

	let bonus1 = 0;
	let bonus2 = 0;

	if(a <= 100){
		bonus1 = 5;
	}else if(a > 100 && a <= 1000){
		bonus1 = (a * 20) / 100;
	}else if(a > 1000){
		bonus1 = (a * 10) / 100;
	}

	if(a % 2 == 0){
		bonus2 = 1;
	}else if(a % 10 == 5){
		bonus2 = 2;
	}

	let totalBonus = bonus1 + bonus2;

	console.log(totalBonus);
	console.log(totalBonus + a);
}