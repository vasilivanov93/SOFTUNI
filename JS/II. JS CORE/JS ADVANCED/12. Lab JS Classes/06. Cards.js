let result = (() => {
    const Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const Suits = {
        SPADES: '\u2660',
        HEARTS: '\u2665 ',
        DIAMONDS: '\u2666',
        CLUBS: '\u2663'
    }

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        set face(f) {
            if (!Faces.includes(f)) {
                throw new TypeError(`Invalid card face: ${f}`);
            }
            this._face = f;
        }

        get face() {
            return this._face
        }

        set suit(s) {
            if (!Object.keys(Suits).map(k => Suits[k]).includes(s)) {
                throw new TypeError(`Invalid card suit: ${s}`);
            }
            this._suit = s;
        }

        get suit() {
            return this._suit
        }

        toString() {
            return `${this._face}${this._suit}`;
        }
    }

    return {
        Suits, 
        Card
    }
})();

let Card = result.Card;
let Suits = result.Suits;
let card = new Card("2",Suits.SPADES)
console.log(card.toString());
