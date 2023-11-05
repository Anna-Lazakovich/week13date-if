//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
const currentYear = (new Date).getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
const currentMonth = (new Date).getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDay = (new Date).getDate();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
const birthday = new Date(2023, 8, 24);
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
const futureDate = new Date();
futureDate.setMonth(futureDate.getMonth() + 1);
futureDate.setDate(futureDate.getDate() + 10);
console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
const timeDiff = futureDate - currentDate;
console.log(Math.round(timeDiff/1000/60/60/24));

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
const pastDate = new Date();
pastDate.setDate(pastDate.getDate() - 5);
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
const daysDiff = currentDate - pastDate;
console.log(Math.round(daysDiff/1000/60/60/24));

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
const nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate() + 7);
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(nextWeek.getDay());

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const now = new Date()
const futureYear = now.getFullYear() + 5;
console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
const futureDateInFutureYear = new Date (futureYear, 8, 24);
console.log(futureDateInFutureYear);


//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
console.log(futureYear - now.getFullYear());

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
const date = new Date(Date.parse(strDate));
console.log(date);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
console.log(Date.parse(strDate));

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const wrongDate = '2023/06/15';
const wrongDateNew = Date.parse(wrongDate);
if (wrongDateNew == 'NaN') {
    console.log('Неправильный формат даты');
} else {
    console.log('Правильный формат даты');
}

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number > 0) {
    console.log('Значение положительное: ' + number);
} else {
    console.log('Значение неположительное: ' + number);
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if (number % 2 === 0) {
    console.log('Значение четное: ' + number);
} else {
    console.log('Значение нечетное: ' + number);
}


//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (number % 3 === 0) {
    console.log('Значение кратно 3: ' + number);
} else {
    console.log('Значение некратно 3: ' + number);
}

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (String(number).length === 1) {
    console.log('Значение однозначное: ' + number);
} else {
    console.log('Значение неоднозначное: ' + number);
}

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (String(number).length === 2) {
    console.log('Значение двузначное: ' + number);
} else {
    console.log('Значение недвузначное: ' + number);
}

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number >= 0) {
    console.log('Значение положительное или ноль: ' + number);
} else {
    console.log('Значение отрицательное: ' + number);
}

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number % 5 === 0 && number % 7 === 0) {
    console.log('Значение кратно 5 и 7: ' + number);
} else if (number % 5 === 0) {
    console.log('Значение кратно 5: ' + number);
} else if (number % 7 === 0) {
    console.log('Значение кратно 7: ' + number);
} else {
    console.log('Значение некратно 5 или 7: ' + number);
}

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number <= 0) {
    console.log('Значение отрицательное или ноль: ' + number);
} else {
    console.log('Значение положительное: ' + number);
}

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (String(number).length === 3 && number > 0) {
    console.log('Значение трёхзначное и положительное: ' + number);
} else if (String(number).length === 3 && number <= 0) {
    console.log('Значение трёхзначное и неположительное: ' + number);
} else if (String(number).length != 3 && number > 0) {
    console.log('Значение нетрёхзначное и положительное: ' + number);
} else {
    console.log('Значение нетрёхзначное и неположительное: ' + number);
}
console.log(number.length);

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).


function weekDayName(newNumber) {
    let day = '';
    switch(newNumber) {
    case 0: day = 'Воскресенье'; break;
    case 1: day = 'Понедельник'; break;
    case 2: day = 'Вторник'; break;
    case 3: day = 'Среда'; break;
    case 4: day = 'Четверг'; break;
    case 5: day = 'Пятница'; break;
    case 6: day = 'Суббота'; break;
    default: day = 'Неизвестный день недели';
}
console.log('Введенный день недели - ' + day.toLowerCase() + '.');  
}

weekDayName(2);

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'W';
let fullName;

function fullDirection(direction) {
switch (direction) {
    case 'N': fullName = 'Север'; break;
    case 'S': fullName = 'Юг'; break;
    case 'E': fullName = 'Восток'; break;
    case 'W': fullName = 'Запад'; break;
    default: fullName = 'Неизвестное направление';
}
console.log(`Полное название направления ${direction} - ` + fullName.toLowerCase() + '.'); 
}

fullDirection("N");