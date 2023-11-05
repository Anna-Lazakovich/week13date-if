//Задание 2
function countDays () { 
let dateOfBirthday = document.querySelector('#inputdate');
let result = document.querySelector('#result');

result.textContent = "";

if (dateOfBirthday.value == "") {
	result.textContent += "Пожалуйста, введите дату рождения.";
} else {
	const resultDays = Math.floor((new Date() - dateOfBirthday) / 1000 / 60 / 60 / 24);
	result.textContent += (`До вашего дня рождения осталось ${resultDays}`);
}
}