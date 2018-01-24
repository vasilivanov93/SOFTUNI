function grades(args){
    let n = Number(args[0]);

    let topStudent = 0;
    let between4And5 = 0;
    let between3And4 = 0;
    let fail = 0;
    let sum = 0;

    for(let i = 1; i <= n; i++){
        let currentGrades = parseFloat(args[i]);
        sum += currentGrades;

        if(currentGrades >= 5.00){
            topStudent++;
        }else if(currentGrades >= 4.00 && currentGrades <= 4.99){
            between4And5++;
        }else if(currentGrades >= 3.00 && currentGrades <= 3.99){
            between3And4++;
        }else if(currentGrades < 3.00){
            fail++;
        }
    }

    let average = sum / n;

    let top = topStudent / n * 100;
    let good = between4And5 / n * 100;
    let middle = between3And4 / n * 100;
    let weak = fail / n * 100;

    console.log(`Top students: ${top.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${good.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${middle.toFixed(2)}%`);
    console.log(`Fail: ${weak.toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);
}