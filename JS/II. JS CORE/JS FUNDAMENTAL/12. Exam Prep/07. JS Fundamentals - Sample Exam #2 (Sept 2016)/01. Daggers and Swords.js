function swordOrDagger(arr) {
    arr = arr.map(Number);
    let weapon = '';
    let type = '';

    result = `<table border="1">\n`;
    result += `<thead>\n`;
    result += `<tr><th colspan="3">Blades</th></tr>\n`;
    result += `<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n`;
    result += `</thead>\n`;
    result += `<tbody>\n`;

    for (let i = 0; i < arr.length; i++) {
        let element = Math.floor(arr[i]);

        if(element <= 10) {
            continue;
        } else if(element > 10 && element <= 40) {
            weapon = 'dagger';
        } else {
            weapon = 'sword';
        }

        if ((element - 1) % 5 === 0) {
            type = 'blade';
        } else if ((element - 2) % 5 === 0) {
            type = 'quite a blade';
        } else if ((element - 3) % 5 === 0) {
            type = 'pants-scraper';
        } else if ((element - 4) % 5 === 0) {
            type = 'frog-butcher';
        } else if ((element - 5) % 5 === 0) {
            type = '*rap-poker';
        }

        result += `<tr><td>${element}</td><td>${weapon}</td><td>${type}</td></tr>\n`;
    }

    result += `</tbody>\n`;
    result += `</table>`;

    console.log(result);
}

swordOrDagger(['17.8', '19.4', '13', '55.8', '126.96541651', '3']);