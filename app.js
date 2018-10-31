const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const overlay = document.querySelector('#overlay');
const startButton = document.querySelector('.btn__reset');
const phraseUL = document.querySelector('#phrase ul');

let missed = 0;
let phrases = ['heart of gold',
			   'love is blind',
			   'cool as a cucumber',
			   'bring home the bacon',
			   'saved by the bell',
			   'dressed to the nines'];

startButton.addEventListener('click', () => {
	overlay.style.display = 'none';
});

function getRandomPhraseAsArray(arr) {
	// choose random phrase from arr
	const randomNumber = Math.floor(Math.random() * arr.length);
	const randomPhrase = arr[randomNumber];

	// split that string into new array of characters
	const characters = randomPhrase.split('');

	// return the new array of characters
	return characters;
}

function addPhraseToDisplay(arr) {
	// loop through array of characters
	for (let i = 0; i < arr.length; i++) {
	// create a list item
		const li = document.createElement('li');
	// put the character inside the list item
		li.textContent = arr[i];
	// append the list item to #phrase ul
		phraseUL.append(li);
	// if list item is a letter, add class "letter"
		const letters = /^[0-9a-zA-Z]+$/;
		if (li.textContent.match(letters)) {
			li.className = 'letter';
		} else {
			li.className = '';
			li.style.margin = '1em';
		}
	}
}

function checkLetter(letter) {
	// get all of the elements with class "letter"
	const letters = document.querySelectorAll('.letter');
	let matchingLetter;
	let matchCounter = 0;

	// loop over these elements to see if they match letter chosen
	for (let i = 0; i < letters.length; i++) {
		// if there's a match
		if (letter === letters[i].textContent) {
			// add class "show" to the list item containing that letter
			letters[i].className += ' show';
			// store the matching letter inside a variable
			matchingLetter = letter;
			matchCounter++;
		} 
	}
	
	if (matchCounter > 0) {
		return matchingLetter;
	} else {
		return null;
	}
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);