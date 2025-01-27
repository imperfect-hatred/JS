// // задание 1

// const myName = "LEon";
// const programmingLanguage = "js";
// const reasonText = "Круто классно";
// const courseCreatorName = "Святой Никита Михайлович";
// const numberOfMonth = "вечность";
// console.log(
//   `Всем прив! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName} Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth}. Я уверен, что пройду данный курс до конца и не умру в туалете!`
// );
// //

// // задание 2
// let myInfoText = `Всем прив! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName} Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth}. Я уверен, что пройду данный курс до конца и не умру в туалете!`;
// let lang = "javascript";
// let res = myInfoText.replaceAll("js", lang.toUpperCase());
// console.log(res);
// let length_res = res.length;
// console.log(length_res);
// console.log(res[0]);
// console.log(res[length_res - 1]);
// //

// // задание 3
// const userName = prompt("Введите имя");
// alert(`Ваше имя ${userName.toLowerCase().trim()}`);
// //

// // задание 4
// const userAge = prompt("Ваш возраст");
// alert(`Ваше имя ${userName.toLowerCase().trim()} и Вам ${Number(userAge.trim())} лет`);
// //

// // задание 5
// const userString = prompt("Введите текст для обрезки".trim());
// const startSliceIndex = Number(
//   prompt("Введите индекс, с которого нужно начать обрезку".trim())
// );
// const endSliceIndex = Number(
//   prompt("Введите индекс, на котором нужно закончить".trim())
// );
// alert(
//   `Обрезание завершено:${userString.slice(startSliceIndex, endSliceIndex)}`
// );
// //

// // задание 6
// const userText = prompt("Введите текст".trim());
// const wordFromText = prompt("Какое слово найти?".trim());
// const indexOfWord = userText.indexOf(wordFromText);
// alert(`Ваш текст: ${userText.slice(0, indexOfWord+wordFromText.length)}`);
// //

// // задание 7
// const javaScriptDescription =
//   "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.";

// const midSymbol = Math.floor(javaScriptDescription.length / 2);

// console.log(javaScriptDescription.slice(0, midSymbol));

// let res = javaScriptDescription.replaceAll("а", "а".toUpperCase());
// console.log(res);

// console.log(javaScriptDescription.replaceAll(" ", ""));

// console.log(javaScriptDescription.repeat(3));

// console.log(
//   javaScriptDescription[Math.floor(javaScriptDescription.length / 2)]
// );
// //
