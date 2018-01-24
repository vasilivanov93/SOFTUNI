function ivanoviFamily([arg1, arg2, arg3, arg4]) {
    let budget = parseFloat(arg1);
    let pricePerGiftOfFirstChild = parseFloat(arg2);
    let pricePerGiftOfSecondChild = parseFloat(arg3);
    let pricePerGiftOfThirdChild = parseFloat(arg4);

    let totalPrice = pricePerGiftOfFirstChild + pricePerGiftOfSecondChild + pricePerGiftOfThirdChild;
    let donation = (budget - totalPrice) - ((budget - totalPrice) *0.10);

    console.log(donation.toFixed(2));
}

ivanoviFamily(["50", "10", "12", "13"]);