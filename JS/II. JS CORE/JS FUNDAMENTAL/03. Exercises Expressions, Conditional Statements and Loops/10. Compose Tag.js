function composeTag([locationFile, alternateText]) {
    console.log(`<img src="${locationFile}" alt="${alternateText}">`);
}

composeTag(['smiley.gif', 'Smiley Face']);