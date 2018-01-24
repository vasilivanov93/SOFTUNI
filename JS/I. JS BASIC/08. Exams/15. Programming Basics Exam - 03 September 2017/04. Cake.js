function cake(args){
    let widthCake = Number(args[0]);
    let lengthCake = Number(args[1]);

    let cakeSize = widthCake * lengthCake;

    let sum = 0;
    let diff = 0;

    let sumWithStop = 0;
    let diffWithStop = 0;
    let lastElement = "";

    for(let i = 2; i < args.length; i++){
        let currentPieces = Number(args[i]);
        lastElement = args.slice(-1).pop();
        sum += currentPieces;
        diff = cakeSize - sum;
        if(lastElement == "STOP"){
            let currentPiecesWithStop = Number(args[i - 1]);
            sumWithStop += currentPiecesWithStop;
            diffWithStop = cakeSize - sumWithStop + lengthCake;
        }
    }

    if(diff < 0){
        console.log(`No more cake left! You need ${Math.abs(diff)} pieces more.`);
    }else if(diffWithStop > 0){
        console.log(`${diffWithStop} pieces are left.`)
    }else if(diffWithStop < 0){
        console.log(`No more cake left! You need ${Math.abs(diffWithStop)} pieces more.`);
    }
}