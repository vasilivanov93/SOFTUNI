function letterOccurencesInString(word, letter) {
    let count = 0;

    for (const letters of word) {
        if(letters == letter){
            count++;
        }
    }

    console.log(count);
}

letterOccurencesInString('hello', 'l');