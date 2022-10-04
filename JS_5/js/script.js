// Task 1
// console.log(document.body.firstElementChild);
// console.log(document.body.children[1]);
// console.log(document.body.children[1].lastElementChild);

// Task 2
// Якщо elem – довільний вузол DOM-елемента.
// 1 Правда, що elem.lastChild.nextSibling завжди дорівнює null ?
// 2 Правда, що elem.children[0].previousSibling завжди дорівнює null?

// 1 - Так, elem.lastChild є останнім і nextsibling не спрацює
// 2 - Ні, Перед elem.children[0] можуть бути інші вузли.

// Task 3
// let table = document.querySelector('table');
// for(let i = 0; i < table.rows.length; i++){
//     table.rows[i].cells[i].style.backgroundColor = 'red';
// }
// console.log(table)

// Task 4
// // 1
// let ageTable = document.getElementById('age-table')
// console.log(ageTable)
// // 2
// console.log(ageTable.getElementsByTagName('label'))
// // 3
// console.log(ageTable.getElementsByTagName('td')[0])
// // 4
// console.log(document.getElementsByName('search')[0])
// // 5
// console.log(document.querySelector('input'))
// // 6
// let allInputs = document.querySelectorAll('input')
// console.log(allInputs[allInputs.length - 1])

// Task 5
// let count = 0;
// for(let lis of document.querySelectorAll('li')){
//     count++;
//     console.log(lis.innerText)
// }
// console.log(count)

// Task 6
// alert(document.body.lastChild.nodeType);
// Виведе 1, тому що останній дочерній елемент body це script

// Task 7
// let body = document.body;
// body.innerHTML = "<!--" + body.tagName + "-->";
// alert( body.firstChild.data ); // виведе BODY 


// Task 8
// 1. document являється обєктом класа HTMKDocument
// 2,3. HTMLDocument -> Document -> Node

// Task 9
// function clear(elem) {
//     while (elem.firstChild) {
//         elem.firstChild.remove();
//     }
// }
// clear(elem)

// Task 10
// alert(table)
// table.remove()
// ааа залишається так як ми можемо вписувати в таблюцю лише спеціальні теги(th,td і так далі). Тому браузер відокремив текст "ааа" від таблиці.

// Task 11
// to do

// Task 12
// one.insertAdjacentHTML('afterend','<li>2</li><li>3</li>');