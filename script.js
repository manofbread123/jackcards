document.addEventListener('DOMContentLoaded', () => {
    const playerHand = document.getElementById('player-hand');
    const dealerHand = document.getElementById('dealer-hand');
    const message = document.getElementById('message');
    const hitButton = document.getElementById('hit-button');
    const standButton = document.getElementById('stand-button');
    const resetButton = document.getElementById('reset-button');
    const betAmountInput = document.getElementById('bet-amount');
    const placeBetButton = document.getElementById('place-bet');

    let deck = [];
    let playerCards = [];
    let dealerCards = [];
    let playerMoney = 1000;
    let betAmount = 0;

    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

    function createDeck() {
        deck = [];
        for (let suit of suits) {
            for (let value of values) {
                deck.push({ suit, value });
            }
        }
    }

    function shuffleDeck() {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }

    function drawCard(hand) {
        const card = deck.pop();
        hand.push(card);
        return card;
    }

    function calculateHandValue(hand) {
        let value = 0;
        let aces = 0;
        for (let card of hand) {
            if (['jack', 'queen', 'king'].includes(card.value)) {
                value += 10;
            } else if (card.value === 'ace') {
                aces += 1;
                value += 11;
            } else {
                value += parseInt(card.value);
            }
        }
        while (value > 21 && aces > 0) {
            value -= 10;
            aces -= 1;
        }
        return value;
    }

    function displayCards(hand, element) {
        element.innerHTML = '';
        for (let card of hand) {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
            cardDiv.style.backgroundImage = `url(images/${card.value}_of_${card.suit}.png)`;
            element.appendChild(cardDiv);
        }
    }

    function updateMessage(msg) {
        message.textContent = msg;
    }

    function resetGame() {
        createDeck();
        shuffleDeck();
        playerCards = [];
        dealerCards = [];
        betAmount = 0;
