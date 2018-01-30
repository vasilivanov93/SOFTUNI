function findVariableNamesInSentences(str) {
    let pattern = /\b(?:_{1})([a-zA-Z0-9]+)\b/g;
    let variables = [];
    
    let match = pattern.exec(str);

    while(match) {
        variables.push(match[1]);
        match = pattern.exec(str);
    }

    console.log(variables.join(','));   
}

findVariableNamesInSentences(`The _id and _age variables are both integers.`)
findVariableNamesInSentences(`Calculate the _area of the _perfectRectangle object.`)
findVariableNamesInSentences(`__invalidVariable _evenMoreInvalidVariable_ _validVariable`)

