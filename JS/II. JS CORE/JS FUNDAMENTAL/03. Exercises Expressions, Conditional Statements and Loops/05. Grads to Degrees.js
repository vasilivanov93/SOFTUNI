function gradsToDegrees(grads) {
    let degrees = grads * 0.9;
    degrees = degrees % (400 * 0.9);

    if(degrees < 0) {
        degrees = (400 * 0.9) + degrees;
    }

    console.log(degrees);
}

gradsToDegrees(400);