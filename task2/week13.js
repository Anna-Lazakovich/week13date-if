//Задание 2
function countDays () { 
const dateOfBirthday = document.querySelector('#inputdate').value;
const result = document.querySelector('#result');

result.textContent = "";

if (dateOfBirthday == "") {
	result.textContent += "Пожалуйста, введите дату рождения.";
} else {	
	const resultDays = Math.floor((Date.parse(dateOfBirthday) - (Date.parse(new Date()))) / 1000 / 60 / 60 / 24);
	result.textContent += (`До вашего дня рождения ${resultDays} `);

	if (resultDays === 1) {
		result.textContent += "день";
	} else if (resultDays === 2 || resultDays === 3 || resultDays === 4) {
		result.textContent += "дня";
	} else {
		result.textContent += "дней";
	};
};
}