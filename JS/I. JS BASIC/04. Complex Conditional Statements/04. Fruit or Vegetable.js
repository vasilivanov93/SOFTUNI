function fruitOrVegetable([arg1]){
    let text = arg1;

    if(text == "banana" || text == "apple" || text == "kiwi" ||
    text == "cherry" || text == "lemon" || text == "grapes"){
          console.log("fruit")
      }else if(text == "tomato" || text == "cucumber" 
      || text == "pepper" || text == "carrot"){
          console.log("vegetable")
      }else{
          console.log("unknown")
      }
}