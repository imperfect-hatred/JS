// //задание 1
// const existedUserLogin = "the_best_user";
// const existedUserPassword = "12345678";
// const userLogin = prompt("Введите логин".trim());
// const userPassword = prompt("Введите пароль".trim());
// if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
//   alert("привет босс");
// } else {
//   alert("Пошол отсюда");
// }
// //

// // задание 2

// let correctAnswers = 0;
// let incorrectAnswers = 0;
// const test1 = Number(prompt("Сколько будет 2+2?"));
// if (test1 === 4) {
//   alert("Прально!");
//   correctAnswers += 1;
// } else {
//   alert("УБЬЮ");
//   incorrectAnswers += 1;
// }
// const test2 = Number(prompt("Сколько будет 2*2"));
// if (test2 === 4) {
//   alert("Прально!");
//   correctAnswers += 1;
// } else {
//   alert("УБЬЮ");
//   incorrectAnswers += 1;
// }
// const test3 = Number(
//   prompt(
//     "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?"
//   )
// );
// if (test3 === 1) {
//   alert("Прально!");
//   correctAnswers += 1;
// } else {
//   alert("УБЬЮ");
//   incorrectAnswers += 1;
// }
// const test4 = Number(
//   prompt(
//     "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?"
//   )
// );
// if (test4 === 12) {
//   alert("Прально!");
//   correctAnswers += 1;
// } else {
//   alert("УБЬЮ");
//   incorrectAnswers += 1;
// }
// const test5 = Number(prompt("Сколько будет 2+2*2?"));
// if (test5 === 6) {
//   alert("Прально!");
//   correctAnswers += 1;
// } else {
//   alert("УБЬЮ");
//   incorrectAnswers += 1;
// }
// alert(
//   `Правильных ответов: ${correctAnswers}, Неправильных: ${incorrectAnswers}`
// );
// //

// // задание 3
// let ask1 = confirm("JavaScript появился в 1995 году?");
// if (ask1) {
//   alert("Прально!");
// } else {
//   alert("No");
// }
// let ask2 = confirm("Спецификация JavaScript называется ECMAscript?");
// if (ask2) {
//   alert("Прально!");
// } else {
//   alert("No");
// }
// let ask3 = confirm("JavaScript был создан за 1 месяц?");
// if (ask3) {
//   alert("Прально!");
// } else {
//   alert("No");
// }
// //

// // задание 4

// let i = 0;
// while (i < 3) {
//   let newStudent = prompt("Введите имя").trim();
//   if (newStudent) {
//     alert(`welcome ${newStudent}`);
//     i++;
//   }
// }

// let f = 0;
// do {
//   let newStudent = prompt("Введите имя").trim();
//   if (newStudent) {
//     alert(`welcome ${newStudent}`);
//     f++;
//   }
// } while (f < 3);
// //

// // задание 5
// let i = 0;
// let sum = 0;
// while (sum < 5050) {
//   sum += i;
//   i++;
//   alert(sum);
// }
// //

// // задание 6
// let clientName = "Игорь";
// let clientSpentForAllTime = 1100;
// let clientSpentToday = 225;
// if ((clientSpentForAllTime >= 100, clientSpentForAllTime <= 300)) {
//   let discount = 0.1;
//   alert(`ваша скидка ${discount * 100}%`);
//   alert(`Итоговая сумма: ${clientSpentToday * discount}$`);
// } else if ((clientSpentForAllTime > 300, clientSpentForAllTime <= 500)) {
//   let discount = 0.2;
//   alert(`ваша скидка ${discount * 100}%`);
//   alert(`Итоговая сумма: ${clientSpentToday * discount}$`);
// } else if (clientSpentForAllTime > 500) {
//   let discount = 0.3;
//   alert(`ваша скидка ${discount * 100}%`);
//   alert(`Итоговая сумма: ${clientSpentToday * discount}$`);
// }
// //

// // задание 7
// let clientName = prompt("как твое имя?");
// let clientSpentForAllTime = Number(prompt("скока денег?"));
// let clientSpentToday = Number(prompt("скока денег седня??"));
// if ((clientSpentForAllTime >= 100, clientSpentForAllTime <= 300)) {
//   let discount = 0.1;
//   alert(`ваша скидка ${discount * 100}%`);
//   alert(`Итоговая сумма: ${clientSpentToday * discount}$`);
// } else if ((clientSpentForAllTime > 300, clientSpentForAllTime <= 500)) {
//   let discount = 0.2;
//   alert(`ваша скидка ${discount * 100}%`);
//   alert(`Итоговая сумма: ${clientSpentToday * discount}$`);
// } else if (clientSpentForAllTime > 500) {
//   let discount = 0.3;
//   alert(`ваша скидка ${discount * 100}%`);
//   alert(`Итоговая сумма: ${clientSpentToday * discount}$`);
// } else {
//   alert("ты балбес че тут понаписал?");
// }
// //

// // задание 8
// let login = prompt("Логин");
// let password = prompt("Введи пароль быстра");

// function checkPassword(password) {
//   if ((password.length < 3, password.length > 20)) {
//     return false;
//   }
//   let hasUppercase = false;
//   let hasDigit = false;

//   for (let i = 0; i < password.length; i++) {
//     const char = password[i];
//     if (char >= "A" && char <= "Z") {
//       hasUppercase = true;
//     }
//     if (char >= "0" && char <= "9") {
//       hasDigit = true;
//     }
//     if (hasUppercase && hasDigit) {
//       break;
//     }
//   }
//   return hasUppercase && hasDigit;
// }

// if (checkPassword(password)) {
//   alert("норм пароль");
// } else {
//   alert("говно пароль");
// }
// //
