// // Task 1
// let admin;
// let name;
// name = "Vasya";
// admin = name;
// alert(admin)

// Task 2
// const BIRTHDAY = '18.04.1982'; // Верхній регістр, тому що це важко запам'ятовуване значення, яке відоме до початку виконання скрипта.
// const age = someCode(BIRTHDAY); // Нижній регістр, тому що вираховується під час виконання скрипта.

// Task 3
// let name = "Ilya " ;
// alert ( ` hello ${ 1 } ` ); // Виведе hello 1
// alert ( ` hello ${ "name" } ); // Помилка, не закриті зворотні лапки (якщо це опечатка в завданні і лапки мають бути закриті - виведе hello name )
// alert ( ` hello ${ name } ` ); // Виведе hello ilya

// Task 4
// alert("" + 1 + 0) // Виведе 10, рядок "" + число 1 дасть нам рядок "1", який при додавані числа 0 дасть нам рядок 10.
// alert("" - 1 + 0) // Виведе -1, рядок "" перетвориться в число 0. Оператор "-" працює лише з числами.
// alert(true + false) // Виведе 1, булеві значення true, false при додаванні перетворяться в 1 та 0, та сумуються.
// alert(6 / "3") // Виведе 2, рядок "3" перетвориться в число 3.
// alert("2" * "3") // Виведе 6, рядки "2" та "3" перетворяться в числа 2 та 3 та помножаться.
// alert(4 + 5 + "px") // Виведе 9px, числа 4 та 5 просумуються, та зліпляться з рядком "px".
// alert("$" + 4 + 5) // Виведе $45,  по аналогії з попередім прикладом, але так як рядок розташований на початку, числа 4 та 5 одразу не додаватимуться.
// alert("4" - 2) // Виведе 2. Оператор "-" працює лише з числами, рядок "4" перетвориться в число 4.
// alert("4px" - 2) // Виведе NaN. Оператор "-" працює лише з числами, а рядок "4px" не може перетворитися в число.
// alert(7 / 0) // Виведе infinity. Завжди коли число ділим на 0 отримуєм бескінечність.
// alert("  -9  " + 5) // Виведе "  -9   5". Число 5 перетворюється в рядок та приліплюється до рядка -9.
// alert("  -9  " - 5) // Виведе -14, так як оператор "-" працює лише з числами, рядок -9 перетвориться в число.
// alert(null + 1) // Виведе 1, null перетвориться в число 0.
// alert(undefined + 1) // Виведе NaN, undefined перетвориться в NaN.

// Task 5
// let a = 1, b = 1;
// let c = ++a; // a = 2, c = 2
// let d = b++; // b = 2, d = 1

// Task 6
// let a = 2;
// let x = 1 + (a *= 2);
// a = 4, x = 5

// Task 7
// alert(5 > 4) // Виведе true, результати порівняння вірний.
// alert("ананас" > "яблуко") // Виведе false, порівнюються перші символи рядків, буква а < букви я.
// alert("2" > "12") // Виведе true, порівнюються перші символи рядків, символ 2 > символ 1.
// alert(undefined == null) //Виведе true, при нестрогому порівнянні null і undefined рівні. Це спеціальне правило javscript.
// alert(undefined === null) // Виведе false, при строгому порівнянні вже враховуються типи, тому false.
// alert(null == "\n0\n") // Виведе false, при нестрогому порівнянні тільки null і undefined.
// alert(null === +"\n0\n") // Виведе false, різні типи.

// Task 8 
// let userName = prompt("Введіть ваше ім'я");
// alert(`Ваше ім'я : ${userName}`)

// Task 9
// if ("0") {
//     alert( ' Привіт');
// }
// Алерт виведеться тому що рядок "0" не пустий і дасть true

// Task 10
// let officialName = prompt("Яка офіційна назва JavaScript?")
// if(officialName == "ECMAScript"){
//     alert("Правильно!")
// }else{
//     alert("Не знаєте? ECMAScript!")
// }

