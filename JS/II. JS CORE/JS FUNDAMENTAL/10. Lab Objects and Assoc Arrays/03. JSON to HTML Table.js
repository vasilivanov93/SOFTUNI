function JSONToHTMLTable(strArr) {
    let arr = JSON.parse(strArr);

    let str = '<table>\n';
    str += '    <tr>'
    let keys = Object.keys((arr[0]));
    for (let key of keys) {
        str += `<th>${key}</th>`
    }
    str += `</tr>\n`;

    for (let obj of arr) {
        str += `    <tr>`;
        for (let i = 0; i < keys.length; i++) {
            str += `<td>${escapeChars(obj[keys[i]] + '')}</td>`
        }
        str += `</tr>\n`;
    }
    
    str += `</table>`;
    console.log(str);

    function escapeChars(str) {
        return str.replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#39;')
    }
}

JSONToHTMLTable('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]');