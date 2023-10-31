/**
Ett kortspel där spelaren gissar om nästa kort som dras ur högen
är högre, lägre eller likvärdigt. Poäng ges vid rätt gissning. 
Spelet är slut när kortleken är slut, eller man gissat fel 3 ggr.
*/

/**
 * Vid sidladdning:
 * 1. Generera en kortlek
 * 2. Slumpa ett kort från kortleken och ta bort kortet från kortleken
 * 3. Visa det slumpade kortet på skärmen
 * 4. Skapa variabler för poäng och antal försök
 * 5. Skapa tre knappar och koppla eventlistners till dessa
 * 
 * När jag klickar på en knapp:
 * 1. Slumpa ett kort från kortleken och ta bort kortet från kortleken
 * 2. Spara undan det förgående kort
 * 3. Visa det nya slumpade kortet på skärmen
 * 4. Jämför det nuvarande kortet med det tidigare kortet
 * 5. Om det är rätt gissat så ge poäng
 * 6. Om det är fel gissat så dra av ett försök
 * 7. Uppdatera antal kort som är kvar i kortleken
 */

const lowerButton = document.querySelector('#lower');
const equalButton = document.querySelector('#equal');
const higherButton = document.querySelector('#higher');
const scoreElem = document.querySelector('.score');
const attemptsElem = document.querySelector('.attempts');
const gameOverElem = document.querySelector('#game-over');

let points = 0;
let attempts = 3;
const deck = createDeck();
let currentCard = pickCard();
showCard();

function createDeck() {
    let deck = [];
    const suits = ['&spades;', '&hearts;', '&clubs;', '&diams;'];

    for(let i = 0; i < suits.length; i++) {
        for (let j = 2; j < 15; j++) {
            const card = {
                value: j,
                suit: suits[i],
                color: getColor(suits[i]),
                display: getDisplayValue(j)
            }

            deck.push(card);
        }
    }

    function getColor(suit) {
        if (suit === '&hearts;' || suit === '&diams;') {
            return 'red';
        } else {
            return 'black';
        }
    }

    function getDisplayValue(value) {
        if (value < 11) { return value; }
        else if (value === 11) { return 'J' }
        else if (value === 12) { return 'Q' }
        else if (value === 13) { return 'K' }
        else if (value === 14) { return 'A' }
    }

    return deck;
}

function pickCard() {
    const randomPosition = Math.floor(Math.random() * deck.length);
    const card = deck.splice(randomPosition, 1); // Returnerar en array med det objekt (kort) som togs bort
    console.log(card);
    updateCardCount();

    return card[0]; // Plockar ut objektet från array:en och returnerar enbart objektet
}

function showCard() {
    const cardElem = document.querySelector('#show-card');
    cardElem.innerHTML = `
        <section class="front">
            <header><span class="${currentCard.color}">${currentCard.suit}</span>${currentCard.display}</header>
            <div class="suite ${currentCard.color}">${currentCard.suit}</div>
            <footer><span class="${currentCard.color}">${currentCard.suit}</span>${currentCard.display}</footer>
        </section>
    `
}

function updatePoints() {
    points = points + 100;
    scoreElem.innerHTML = points;
}

function updateAttemps() {
    attempts--
    attemptsElem.innerHTML = attempts;
    //attempts = attempts - 1; // Samma som ovan
}

function updateCardCount() {
    const cardCountElem = document.querySelector('.left');
    cardCountElem.innerHTML = `${deck.length} kvar`;
}

lowerButton.addEventListener('click', () => {
    if (deck.length > 0 && attempts > 0) {
        const previousCard = currentCard; // Spara undan nuvarande korts värde
        currentCard = pickCard();
        showCard();

        if (currentCard.value < previousCard.value) { // Jämför tidigare kort mot det nya kortet
            console.log('Du gissade rätt');
            updatePoints();
        } else {
            console.log('Du gissade fel');
            updateAttemps();
        }

    } else {
        console.log('Game over!');
        gameOverElem.classList.add('show');
    }
});

equalButton.addEventListener('click', () => {
    if (deck.length > 0 && attempts > 0) {
        const previousCard = currentCard; // Spara undan nuvarande korts värde
        currentCard = pickCard();
        showCard();

        if (currentCard.value === previousCard.value) { // Jämför tidigare kort mot det nya kortet
            console.log('Du gissade rätt');
            updatePoints();
        } else {
            console.log('Du gissade fel');
            updateAttemps();
        }

    } else {
        console.log('Game over!');
        gameOverElem.classList.add('show');
    }
});

higherButton.addEventListener('click', () => {
    if (deck.length > 0 && attempts > 0) {
        const previousCard = currentCard; // Spara undan nuvarande korts värde
        currentCard = pickCard();
        showCard();

        if (currentCard.value > previousCard.value) { // Jämför tidigare kort mot det nya kortet
            console.log('Du gissade rätt');
            updatePoints();
        } else {
            console.log('Du gissade fel');
            updateAttemps();
        }

    } else {
        console.log('Game over!');
        gameOverElem.classList.add('show');
    }
});