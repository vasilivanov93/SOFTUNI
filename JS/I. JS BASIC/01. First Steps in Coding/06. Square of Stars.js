function squareOfStars([arg1]){
	let n = Number(arg1);

	for (var i = 1; i <= n; i++) {
		if (i == 1 || i == n) {
			console.log('*'.repeat(n));
		}else{
			console.log('*' + ' '.repeat(n - 2) + '*');
		}
	}
}