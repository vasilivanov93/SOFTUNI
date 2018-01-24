function cinema([arg1, arg2, arg3]){
    let typeProjection = arg1;
    let r = Number(arg2);
    let c = Number(arg3);

    if(typeProjection == "Premiere"){
        console.log((r * c * 12).toFixed(2), "leva");
    }else if(typeProjection == "Normal"){
        console.log((r * c * 7.5).toFixed(2), "leva");
    }else if(typeProjection == "Discount"){
        console.log((r * c * 5).toFixed(2), "leva");
    }
}