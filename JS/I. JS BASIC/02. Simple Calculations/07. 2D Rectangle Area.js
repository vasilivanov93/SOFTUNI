function rectangleArea([arg1, arg2, arg3, arg4]){
	let x1 = Number(arg1);
	let y1 = Number(arg2);
	let x2 = Number(arg3);
	let y2 = Number(arg4);
	
	let a = Math.max(x1, x2) - Math.min(x1, x2);
	let b = Math.max(y1, y2) - Math.min(y1, y2);

	let area = a * b;
	let perimeter = 2 * (a + b);

	console.log(area);
	console.log(perimeter);
}