// Task 11
// let number = prompt("Введіть число")
// if(number > 0){
//     alert(1)
// }else if(number < 0){
//     alert(-1)
// }
// else if(number == 0){
//     alert(0)
// }

// Task 12{
// let result = (a + b < 4) ? 'Мало' : 'Багато';

// Task 13
// let message = (login == 'Співробітник') ? 'Привіт' : 
//     (login == 'Директор') ? 'Добрий день!' :
//     (login == '') ? 'Відсутній логін' :
//     '';

// Task 14
// alert( null || 2 || undefined ); // Виведе 2, так як 2 - перше істинне значення, яке дасть true

// Task 15
// alert(alert (1) || 2 || alert(3)); // Виведе 1 та 2. Спочатку виконається alert(1) і виведе 1, він є false, тому потім виконається 2, вона є true тому виведеться. 

// Task 16
// alert(1 && null && 2); // Виведе null, тому що це перше хибне значення

// Task 17
// alert(alert(1) && alert(2)); // Виведе 1 та undefined. По аналогії з 15 завд.

// Task 18
// alert(null || 2 && 3 || 4 ); // Виведе 3. Спочатку виконується оператор І, де нам вертається 3. А далі це число 3 являє собою перше істинне значення в двох операторах АБО.

// Task 19
// if (age >= 14 && age <= 90);

// Task 20
// if (!(age >= 14 && age <= 90));
// if (age <= 14 && age >= 90);

// Task 21
// if (-1 || 0) alert( 'first'); // Виконається, перше істинне зачення -1 дасть true.
// if (-1 && 0) alert( 'second' ); // Не виконається, обидва операнда не є істинними.
// if (null || -1 && 1) alert('third' ); // Виконається, спочатку виконується оператор І, який дасть нам остання істинне значення, а саме 1. Залишиться null || 1, який дасть нам перше істинне значення, а саме 1. 
// Виконаються 1 та 3 код.

// Task 22
// let login = prompt("Введіть ваш логін");
// if(login == "Адмін"){
//     let password = prompt("Введіть пароль")
//     if(password == "Я головний"){
//         alert("Доброго дня")
//     }else if(password == "" || password == null){
//         alert("Скасовано")
//     }else{
//         alert("Невірний пароль")
//     }
// }else if(login == "" || login == null){
//     alert("Скасовано")
// }else{
//     alert("Я вас не знаю")
// }

// Task 23
// if(browser == 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }

// Task 24
// let a = +prompt('a?', '');
// switch (a) {
//   case 0:
//     alert(0);
//     break;

//   case 1:
//     alert(1);
//     break;

//   case 2:
//   case 3:
//     alert('2,3');
//     break;
// }

// Task 25
// let num = +prompt('Input a number');
// if(num > 0){
//     num++;
// }
// alert(num)

// Task 26
// let num = +prompt('Input a number');
// if(num > 0){
//     num++;
// }else{
//     num-=2;
// }
// alert(num)

// Task 27
// let num = +prompt('Input a number');
// if(num > 0){
//     num++;
// }else if(num < 0){
//     num-=2;
// }else{
//     num = 10;
// }
// alert(num)

// Task 28
// let positive = 0;
// let first = +prompt("Введіть перше число")
// if(first > 0){
//     positive++;
// }
// let second = +prompt("Введіть друге число")
// if(second > 0){
//     positive++;
// }
// let third = +prompt("Введіть третє число")
// if(third > 0){
//     positive++;
// }
// alert(positive)

// Task 29
// let positive = 0;
// let negative = 0;
// let first = +prompt("Введіть перше число")
// if(first > 0){
//     positive++;
// }else if (first < 0){
//     negative++;
// }
// let second = +prompt("Введіть друге число")
// if(second > 0){
//     positive++;
// }else if (second < 0){
//     negative++;
// }
// let third = +prompt("Введіть третє число")
// if(third > 0){
//     positive++;
// }else if (third < 0){
//     negative++;
// }
// alert(`Додатніх чисел : ${positive}`)
// alert(`Від'ємних чисел : ${negative}`)

