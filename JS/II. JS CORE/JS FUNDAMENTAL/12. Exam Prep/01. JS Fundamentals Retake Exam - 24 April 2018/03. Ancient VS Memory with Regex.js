function solve(arr) { //60%
    let regexNumberForConvert = /\b[1-9][0-9]{1,3}\b/g;
    let regexNumberForSize = /.*(32656 19759 32763)\s0\s([1-9]+)/g;
    for (let str of arr) {
        let match = regexNumberForSize.exec(str);
        let arrWithSizes = [];
        while (match) {
            arrWithSizes.push(Number(match[2]));
            match = regexNumberForSize.exec(str);
        }
        //console.log(arrWithSizes);
        let numberForConvert = [];
        let numberMatch = regexNumberForConvert.exec(str);
        while (numberMatch) {
            numberForConvert.push(Number(numberMatch[0]));
            numberMatch = regexNumberForConvert.exec(str);
        }
        //console.log(numberForConvert);
        for (let size of arrWithSizes) {
            numberForConvert.push(numberForConvert.slice(0, size));
            numberForConvert.splice(0, size);
        }
        //console.log(numberForConvert);
        for (let finalArrForConvert of numberForConvert) {
            console.log(finalArrForConvert.map(w => String.fromCharCode(w)).join(''));
        }
    }
}

solve(['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0\n' +
'5 0 71 111 115 104 111 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 4 0\n' +
'75 105 114 111 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 8 0 86 101\n' +
'114 111 110 105 107 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n']);