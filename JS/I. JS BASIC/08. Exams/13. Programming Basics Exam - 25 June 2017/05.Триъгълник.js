function triangle([arg1]) {
	let n = Number(arg1);
	let width = 4 * n + 1;
	let height = 2 * n + 1;

	let points = 1;
	let dashedTop = 2 * n - 1;
	let spaces = 1;

	console.log('#'.repeat(width));

	for(let i = 0; i < n; i++) {
		if (i == Math.floor(n / 2)) {
			console.log('.'.repeat(points) + '#'.repeat(dashedTop) + ' '.repeat(spaces / 2 - 1) + 
				'(@)' + ' '.repeat(spaces / 2 - 1) + '#'.repeat(dashedTop) + '.'.repeat(points));
		}else{
            console.log('.'.repeat(points) + '#'.repeat(dashedTop) + ' '.repeat(spaces) +
             '#'.repeat(dashedTop) + '.'.repeat(points));	
		}
		points++;
		dashedTop -= 2;
		spaces += 2;
	}

	let dashedBottom = 2 * n - 1;
	for (let i = 0; i < n; i++ ) {
		console.log(
			'.'.repeat(points) + 
			'#'.repeat(dashedBottom) +
			'.'.repeat(points)
		);
		points++;
		dashedBottom -= 2;
	}
}