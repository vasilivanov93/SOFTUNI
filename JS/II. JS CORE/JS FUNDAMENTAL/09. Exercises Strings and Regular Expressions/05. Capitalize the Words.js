function capitalizeTheWords(str) {
    let pieces = str.split(" ");
    for (let i = 0; i < pieces.length; i++) {
        let toUpperCase = pieces[i].charAt(0).toUpperCase();
        pieces[i] = toUpperCase + pieces[i].substr(1).toLowerCase();
    }
    console.log(pieces.join(" "));
}

capitalizeTheWords('Capitalize these words')