function captureTheNumbers(arr) {
    let pattern = /\d+/gm;
    let result = [];

    for (let currentElement of arr) {
       let match = pattern.exec(currentElement);
       while (match) {
            result.push(match[0]);
            match = pattern.exec(currentElement);
       }  
    }
    
    console.log(result.join(' '));
}

captureTheNumbers(['The300', 
    'What is that?', 
    'I think it’s the 3rd movie.', 
    'Lets watch it at 22:45', 
    ])