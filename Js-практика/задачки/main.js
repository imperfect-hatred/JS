// // Градусы
// let F = Number(prompt("Введите градусы в Фаренгейтах").trim());
// alert(`Градусы в Цельсиях ${(F - 32) * 1.8}`);
// let C = Number(prompt("Введите градусы в Цельсиях").trim());
// alert(`Градусы в Фаренгейтах ${C * 1.8 + 32}`);
// //

// // треугольник
// let a = Number(prompt("Введите первую сторону"));
// let b = Number(prompt("Введите вторую сторону"));
// let c = Number(prompt("Введите третью сторону"));

// if (a + b > c && a + c > b && b + c > a) {
//   let perimeter = a + b + c;

//   let s = perimeter / 2;

//   let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

//   let ratio = perimeter / area;
//   alert(` треугольник существует
//     Площадь = ${area.toFixed(2)}
//     периметр = ${perimeter}
//     Соотношение = ${ratio.toFixed(2)}`);
// } else {
//   alert("треугольник говно");
// }
// //

// // главный босс собеседований
// let n = Number(prompt("Введите целое число"));

// for (let i = 0; i <= n; i++) {
//   let word = "";

//   if (i % 5 === 0) {
//     word += "fizzbuzz";
//   } else if (i % 2 === 0) {
//     word += "buzz";
//   } else if (i % 2 !== 0) {
//     word += "fizz";
//   }

//   alert(`${i} ${word.trim()}`);
// }
// //

// // с новым годом
// let height = Number(prompt("Введите высоту елки"));

// let tree = "";
// let symbol = "*";

// for (let i = 1; i <= height; i++) {
//   tree += `${symbol.repeat(i)}\n`;
//   symbol = symbol === "*" ? "#" : "*";
// }

// tree += "||";
// alert(tree);
// //

// // деление
// let n = Number(prompt("Введите число n"));
// let x = Number(prompt("Введите число x"));
// let y = Number(prompt("Введите число y"));

// if (n % x === 0 && n % y === 0) {
//   alert(`Число ${n} делится нацело на оба числа ${x} и ${y}`);
// } else {
//   alert(`Число ${n} НЕ делится нацело на оба числа ${x} и ${y}`);
// }
// //

// // кварталы
// let month = Number(prompt("Введите номер месяца (от 1 до 12)"));

// if (month >= 1 && month <= 3) {
//   alert(`месяц ${month} => 1 квартал`);
// } else if (month >= 4 && month <= 6) {
//   alert(`месяц ${month} => 2 квартал`);
// } else if (month >= 7 && month <= 9) {
//   alert(`месяц ${month} => 3 квартал`);
// } else if (month >= 10 && month <= 12) {
//   alert(`месяц ${month} => 4 квартал`);
// } else {
//   alert("Нет такого месяца");
// }
// //

// // степень
// let n = Number(prompt("Введите целое число n"));

// let result = [];
// for (let i = 0; i <= n; i++) {
//   result.push(Math.pow(2, i));
// }

// alert(result.join(", "));
// //
