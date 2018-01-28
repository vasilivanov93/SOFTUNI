function expressionSplit(str) {
    console.log(str.split(/[\s,;.()]+/).join('\n'))
}

expressionSplit('let sum = 4 * 4,b = "wow";');