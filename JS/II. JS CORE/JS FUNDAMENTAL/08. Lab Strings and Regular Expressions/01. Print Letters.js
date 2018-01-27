function printLetters(str) {
    for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i];
        console.log(`str[${i}] -> ${currentLetter}`)
    }
}

printLetters('Hello, World!')
