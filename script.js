

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
