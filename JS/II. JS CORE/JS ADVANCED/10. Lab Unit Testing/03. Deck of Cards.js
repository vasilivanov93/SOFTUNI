function printDeckOfCards(arr) {
    function playingCards(card, suit) {
        const Valid_Card = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const Valid_Suit = {
            S: '\u2660',
            H: '\u2665 ',
            D: '\u2666',
            C: '\u2663'
        }
    
        if (!Valid_Card.includes(card)) {
            throw new Error(`Invalid card: ${card}`)
        }
    
        if (!Valid_Suit.hasOwnProperty(suit)) {
            throw new Error(`Invalid suit: ${suit}`)
        }
    
        return {
            card,
            suit,
            toString: function () {
                return `${card}${Valid_Suit[suit]}`;
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let card = arr[i].substring(0, arr[i].length - 1);
        let suit = arr[i][arr[i].length - 1];
        try {
            arr[i] = playingCards(card, suit);
        } catch (error) {
            console.log(`Invalid card: ${arr[i]}`);
            return;
        }  
    }
    console.log(arr.join(' '))
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);