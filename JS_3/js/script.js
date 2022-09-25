// Task 1
// let obj = {};
// function isEmpty(obj){
//     for(let key in obj){
//         if(key){
//             return false
//         }
//     }
//     return true
// }
// alert(isEmpty(obj))

// Task 2
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

// Task 3
// function readNumber(){
//     check = true;
//     while (check){
//       check = false;
//       num = prompt("Введіть число")
//       if(num == null || num == ''){
//         return null;
//       }else if(!isNaN(num)){
//         return num;
//       }else{
//         check = true;
//       }
//     }
// }
// alert(`Ваше число - ${readNumber()}`);

// Task 4
// function random(min, max){
//     return Math.random() * (max - min) + min;
// }
// alert(random(5, 7))

// Task 5
// function randomInteger(min, max){
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }
// alert(randomInteger(5, 7))

// Task 6
// function ucFirst(str){
//     return str[0].toUpperCase() + str.slice(1);
// }
// alert(ucFirst("привіт"))

// Task 7
// function checkSpam(str){
//     str = str.toLowerCase();
//     if(str.includes("viagra") || str.includes("xxx")){
//         return true
//     }
//     return false
// }
// alert(checkSpam("buy ViAgRA now"))
// alert(checkSpam("free xxxxx "))
// alert(checkSpam("innocent rabbit"))

// Task 8
// function truncate(str, maxlength){
//     if(str.length > maxlength){
//         return str.slice(0, maxlength - 1) + "..."
//     }
//     return str
// }
// alert(truncate( "Ось що мені хотілося б сказати на цю тему:", 20))
// alert(truncate ( "Усім привіт!", 20))

// Task 9
// function extractCurrencyValue(str){
//     return Number(str.slice(1));
// }
// alert(extractCurrencyValue("$120") === 120)

// Task 10
// function sumInput(){
//     let check = true;
//     let arr = [];
//     while(check){
//         let num = prompt("Введіть число ");
//         if(num === "" || num === null || !isFinite(num)){
//             break;
//         }
//         arr.push(+num);
//     }
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return `Сумма ведених чисел : ${sum}`
// }
// alert(sumInput());

// Task 11
// function checkAge (age) {
//     if(age > 18){
//         return true;
//     }else{
//         return confirm( ' Батьки дозволили ?');
//     }
// }
// function checkAge (age) {
//     if (age > 18) {
//         return true;
//     }
//     return confirm( ' Батьки дозволили ?');
// }
// Відмінностей між цими варіантами немає. 

// Task 12
// function checkAge(age){
//     return age > 18 ? true : confirm( ' Батьки дозволили ?')
// }
// function checkAge(age){
//     return age > 18 || confirm( ' Батьки дозволили ?')
// }

// Task 13
// function min(a,b){
//     if(a < b){
//         return a
//     }else{
//         return b
//     }
// }
// alert(min(12,21))

// Task 14
// function pow(x,n){
//     if(n > 0){
//         let res = x;
//         for(let i = 1; i < n; i++){
//             res *= x;
//         }
//         return res;
//     }
// }
// alert(pow(5,3))

// Task 15
// let ask = (question, yes, no) => confirm(question) ? yes() : no();
// ask (
//     "Ви згодні?",
//     () => alert ("Ви погодилися."),
//     () => alert ("Ви скасували виконання.")
// );

// Task 16
// let palmPrice = 8000;
// let months = 0;
// for(let i = 0; i < palmPrice; i -= 1750){
//     i += 3333;
//     months++;
//     if(i >= palmPrice){
//         break;
//     }
// }
// alert(months)

// Task 17
// let sum = 0;
// for(let i = 0; i < 10; i++){
//     let num = +prompt("Введіть число")
//     if(num < 0){
//         sum += num;
//     }
// }
// alert(`Сума негативних чисел : ${sum}`);