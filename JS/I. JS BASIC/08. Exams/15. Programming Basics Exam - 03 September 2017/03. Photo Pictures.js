function photoPictures([arg1, arg2, arg3]){
    let numberPicture = Number(arg1);
    let size = arg2;
    let typeOrder = arg3;

    let priceForOnePicture =0;

    if(size == "9X13"){
        if(numberPicture <= 50){
            priceForOnePicture = numberPicture * 0.16;
        }else{
            priceForOnePicture = numberPicture * 0.16  - (numberPicture * 0.16) * 0.05;
        }
    }else if(size == "10X15"){
        if(numberPicture <= 80){
            priceForOnePicture = numberPicture * 0.16;
        }else{
            priceForOnePicture = numberPicture * 0.16  - (numberPicture * 0.16) * 0.03;
        }
    }else if(size == "13X18"){
        if(numberPicture < 50){
            priceForOnePicture = numberPicture * 0.38;
        }else if(numberPicture >= 50 && numberPicture <= 100){
            priceForOnePicture = numberPicture * 0.38  - (numberPicture * 0.38) * 0.03;
        }else if(numberPicture > 100){
            priceForOnePicture = numberPicture * 0.38  - (numberPicture * 0.38) * 0.05;
        }
    }else if(size == "20X30"){
        if(numberPicture < 10){
            priceForOnePicture = numberPicture * 2.90;
        }else if(numberPicture >= 10 && numberPicture <= 50){
            priceForOnePicture = numberPicture * 2.90  - (numberPicture * 2.90) * 0.07;
        }else if(numberPicture > 50){
            priceForOnePicture = numberPicture * 2.90  - (numberPicture * 2.90) * 0.09;
        }
    }

    if(typeOrder == "online"){
    priceForOnePicture -= priceForOnePicture * 0.02;
    console.log(`${priceForOnePicture.toFixed(2)}BGN`);
    }else if(typeOrder == "office"){
        console.log(`${priceForOnePicture.toFixed(2)}BGN`);
    }
}