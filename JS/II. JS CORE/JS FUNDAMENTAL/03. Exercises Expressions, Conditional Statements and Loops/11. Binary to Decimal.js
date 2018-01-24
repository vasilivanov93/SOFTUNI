function binaryToDecimal(number) {
    let firstPart = number[0] + number[1] + number[2] + number[3];
    let secondPart = number[4] + number[5] + number[6] + number[7];

    let sum1 = 0;
    let sum2 = 0;

    if(firstPart == "0000"){
        sum1 = 0;
    }else if(firstPart == "0001"){
        sum1 = 1;
    }else if(firstPart == "0010"){
        sum1 = 2;
    }else if(firstPart == "0011"){
        sum1 = 3;
    }else if(firstPart == "0100"){
        sum1 = 4;
    }else if(firstPart == "0101"){
        sum1 = 5;
    }else if(firstPart == "0110"){
        sum1 = 6;
    }else if(firstPart == "0111"){
        sum1 = 7;
    }else if(firstPart == "1000"){
        sum1 = 8;
    }else if(firstPart == "1001"){
        sum1 = 9;
    }else if(firstPart == "1010"){
        sum1 = 10;
    }else if(firstPart == "1011"){
        sum1 = 11;
    }else if(firstPart == "1100"){
        sum1 = 12;
    }else if(firstPart == "1101"){
        sum1 = 13;
    }else if(firstPart == "1110"){
        sum1 = 14;
    }else if(firstPart == "1111"){
        sum1 = 15;
    }

    if(secondPart == "0000"){
        sum2 = 0;
    }else if(secondPart == "0001"){
        sum2 = 1;
    }else if(secondPart == "0010"){
        sum2 = 2;
    }else if(secondPart == "0011"){
        sum2 = 3;
    }else if(secondPart == "0100"){
        sum2 = 4;
    }else if(secondPart == "0101"){
        sum2 = 5;
    }else if(secondPart == "0110"){
        sum2 = 6;
    }else if(secondPart == "0111"){
        sum2 = 7;
    }else if(secondPart == "1000"){
        sum2 = 8;
    }else if(secondPart == "1001"){
        sum2 = 9;
    }else if(secondPart == "1010"){
        sum2 = 10;
    }else if(secondPart == "1011"){
        sum2 = 11;
    }else if(secondPart == "1100"){
        sum2 = 12;
    }else if(secondPart == "1101"){
        sum2 = 13;
    }else if(secondPart == "1110"){
        sum2 = 14;
    }else if(secondPart == "1111"){
        sum2 = 15;
    }

    let result = sum1 * 16 + sum2

    console.log(result);
}

binaryToDecimal('00001001');