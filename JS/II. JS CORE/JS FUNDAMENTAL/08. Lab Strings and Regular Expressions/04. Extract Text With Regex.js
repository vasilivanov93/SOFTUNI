function extractText(text) {
    let pattern = /\((.*?)\)/g;
    let match = pattern.exec(text);
    let result = [];
    while (match) {
        result.push(match[1]);
        match = pattern.exec(text);
    }

    console.log(result.join(', '));
}