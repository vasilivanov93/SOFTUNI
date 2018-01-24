function currencyConverter([arg1, arg2, arg3]){
	let number = Number(arg1);
	let value1 = arg2;
	let value2 = arg3;
	
	if (value1 == 'USD') {
		number *= 1.79549;
	}else if (value1 == 'EUR') {
		number *= 1.95583;
	}else if (value1 == 'GBP') {
		number *= 2.53405
	}

	if (value2 == "USD"){
        number /= 1.79549;
    }else if (value2 == "EUR"){
        number /= 1.95583;
    }else if (value2 == "GBP"){
        number /= 2.53405;
    }
    
	console.log(`${number.toFixed(2)} ${value2}`)
}