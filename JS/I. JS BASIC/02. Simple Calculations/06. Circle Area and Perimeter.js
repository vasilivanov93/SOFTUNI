function circleAreaAndPerimeter([arg1]){
	let r = Number(arg1);

	let areaCircle = Math.PI * r * r;
	let perimeterCircle = (2 * Math.PI) * r;

	console.log(`Area = ${areaCircle}`);
	console.log(`Perimeter = ${perimeterCircle}`);
}