function groupName([arg1, arg2, arg3, arg4, arg5]){
    let bigLetter = arg1;
    let smallLetter1 = arg2;
    let smallLetter2 = arg3;
    let smallLetter3 = arg4;
    let number = Number(arg5);

    let count = 0;

    for(let a = 65; a <= bigLetter.charCodeAt(); a++){
        for(let b = 97; b <= smallLetter1.charCodeAt(); b++){
            for(let c = 97; c <= smallLetter2.charCodeAt(); c++){
                for(let d = 97; d <= smallLetter3.charCodeAt(); d++){
                    for(let e = 0; e <= number; e++){
                        count++;
                    }
                }
            }
        }
    }

    console.log(count - 1);
}