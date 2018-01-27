function countOccurences(targetString, text) {
    let counter = 0;

    while (true) {
        let startIndex = text.indexOf(targetString);
        if(startIndex < 0) {
            break;
        }

        counter++;

        text = text.substr(startIndex + 1);
    }
    console.log(counter);
}

countOccurences('the', 'The quick brown fox jumps over the lay dog.')