function AreaOfFigures([arg1, arg2, arg3]){
	let figure = arg1;

	if(figure == "square"){
		let a = Number(arg2);
		let squareArea = a * a;
		console.log(squareArea.toFixed(3));
	}else if(figure == "rectangle"){
		let a = Number(arg2);
		let b = Number(arg3);
		let rectangleArea = a * b;
		console.log(rectangleArea.toFixed(3));
	}else if(figure == "circle"){
		let r = Number(arg2);
		let circleArea = Math.PI * r * r;
		console.log(circleArea.toFixed(3));
	}else if(figure == "triangle"){
		let b = Number(arg2);
		let h = Number(arg3);
		let triangleArea = (b * h) / 2;
		console.log(triangleArea.toFixed(3));
	}
}