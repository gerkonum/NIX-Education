// Task 1
// let i = 3;
// while (i) {
//     alert(i--);
// } // Останнє значення 1, тому що 0 дасть false і тіло циклу не виповниться.

// Task 2
// let a = +prompt("Введіть число A") 
// let b = +prompt("Введіть число B")
// let c = +prompt("Введіть число C")
// if((a <= b) && (b <= c) || (a >= b) && (b >= c)){
//     alert(`Подвоєні числа : ${a*=2}, ${b*=2}, ${c*=2}, `)
// }else{
//     alert(`Протилежні числа : ${a*=(-1)}, ${b*=(-1)}, ${c*=(-1)}, `)
// }

// Task 3
// let a = +prompt("Введіть число A") 
// let b = +prompt("Введіть число B")
// let c = +prompt("Введіть число C")
// if(((a <= b) && (b <= c) || (a >= b) && (b >= c)) || (a >= b) && (b >= c) || (a <= b) && (b <= c)){
//     alert(`Подвоєні числа : ${a*=2}, ${b*=2}, ${c*=2}, `)
// }else{
//     alert(`Протилежні числа : ${a*=(-1)}, ${b*=(-1)}, ${c*=(-1)}, `)
// }

// Task 4
// let a = +prompt("Введіть точку A") 
// let b = +prompt("Введіть точку B")
// let c = +prompt("Введіть точку C")
// if((b - a) > (c - a)){
//     if((c - a) < 0){
//         alert(`Точка C ближче до точки A, її відстань від точки А - ${(c-a)*(-1)} см`)
//     }else{
//         alert(`Точка C ближче до точки A, її відстань від точки А - ${c-a} см`)
//     }
// }else{
//     if((b - a) < 0){
//         alert(`Точка B ближче до точки A, її відстань від точки А - ${(b-a)*(-1)} см`)
//     }else{
//         alert(`Точка B ближче до точки A, її відстань від точки А - ${b-a} см`)
//     }
// }

// Task 5
// let x = +prompt("Введіть координату X точки на площині") 
// let y = +prompt("Введіть координату Y точки на площині") 
// if(x == 0 && y == 0){
//     alert(0)
// }else if(x != 0 && y != 0){
//     alert(3)
// }else if(y != 0){
//     alert(2)
// }else if(x != 0){
//     alert(1)
// }

// Task 6
// let x = prompt("Введіть координату X точки на площині") 
// let y = prompt("Введіть координату Y точки на площині") 
// if(x == 0 && y == 0){
//     alert("Точка збігається з початком координат, спробуйте ввести іншу точку")
// }else if(x == 0 || y == 0){
//     alert("Точка збігається з віссю координат, спробуйте ввести іншу точку")
// }else if(x > 0 && y > 0){
//     alert("Точка знаходиться в I чверті")
// }else if(x < 0 && y > 0){
//     alert("Точка знаходиться в II чверті")
// }else if(x < 0 && y < 0){
//     alert("Точка знаходиться в III чверті")
// }else if(x > 0 && y < 0){
//     alert("Точка знаходиться в IV чверті")
// }

// Task 7
// let ax = prompt("Введіть координату X точки A на площині") 
// let ay = prompt("Введіть координату Y точки A на площині") 
// let bx = prompt("Введіть координату X точки B на площині") 
// let by = prompt("Введіть координату Y точки B на площині") 
// let dx = prompt("Введіть координату X точки D на площині") 
// let dy = prompt("Введіть координату Y точки D на площині") 
// alert(`Координати точки C = ${bx},${dy}`)

// Task 8
// let year = +prompt("Введіть номер року")
// if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
//     alert(`${year} - високосний рік, 366 днів`)
// }else{
//     alert(`${year} - невисокосний рік, 365 днів`)
// }

// Task 9
// let num = +prompt("Введіть число");
// if(num < 0 && num % 2 == 0){
//     alert("Негативне парне число")
// }else if(num > 0 && num % 2 == 0){
//     alert("Позитивне парне число")
// }else if(num < 0 && num % 2 != 0){
//     alert("Негативне непарне число")
// }else if(num > 0 && num % 2 != 0){
//     alert("Позитивне непарне число")
// }else{
//     alert("Нульове число")
// }

// Task 10
// let num = +prompt("Введіть число");
// if(num >=1 && num <= 999){
//     if((num % 2 == 0) && (num.toString().length == 1)){
//         alert("Парне однозначне число")
//     }else if((num % 2 != 0) && (num.toString().length == 1)){
//         alert("Непарне однозначне число")
//     }else if((num % 2 == 0) && (num.toString().length == 2)){
//         alert("Парне двозначне число")
//     }else if((num % 2 != 0) && (num.toString().length == 2)){
//         alert("Непарне двозначне число")
//     }else if((num % 2 == 0) && (num.toString().length == 3)){
//         alert("Парне тризначне число")
//     }else if((num % 2 != 0) && (num.toString().length == 3)){
//         alert("Непарне тризначне число")
//     }
// }else{
//     alert("Число має бути у діапазоні 1-999")
// }

// Task 11
// let i = 0;
// while (++i < 5) alert(i); // Виведе від 1 до 4, тому що префіксний інкремент видає число, одразу збільшене на одиничку
// let i = 0;
// while (i++ < 5) alert(i); // Виведе від 1 до 5, тому що постфіксний інкремент збільшує число при наступному визові 

// Task 12
// for (let i = 0; i < 5; i++) alert(i);
// for (let i = 0; i < 5; ++i) alert(i); Від 1 до 4 в обох випадках

// Task 13
// for(let i = 2; i <=10; i++){
//     if(i % 2 == 0){
//         alert(i)
//     }
// }

