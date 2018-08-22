function solve(arr) {
    let startIndex = Number(arr.shift());
    let endIndex = Number(arr.shift());
    let letterWithChangeCountry = arr.shift();

    let firstCountry = [];
    let regexFirstCountry = /^[A-Z]{1}[a-z]+[A-Z]{1}$/g;
    //let match = regexFirstCountry.exec(text);
    let g;
    for (let word of arr) {
       g = word.split(' ');

    }
    for (let h of g) {
        let match = regexFirstCountry.exec(h);

        while (match) {
            firstCountry.push(match);
            match = regexFirstCountry.exec(h);
        }
    }
let a = ''
    for (let array of firstCountry) {
        a = array;
        break;
    }

    let finallyFirstCountry = a[0];

    let trueFirstCountry = finallyFirstCountry.replace(finallyFirstCountry.substring(startIndex, endIndex + 1), letterWithChangeCountry);
    trueFirstCountry = trueFirstCountry.toLowerCase();
    let regexNumber = /[0-9]{3}(\.\d{1,})?/g;
    let arrNumber = [];
    for (let word of arr) {
        word = word.split(' ').filter(w => w !== '');
        for (let w of word) {
            let match = regexNumber.exec(w);

            while (match) {
                arrNumber.push(match);
                match = regexNumber.exec(w);
            }
        }

    }

    let finalNumber = [];
    for (let arrN of arrNumber) {
        finalNumber.push(Math.ceil(Number(arrN[0])));
    }

    let secondCountry = finalNumber.map(w => String.fromCharCode(w)).join('');
    secondCountry = secondCountry.toLowerCase();

    console.log(`${capitalizeFirstLetter(trueFirstCountry)} => ${capitalizeFirstLetter(secondCountry)}`);


    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

solve(["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);