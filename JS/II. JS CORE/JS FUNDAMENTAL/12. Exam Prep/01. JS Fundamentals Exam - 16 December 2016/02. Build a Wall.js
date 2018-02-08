function wall(arr) {
    arr = arr.map(Number)
    let concrete = [];
    while (true) {
        let buildOn = false;
		let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] !== 30) {
                sum += 195;
                arr[i]++;
                buildOn = true;
            }
        }
        if (!buildOn) {
            break;
        } else {
            concrete.push(sum);
        }
    }
	
    console.log(concrete.join(', '));
    console.log(`${concrete.reduce((a, b) => a + b) * 1900} pesos`);   
}