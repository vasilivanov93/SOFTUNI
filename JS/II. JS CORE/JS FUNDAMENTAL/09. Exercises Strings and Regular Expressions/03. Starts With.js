function starsWith(str1, str2) {  
    if (str1.startsWith(str2) === str1) {
        console.log('true');
    } else if (str1 === str2) {
        console.log('true');
    } else {
        console.log('false');
    }
}

starsWith('The quick brown fox…', 'The quick brown fox…');