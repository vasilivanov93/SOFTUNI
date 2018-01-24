function wordsUppercase(arr) {
    let strToUpperCase = arr.toUpperCase().split(/\W+/).filter(s => s != "").join(", ");

    console.log(strToUpperCase)
}

wordsUppercase('Hi, how are you?');