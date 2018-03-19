class Player {
    constructor(nickName) {
        this.nickName = nickName;
        this.lists = [];
    }

    addScore(score) {
        if (!isNaN(score) && score !== null) {
            this.lists.push(+score);
            this.lists.sort((a, b) => b - a);
        }

        return this;
    }

    get scoreCount() {
        return this.lists.length;
    }

    get highestScore() {
        return this.lists[0];
    }

    get topFiveScore() {
        return this.lists.slice(0, 5)
    }

    toString() {
        return `${this.nickName}: [${this.lists}]`;
    }
}

let peter = new Player("Peter");
console.log('Highest score: ' + peter.highestScore);
// console.log(`Top 5 score: [${peter.topFiveScore}]`);
// console.log('' + peter); console.log('Score count: ' + peter.scoreCount);
// peter.addScore(450);
// peter.addScore(200);
// console.log('Highest score: ' + peter.highestScore);
// console.log(`Top 5 score: [${peter.topFiveScore}]`);
// console.log('' + peter);
// peter.addScore(2000);
// peter.addScore(300);
// peter.addScore(50);
// peter.addScore(700);
// peter.addScore(700);