function birthday([arg1, arg2, arg3, arg4]) {
    let length = Number(arg1);
    let width =  Number(arg2);
    let height = Number(arg3);
    let percent = Number(arg4);

    let volume = length * width * height;
    let totalLitres = volume * 0.001;
    let convertPercent = percent * 0.01;
    let realLitresNeed = totalLitres * (1 - convertPercent);

    console.log(realLitresNeed.toFixed(3));
}

birthday(["85", "75", "47", "17"]);