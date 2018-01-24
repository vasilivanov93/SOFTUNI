function metricConverter([arg1, arg2, arg3]){
	let number = Number(arg1);
	let input = arg2;
	let output = arg3;

	if(input == "mm"){
		number /= 1000;
	}else if(input == "cm"){
		number /= 100;
	}else if(input == "mi"){
		number /= 0.000621371192;
	}else if(input == "in"){
		number /= 39.3700787;
	}else if(input == "km"){
		number /= 0.001;
	}else if(input == "ft"){
		number /= 3.2808399;
	}else if(input == "yd"){
		number /= 1.0936133;
	}else if(input == "m"){
		number = number;
	}

	if(output == "mm"){
		number *= 1000;
	}else if(output == "cm"){
		number *= 100;
	}else if(output == "mi"){
		number *= 0.000621371192;
	}else if(output == "in"){
		number *= 39.3700787;
	}else if(output == "km"){
		number *= 0.001;
	}else if(output == "ft"){
		number *= 3.2808399;
	}else if(output == "yd"){
		number *= 1.0936133;
	}

	console.log(`${number} ${output}`)
}