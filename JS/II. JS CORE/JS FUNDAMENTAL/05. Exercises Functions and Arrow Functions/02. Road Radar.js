function roadRadar(arr) {
    let speed = Number(arr[0]);
    let place = arr[1];  

    let diff = 0;

    if(place === "motorway" && speed <= 130){
        console.log();
    }else if(place === "motorway" && speed > 130){
        diff = speed - 130;
        overTheLimit();
    }

    if(place === "interstate" && speed <= 90){
        console.log();
    }else if (place === "interstate" && speed > 90){
        diff = speed - 90;
        overTheLimit();
    }

    if(place === "city" && speed <= 50){
        console.log();
    }else if (place === "city" && speed > 50){
        diff = speed - 50;
        overTheLimit();
    }

    if(place == "residential" && speed <= 20){
        console.log();
    }else if (place === "residential" && speed > 20){
        diff = speed - 20;
        overTheLimit();
    }
    
    function overTheLimit(speed, place) {
        if(diff <= 20){
            console.log("speeding");
        }else if(diff > 20 && diff <= 40){
            console.log("excessive speeding");
        }else if(diff > 40){
            console.log("reckless driving");
        }
    }
}

roadRadar(["21", "residential"])