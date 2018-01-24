function cgd([arg1, arg2]){
    let a = Number(arg1);
    let b = Number(arg2);

    let greater = Math.max(a, b);
    let lesser = Math.min(a,b);

    while(lesser != 0){
        let remainder = greater % lesser;
        greater = lesser;
        lesser = remainder;
    }

    console.log(`CGD: ${greater}`);
}