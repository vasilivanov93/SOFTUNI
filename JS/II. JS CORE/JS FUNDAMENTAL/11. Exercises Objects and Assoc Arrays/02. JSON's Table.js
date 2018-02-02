function JSONTable(arr) {
    let result = '<table>\n';

    for (let str of arr) {
        let obj = JSON.parse(str);

        result += '	<tr>\n';
        result += `		<td>${escapeChars(obj.name)}</td>\n`;
        result += `		<td>${escapeChars(obj.position)}</td>\n`;
        result += `		<td>${obj.salary}</td>\n`;
        result += '	<tr>\n';         
    }

    result += '</table>';

    console.log(result);

    function escapeChars(str) {
        return str.replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#39;')
    }
}

JSONTable(['{"name":"Pesho","position":"Promenliva","salary":100000}', 
'{"name":"Teo","position":"Lecturer","salary":1000}', 
'{"name":"Georgi","position":"Lecturer","salary":1000}'
])