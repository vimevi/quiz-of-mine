// Set up API key and endpoint for translation API
const apiKey = "bb15895ea4msh59569b3629130aap157a10jsn873d8d914806";
const endpoint = "https://api.mymemory.translated.net/get";

const words = [
	{ english: "Algorithm", russian: "Алгоритм" },
	{ english: "Array ", russian: "Массив" },
	{ english: "Boolean", russian: "Булево значение" },
	{ english: "Class", russian: "Класс" },
	{ english: "Compiler", russian: "Компилятор" },
	{ english: "Conditional", russian: "Условный" },
	{ english: "Constructor", russian: "Конструктор" },
	{ english: "Debugging", russian: "Отладка" },
	{ english: "Declaration", russian: "Объявление" },
	{ english: "Documentation", russian: "Документация" },
	{ english: "Element", russian: "Элемент" },
	{ english: "Error", russian: "Ошибка" },
	{ english: "Exception", russian: "Исключение" },
	{ english: "Function ", russian: "Функция" },
	{ english: "Inheritance", russian: "Наследование" },
	{ english: "Integer", russian: "Целое число" },
	{ english: "Interface", russian: "Интерфейс" },
	{ english: "Iteration", russian: "Итерация" },
	{ english: "Library", russian: "Библиотека" },
	{ english: "Loop", russian: "Цикл" },
	{ english: "Method", russian: "Метод" },
	{ english: "Namespace", russian: "Пространство имён" },
	{ english: "Null", russian: "Пусто" },
	{ english: "Object", russian: "Объект" },
	{ english: "Operator", russian: "Оператор" },
	{ english: "Parameter", russian: "Параметр" },
	{ english: "Pointer", russian: "Указатель" },
	{ english: "Polymorphism", russian: "Полиморфизм" },
	{ english: "Property", russian: "Свойство" },
	{ english: "Prototype", russian: "Прототип" },
	{ english: "Recursion", russian: "Рекурсия" },
	{ english: "Return", russian: "Возвращение" },
	{ english: "Scope", russian: "Область видимости" },
	{ english: "Statement", russian: "Выражение" },
	{ english: "String", russian: "Строка" },
	{ english: "Syntax", russian: "Синтаксис" },
	{ english: "Type", russian: "Тип данных" },
	{ english: "Variable", russian: "Переменная" },
	{ english: "Void", russian: "Пустота" },
	{ english: "If", russian: "Если" },
	{ english: "Else", russian: "Ещё" },
	{ english: "Switch", russian: "Оператор switch" },
	{ english: "Break", russian: "Оператор break" },
	{ english: "Continue", russian: "Выключатель/переключатель" },
	{ english: "Try", russian: "Блок try" },
	{ english: "Catch", russian: "Блок catch" },
	{ english: "Finally", russian: "Блок finally" },
	{ english: "Exception handling", russian: "Обработка исключений" },
	{ english: "Debug", russian: "Отладка" },
	{ english: "Log", russian: "Журнал" },
	{ english: "Package", russian: "Пакет" },
	{ english: "Framework", russian: "Фреймворк" },
	{ english: "Version control", russian: "Контроль версий" },
	{ english: "Repository", russian: "Репозиторий" },
	{ english: "Function ", russian: "Функция" },
	{ english: "Branch", russian: "Ветка" },
	{ english: "Merge", russian: "Слияние" },
	{ english: "Pull request", russian: "Запрос на слияние" },
	{ english: "Commit", russian: "Коммит" },
	{ english: "Conflict", russian: "Конфликт" },
	{ english: "Debugging", russian: "Отладка" },
	{ english: "Testing", russian: "Тестирование" },
	{ english: "Unit test", russian: "Модульное тестирование" },
	{ english: "Performance test", russian: "Тестирование производительности" },
	{ english: "Deployment", russian: "Развертывание" },
	{ english: "Server", russian: "Сервер" },
	{ english: "Client", russian: "Клиент" },
	{ english: "Database", russian: "База данных" },
	{ english: "Query", russian: "Запрос" },
	{ english: "Index", russian: "Индекс" },
	{ english: "Backup", russian: "Резервное копирование" },
	{ english: "Restore", russian: "Восстановление" },
	{ english: "Security", russian: "Безопасность" },
	{ english: "Authentication", russian: "Аутентификация" },
	{ english: "Authorization", russian: "Авторизация" },
	{ english: "Encryption", russian: "Шифрование" },
	{ english: "Decryption", russian: "Расшифровка" },
	{ english: "Vulnerability", russian: "Уязвимость" },
	{ english: "Patch", russian: "Патч" },
	{ english: "Firewall", russian: "Брандмауэр" },
	{ english: "API documentation", russian: "Документация API" },
	{ english: "Code", russian: "Код" },
	{ english: "Comment", russian: "Комментарий" },
	{ english: "Debug statement", russian: "Отладочный оператор" },
	{ english: "Syntax error", russian: "Ошибка синтаксиса" },
	{ english: "Bug", russian: "Ошибка" },
	{ english: "Feature ", russian: "Функция" },
	{ english: "Upgrade", russian: "Обновление" },
	{ english: "License", russian: "Лиценция" },
	{ english: "Interface", russian: "Интерфейс" },
	{ english: "Settings", russian: "Настройки" },
	{ english: "Preferences", russian: "Предпочтения" },
	{ english: "Access", russian: "Доступ" },
	{ english: "Continue", russian: "Продолжить" },
	{ english: "Event", russian: "Событие" },
	{ english: "Execute", russian: "Выполнить", alternatives: "Выполнение" },
	{ english: "Exit", russian: "Выход" },
	{ english: "Expression", russian: "Выражение" },
	{ english: "Get", russian: "Получить" },
	{ english: "Header", russian: "Заголовок" },
	{ english: "Footer", russian: "Нижний колонтитул" },
	{
		english: "Alert",
		russian: "Тревога (предупреждение)",
		alternatives: ["Оповещение", "Сигнал тревоги"],
	},
	{
		english: "Notification",
		russian: "Уведомление",
		alternatives: ["Извещение", "Оповещение"],
	},
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
		let alternativesText = currentWord.alternatives
			? " (" + currentWord.alternatives.join(", ") + ")"
			: "";
		resultElement.textContent =
			"Incorrect. The correct translation is: " +
			currentWord.russian +
			alternativesText;
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

const userInput = document.getElementById("user-input");
const checkAnswerBtn = document.querySelector(
	'button[onclick="checkAnswer()"]'
);
const nextWordBtn = document.querySelector('button[onclick="nextWord()"]');

userInput.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		if (checkAnswerBtn.disabled === false) {
			checkAnswerBtn.click();
		} else if (nextWordBtn.disabled === false) {
			nextWordBtn.click();
		}
	}
});
