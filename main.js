// Set up API key and endpoint for translation API
const apiKey = "bb15895ea4msh59569b3629130aap157a10jsn873d8d914806";
const endpoint = "https://api.mymemory.translated.net/get";

const words = [
	{ english: "apple", russian: "яблоко" },
	{ english: "banana", russian: "банан" },
	{ english: "carrot", russian: "морковь" },
];

let currentWordIndex = Math.floor(Math.random() * words.length);
let currentWord = words[currentWordIndex];

// Display the current word to the user
const englishWordElement = document.getElementById("english-word");
englishWordElement.textContent = currentWord.english;

// Check the user's answer
function checkAnswer() {
	const userInput = document
		.getElementById("user-input")
		.value.trim()
		.toLowerCase();
	const resultElement = document.getElementById("result");

	if (userInput === currentWord.russian) {
		resultElement.textContent = "Correct!";
	} else {
		resultElement.textContent =
			"Incorrect. The correct translation is: " + currentWord.russian;
	}
}

// Select a new random word
function nextWord() {
	currentWordIndex = Math.floor(Math.random() * words.length);
	currentWord = words[currentWordIndex];
	englishWordElement.textContent = currentWord.english;
	document.getElementById("user-input").value = "";
	document.getElementById("result").textContent = "";
}

// Add a new word to the list of words
function addWord(event) {
	event.preventDefault();

	const englishWordInput = document
		.getElementById("english-word-input")
		.value.trim();
	const russianWordInput = document
		.getElementById("russian-word-input")
		.value.trim();

	if (englishWordInput === "" || russianWordInput === "") {
		alert("Please enter an English and a Russian word.");
		return;
	}

	const newWord = {
		english: englishWordInput,
		russian: russianWordInput,
	};
	words.push(newWord);

	// Clear the form inputs
	document.getElementById("english-word-input").value = "";
	document.getElementById("russian-word-input").value = "";

	// Confirm the word was added to the list
	alert('The word "' + newWord.english + '" has been added to the quiz!');
}
