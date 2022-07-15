class Player {
    constructor(player) {
        this.player = player;
        this.playerCards = [];
        this.points = 0;
    }
}

class Card {

    static names = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
        "Jack", "Queen", "King", "Ace"];
    static suits = ["Diamonds", "Spades", "Clubs", "Hearts"];
    static values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    constructor(name, suit, value) {
        this.name = name;
        this.suit = suit;
        this.value = value;

    }

    description() {
        return Card.names[this.name - 1] + " of " + Card.suits[this.suit];
    }
}

class DeckofCards {
    constructor(firstPlayer, secondPlayer) {
        this.cards = [];
        this.firstPlayer = firstPlayer
        this.secondPlayer = secondPlayer

        this.makeDeck()
        this.deckShuffle()
        this.dealCards()
    }

    makeDeck() {
        for (let i = 0; i < Card.suits.length; i++) {
            for (let x = 0; x < Card.names.length; x++) {
                const name = Card.names[x];
                const suit = Card.suits[i];
                const value = Card.values[x];
                this.cards.push(new Card(name, suit, value));
            }
        } return this.cards;

    }

    deckShuffle() {
        let cardShuffle = this.cards;

        for (let i = 0; i < cardShuffle.length - 1; i++) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = cardShuffle[i];
            cardShuffle[i] = cardShuffle[j];
            cardShuffle[j] = temp;
        }
        return this.cards;
    }

    dealCards() {
        for (let i = 0; i < 52; i += 2) {
            let player1Hand = this.cards.shift();
            let player2Hand = this.cards.shift();
            this.firstPlayer.playerCards.push(player1Hand);
            this.secondPlayer.playerCards.push(player2Hand);
        }
    }
}


class Game {
    constructor(firstPlayer, secondPlayer) {
        this.firstPlayer = firstPlayer
        this.secondPlayer = secondPlayer
        this.playWar()
    }

    aTurn() {
        for (let i = 0; i < 26; i++) {
            let firstPlayerCard = this.firstPlayer.playerCards.shift();
            let secondPlayerCard = this.secondPlayer.playerCards.shift();
            console.log(`${this.firstPlayer.player} drew the ${firstPlayerCard.name} of ${firstPlayerCard.suit} and ${this.secondPlayer.player} drew the ${secondPlayerCard.name} of ${secondPlayerCard.suit}.`);
            if (firstPlayerCard.value > secondPlayerCard.value) {
                this.firstPlayer.points += 1;
                console.log(`${this.firstPlayer.player} wins.`);
            } else if (firstPlayerCard.value < secondPlayerCard.value) {
                this.secondPlayer.points += 1;
                console.log(`${this.secondPlayer.player} wins.`);
            } else {
                console.log("Draw.");
            }
        }
    }
    whichCardWins() {
        let firstPlayerScore = this.firstPlayer.points;
        let secondPlayerScore = this.secondPlayer.points;
        console.log(`SCORE: ${this.firstPlayer.player} has ${firstPlayerScore} points and ${this.secondPlayer.player} has ${secondPlayerScore} points.`);
        if (this.firstPlayer.points > this.secondPlayer.points) {
            console.log(`${this.firstPlayer.player} wins the game!`);
        } else if (this.firstPlayer.points < this.secondPlayer.points) {
            console.log(`${this.secondPlayer.player} wins the game!`);
        } else {
            console.log(`Game is a draw.`);
        }
    }

    playWar() {
        this.aTurn();
        this.whichCardWins();
    }
}


let player1 = new Player("Player 1");
let player2 = new Player("Player 2");

let deckOfCards = new DeckofCards(player1, player2)

game = new Game(player1, player2)