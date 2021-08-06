/* 
1. С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10
включительно
*/

"use strict";

let numbers = 0;

for (; numbers < 11; numbers++) {
    if (numbers % 2 === 0 && numbers !== 0) {
        console.log(`${numbers} - четное число`);
    } else if (numbers % 2 !== 0) {
        console.log(`${numbers} - не четное число`);
    } else {
        console.log(`${numbers} - это ноль`);
    }
}