// Task 14
// let i = 0;
// while(i < 3){
//     alert( `number ${i}!` );
//     i++;
// }

// Task 15
// let num;
// while (true) {
//   num = +prompt("Введіть число більше 100");
//   if (num > 100 || !num){
//     break;
//   }  
// }

// Task 16
// let n = +prompt("Введіть число n");
// marker: for(let i = 2; i <= n; i++){
//     let counter = 0;
//     for(let j = 1; j <= i; j++){
//         if(i % j == 0){
//             counter++;
//         }
//         if(counter > 2){
//             continue marker;
//         }
//     }
//     alert(i)
// }

// Task 17
// let a = +prompt("Введіть число A") 
// let b = +prompt("Введіть число B")
// alert((a+b)/2)

// Task 18
// let a = +prompt("Введіть число A") 
// alert(a**2)

// Task 19
// let a = +prompt("Введіть число A") 
// let b = +prompt("Введіть число B")
// let c = +prompt("Введіть число C")
// alert(Math.max(a,b,c) - Math.min(a,b,c))

// Task 20
// let a = +prompt("Введіть число A") 
// if(a % 2 == 0){
//     alert("Число парне")
// }else{
//     alert("Число непарне")
// }

// Task 21
// let a = +prompt("Введіть число A") 
// if(a < 100){
//     let sum = 0;
//     let x = String(a);
//     for (let i = 0; i < x.length; i++) {
//         sum += Number(x[i]);
//     }
//     alert(`Кількість цифр : ${x.length} \nСума цифр : ${sum}`)
// }else{
//     alert("Введіть число від 0 до 100")
// }

// Task 22
// let choose = +prompt("Введіть 1 щоб перевести дюйми в сантиметри \nВведіть 2 щоб перевести сантиметри в дюйми");
// if(choose == 1){
//     let d = +prompt("Введіть дюйми")
//     alert(`${d} в дюймах це ${(d*2.54).toFixed(2)} сантиметрів`)
// }else if(choose == 2){
//     let cm = +prompt("Введіть сантиметри")
//     alert(`${cm} в сантиметрах це ${(cm/2.54).toFixed(2)} дюймів`)
// }

// Task 23
// let score = 0;
// let question1 = +prompt("Вітаємо в грі Мільйонер!\nЗапитання 1 : Який безалкогольний напій першим було взято у космос?\n1) Пепсі\n2) Фанта\n3) Кока-кола\n4) Снапл\n(Введіть номер правильного на вашу думка варіанту)")
// if(question1 == 3){
//     score += 10;
//     alert("Правильно! Ви отримали 10 очок!")
//     let question2 = +prompt("Запитання 2 : Яка вага костюму Чубакки із Зоряних Війн?\n1) 3.6 кг\n2) 7.7 кг\n3) 2.7 кг\n4) 6.8 кг\n(Введіть номер правильного на вашу думка варіанту)")
//     if(question2 == 1){
//         score += 10;
//         alert("Правильно! Ви отримали 10 очок!")
//         let question3 = +prompt("Запитання 3 : З чого зроблений найміцніший будинок у 'Трьох поросятах'?\n1) Бамбук\n2) Палички\n3) Солома\n4) Цегла\n(Введіть номер правильного на вашу думка варіанту)")
//         if(question3 == 4){
//             score += 10;
//             alert("Правильно! Ви отримали 10 очок!")
//             alert("Вітаємо! Ви набрали 30 очок та виграли в грі Мільйонер!")
//         }else{
//             alert("Неправильно. Спробуйте ще раз :)")
//         }
//     }else{
//         alert("Неправильно. Спробуйте ще раз :)")
//     }
// }else{
//     alert("Неправильно. Спробуйте ще раз :)")
// }

// Task 24
// let a = prompt("Введіть трицифрове число");
// if(a.length == 3){
//     if(a % 2 == 0){
//         let sum = 0;
//         for (let i = 0; i < a.length; i++) {
//             sum+=Number(a[i]);
//         }
//         alert(`Сумма цифр - ${sum}`)
//     }else if(a % 2 != 0){
//         let mult = 1;
//         let x = String(a);
//         for (let i = 0; i < x.length; i++) {
//             mult = mult * Number(x[i]);
//         }
//         alert(`Добуток цифр - ${mult}`)
//     }
// }else{
//     alert("Введіть ТРИцифрове число :)")
// }

// Task 25
// let a = +prompt("Введіть число A") 
// let b = +prompt("Введіть число B")
// let c = +prompt("Введіть число C")
// if((a + b) > c){
//     alert("Трикутник може існувати")
// }else{
//     alert("Трикутник не існує")
// }

// Task 26
// let x = +prompt("Введіть координату X точки A на площині", 4) 
// let y = +prompt("Введіть координату Y точки A на площині", 9) 
// let r = +prompt("Введіть радіус кола, з центром на початку координат", 10)
// if((0 - x)**2 + (0 - y)**2 <= r**2){
//     alert("Дана точка лежить всередині кола")
// }else{
//     alert("Дана точка НЕ лежить всередині кола")
// }

// Task 27
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// Task 28
// const user = {
//     name: "John"
// };
// user.name = "Pete"; // Це працюватиме? Так, ми можемо змінювати вміст об'єкта, але якщо ми захочемо змінити назву об'єкта (user) - нам видасть помилку.

// Task 29
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// alert(sum); 

// Task 30
// let moneyInBank = {
//     John: 100,
//     Ann: 160,
//     Pete: "nothing"
// }
// function multiplyNumeric(moneyInBank){
//     for(let key in moneyInBank){
//         if (typeof moneyInBank[key] == "number"){
//             moneyInBank[key] *= 2;
//         }
//     }
// }
// multiplyNumeric(moneyInBank)
// console.log(moneyInBank)