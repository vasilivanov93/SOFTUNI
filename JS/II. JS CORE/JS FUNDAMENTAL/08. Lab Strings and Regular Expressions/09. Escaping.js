function escaping(arr) {
    let result = `<ul>\n`;
    for (const str of arr) {
        result += `  <li>${escapingChar(str)}</li>\n`;
    }
    result += `</ul>`;

    console.log(result)
    function escapingChar(str) {
        return str.replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')  
                        .replace(/>/g, '&gt;')
                        .replace(/"/g, '&quot;')
                        .replace(/'/g, '&#39;');
    }
}

escaping(['<b>unescaped text</b>', 'normal text']);