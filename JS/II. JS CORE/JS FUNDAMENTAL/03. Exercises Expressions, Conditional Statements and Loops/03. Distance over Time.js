function distanceOverTime([arg1, arg2, arg3]) {
	let v1 = Number(arg1);
	let v2 = Number(arg2);
	let t = Number(arg3);
	
    let distanceOne = (v1 / 3.6) * t;
    let distanceTwo = (v2 / 3.6) * t;
    let delta = Math.abs(distanceOne - distanceTwo);

    console.log(delta);
}

distanceOverTime(5, -5, 40);