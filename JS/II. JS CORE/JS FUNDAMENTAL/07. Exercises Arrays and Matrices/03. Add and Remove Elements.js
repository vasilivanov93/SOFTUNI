function addAndRemoveElement(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if(element === "add"){
            result.push(i + 1); 
        }else if(element === "remove") {
            result.pop();
        }

    }
    if(result.length === 0) {
        console.log("Empty");
    }else {
        console.log(result.join('\n'));
    }
}

addAndRemoveElement(["remove", "remove", "remove"])