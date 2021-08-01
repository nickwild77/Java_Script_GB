/*
3 Объявить две переменные a и b и задать им целочисленные произвольные начальные
значения. 
*/

"use strict";
// Генератор рандомных чисел взял с гугла.
let a = Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1);
let b = Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1);
let result = "";

if (a >= 0 && b >= 0) {
    result = a - b;
    alert(`${a} - ${b} = ${result}`);
} else if (a < 0 && b < 0) {
    result = a * b;
    alert(`${a} * ${b} = ${result}`);
} else {
    result = a + b;
    alert(`${a} + ${b} = ${result}`);
}