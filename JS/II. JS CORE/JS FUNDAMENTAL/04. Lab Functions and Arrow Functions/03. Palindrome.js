function palidrome(str) {
    let newStr = str.split("").reverse().join("");

    if(str === newStr) {
        console.log("true");
    }else {
        console.log("false");
    }
}

palidrome("Hello");