let deck = [];
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let dealerCards = [];
let playerCards = [];

function createDeck() {
    deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ value, suit });
        }
    }
}

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function dealCard() {
    return deck.pop();
}

function startGame() {
    createDeck();
    shuffleDeck();
    dealerCards = [dealCard(), dealCard()];
    playerCards = [dealCard(), dealCard()];
    updateUI();
}

function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.textContent = `${card.value} of ${card.suit}`;
    return cardElement;
}

function updateUI() {
    const dealerCardsContainer = document.getElementById('dealer-cards');
    const playerCardsContainer = document.getElementById('player-cards');
    dealerCardsContainer.innerHTML = '';
    playerCardsContainer.innerHTML = '';
    dealerCards.forEach(card => {
        const cardElement = createCardElement(card);
        dealerCardsContainer.appendChild(cardElement);
    });
    playerCards.forEach(card => {
        const cardElement = createCardElement(card);
        playerCardsContainer.appendChild(cardElement);
    });
}

document.getElementById('deal-button').addEventListener('click', startGame);
