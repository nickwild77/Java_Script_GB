/*
5 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

"use strict";

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            alert(arg1 + arg2);
            break;
        case "-":
            alert(arg1 - arg2);
            break;
        case "*":
            alert(arg1 * arg2);
            break;
        case "/":
            alert(arg1 / arg2);
            break;
        default:
            alert("Ошибка! Введите любую арифетическую операцию (+, -, /, *)");
    }

}

calculate(7, 9, "+");