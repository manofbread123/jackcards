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

    const cardImages = {
        'ace_of_hearts': 'https://via.placeholder.com/100x150.png?text=Ace+of+Hearts',
        '2_of_hearts': 'https://via.placeholder.com/100x150.png?text=2+of+Hearts',
        '3_of_hearts': 'https://via.placeholder.com/100x150.png?text=3+of+Hearts',
        '4_of_hearts': 'https://via.placeholder.com/100x150.png?text=4+of+Hearts',
        '5_of_hearts': 'https://via.placeholder.com/100x150.png?text=5+of+Hearts',
        '6_of_hearts': 'https://via.placeholder.com/100x150.png?text=6+of+Hearts',
        '7_of_hearts': 'https://via.placeholder.com/100x150.png?text=7+of+Hearts',
        '8_of_hearts': 'https://via.placeholder.com/100x150.png?text=8+of+Hearts',
        '9_of_hearts': 'https://via.placeholder.com/100x150.png?text=9+of+Hearts',
        '10_of_hearts': 'https://via.placeholder.com/100x150.png?text=10+of+Hearts',
        'jack_of_hearts': 'https://via.placeholder.com/100x150.png?text=Jack+of+Hearts',
        'queen_of_hearts': 'https://via.placeholder.com/100x150.png?text=Queen+of+Hearts',
        'king_of_hearts': 'https://via.placeholder.com/100x150.png?text=King+of+Hearts',
        'ace_of_diamonds': 'https://via.placeholder.com/100x150.png?text=Ace+of+Diamonds',
        '2_of_diamonds': 'https://via.placeholder.com/100x150.png?text=2+of+Diamonds',
        '3_of_diamonds': 'https://via.placeholder.com/100x150.png?text=3+of+Diamonds',
        '4_of_diamonds': 'https://via.placeholder.com/100x150.png?text=4+of+Diamonds',
        '5_of_diamonds': 'https://via.placeholder.com/100x150.png?text=5+of+Diamonds',
        '6_of_diamonds': 'https://via.placeholder.com/100x150.png?text=6+of+Diamonds',
        '7_of_diamonds': 'https://via.placeholder.com/100x150.png?text=7+of+Diamonds',
        '8_of_diamonds': 'https://via.placeholder.com/100x150.png?text=8+of+Diamonds',
        '9_of_diamonds': 'https://via.placeholder.com/100x150.png?text=9+of+Diamonds',
        '10_of_diamonds': 'https://via.placeholder.com/100x150.png?text=10+of+Diamonds',
        'jack_of_diamonds': 'https://via.placeholder.com/100x150.png?text=Jack+of+Diamonds',
        'queen_of_diamonds': 'https://via.placeholder.com/100x150.png?text=Queen+of+Diamonds',
        'king_of_diamonds': 'https://via.placeholder.com/100x150.png?text=King+of+Diamonds',
        'ace_of_clubs': 'https://via.placeholder.com/100x150.png?text=Ace+of+Clubs',
        '2_of_clubs': 'https://via.placeholder.com/100x150.png?text=2+of+Clubs',
        '3_of_clubs': 'https://via.placeholder.com/100x150.png?text=3+of+Clubs',
        '4_of_clubs': 'https://via.placeholder.com/100x150.png?text=4+of+Clubs',
        '5_of_clubs': 'https://via.placeholder.com/100x150.png?text=5+of+Clubs',
        '6_of_clubs': 'https://via.placeholder.com/100x150.png?text=6+of+Clubs',
        '7_of_clubs': 'https://via.placeholder.com/100x150.png?text=7+of+Clubs',
        '8_of_clubs': 'https://via.placeholder.com/100x150.png?text=8+of+Clubs',
        '9_of_clubs': 'https://via.placeholder.com/100x150.png?text=9+of+Clubs',
        '10_of_clubs': 'https://via.placeholder.com/100x150.png?text=10+of+Clubs',
        'jack_of_clubs': 'https://via.placeholder.com/100x150.png?text=Jack+of+Clubs',
        'queen_of_clubs': 'https://via.placeholder.com/100x150.png?text=Queen+of+Clubs',
        'king_of_clubs': 'https://via.placeholder.com/100x150.png?text=King+of+Clubs',
        'ace_of_spades': 'https://via.placeholder.com/100x150.png?text=Ace+of+Spades',
        '2_of_spades': 'https://via.placeholder.com/100x150.png?text=2+of+Spades',
        '3_of_spades': 'https
function displayCards(hand, element) {
    element.innerHTML = '';
    for (let card of hand) {
        const cardImg = document.createElement('img');
        cardImg.src = `https://via.placeholder.com/100x150.png?text=${card.value}+of+${card.suit}`;
        cardImg.alt = `${card.value} of ${card.suit}`;
        element.appendChild(cardImg);
    }
}
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
            const cardImg = document.createElement('img');
            cardImg.src = `images/${card.value}_of_${card.suit}.png`;
            cardImg.alt = `${card.value} of ${card.suit}`;
            element.appendChild(cardImg);
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
        betAmountInput.value = '';
        displayCards(playerCards, playerHand);
        displayCards(dealerCards, dealerHand);
        updateMessage('Place your bet!');
    }

    hitButton.addEventListener('click', () => {
        if (betAmount === 0) {
            updateMessage('Please place a bet first!');
            return;
        }
        drawCard(playerCards);
        displayCards(playerCards, playerHand);
        const playerValue = calculateHandValue(playerCards);
        if (playerValue > 21) {
            updateMessage('You busted! Dealer wins.');
        }
    });

    standButton.addEventListener('click', () => {
        if (betAmount === 0) {
            updateMessage('Please place a bet first!');
            return;
        }
        let dealerValue = calculateHandValue(dealerCards);
        while (dealerValue < 17) {
            drawCard(dealerCards);
            dealerValue = calculateHandValue(dealerCards);
        }
        displayCards(dealerCards, dealerHand);
        const playerValue = calculateHandValue(playerCards);
        if (dealerValue > 21 || playerValue > dealerValue) {
            updateMessage('You win!');
        } else if (playerValue < dealerValue) {
            updateMessage('Dealer wins!');
        } else {
            updateMessage('It\'s a tie!');
        }
    });

    resetButton.addEventListener('click', resetGame);

    placeBetButton.addEventListener('click', () => {
        const amount = parseInt(betAmountInput.value);
        if (amount > playerMoney || amount <= 0) {
            updateMessage('Invalid bet amount!');
            return;
        }
        betAmount = amount;
        playerMoney -= betAmount;
        updateMessage('Bet placed! Hit or Stand?');
        drawCard(playerCards);
        drawCard(playerCards);
        drawCard(dealerCards);
        displayCards(playerCards, playerHand);
        displayCards(dealerCards, dealerHand);
    });

    resetGame();
});
