// Task 1
// function camelize(str){
//     return str.split('-').map(function(item, index, array){
//         if(index !== 0){
//             return item[0].toUpperCase() + item.slice(1)
//         }
//         return item
//     }).join('')
// }
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// Task 2
// function filterRange(arr, a, b){
//     return arr.filter(function(item, index, array){
//         if(item >= a && item <= b){
//             return item
//         }
//     });
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
// console.log(arr);

// Task 3
// function filterRangeInPlace(arr, a, b){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] <= a || arr[i] >= b){
//             arr.splice(i, 1);
//         }
//     }
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr );

// Task 4
// let arr = [5, 2, 1, -10, 8];
// arr.sort( (a, b) => b - a );
// console.log(arr);

// Task 5
// function copySorted(arr){
//     return arr.slice(0,arr.length).sort()
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// console.log(sorted); 
// console.log(arr); 

// Task 6
// let num1 = +prompt("Введіть перше число : ")
// let operation = prompt("Введіть операцію\n+\n-\n*\n/")
// let num2 = +prompt("Введіть друге число : ")

// function calculate(num1, num2, operation){
//     if(operation == "+"){
//         return num1+num2
//     } 
//     if(operation == "-"){
//         return num1-num2
//     }  
//     if(operation == "*"){
//         return num1*num2
//     }  
//     if(operation == "/"){
//         return num1/num2
//     }       
// }
// alert(calculate(num1, num2, operation))
// Task 7
// let vasya = { name: "Вася", age: 25};
// let petya = { name: "Петя", age: 30};
// let masha = { name: "Маша", age: 28};
// let users = [ vasya, petya, masha ];
// let names = users.map(function(item, index, array){
//     return item.name
// })
// console.log(names); 

// Task 8
// let vasya = {name : " Вася ", age: 25};
// let petya = {name : " Петя ", age: 30};
// let masha = {name : " Маша ", age: 28};

// let arr = [ vasya , petya , masha ] ;
// function sortByAge(arr) {
//     arr.sort((a, b) => a.age > b.age ? 1 : -1);
// }
// sortByAge(arr);

// // тепер : [ vasya , masha , petya ]
// console.log ( arr [0].name); // Вася
// console.log ( arr [1].name); // Маша
// console.log ( arr [2].name); // Петя

// Task 9
// let vasya = { name: "Вася", age: 25};
// let petya = { name: "Петя", age: 30};
// let masha = { name: "Маша", age: 29};
// let arr = [ vasya, petya, masha ];
// function getAverageAge(users){
//     let sum = 0;
//     for(let i = 0; i < users.length; i++){
//         sum += users[i].age;
//     }
//     return sum/users.length
// }
// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// Task 10
// function unique(arr){
//     let uniq = [];
//     for(let i = 0; i < arr.length; i++){
//         if(uniq.includes(arr[i])){
//             continue;
//         }else{
//             uniq.push(arr[i])
//         }
//     }
//     return uniq
// }
// let strings = ["кришна", "кришна", "харе", "харе","харе", "харе", "кришна", "кришна", ":-O"];
// alert (unique (strings)); // кришна, харе, :-O

// Task 11
// function unique(arr) {
//     let set = new Set(arr);
//     set = Array.from(set)
//     return set
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna","Krishna", "Krishna", "Hare", "Hare", ":-O"];
// alert(unique(values)); // Hare,Krishna,:-O

// Task 12
// function makeCounter() {
//     let count = 0;
//     return function() {
//         return count++; 
//     };
// }
// let counter = makeCounter();
// let counter2 = makeCounter();
// alert (counter ()); // 0
// alert (counter ()); // 1
// alert (counter2 ()); // 0
// alert (counter2 ()); // 1
// Відповідь 0,1 тому що у функції counter і counter2 свої різні лічильники count.

// Task 13
// function Counter() {
//     let count = 0;
//     this.up = function() {
//         return ++count;
//     };
//     this.down = function() {
//         return - count;
//     };
// }
// let counter = new Counter();
// alert(counter.up()); // 1
// alert(counter.up()); // 2
// alert(counter.down() ); // -2
// Код буде працювати та виведе 1, 2, -2

// Task 14
// function factorial(n){  
//     if(n == 1){
//         return n
//     }else{
//         return n * factorial(n - 1)
//     }
// }
// console.log(factorial(5))
