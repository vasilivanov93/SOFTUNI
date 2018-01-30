function endsWith(str1, str2) {
    if (str1.endsWith(str2)) {
        console.log('true');
    } else {
        console.log('false');
    }
}

endsWith('This sentence ends with fun?', 'fun?')