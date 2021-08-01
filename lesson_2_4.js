/*
4 Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return.
*/

"use strict";

function plus(a, b) {
    let result = a + b;
    return result;
}

function minus(a, b) {
    let result = a - b;
    return result;
}

function multiply(a, b) {
    let result = a * b;
    return result;
}

function divide(a, b) {
    let result = a / b;
    return result;
}

alert(plus(7, 2));
alert(minus(7, 2));
alert(multiply(7, 2));
alert(divide(7, 2));