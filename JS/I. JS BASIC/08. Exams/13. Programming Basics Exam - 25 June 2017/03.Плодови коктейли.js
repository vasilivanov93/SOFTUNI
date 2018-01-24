function fruitCocktails([arg1, arg2, arg3]) {
    let fruit = arg1;
    let sizeCocktail = arg2;
    let numberCocktail = Number(arg3);

    let price = 0;

    if(fruit == "Watermelon"){
        if(sizeCocktail == "big"){
            price = 5 * 28.70;
        }else if(sizeCocktail == "small"){
            price = 2 * 56;
        }
    }else if(fruit == "Mango"){
        if(sizeCocktail == "big"){
            price = 5 * 19.60;
        }else if(sizeCocktail == "small"){
            price = 2 * 36.66;
        }
    }else if(fruit == "Pineapple"){
        if(sizeCocktail == "big"){
            price = 5 * 24.80;
        }else if(sizeCocktail == "small"){
            price = 2 * 42.10;
        }
    }else if(fruit == "Raspberry"){
        if(sizeCocktail == "big"){
            price = 5 * 15.20;
        }else if(sizeCocktail == "small"){
            price = 2 * 20;
        }
    }

    let totalPrice = price * numberCocktail;

    let priceWithDiscount = 0;

    if(totalPrice > 1000){
        priceWithDiscount = totalPrice / 2;
        console.log(`${priceWithDiscount.toFixed(2)} lv.`);
    }else if(totalPrice >= 400 && totalPrice <= 1000){
        priceWithDiscount = totalPrice - (totalPrice * 0.15);
        console.log(`${priceWithDiscount.toFixed(2)} lv.`);
    }else{
        console.log(`${totalPrice.toFixed(2)} lv.`);
    }
}