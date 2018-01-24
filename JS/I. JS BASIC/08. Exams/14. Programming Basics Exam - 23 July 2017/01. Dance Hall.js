function danceHall([arg1, arg2, arg3]){
    let l = parseFloat(arg1);
    let w = parseFloat(arg2);
    let a = parseFloat(arg3);

    let roomSize = (l * 100) * (w * 100);
    let wardrobeSize = (a * 100) * (a * 100);
    let benchSize = roomSize / 10;
    let freeSpace = roomSize - wardrobeSize - benchSize;
    let numberDancer = freeSpace / (40 + 7000);

    console.log(Math.floor(numberDancer.toFixed(2)));
}