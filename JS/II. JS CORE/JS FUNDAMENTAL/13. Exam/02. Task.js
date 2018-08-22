function solve(arr) {
    let companyName = arr.shift();
	let delimiter = arr.shift();

    companyName = companyName.split(delimiter).filter(w => w !== '');
    let company1 = companyName[0];
    let company2 = companyName[1];
    let company3 = companyName[2];

    let validText = [];
    let invalidText = [];
    let countValid = 1;
    let countInvalid = 1;
    for (let arrElement of arr) {
        arrElement = arrElement.toLowerCase();
        if (arrElement.includes(company1) && arrElement.includes(company2) && arrElement.includes(company3)) {
            validText.push(arrElement);
        } else {
            invalidText.push(arrElement);
        }
    }

    if (validText.length > 0) {
        console.log(`ValidSentences`);
        for (let valid of validText) {
            console.log(`${countValid++}. ${valid}`)
        }
    }

    if (validText.length > 0 && invalidText.length > 0) {
        console.log(`==============================`);
    }

    if (invalidText.length > 0) {
        console.log(`InvalidSentences`);
        for (let invalid of invalidText) {
            console.log(`${countInvalid++}. ${invalid}`);
        }
    }
}

solve(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]

);