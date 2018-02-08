function xml(text) {
    let regexFrom = /\bfrom\=\"([a-zA-Z\s*]+)(\")/g;
    let regexTo = /\bto\=\"([a-zA-Z]+)(\")/g;
    let regexMessage = /(\>)([a-zA-Z0-9\s*\,\'\?\!\.\-\:]+)/g;
    let regexEnd = /<\/message>$/g;

    let matchEnd = regexEnd.exec(text);
    while (!matchEnd) {
        console.log(`Invalid message format`);
        return;
        matchEnd = regexEnd.exec(text);
    }

    let from = '';
    let matchFrom = regexFrom.exec(text);
    while (matchFrom) {
        from = matchFrom[1];
        matchFrom = regexFrom.exec(text);
    }

    let to = '';
    let matchTo = regexTo.exec(text);
    while (matchTo) {
        to = matchTo[1];
        matchTo = regexTo.exec(text);
    }
    
    let message = '';
    let matchMessage = regexMessage.exec(text);
    while (matchMessage) {
        message = matchMessage[2].split('\n').filter(a => a !== '');
        matchMessage = regexMessage.exec(text);
    }

    if(!to || !from || !message) {
        console.log('Missing attributes');
    } else {
        let result = `<article>\n`;
        result += `  <div>From: <span class="sender">${from}</span></div>\n`;
        result += `  <div>To: <span class="recipient">${to}</span></div>\n`;
        result += `  <div>\n`;
        for (let sentence of message) {
            result += `    <p>${sentence}</p>\n`;
        }
        result += `  </div>\n`;
        result += `</article>`;
        console.log(result);
    }
}