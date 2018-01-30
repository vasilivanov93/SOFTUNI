function extractTheLinks(arr) {
    let pattern = /www\.[A-Za-z0-9\-]+(\.[a-z]+)+/g;
    let result = [];

    for (let sentence of arr) {
        let match = pattern.exec(sentence);
        while (match) {
             result.push(match[0]);
             match = pattern.exec(sentence);
        }  
     }

     console.log(result.join('\n'));
}

extractTheLinks(['Need information about cheap hotels in London?', 
    'You can check us at www.london-hotels.co.uk!', 
    'We provide the best services in London.', 
    'Here are some reviews in some blogs:', 
    `"London Hotels are awesome!" - www.indigo.bloggers.com`, 
    `"I am very satisfied with their services" - ww.ivan.bg`, 
    `"Best Hotel Services!" - www.rebel21.sedecrem.moc `
    ])