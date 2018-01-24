function flower([arg1, arg2, arg3, arg4, arg5]){
    let hrizantemi = Number(arg1);
    let rozi = Number(arg2);
    let laleta = Number(arg3);
    let season = arg4;
    let PraznikIliNe = arg5;
 
    let hrizantemiProletLqto = 2.00;
    let hrizantemiEsenZima = 3.75;
    let roziProletLqto = 4.10;
    let roziEsenZima = 4.50;
    let laletaProletLqto = 2.50;
    let laletaEsenZima = 4.15;
 
    let price = 0;
    let priceProletLqto = hrizantemiProletLqto * hrizantemi + roziProletLqto * rozi + laletaProletLqto * laleta;
    let priceEsenZima = hrizantemiEsenZima * hrizantemi + roziEsenZima * rozi + laletaEsenZima * laleta;
    let allFlowers = hrizantemi + rozi + laleta;
 
 
    if (season == "Summer" || season == "Spring"){
        price = priceProletLqto;
        if (PraznikIliNe == "Y"){
            price += price * 0.15;
        }
 
        if (laleta > 7 && season == "Spring"){
            price -= price * 0.05;
        }
    }else if (season == "Autumn" || season == "Winter"){
        price = priceEsenZima;
        if (PraznikIliNe == "Y"){
            price += price * 0.15;
        }
 
        if (rozi >= 10 && season == "Winter"){
            price -= price * 0.10;
        }
    }
 
    if (allFlowers >= 20){
        price -= price * 0.20;
        console.log(`${(price + 2).toFixed(2)}`);
    }else{
        console.log(`${(price + 2).toFixed(2)}`);
    }
}