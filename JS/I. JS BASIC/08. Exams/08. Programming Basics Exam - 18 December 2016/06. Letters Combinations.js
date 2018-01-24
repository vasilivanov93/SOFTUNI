function lettersCombinations([arg1, arg2, arg3]) {
	let startLetter = arg1;
	let endLetter = arg2;
	let missingCombinationLetter = arg3;

	let startLetterInNumber = startLetter.charCodeAt(0);
	let endLetterInNumber = endLetter.charCodeAt(0);
	let missingCombinationLetterInNumber = missingCombinationLetter.charCodeAt(0);

	let result = '';
	let counter = 0;


	for (let i = startLetterInNumber; i <= endLetterInNumber; i++) {
		for (let j = startLetterInNumber; j <= endLetterInNumber; j++) {
			for (let o = startLetterInNumber; o <= endLetterInNumber; o++) {
				if (String.fromCharCode(i) != missingCombinationLetter && String.fromCharCode(j) != missingCombinationLetter && String.fromCharCode(o) != missingCombinationLetter) {
					result += `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(o)} `;
					counter++;
					continue;
				}
			}
		}
	}
	console.log(result + counter);
}

lettersCombinations(["a", "c", "b"])