// Task 30
// let first = +prompt("Введіть перше число")
// let second = +prompt("Введіть друге число")
// if(first > second && first !== second){
//     alert(first)
// }else{
//     alert(second)
// }

// Task 31
// let first = +prompt("Введіть перше число")
// let second = +prompt("Введіть друге число")
// if(first < second && first !== second){
//     alert(first)
// }else{
//     alert(second)
// }

// Task 32
// let first = +prompt("Введіть перше число")
// let second = +prompt("Введіть друге число")
// let biggest;
// let lowest;
// if(first > second && first !== second){
//     biggest = first;
//     lowest = second;
// }else{
//     biggest = second;
//     lowest = first;
// }
// alert(biggest)
// alert(lowest)

// Task 33
// let a = +prompt("Введіть число A") 
// let b = +prompt("Введіть число B")
// let temp;
// if(a > b){
//     temp = a;
//     a = b;
//     b = temp;
//     alert("A = " + a)
//     alert("B = " + b)
// }else{
//     alert("A = " + a)
//     alert("B = " + b)
// }

// Task 34
// let a = +prompt("Введіть число A") 
// let b = +prompt("Введіть число B")
// let temp;
// if(a !== b){
//     temp = a;
//     a = a + b;
//     b = temp + b;
// }else{
//     a = 0;
//     b = 0;
// }
// alert("A = " + a)
// alert("B = " + b)

// Task 35
// let a = +prompt("Введіть число A") 
// let b = +prompt("Введіть число B")
// if(a !== b){
//     if(a > b){
//         b = a;
//     }else{
//         a = b;
//     }
// }else{
//     a = 0;
//     b = 0;
// }
// alert("A = " + a)
// alert("B = " + b)

// Task 36
// let a = +prompt("Введіть число A") 
// let b = +prompt("Введіть число B")
// let c = +prompt("Введіть число C")
// if(a < b && a < c){
//     alert(a + " - найменше число")
// }else if(b < a && b < c){
//     alert(b + " - найменше число")
// }
// else if(c < a && c < b){
//     alert(c + " - найменше число")
// }

// Task 37
// let a = +prompt("Введіть число A") // 2
// let b = +prompt("Введіть число B") // 4
// let c = +prompt("Введіть число C") // 6
// if(a > b && a < c || a < b && a > c){
//     alert(a + " - середнє число")
// }else if(b > a && b < c || b < a && b > c){
//     alert(b + " - середнє число")
// }else{
//     alert(c + " - середнє число")
// }

// Task 38
// let a = +prompt("Введіть число A") 
// let b = +prompt("Введіть число B")
// let c = +prompt("Введіть число C")
// if(a < b && a < c){
//     alert(a + " - найменше число")
// }else if(b < a && b < c){
//     alert(b + " - найменше число")
// }else{
//     alert(c + " - найменше число")
// }
// if(a > b && a > c){
//     alert(a + " - найбільше число")
// }else if(b > a && b > c){
//     alert(b + " - найбільше число")
// }else{
//     alert(c + " - найбільше число")
// }

// Task 39
// let a = +prompt("Введіть число A") 
// let b = +prompt("Введіть число B")
// let c = +prompt("Введіть число C")
// if(a < b && a < c){
//     alert(b + c)
// }else if(b < a && b < c){
//     alert(a + c)
// }
// else if(c < a && c < b){
//     alert(a + b)
// }

// Task 40
// let a = +prompt("Введіть число A") 
// let b = +prompt("Введіть число B")
// let c = +prompt("Введіть число C")
// if(a == b){
//     alert(c)
// }else if(a == c){
//     alert(b)
// }else if(b == c){
//     alert(a)
// }