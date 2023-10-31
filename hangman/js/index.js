/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')
 */
/**
 * 1. Slumpa ord som ska gissas på
 * 2. Lägg till en addeventlistener för keyup
 * 3. Jämför bokstaven som användaren klickade på med alla bokstäver i ordet
 *      1. Loopa igenom arrayen med alla bokstäver
 *      2. Om bokstaven som användaren gissade finns så visa var
 *      3. Annars addera en del till gubben
 */


let words = ['banan', 'äppelpaj', 'skruvmejsel', 'potatismos', 'korvkiosk'];
const bodyElem = document.querySelector('body');

let randomPosition = Math.floor(Math.random() * words.length);
const selectedWord = words[randomPosition];
console.log(selectedWord);

const letters = selectedWord.split(''); // Splittar ordet till en array med bokstäver för att enklare kunna jämföra
console.log(letters);

bodyElem.addEventListener('keyup', (event) => {
    console.log('Du klickade på: ', event.key); // Få ut vilken tangent användaren klickade på

    for(let i = 0; i < letters.length; i++) {
        if (event.key === letters[i]) {
            // Vad ska hända här?
        } else {
            // Vad ska hända här?
        }
    }
});