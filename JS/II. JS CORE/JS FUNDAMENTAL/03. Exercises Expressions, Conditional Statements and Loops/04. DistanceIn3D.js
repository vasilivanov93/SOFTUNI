function distanceIn3D([arg1, arg2, arg3, arg4, arg5, arg6]) {
	let x1 = Number(arg1);
	let y1 = Number(arg2);
	let z1 = Number(arg3);
	
	let x2 = Number(arg4);
	let y2 = Number(arg5);
	let z2 = Number(arg6);
	
    let pythagorasTheorem = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2));

    console.log(pythagorasTheorem);
}

distanceIn3D(1, 1, 0, 5, 4, 0)