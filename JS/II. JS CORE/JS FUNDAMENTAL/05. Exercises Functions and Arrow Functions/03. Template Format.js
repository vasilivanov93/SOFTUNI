function tepleteFormat(arr) {
    let result = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    result += `<quiz>\n`;
    for (let i = 0; i < arr.length; i += 2) {
        let quastion = arr[i];
        let answer = arr[i + 1];
        
        result += `  <question>\n`;
        result += `    ${quastion}\n`
        result += `  </question>\n`;
        result += `  <answer>\n`;
        result += `    ${answer}\n`;
        result += `  </answer>\n`;
    }
    result += `</quiz>`;
    console.log(result);
}

tepleteFormat(["Dry ice is a frozen form of which gas?", "Carbon Dioxide", "What is the brightest star in the night sky?", "Sirius"]);