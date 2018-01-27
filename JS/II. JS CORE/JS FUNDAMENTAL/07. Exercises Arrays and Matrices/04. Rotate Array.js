function rotateArray(arr) {
    let NumberRotate = Number(arr.pop());
    NumberRotate %= arr.length;

    for (let i = 0; i < NumberRotate; i++) {
      let lastElement = arr.pop();
      arr.unshift(lastElement)
    }
    
    console.log(arr.join(' '));
}

rotateArray(["1", "2", "3", "4", "2"])