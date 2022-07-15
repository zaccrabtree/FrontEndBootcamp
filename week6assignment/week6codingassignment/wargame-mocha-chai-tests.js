let expect = chai.expect;

describe("wargame.js", function(){
   describe("Player", function(){
       it("constructor", function(){
           const player = new Player("Player1");
            expect(player.player).to.equal("Player1");
            expect(Array.isArray(player.playerCards)).to.equal(true);
            expect(player.playerCards.length).to.equal(0);
            expect(player.points).to.equal(0);
       })
    
   })
   describe("DeckofCards", function(){
       const playerOne = new Player("Player1");
       const playerTwo = new Player("Player2");
       const deck = new DeckofCards(player1, player2);
       it("Deck should be empty", function(){
           expect(deck.cards.length).to.equal(0);
       })
   }) 
});