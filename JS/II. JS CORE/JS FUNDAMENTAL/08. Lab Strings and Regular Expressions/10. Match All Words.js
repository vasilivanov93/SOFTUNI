function matchAllWords(str) {
    let pattern = /[a-zA-Z]+/g;
    str = str.match(pattern);
    console.log(str.join('|'));
}

matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');