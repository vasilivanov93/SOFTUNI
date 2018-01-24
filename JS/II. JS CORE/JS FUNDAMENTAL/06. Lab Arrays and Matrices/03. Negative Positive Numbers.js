function negaticePositiveNumber(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if(element >= 0) {
            result.push(element);
        }else {
            result.unshift(element);
        }       
    }

    console.log(result.join('\n'));
}

negaticePositiveNumber([3, -2, 0, -1]);