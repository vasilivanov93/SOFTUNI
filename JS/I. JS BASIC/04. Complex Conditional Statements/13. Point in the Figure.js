function volleyball([arg1, arg2, arg3]){
    let h = Number(arg1);
    let x = Number(arg2);
    let y = Number(arg3);

    let x1 = 0;
    let y1 = 0;
    let x2 = 3 * h;
    let y2 = h;
    let x3 = h;
    let y3 = h;
    let x4 = 2 * h;
    let y4 = 4 * h;

    if (((x1 < x && x < x2) && (y1 < y && y < y2)) ||
        ((x3 < x && x < x4) && (y3 < y && y < y4)) ||
        ((x3 < x && x < x4) && y == y2))
    {
        console.log("inside");
    }

    else if (!((x >= x1 && x <= x2) && (y >= y1 && y <= y2)) &&
        !((x >= x3 && x <= x4) && (y >= y3 && y <= y4)))
    {
        console.log("outside");
    }
    else
    {
        console.log("border");
    }
}