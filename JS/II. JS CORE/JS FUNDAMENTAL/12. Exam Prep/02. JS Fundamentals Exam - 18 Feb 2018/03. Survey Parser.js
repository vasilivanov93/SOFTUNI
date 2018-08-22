function solve(str) {
    let regex = /.+(<svg>.+<\/svg>).+/g;
    let matchRegex = regex.exec(str);

    while (matchRegex) {
        if(!matchRegex[0]) {
            console.log(`No survey found`);
            return;
        }
        matchRegex = regex.exec(str);
    }


    let strLabel = '';
    let regexLabel = /\[([a-zA-Z\s*\-]+)\]/g;
    let matchLabel = regexLabel.exec(str);
    while (matchLabel) {
        strLabel = matchLabel[1];
        matchLabel = regexLabel.exec(str);
    }
    
    let arrValue = [];
    let arrCount = [];
    let regexValueCount = /(<g><val>(\d+)<\/val>(\d+)<\/g>)/g;
    let matchValueCount = regexValueCount.exec(str);
    while (matchValueCount) {
        arrValue.push(Number(matchValueCount[2]));
        arrCount.push(Number(matchValueCount[3]));
        matchValueCount = regexValueCount.exec(str);
    }
    let totalCount = 0;
    let multiply = [];
    for(let i = 0; i < arrCount.length; i++){
        multiply.push(arrCount[i] * arrValue[i]);
    }

    if(!strLabel) {
        console.log(`Invalid format`);
        return;
    } else {
        let sumValue = multiply.reduce((a,b) => a+b);
        let sumCount = arrCount.reduce((a,b) => a+b);
        let diff = sumValue / sumCount;

         console.log(`${strLabel}: ${parseFloat(diff.toFixed(2))}`);
    }
}

solve(`<svg>
<cat><text>Which is your favourite meal from our selection?</text></cat>
<cat>
<g><val>Fish</val>15</g>
<g><val>Prawns</val>31</g>
<g><val>Crab Langoon</val>12</g>
<g><val>Calamari</val>17</g>
</cat>
</svg>`);