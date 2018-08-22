function chessBoard(size) {
    let html = '<div class="chessboard">\n';
    
    for (let row = 0; row < size; row++) {
        html += ' <div>\n';
        let color = (row % 2 == 0) ? 'black' : 'white';
    
        for (let col = 0; col < size; col++) {
            html += ` <span class="${color}"></span>\n`;
            color = (color == 'white') ? 'black' : 'white';
        }

        html += ' </div>\n';
    }

    return html + '</div>';
	
	
	//let result = '<div class="chessboard">\n';
    //
    //for (let i = 1; i <= size; i++) {
    //    if (i % 2 === 0) {
    //        result += '  <div>\n';
    //        for (let i = 1; i <= size; i++) {
    //            if (i % 2 === 0) {
    //                result += `    <span class="black"></span>\n`
    //            } else {
    //                result += `    <span class="white"></span>\n`
    //            }
    //        }
    //        result += '  </div>\n'
    //    } else if (i & 2 !== 0) {
    //        result += '  <div>\n';
    //        for (let i = 1; i <= size; i++) {
    //            if (i % 2 === 0) {
    //                result += `    <span class="white"></span>\n`
    //            } else {
    //                result += `    <span class="black"></span>\n`
    //            }
    //        }
    //        result += '  </div>\n'
    //    }
    //}
    //
    //result += '</div>'
    //
    //return result
}

console.log(chessBoard(3));