function tradeComissions([arg1, arg2]){
    let town = arg1;
    let sales = Number(arg2);

   if(town == "Sofia"){
       if(0 <= sales && sales <= 500){
           console.log((sales * 5 / 100).toFixed(2));
       }else if(500 < sales && sales <= 1000){
        console.log((sales * 7 / 100).toFixed(2));
       }else if(1000 < sales && sales <= 10000){
        console.log((sales * 8 / 100).toFixed(2));
       }else if(sales > 10000){
        console.log((sales * 12 / 100).toFixed(2));
       }else{
        console.log("error")
       }
   }else if(town == "Varna"){
        if(0 <= sales && sales <= 500){
            console.log((sales * 4.5 / 100).toFixed(2));
        }else if(500 < sales && sales <= 1000){
            console.log((sales * 7.5 / 100).toFixed(2));
        }else if(1000 < sales && sales <= 10000){
            console.log((sales * 10 / 100).toFixed(2));
        }else if(sales > 10000){
            console.log((sales * 13 / 100).toFixed(2));
        }else{
            console.log("error")
        }
   }else if(town == "Plovdiv"){
        if(0 <= sales && sales <= 500){
            console.log((sales * 5.5 / 100).toFixed(2));
        }else if(500 < sales && sales <= 1000){
            console.log((sales * 8 / 100).toFixed(2));
        }else if(1000 < sales && sales <= 10000){
            console.log((sales * 12 / 100).toFixed(2));
        }else if(sales > 10000){
            console.log((sales * 14.5 / 100).toFixed(2));
        }else{
            console.log("error")
        }
   }else{
       console.log("error")
   }
}