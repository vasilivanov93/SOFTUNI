function pyramid(base, increment) {
    let height = Math.ceil(base / 2);
    let stone = 0;
    let marble = 0;
    let lapis = 0;

    for (let i = 1; i <= height - 1; i++) {
        let currentStone = (base - 2) * (base - 2);
        stone += currentStone;
        
        if (i % 5 === 0) {
            lapis += (base * base) - currentStone;
        } else {
            marble += (base * base) - currentStone;
        }

        base -= 2;
    }
    
    let gold = base * base;

    console.log(`Stone required: ${Math.ceil(stone * increment)}`);
    console.log(`Marble required: ${Math.ceil(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}